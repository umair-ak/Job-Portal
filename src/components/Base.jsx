/* eslint-disable react/prop-types */
import * as React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

export default function Base() {
  return (
    <div>
   <NavBar />
    <Outlet />
    </div>
        );
}
