'use client';
// React
import { useTransition } from 'react';
// next
import { useRouter } from 'next/navigation';
// Dependencies
import { courses, userProgress } from '@/db/schema';
// Components
import Card from './card';
import { upsertUserProgress } from '@/actions/user-progress';
import { toast } from 'sonner';

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

export const List = ({ courses, activeCourseId }: Props) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const handleClick = (id: number) => {
    if (pending) return;

    if (id === activeCourseId) {
      return router.push('/learn');
    }

    startTransition(() => {
      upsertUserProgress(id).catch(() =>
        toast.error('Failed to start course, please try again later'),
      );
    });
  };

  return (
    <div className="p-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={handleClick}
          active={course.id === activeCourseId}
          disabled={pending}
        />
      ))}
    </div>
  );
};
