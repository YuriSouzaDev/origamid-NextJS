'use client';

import { setLogin } from '@/actions/set-login';
import React from 'react';
import Cookie from './cookie';

const LoginForm = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;
    const response = await setLogin(username, password);
  };
  return (
    <>
      <Cookie />
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuário</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Entrar</button>
      </form>
    </>
  );
};

export default LoginForm;
