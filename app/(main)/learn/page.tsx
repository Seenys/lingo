import FeedWrapper from '@/components/feed-wrapper';
import { StickyWrapper } from '@/components/sticky-wrapper';
import { Stick } from 'next/font/google';
import React from 'react';

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>Learn</StickyWrapper>
      <FeedWrapper>my feed</FeedWrapper>
    </div>
  );
};

export default LearnPage;
