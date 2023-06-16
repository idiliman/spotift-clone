'use client';
import { useEffect, useState } from 'react';

import AuthModal from '@/components/modal/AuthModal';
import UploadModal from '@/components/modal/UploadModal';

// import SubscribeModal from '@/components/SubscribeModal';
// import UploadModal from '@/components/UploadModal';
// import { ProductWithPrice } from '@/types';

// interface ModalProviderProps {
//   products: ProductWithPrice[];
// }

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      <UploadModal />
    </>
  );
}
