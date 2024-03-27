import React from 'react';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainLayout({ children }) {
    return (
        <div className='w-full'>
            <Navbar></Navbar>
            
            <div>
                {children}
            </div>
            <ToastContainer/>
        </div>
    );
}

export default MainLayout;