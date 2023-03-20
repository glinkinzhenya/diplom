import React from "react";
import { Typography } from "@mui/material";
import './NavBar.css';

export default function Header() {



    return (
        <>
            <Typography
                variant="h3"
                component="h2"
                color='white'
            >
                Gym Team
            </Typography>
            <div >
                <input type="text" placeholder="Пошук тренування" />
            </div>
        </>

    )
}