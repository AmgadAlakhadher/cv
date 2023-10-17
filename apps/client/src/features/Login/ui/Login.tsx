import React, { useState } from 'react';
import cls from './LoginPage.module.scss';

export const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
  };

  return (
    <div className={cls.container}>
      <h1 className={cls.title}>Login</h1>
      <form className={cls.formContainer} onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className={cls.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className={cls.input}
        />
        <button type="submit" className={cls.button}>
          Login
        </button>
      </form>
    </div>
  );
};
