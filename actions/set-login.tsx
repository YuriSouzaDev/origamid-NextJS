'use server';

import { cookies } from 'next/headers';

export async function setLogin(username: string, password: string) {
  try {
    const response = await fetch('https://api.origamid.online/conta/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();
    cookies().set('token', data.token, {
      secure: true,
      httpOnly: true,
      sameSite: 'lax',
    });
    if (response.ok) {
      const perfil = await fetch('https://api.origamid.online/conta/perfil', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${data.token}`,
        },
      });
      if (perfil.ok) {
        return 'deu certo';
      }
    }
    return true;
  } catch (error) {
    return false;
  }
}
