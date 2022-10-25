import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import User from './[id]';

function Index() {
  const router = useRouter();
  
  useEffect(() => {
    if (!router.query.id) {
      router.replace("/");  
    }
  }, [router]);

  return (
    <User />
  );
}

export default Index;