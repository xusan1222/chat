import React, { useContext } from "react";
import "./Login.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { ContextApi } from "../Context";
import App from "../../App";

export default function Login() {
  const { chat, setChat, name, setName, pass, setPass , dark  } =
    useContext(ContextApi);

  function handle() {
    
  for (let i = 0; i < storage.length; i++) {
    if( storage[i].name===name && storage[i].pass===pass && name!=='' && pass!=='' ){ 
      setChat(!chat);
    }
  }
  }
  const storage = JSON.parse(localStorage.getItem('datas'));
  
  const style = {
    width: 350,
    marginLeft: 50,
    marginTop: 20,
  };
  const button = {
    marginLeft: 200,
    marginTop: 20,
  };
  if (chat === false) {
    return (
      <div className={!dark ? 'lightLoginDiv' : 'darkLoginDiv'}>
        <div className={!dark ? 'lightLog' : 'darkLog'}>
          <TextField
            style={style}
            id="standard-basic"
            label="Name"
            variant="standard"
            onChange={(e)=>{setName(e.target.value)}}
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

          <Button onClick={handle} variant="outlined" style={button}>
            Enter
          </Button>
        </div>
      </div>
    );
  } else {
     
return <App handle={name.value} />;      
  
}

}