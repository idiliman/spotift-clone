import { useSupabaseClient } from '@supabase/auth-helpers-react';

import { Song } from '@/types';

function useLoadSongUrl(song: any) {
  const supabaseClient = useSupabaseClient();

  if (!song) {
    return '';
  }

  const { data: songData } = supabaseClient.storage.from('songs').getPublicUrl(song.songs_path);

  return songData.publicUrl;
}
export default useLoadSongUrl;
