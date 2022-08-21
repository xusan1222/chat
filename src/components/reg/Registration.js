import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import App from "../../App";
import { ContextApi } from "../Context";
import "./reg.css";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

export default function Registration() {
  const [infos, setInfos  ] = useState([])
  const [err , setErr] = useState(false)
  console.log(err)
    
  
  const {
    chat,setChat,name,setName,email,setEmail,pass,setPass,cpass,setCpass ,dark} = useContext(ContextApi);
  const style = {
    width: 350,
    marginLeft: 50,
    marginTop: 20,
  };
  const button = {
    marginLeft: 200,
    marginTop: 20,
  };
  const datas = { name , pass}
  function handle() {
    setChat(!chat);
    setInfos([...infos ,{
      name : name,
      pass : pass

    }])
  }
  useEffect(() => {
    localStorage.setItem('datas' , JSON.stringify(infos) )
  }, [infos])
  
  
  if (!chat) {
    return (
     <>
       <div className={!dark ? 'lightRegDiv' : 'darkRegDiv'}>
        <div className={!dark ? 'lightReg' : 'darkReg'}>
          <TextField
            style={style}
            id="standard-basic"
            label="Full name"
            variant="standard"
            onChange={(e)=>{setName(e.target.value)}}
          />
          <br />
          <TextField
            style={style}
            id="standard-basic"
            label="Email"
            variant="standard"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <br />
          <TextField
            style={style}
            id="standard-basic"
            label="Password"
            variant="standard"
            onChange={(e)=>{setPass(e.target.value)}}
          />
          <br />
          <TextField
            style={style}
            id="standard-basic"
            label="Coniform password"
            variant="standard"
            onChange={(e)=>{setCpass(e.target.value)}}
          />
          <br />
          <p className="loginLink">
            alredy registated? <Link to="Login">Login</Link>
          </p>
           <Button variant="outlined" onClick={handle} style={button}>
            Enter
          </Button>
        </div>
      </div>
     </>
    );
  } else {
    if(name!=='' && email!=='' && pass!=='' && cpass!=='' && pass === cpass){
      return <App handle={name.value} /> }
    else{
      
      window.location.reload();
    }
  }
}
