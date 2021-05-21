import axios from "axios";
import React, {useState } from "react";
import { useHistory } from 'react-router-dom';

  const credentials={
    username: "Lambda School",
    password: "i<3Lambd4"
}
const Login = () => {
  const { push } = useHistory();

  const [userLogin, setUserLogin] = useState(credentials)
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChange = e => {
    setUserLogin({
      userLogin: {
        ...userLogin,
        [e.target.name]: e.target.value
      }
    });
  };

  const login = e => {
    e.preventDefault();
    
      axios.post('http://localhost:5000/api/login', userLogin)
        .then(res=>{
        localStorage.setItem("token", res.data.payload);
          push('/bubblePage');
        })
          .catch(err=>{
        console.log(err);
      });
      // if (userLogin.username === "" || userLogin.password  === "") {
      //   return "Username or Password not valid"
      //  }
  };
 
  
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  
  
  const error = ((userLogin.username === "") || (userLogin.password === "")) &&  "Username or Password not valid" 
  
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Login</h2>

        <form onSubmit={login}>
          <label>Username:  </label>
          <input
            type="text"
            name="username"
            data-testid="username"
            value={userLogin.username}
            onChange={handleChange}
          />
         
          <label>Password: </label>
          <input
            type="password"
            name="password"
            data-testid="password"
            value={userLogin.password}
            onChange={handleChange}
          />
          
          <button>Login</button>
        </form>

      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.



