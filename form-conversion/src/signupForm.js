import React from 'react';
import "./App.css";

export default function SignUp(){
    const [formData, setFormData] = React.useState(
        {
            "email": "",
            "password": "",
            "confirmPassword": "",
            "isNewsLetter": false
        }
    );

     function handleFormChange (event){
        const {name, type, value, checked} = event.target;
        setFormData(prevData => {
            let currData = {...prevData,
                        [name]: type === "checkbox" ? checked: value};
            return currData;
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        if (formData.password !== formData.confirmPassword){
            console.warn("Given PAsswords does not match")
        }
        else{
            console.log("SignedUp successfully");
            formData.isNewsLetter && console.log("Thank you for signing up newsletter");
        }
    }
    return <form onSubmit={handleSubmit}>
        <input 
            type="email"
            name="email"
            id='email'
            value={formData.email}
            placeholder='Enter Email'
            onChange={handleFormChange}
        /><br />
        <input 
            type="password"
            name="password"
            id='password'
            value={formData.password}
            placeholder='Enter Password'
            onChange={handleFormChange}

        /><br />
        <input 
            type="password"
            name="confirmPassword"
            id='confirmPassword'
            value={formData.confirmPassword}
            placeholder='Confirm Password'
            onChange={handleFormChange}
        /><br />
        <input 
            type="checkbox"
            name="isNewsLetter"
            id='isNewsLetter'
            checked={formData.isNewsLetter === true}
            onChange={handleFormChange}
        />
        <label htmlFor='isNewsLetter'>Signup for newsletter</label>
        <br /> 
        <button>SignUp</button>

    </form>
}