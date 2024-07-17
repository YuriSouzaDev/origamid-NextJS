'use client';

import { getCookie } from '@/actions/get-cookie';
import { useState } from 'react';

const Cookie = () => {
  const [token, setToken] = useState<string | undefined>('');
  const handleClick = async () => {
    const cookie = await getCookie('token');
    setToken(cookie);
  };

  return (
    <div>
      {token && <p>{token}</p>}
      <button onClick={handleClick}>Definir cookie</button>
    </div>
  );
};

export default Cookie;
