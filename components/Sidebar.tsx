'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Box from './Box';
import SidebarItem from './SidebarItem';
import Library from './Library';
import { Song } from '@/types';

interface SidebarProps {
  children: React.ReactNode;
  songs: Song[];
}

function Sidebar({ children, songs }: SidebarProps) {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        active: pathname !== '/search',
        href: '/',
      },
      {
        icon: BiSearch,
        label: 'Search',
        active: pathname !== '/search',
        href: '/search',
      },
    ],
    [pathname]
  );

  return (
    <div className='flex h-full'>
      <div className='hidden md:flex flex-col gap-y-2 bg-black h-full w-[18.75rem] p-2'>
        <Box>
          <div className='flex flex-col gap-y-4 px-5 py-4'>
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className='h-full overflow-y-auto'>
          <Library songs={songs} />
        </Box>
      </div>
      <main className='flex-1'>{children}</main>
    </div>
  );
}
export default Sidebar;
