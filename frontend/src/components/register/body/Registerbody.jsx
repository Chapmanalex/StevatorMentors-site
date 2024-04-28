import React, { useState } from 'react'
import "./registerbody.css";
import { Link } from 'react-router-dom';
import axios from 'axios'









const Registerbody = () => {

  
const apiCall = () => {
  axios.get('http://localhost:5000').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
}


















const [errors, setErrors] = useState({
  fullname: null,
  email: null,
  password: null,
  repeatpassword: null,
});

const handleSubmit = async (e) => {
  e.preventDefault();

  
  const formData = {
    fullname: e.target.fullname.value,
    email: e.target.email.value,
    password: e.target.password.value,
    repeatpassword: e.target.repeatpassword.value,

  };
  console.log("Form Data:", formData);

  try {
    const response = await axios.post('http://localhost:5000/signup', formData);
    console.log('Success:', response.data);

    // Show success message as an alert
    alert('Registration successful');

    // Navigate to login page
    // navigate("/login");
  } catch (err) {
    console.error('Error registering user:', err.response.data);

  }
};



























  return (
    <div>
      <div className='loginbody'>

<div className="pageimg">
  <img src="./signupimgwoman.png" alt="img" />
</div>

<div className="form">

  <form onSubmit={handleSubmit}>
    <h1>Register</h1>
    <div className="form-group">
      <label>FullName
      <input type="text" className="form-control"  name='fullname' placeholder="Enter fullname" /></label>
    </div>
    <div className="form-group">
      <label>Email Address</label>
      <input type="email" className="form-control" name='email'  aria-describedby="emailHelp" placeholder="Enter email" />
    </div>
    <div className="form-group">
      <label>Password</label>
      <input type="password" className="form-control" name='password' id="password" placeholder="Password" />
    </div>
    <div className="form-group">
      <label>Repeat Password</label>
      <input type="password" className="form-control" name='repeatpassword' id="Repeatpassword" placeholder="Repeat Password" />
    </div>
    <div className="form-group form-check">
      <p>Already Have  An account? <Link to={"/Login"}>Log in</Link></p>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>


  <div className="social-buttons">
    <img src="./google.png" alt="" />
    <img src="./github.png" alt="" />
    <img src="linkedin.png" alt="" />
  </div>

  <button onClick={apiCall}>Make API Call</button>
</div>






</div>
    </div>
  )
}

export default Registerbody
