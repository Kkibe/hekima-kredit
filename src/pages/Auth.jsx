import React, { useEffect, useState } from 'react'
import { createUser, signInUser } from '../firebase';
import { Link } from 'react-router-dom';
import AppHelmet from './AppHelmet';
import Newsletter from '../components/Newsletter/Newsletter';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [state, setState] = useState('login');

  const handleLogin = (e) => {
    e.preventDefault();
    signInUser(email, password, setError);
  }

  const handleRegister = (e) => {
    e.preventDefault();
    createUser(email, password, setError);
  }

  useEffect(() => {
    error && setTimeout(() => {
      setError(null);
    }, 1000);
  }, [error]);


  return (
    <>
      <div className='form'>

        {
          state === 'login' ? <>
            <AppHelmet title={'LOGIN'} />
            <h2>Welcome Back!</h2>
            <h4>Sign In To Continue</h4>
            <form onSubmit={handleLogin}>
              <label htmlFor="email">Enter email:</label>
              <input type="email" name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
              <label htmlFor="password">Enter password:</label>
              <input type="password" name="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              <button className='btn' type='submit' >Login</button>
              <p>Don't Have An Account? <Link onClick={() => setState('register')}>Register Here!</Link></p>
              {
                error && <h4 className='error'>{error}Try again</h4>
              }
            </form>
          </> :
            <>
              <AppHelmet title={'REGISTER'} />
              <h2>Get Started!</h2>
              <h4>Create An Account To Continue</h4>
              <form onSubmit={handleRegister}>
                <label htmlFor="email">Enter email:</label>
                <input type="email" name="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Enter password:</label>
                <input type="password" name="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='btn' type='submit' >Register</button>
                <p>Already Have An Account? <Link onClick={() => setState('login')}>Login Here!</Link></p>
                {
                  error && <h4 className='error'>{error}Try again</h4>
                }
              </form>
            </>

        }
      </div>
      <Newsletter />
    </>
  )
}
