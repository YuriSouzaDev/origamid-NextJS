'use client';

import { setCookie } from '@/actions/set-cookie';
import Menu from './components/menu';

export default function Home() {
  const handleClick = async () => {
    setCookie('segredo', '123456');
  };
  return (
    <>
      <Menu />
      <h1>Home</h1>
      <button onClick={handleClick}>Definir cookie</button>
    </>
  );
}
