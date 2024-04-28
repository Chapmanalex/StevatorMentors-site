import React, { useState } from 'react'
import "./loginbody.css";
import axios from 'axios';

const Loginbody = () => {
  // state for form fields(inital)
  const [formData , setFormData] = useState({
    email: '',
    password: '',
  });

  // const handleInputChange = e => {
  //   const {name , value} = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   })
  // }


  const handleLogin = async (e) =>{
    e.preventDefault();

    const formData = {
      email: e.target.email.value,
      password: e.target.password.value

    
    }
    console.log(formData)

    try{

      const res = await axios.post('http://localhost:5000/login' , formData);

      alert ('loged in successfully');

    }catch(error)
    {
      console.log('there was an error', error.response.data );
    }
  }
  console.log(formData);


  return (
    <div className='loginbody'>

      <div className="pageimg">
        <img src="./loginimgman.png" alt="img" />
      </div>

      <div className="form">

        <form onSubmit={handleLogin} >
        {/* onSubmit={handleSubmit} */}
          <h1>LogIn</h1>
          <div className="form-group">
            <label>Email</label>
            <input type="email" 
                    name="email"
                    // onChange={handleInputChange} 
                    // value={formData.name}
                    className="form-control"  
                    aria-describedby="emailHelp" 
                    placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" 
                    name='password'
                    // onChange={handleInputChange}
                    // value={formData.password} 
                    className="form-control" 
                    id="password" 
                    placeholder="Password" />
          </div>
          <div className="form-group form-check">
            <p>forgot password? <a href="#">reset</a></p>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>


        <div className="social-buttons">
          <img src="./google.png" alt="" />
          <img src="./github.png" alt="" />
          <img src="linkedin.png" alt="" />
        </div>
      </div>






    </div>
  )
}

export default Loginbody
