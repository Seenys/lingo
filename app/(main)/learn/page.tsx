import React from 'react';
// components
import { StickyWrapper } from '@/components/sticky-wrapper';
import FeedWrapper from '@/components/feed-wrapper';
import { UserProgress } from '@/components/user-progress';
import Header from './header';

const LearnPage = () => {
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
