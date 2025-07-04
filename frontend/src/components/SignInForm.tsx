import React from 'react';

const SignInForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
