import { cache } from 'react';
// Drizzle ORM
import db from '@/db/drizzle';
import { eq } from 'drizzle-orm';
import { userProgress } from '@/db/schema';
// Clerk Auth
import { auth } from '@clerk/nextjs/server';

export const getUserProgress = cache(async () => {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
      activeCourse: true,
    },
  });

  return data;
});

export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany();

  return data;
});
