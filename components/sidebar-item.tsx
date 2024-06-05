'use client';

import { Button } from '@/components/ui/button';
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
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default SidebarItem;
