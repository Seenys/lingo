'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  label: string;
  iconSrc: string;
  href: string;
};

const SidebarItem = ({ label, iconSrc, href }: Props) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Button
      variant={isActive ? 'sidebarOutline' : 'sidebar'}
      className="justify-start h-[52px]"
      asChild
    >
      <Link href={href}>
        <Image
          src={iconSrc}
          alt={label}
          className="mr-5"
          width={32}
          height={32}
        />
        {label}
      </Link>
    </Button>
  );
};

export default SidebarItem;
