import React, {useState} from "react";
import './App.css';
import Routing from "./Routes";
import { WasherUserContext, DryerUserContext
      } from "./contextLib";

function App() {
        const [washerUser, setWasherUser] = useState("");
        const [dryerUser, setDryerUser] = useState("");

	return (
    	<div className="App">
                <WasherUserContext.Provider value={{ washerUser, setWasherUser }}>
                        <DryerUserContext.Provider value={{ dryerUser, setDryerUser }}>
      		                <Routing />
                        </DryerUserContext.Provider>
                </WasherUserContext.Provider>
    	</div>
  	);
}

export default App;