import React, {useState, useEffect} from "react";
import './App.css';
import Routing from "./Routes";
import Amplify, { API } from "aws-amplify";
import config from "./aws-exports.js";
import { WasherUserContext, DryerUserContext
      } from "./contextLib";

Amplify.configure(config);

function App() {
        const [washerUser, setWasherUser] = useState("");
        const [dryerUser, setDryerUser] = useState("");

        useEffect(() => {
                API.get("laundryapi", "/laundry/object")
                .then((laundryRes) => console.log(laundryRes));

        }, []);

        const handleSubmit = e => {
                e.preventDefault();
                // API.post("laundryapi", "/laundry", {
                //         body: {
                //                 machine: "Dryer",
                //                 isOn: false,
                //                 user: "none" 
                //         }
                // })
                API.put("laundryapi", "/laundry/machine/:0", {
                        body: {
                                machine: "Dryer",
                                isOn: true,
                                user: "Derek"
                        } 
                });
        }

	return (
    	<div className="App">
                <WasherUserContext.Provider value={{ washerUser, setWasherUser }}>
                        <DryerUserContext.Provider value={{ dryerUser, setDryerUser }}>
      		                <Routing />
                                      {/* <button onClick={handleSubmit}>submit</button> */}
                        </DryerUserContext.Provider>
                </WasherUserContext.Provider>
    	</div>
  	);
}

export default App;