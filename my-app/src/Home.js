import React from "react";
import {
	Grid, Button
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useWasherUserContext, useDryerUserContext
} from "./contextLib";
import "./Home.css";

//img
import catVibe from "./img/bomba.gif";


export default function Home() {
        const navigate = useNavigate();
        const {washerUser, setWasherUser} = useWasherUserContext();
        const {dryerUser, setDryerUser} = useDryerUserContext();

        const goToLaundry = (event, user) => {
                event.preventDefault();
                setWasherUser(user);
                setDryerUser(user);
                navigate("/laundry-info");

        }
        
        const btnContents = [
                "Alex", "Anthony", "Danny", "Derek", "Ian", "Jared", "Kevin"
        ]
        return (
        <div className="Home">
                <div className="lander">
                        <h1>Fillmore Laundry</h1>
                        <p className="text-muted">Powered by Derek AKA Kimchi</p>
                        <img src={catVibe} alt="cat vibe" stlye={{margin: "0 auto", textAlign: "center"}}/>
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