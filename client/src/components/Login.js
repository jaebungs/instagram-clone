import React, {useState} from 'react';
import Navbar from './Navbar';

const loginInputDefault = {
  email: '',
  password: '',
};

const Login = () => {
  const [loginInput, setLoginInput] = useState(loginInputDefault);
  const [registerInput, setRegisterInput] = useState(loginInputDefault);

  const inputChange = (e) => {
    setLoginInput({...loginInput, [e.target.name]: e.target.value});
  };

  const registerChange = (e) => {
    setRegisterInput({...registerInput, [e.target.name]: e.target.value});
  };

  const loginFormSubmit = (e) => {
    e.preventDefault();
    console.log('login form fire')
    fetch(process.env.REACT_APP_LOGIN_API, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(loginInput),
    })
      .then(res => res.json())
      .then(data => {
          setLoginInput(loginInputDefault);
          console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const registerUserSubmit = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_REGISTER_API, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(registerInput),
    })
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setRegisterInput(loginInputDefault)
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="h-full flex justify-center items-center md:mt-28">
        <div className="flex flex-col text-xl">
          <form
            className="flex flex-col border py-7 px-28"
            onChange={(e) => inputChange(e)}
            onSubmit={(e) => loginFormSubmit(e)}
          >
            <label htmlFor="email">Email:</label>
            <input
              className="login-input"
              type="email"
              id="email"
              name="email"
              value={loginInput.email}
              onChange={(e) => inputChange(e)}
              placeholder="Enter ID(eamil) here."
            />

            <label htmlFor="password">Password:</label>
            <input
              className="login-input"
              type="password"
              id="password"
              name="password"
              value={loginInput.password}
              onChange={(e) => inputChange(e)}
              placeholder="Enter password here."
            />

            <button className="border py-1 px-1 mb-4 hover:bg-lightBlue-400 hover:text-white">
              Sign In
            </button>
          </form>
          <div className="flex flex-col">
            <p>Sign In with:</p>
            <button className="login-button hover:bg-lightBlue-400 hover:text-white">Google</button>
            <button className="login-button hover:bg-lightBlue-400 hover:text-white">Github</button>
            <button className="login-button hover:bg-lightBlue-400 hover:text-white">
              Facebook
            </button>
          </div>
          <div>
            <p>Create new account.</p>
            <form
              className="flex flex-col border py-7 px-28"
              onSubmit={(e) => registerUserSubmit(e)}
            >
              <label htmlFor="email">New email:</label>
              <input
                className="login-input"
                type="email"
                id="reg-email"
                value={registerInput.email}
                onChange={(e) => registerChange(e)}
                name="email"
                placeholder="Enter ID(eamil) here."
              />

              <label htmlFor="password">New password:</label>
              <input
                className="login-input"
                type="password"
                id="reg-password"
                value={registerInput.password}
                onChange={(e) => registerChange(e)}
                name="password"
                placeholder="Enter password here."
              />

              <button className="border py-1 px-1 mb-4 hover:bg-lightBlue-400 hover:text-white">
                Create account
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
