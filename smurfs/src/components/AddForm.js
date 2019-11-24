import React, { useContext } from "react";
import formContext from"../contexts/formContext";

const AddForm = () => {
    const { formValue, handleChanges, newSmurf } = useContext(formContext);
    return (
        <form onSubmit={newSmurf}>
            <p>Fill out the following to register</p>
            <label htmlFor="name">Name</label>
            <input
            type="text"
            name="name"
            value={formValue.name}
            placeholder="Smurfs Name"
            onChange={handleChanges}
            />
            <label htmlFor="age">Age</label>
            <input
            type="text"
            name="age"
            value={formValue.age}
            placeholder="age"
            onChange={handleChanges}
            />
            <label htmlFor="height">Height</label>
            <input
            type="text"
            name="height"
            value={formValue.height}
            placeholder="height"
            onChange={handleChanges}
            />
            <button type="submit">Register</button>


        </form>
    )
};

export default AddForm;