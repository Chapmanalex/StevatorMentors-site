import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ErrorPage from './Error-page.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Profiles from './components/home/profiles/Profiles.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Categories from './components/dashboard/categories/Categories.jsx';
const router = createBrowserRouter([
{
  path: "/",
  element: <Home />,
  errorElement: <ErrorPage />,

  children:[{
    path: "/Profiles",
    element: <Profiles/>
  },
  ]
},
{
  path:"/login",
  element: < Login/>,
},

{
  path: "/register",
  element: <Register />
},
{
  path: "/dashboard",
  element: <Dashboard />,
  // children:[{
  //     path: "/categories",
  //     element: <Categories/>
  // }]
}

]);


const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router = {router}/>
  </React.StrictMode>,
)
