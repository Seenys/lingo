// next
import Image from 'next/image';
import Link from 'next/link';
// components
import SidebarItem from './sidebar-item';
// utils
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'h-full lg:w-[256px] lg:fixed flex left-0 top-0 px-4 border-r-2 flex-col',
        className,
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" alt="mascot" width={40} height={40} />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" href="/learn" iconSrc="" />
      </div>
    </div>
  );
};
