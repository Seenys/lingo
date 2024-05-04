import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import { Sidebar } from './sidebar';

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={24} className="text-white" />
      </SheetTrigger>
      <SheetContent className="p-0 z-[100]" side={'left'}>
        <Sidebar className="h-full" />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
