import React from 'react';
import ResourceCard from '../components/ResourceCard';
import "../../student_resources/pages/styling/StudentResources.css";



const Login = () => {
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
            background: 'var(--colorSecondary)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
            borderRadius: '1rem 1rem 1rem 1rem',
            overflow: 'hidden',
            transition: 'all 0.3s',
            width: '50%',
            height: '300px',
            justifyContent: 'center', 
            alignItems: 'center',
            
          }}>
            <h2>Student Login</h2>
            Email:
            <input type = "text" name = "emailin"
            
            />
            
            Password:
            <input type = "text" name = "passin"/>

            <input type="submit"/>
                    
           </form>
           </div>
        

      </React.Fragment> 
     
    )
}

export default Login;