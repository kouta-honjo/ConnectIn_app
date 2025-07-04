import React from 'react';

const SignUpForm = () => {
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
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
