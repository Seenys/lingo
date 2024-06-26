'use server';

// Next
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// Clerk
import { auth, currentUser } from '@clerk/nextjs/server';
// Drizzle ORM
import db from '@/db/drizzle';
import { getCourseById, getUserProgress } from '@/db/queries';
import { userProgress } from '@/db/schema';

export const upsertUserProgress = async (courseId: number) => {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    throw new Error('User not found or not authenticated');
  }

  const course = await getCourseById(courseId);

  if (!course) {
    throw new Error('Course not found');
  }

  // TODO: Check if course has units and lessons
  // if(!course.units.length || !course.units[0].lessons.length) {
  //     throw new Error("Course has no units or lessons");
  // }

  const existingUserProgress = await getUserProgress();

  if (existingUserProgress) {
    await db.update(userProgress).set({
      activeCourseId: courseId,
      userName: user.firstName || 'Anonymous',
      userImageSrc: user.imageUrl || '/mascot.svg',
    });

    revalidatePath('/learn');
    revalidatePath('/courses');

    redirect('/learn');
  }

  await db.insert(userProgress).values({
    userId,
    activeCourseId: courseId,
    userName: user.firstName || 'Anonymous',
    userImageSrc: user.imageUrl || '/mascot.svg',
  });

  revalidatePath('/learn');
  revalidatePath('/courses');

  redirect('/learn');
};
