import react from "react";
import axios from "axios";
import useForm from "../hooks/useForm";
import { useState } from "react"
import { Navigator } from "react-router-dom";


const PageLogin=()=> {
    const [form, onChange, clear] =useForm({email:"", password:""})

    const onClickForm =()=>{

    }



    return (
      <div >
       <h1>Login</h1> 
<form onSubmit={onClickForm}>
<input
name={"email"}
value={form.email}
onChange={onChange}
/>

<input
name={"password"}
value={form.password}
onChange={onChange}
/>

</form>

      </div>
    );
  }
  
  export default PageLogin;
  