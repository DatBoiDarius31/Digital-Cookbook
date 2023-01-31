import React from 'react';
import { auth , provider } from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import pepper from '../imgs/pepper.png';


function Login({setIsAuth}) {

    let navigate = useNavigate();

    const googleSingIn = () =>{
        signInWithPopup(auth,provider).then((result)=>{               
            localStorage.setItem("isAuth",true);
            setIsAuth(true);
            navigate("/");
        });
    }

  return (
    <div className='flex justify-center align-middle w-100 h-100 translate-y-1/3'>
        <div className= "bg-gradient-to-r from-red-500 to-lime-500 w-[400px] h-[500px] flex flex-col justify-center align-middle text-center rounded-md shadow-lg p-8">
            <div className='bg-slate-800 rounded-md p-5 w-[390px] min-h-[490px] -translate-x-[27px] text-white '>
                <p className='mt-10'>Sing In With Google Account To Continue</p>
                <img src={pepper} alt="Chili Pepper"/>
                <button className='mt-10 p-3 transition ease-in-out hover:bg-white hover:text-black rounded-sm' onClick={googleSingIn}>Sign In With Google</button>
            </div>
            
        </div>
      
    </div>
  )
}

export default Login
