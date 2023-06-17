import { Song } from '@/types';
import { Database } from '@/types_db';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

async function getLikeSongs() {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data, error } = await supabase
    .from('liked_songs')
    .select('*,songs(*)')
    .eq('user_id', session?.user?.id)
    .order('created_at', { ascending: false });

  if (error) {
    console.log(error.message);
    return [];
  }

  if (!data) {
    return [];
  }

  // Returning songs data from relation
  return data.map((item) => ({
    ...item.songs,
  }));
}
export default getLikeSongs;
