'use client';

import useGetSongById from '@/hooks/useGetSongById';
import useLoadSongUrl from '@/hooks/useLoadSongUrl';
import usePlayer from '@/hooks/usePlayer';

import PlayerContent from './PlayerContent';

function Player() {
  // State/Store
  const player = usePlayer();

  console.log('🚀 ~ Player ~ player:', player);

  const { song } = useGetSongById(player.activeId);

  console.log('🚀 ~ Player ~ song:', song);

  // !song can be null or got value
  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !player.activeId) {
    return null;
  }

  return (
    <div
      className='
    fixed 
    bottom-0 
    bg-black 
    w-full 
    py-2 
    h-[5rem] 
    px-4
  '
    >
      <PlayerContent key={songUrl} song={song} songUrl={songUrl} />
    </div>
  );
}
export default Player;
