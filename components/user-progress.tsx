import React from 'react';
// Next
import Link from 'next/link';
// components
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { InfinityIcon } from 'lucide-react';

type Props = {
  activeCourse: {
    title: string;
    imageSrc: string;
  };
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant="ghost">
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image
            src="/points.svg"
            alt="Points"
            width={28}
            height={28}
            className="mr-2"
          />
          <span>{points}</span>
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-rose-500">
          <Image
            src="/heart.svg"
            alt="Hearts"
            width={22}
            height={22}
            className="mr-2"
          />
          <span>
            {hasActiveSubscription ? (
              <InfinityIcon className="h-4 w-4 stroke[3]" />
            ) : (
              hearts
            )}
          </span>
        </Button>
      </Link>
    </div>
  );
};
