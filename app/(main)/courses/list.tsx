'use client';
// Dependencies
import { courses, userProgress } from '@/db/schema';
// Components
import Card from './card';

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

export const List = ({ courses, activeCourseId }: Props) => {
  return (
    <div className="p-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={() => console.log(`Course ${course.title} clicked`)}
          active={course.id === activeCourseId}
          disabled={false}
        />
      ))}
    </div>
  );
};
