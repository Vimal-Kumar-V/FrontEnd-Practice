import React from "react"
import "./App.css"
FormData = () => {
  return [{
    "firstName": "firstName",
    "lastName": "lastName"
  }]
}

export default function FormInput(){
  const [formValues, setFormValues] = React.useState(
    {
      "firstName": "ehll",
      "lastName": "frjkld",
      "email": "",
      "comments": "",
      "cursed": true,
      "currentMode": ""
    }
  );

  function handleformChange(event){
    setFormValues( prevData => {
      let currData = {...prevData}
      currData[event.target.name] = event.target.type == "checkbox" ?event.target.checked: event.target.value;
      return currData;
    });
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(formValues)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        id="firstName" 
        name="firstName" 
        value={formValues.firstName} 
        onChange={handleformChange} 
        placeholder="Enter your name"
      /><br />
      <input 
        type="text" 
        name="lasttName" 
        value={formValues.lastName} 
        onChange={handleformChange} 
        placeholder="Enter your lastname"
      /><br />
      <input 
        type="text" 
        name="email" 
        value={formValues.email} 
        onChange={handleformChange} 
        placeholder="Enter your email"
      /><br />
      <textarea 
        name="comments" 
        value={formValues.comments || ""} 
        onChange={handleformChange} 
        placeholder="Enter your comments here"
      /><br />
      <input
        id="cursed"
        type="checkbox"
        name="cursed"
        checked={formValues.cursed}
        onChange={handleformChange}
      />
      <label htmlFor="cursed">You are the only one cursed here😂</label>
      <br />
      <fieldset>
        <legend>Are you </legend>
      <input
        id="currentMode"
        type="radio"
        name="currentMode"
        checked = {formValues.currentMode === "Devil"}
        value = "Devil"
        onChange={handleformChange}
      /> <label htmlFor="Devil"> Devil </label><br />
      <input
        id="currentMode"
        type="radio"
        name="currentMode"
        checked = {formValues.currentMode === "The evil"}
        value = "The evil"
        onChange={handleformChange}
      /> <label htmlFor="Devil"> The evil </label><br />
      <input
        id="currentMode"
        type="radio"
        name="currentMode"
        checked = {formValues.currentMode === "Ordinary Person"}
        value = "Ordinary Person"
        onChange={handleformChange}
      /> <label htmlFor="Devil"> Ordinary Person </label>
    </fieldset>
    <br />
    <button> Submit </button>
    </form>
  )
}