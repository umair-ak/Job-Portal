import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function User() {
  
    // Create a login funciton that would check if the user is registered and logged in
    let loggedin = true;

    if(loggedin){ 
        return <Outlet />;
    }else{
        console.log("user not logged in");
        return <Navigate to={"/login"} />;
    }

}
