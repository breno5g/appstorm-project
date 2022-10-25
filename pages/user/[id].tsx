import { useRouter } from 'next/router';
import React from 'react';

function User() {
  const router = useRouter();
  
  return (
    <div>
      <h1>{router.query.id}</h1>
    </div>
  );
}

export default User;