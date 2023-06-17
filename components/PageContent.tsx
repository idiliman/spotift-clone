'use client';

import { Song } from '@/types';
import SongItem from './SongItem';

interface PageContentProps {
  songs: Song[];
}

function PageContent({ songs }: PageContentProps) {
  return (
    <div
      className='
    grid 
    grid-cols-2 
    sm:grid-cols-3 
    md:grid-cols-3 
    lg:grid-cols-4 
    xl:grid-cols-5 
    2xl:grid-cols-8 
    gap-4 
    mt-4
  '
    >
      {songs.map((item) => (
        <SongItem onClick={() => alert('Playing!')} key={item.id} data={item} />
      ))}
    </div>
  );
}
export default PageContent;
