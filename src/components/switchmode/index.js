import React from 'react'
import { Box } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import {ChangeMode} from '../../redux/reducers/mode'
import DarkModeToggle from "react-dark-mode-toggle";

export default function SwitchMode(){

    const theme = useSelector((state) => state.mode.darkmode);

    const dispatch = useDispatch();

    const toggleDarkMode = () => {
      dispatch(ChangeMode(theme.mode === "light"));
  };

    return(
        <Box
        m={2}
        >
          <DarkModeToggle
            onChange={(toggleDarkMode)}
            checked={theme.mode === "dark"}
            size={
              window.innerWidth> 420 
              ? 80
              : 100
            }
          />
        </Box>
    )

}