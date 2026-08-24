import { useEffect } from 'react';
import './App.css'
import {useForm} from 'react-hook-form'

function App() {
  
  const {register, handleSubmit, watch, reset, formState: {errors}} = useForm({
    mode : 'onChange'
  });
  
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const existingUserName = ['admin', 'user123', 'john'];

  const checkIfUserNameExist = async (userName) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return existingUserName.includes(userName);
  }

  return (
    <div>
      <h1>React Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          {/* Name : <input {...register('name', {required : 'Name is required..'})}/> */}

          Name : <input {...register('name', 
                                    {required : 'Name is required..',
                                     minLength : {value : 3, message : 'Name should atlest have 3 characters..'},
                                     validate : {
                                      isNotAdmin : (value) => value !== "admin" || "admin is not allowed",
                                      checkUserName : async (value) => {
                                        const exist = await checkIfUserNameExist(value);
                                        return !exist || 'UserName already taken';
                                      }
                                     }
          })}/>
        </label>
        {errors.name && <p style={{color:'red'}}>{errors.name.message}</p>}
        <br />
        <br />

        <label>
          Email : <input {...register('email', {required : 'Email is required..',
                                                pattern : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          })}/>
          {errors.email && <p style={{color:'red'}}>{errors.email.message}</p>}
        </label>

        <br />
        <br />

        <label>
          Password : <input type='password' {...register('password', {required : true, minLength : 3})}/>
        </label>

        <br />
        <br />

        <label>
          Confirm Password : <input type='password' {...register('confirmPassword', 
                                                                {required : true, 
                                                                minLength : 3,
                                                                validate : value => value === watch('password') || 'Password do not match...'})}/>
        </label>
        {errors.confirmPassword && <p style={{color:'red'}}>{errors.confirmPassword.message}</p>}

        <br />
        <br />

        <button type='submit'>Submit</button><button type='button' onClick={() => reset()}>Reset</button>
      </form>
    </div>
  )
}

export default App



  //console.log(watch('name'));

  // const watchedName = watch('name');
  // const watchedEmail = watch('email');
  
  // useEffect(() => {
  //   console.log('Name' , watchedName);
  // }, [watchedName]);
  
  // useEffect(() => {
  //   console.log('Email' , watchedEmail);
  // }, [watchedEmail]);

  // const validateName = (value) => {
  //   if(value !== 'admin'){
  //     return 'Only admin is allowed..'
  //   }
  //   else{
  //     true;
  //   }
  // };