import React from 'react';
import './Main.css';
import Courses from '../Courses/Courses';
import data from '../../fakeData/data';
import { useState } from 'react';
import Cart from '../Cart/Cart';

const Main = () => {
    const fData = data;
    const [cart, setCart] = useState([]);



    const handleAddCourse = (course) => {
        console.log('Couese Added', course);
        const newCart = [...cart, course];
        setCart(newCart);
    }
    return (
        <div className="main-container">
            <div className="course-container">
               {
                  fData.map(course => <Courses 
                    handleAddCourse = {handleAddCourse}
                    item = {course}
                    ></Courses>) 
               } 
            </div>
            <div className="cart-container course shadow p-3 mb-5 rounded p-3 mb-2 bg-danger text-white">
                <Cart tCart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Main;