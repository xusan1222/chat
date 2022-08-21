import { Button, Card, darken } from "@mui/material";
import React, { useContext } from "react";
import { ContextApi } from "../Context";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import "./Menu.css";
import { light } from "@mui/material/styles/createPalette";

export default function Menu() {
  const { menu, dark, setDark } = useContext(ContextApi);

  if (!menu) {
    return <></>;
  } else {
    function changeMode() {
      setDark(!dark);
    }
    console.log(dark)


    return (
      <div className={!dark ? 'lightMenuDiv' : 'darkMenuDiv'}>
        <Card style={dark ? {backgroundColor:'#121212'}:{}} className={!dark ? 'menu' : 'darkMenu'} sx={{ width: 250, height: 600 }}>
          <Button sx={{ width: 200, marginTop: 3 }} variant="outlined">
            {" "}
            porfile{" "}
          </Button>
          <Button sx={{ width: 200, marginTop: 3 }} variant="outlined">
            {" "}
            Settings{" "}
          </Button>
          {/* <p className={!dark ?'lightP' : 'darkP'}>Dark mode</p>
          <FormControlLabel
            onChange={changeMode}
            control={<Switch />}
          /> */}
        </Card>
      </div>
    );
  }
}
