import React, { useState, useContext } from 'react';
import ResourceCard from '../components/ResourceCard';
import "../../student_resources/pages/styling/StudentResources.css";
import {useForm} from "../../shared/hooks/form-hook.js"
import { useHttpClient } from "../../shared/hooks/http-hook";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner.js"
import {useNavigate} from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  //const auth = useContext(AuthContext);
   const [isLogin, setIsLogin] = useState(true);
   const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = (event) => {
    if (!isLogin) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          image: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
          phoneNumber: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLogin((prevMode) => !prevMode);
  };

  const authSubmitHandler = async (event) => {
    event.preventDefault();

    if (isLogin) {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_API_URL}/user/login`,
          "POST",
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          { "Content-Type": "application/json" }
        );
        //auth.login(responseData._id, responseData.token);
        navigate("/");
      } catch (error) {}
    } else {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_API_URL}/user/createuser`,
          "POST",
          JSON.stringify({
            email: formState.inputs.email.value,
            name: formState.inputs.name.value,
            phoneNumber: formState.inputs.phoneNumber.value,
            password: formState.inputs.password.value,
          }),
          { "Content-Type": "application/json" }
        );
        //auth.login(responseData._id, responseData.token);
        navigate("/");
      } catch (error) {}
    }
  };

 return (
      <React.Fragment>
        <div 
        class="welcome-container"
               >
          
           <form 
           style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '1rem',
            padding: '0',
            background: 'var(--colorSecondaryVariant)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
            borderRadius: '1rem 1rem 1rem 1rem',
            overflow: 'hidden',
            transition: 'all 0.3s',
            width: '70%',
            height: '500px',
            justifyContent: 'center', 
            alignItems: 'center',
            
            
            
          }}
          onSubmit={authSubmitHandler}>
          
            
            <h1>Student Login</h1>
            {!isLogin && (
              
              <label htmlFor="name">Name:</label>
            )}
            {!isLogin && (
              
            <input
              element="input"
              id="name"
              type="text"
              label="Name"
              //validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name."
              onInput={inputHandler}
              style={{width: '30%',fontSize: '18px',}}
            />
          )}
            {!isLogin && (
              
              <label htmlFor="phone#">Phone Number:</label>
            )}
          {!isLogin && (
            <input
              element="input"
              id="phoneNumber"
              type="text"
              label="Phone Number"
              //validators={[VALIDATOR_MINLENGTH(10) && VALIDATOR_MAXLENGTH(10)]}
              errorText="Please enter a phone number."
              onInput={inputHandler}
              style={{width: '30%',fontSize: '18px',}}
            />
          )}

            Email:
            <input type = "text" name = "emailin" label="Email"
            style={{width: '30%',fontSize: '18px',}}
            />
          
            <br/>
            Password:
            <input type = "text" name = "passin" 
            style={{width: '30%',}}/>
            <br/>

            {/*<input type="submit" name="submit" style={{width: '30%',}}/> */}
           
           <button
            type="submit"
            //disabled={!formState.isValid || (!isLogin ? !termsOfService : false)}
          >
            {" "}
            {isLogin ? "LOGIN" : "SIGNUP"}{" "}
          </button>

          <br />
        <button size="small" onClick={switchModeHandler}>
          {isLogin
            ? "Need an account? Click here to sign up"
            : "Already have an account? Click here to log in"}
        </button>
        </form>
        
           </div>
        

      </React.Fragment> 
     
    );
};

export default Login;