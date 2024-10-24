import React, {useState} from "react";
import { BsCheckCircleFill } from "react-icons/bs";

import './App.css';

const App = () =>{
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    message:""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData((prev) =>({...formData, [name]:value}));
  
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setSubmitted(!false);
  }

  return(
    <div className="app">
      <div className="container">
        <h1 className="heading">Contact Us</h1>
        {submitted? (
          <div className="success">
            <BsCheckCircleFill className="icon" />
            <p className="success-msg">Thank you! Your message has been sent successfully.</p>
          </div>
        ):(
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">NAME:</label>
              <input 
                type="text" 
                name="name"
                className="input-element"
                id="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Enter your name" 
                required  />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">EMAIL:</label>
              <input 
                type="email" 
                name="email"
                className="input-element"
                id="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Enter your email" 
                required  />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="message">MESSAGE:</label>
              <textarea
                type="text" 
                name="message"
                className="input-element"
                id="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Enter Message" 
                required>
              </textarea>
            </div>
            <button className="btn" type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  )

}

export default App;
