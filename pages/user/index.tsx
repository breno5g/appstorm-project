import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import User from './[username]';

function Index() {
  const router = useRouter();
  const selector = useSelector((state: any) => state.user);
  
  useEffect(() => {
    if (!router.query.username) {
      router.replace("/");  
    }
    
  }, [router, selector]);

  return (
    <User />
  );
}

export default Index;