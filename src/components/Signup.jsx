//import { useState } from "react";
import { LuLogIn } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import '../styles/SignupForm.css';


const UsestateHook = () => {
    const navigate = useNavigate();
      const { register, handleSubmit } = useForm();
    
        const onsend = async (data) => {
            try {
                const formData = {
                    userName: data.userName,
                    userEmail: data.userEmail,
                    userPassword: data.userPassword
                };
    
                const response = await axios.post(
                    "http://localhost:5001/user/register",
                    formData,
                    {
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }
                );
                alert("Account created successfully");
                console.log("Account created successfully:", response.data);
            } catch (error) {
                console.error("Error sending message:", error.response?.data || error.message);
                alert("Account created successfully");
            }
        };

  return (
    <div className="content">
      <div>
        <form className="formcontainer1" onSubmit={handleSubmit(onsend)}>
          <div className="head">
            <h3 className="loginHeader">
              SignUp <LuLogIn className="loginicon"/>
            </h3> <br /> 
          </div>

           {/* Username Input */}
           <div className="inputContainer">
            <IoPersonOutline className="icon2 personIcon2" />
            <input type="text" placeholder="Username" className="input" 
            {...register('userName', { required: true })}
            />
          </div>

          {/* Email Input */}
          <div className="inputContainer">
            <MdOutlineEmail className="icon2 emailIcon2" />
            <input type="email" placeholder="Email" className="input" 
               {...register('userEmail', { required: true })}
            />
          </div>

          {/* Password Input */}
          <div className="inputContainer">
            <RiLockPasswordLine className="icon2 passIcon2" />
            <input type="password" placeholder="Password" className="input" 
            {...register('userPassword', { required: true })}
            />
            {/* <IoMdEyeOff className="icon2 eyeIcon" /> */}
          
          </div>


         {/* <p className="para1">Forgot Password?</p> */}
          <button type="submit" className="btn btn-success1" >Sign Up</button> <br /> <br />

          <span className="para2">
            Have an Account? <button className="btn btn-primary" onClick={() => navigate('/Login')} >LogIn</button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default UsestateHook;
