import React from 'react';
// next
import { redirect } from 'next/navigation';
// components
import { StickyWrapper } from '@/components/sticky-wrapper';
import FeedWrapper from '@/components/feed-wrapper';
import { UserProgress } from '@/components/user-progress';
import Header from './header';
// queries
import { getUserProgress } from '@/db/queries';

const LearnPage = async () => {
  const userProgressData = await getUserProgress();

  const [userProgress] = await Promise.all([userProgressData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect('/courses');
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: 'Spanish', imageSrc: '/es.svg' }}
          hearts={0}
          points={0}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Spanish" />
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
