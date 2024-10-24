import React, { useState, useContext } from 'react';
import ResourceCard from '../components/ResourceCard';
import "../../student_resources/pages/styling/StudentResources.css";
import {useForm} from "../../shared/hooks/form-hook.js"


const Login = () => {
   const [isLogin, setIsLogin] = useState(true);

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
            width: '60%',
            height: '400px',
            justifyContent: 'center', 
            alignItems: 'center',
            
            
            
          }}>

          
            <h1>Student Login</h1>
            Email:
            <input type = "text" name = "emailin" label="Email"
            style={{width: '30%',fontSize: '18px',}}
            />
          
            <br/>
            Password:
            <input type = "text" name = "passin" 
            style={{width: '30%',}}/>
            <br/>
            <input type="submit" name="submit"
            style={{width: '30%',}}/>
                    
           </form>


           </div>
        

      </React.Fragment> 
     
    );
};

export default Login;