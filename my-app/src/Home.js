import React from "react";
import {
	Grid, Button
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import "./Home.css";

//img
import catVibe from "./img/bomba.gif";
import pepeDance from "./img/pepe-dance.gif";
import laundryMeme from "./img/laundry_meme.jpg";
import kanyeFake from "./img/kanye-fake.gif"


export default function Home() {
        const navigate = useNavigate();

        const goToLaundry = (event, user) => {
                event.preventDefault();
                localStorage.setItem("user", user);
                navigate("/laundry-info");
                

        }
        const memes = [catVibe, pepeDance, laundryMeme, kanyeFake];
        let randomImage = Math.floor(Math.random()*memes.length);
        
        const btnContents = [
                "Alex", "Anthony", "Danny", "Derek", "Ian", "Jared", "Kevin"
        ]
        return (
        <div className="Home">
                <div className="lander">
                        <h1>Fillmore Laundry</h1>
                        <p className="text-muted">Powered by Derek AKA Kimchi</p>
                        <div stlye={{margin: "0 auto", textAlign: "center"}}>
                        <img src={memes[randomImage]} alt="randomMemes" style={{margin: "0 auto", textAlign: "center", width: "300px"}}/>
                        </div>
                </div>
                <Grid
                        key={0} 
                        container
                        spacing={0}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        style={{width: window.innerWidth > 760 ? "50%" : "100%", margin: "0 auto"}}
                >
                        <h3 style={{margin: "0 auto", textAlign: "center", marginBottom: "30px"}}>Who the fuck are you?</h3>
                        {btnContents.map((item, i) => (
                        <Grid key={i} item xs={10} style={{margin: "0 auto", textAlign: "center", marginBottom: "30px"}}>
                                <Button
                                size="medium" 
                                color="primary"
                                onClick={(e) => goToLaundry(e, item)}
                                style={{ 	borderRadius: "20px", boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)", width: window.innerWidth > 760 ? "30%" : "80%",
                                        color: "black", textTransform: "none", border: "none", outline: "none"}}>
                                {item}
                                </Button>
                        </Grid>
                        ))}

                </Grid>

        </div>
  );
}