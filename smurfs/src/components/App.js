import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

import formContext from "../contexts/formContext";
import smurfContext from "../contexts/smurfContext.js";
import CurrList from "./CurrList";
import AddForm from "./AddForm";


const App = () => {
  const [smurfList, setSmurfList] = useState([]);
  const [formValue, setFormValue] = useState({
    name: "",
    age: "",
    height: "",
    id: ""
  });

  const handleChanges = event => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const newSmurf = event => {
    event.preventDefault();
    var smurfed = { ...formValue, id: Date.now() };
    axios
    .post("http://localhost:3333/smurfs", smurfed)
    .then(res => {
      setSmurfList(res.data);
      setFormValue({
        name: "",
        age: "",
        height: "",
        id: ""
      });
    })
    .catch(err => {
      console.log("error", err);
    });
  };

  useEffect(() => {
    axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      setSmurfList(res.data);
    })
    .catch(err => {
      console.log(err);
    });
      
  }, [])
  return (
    <div className="container">
      <smurfContext.Provider value ={{ smurfList }}>
        <formContext.Provider value={{ formValue, handleChanges, newSmurf }}>
          <header>
            <h1>Smurfs</h1>
            <p>Add or search Smurfs here!</p>
          </header>
          <div className="sidebyside">
            <AddForm />
            <CurrList />
          </div>
        </formContext.Provider>
      </smurfContext.Provider>
    </div>
  )
};

export default App;





