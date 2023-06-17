import { Song } from '@/types';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

async function getSongsByUserId(): Promise<Song[]> {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .eq('user_id', sessionData.session?.user.id)
    .order('created_at', { ascending: false });

  if (error) {
    console.log('🚀 ~ getSongsByUserId ~ error:', error.message);
  }

  return (data as any) || [];
}
export default getSongsByUserId;
