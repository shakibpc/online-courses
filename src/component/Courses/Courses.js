import React from 'react';
import './Courses.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Courses = (props) => {
    // console.log(props);
    const {name, subname, Instructor, price, img} = props.item;
    return (
        <div className="course shadow p-3 mb-5 rounded p-3 mb-2 bg-danger text-white rounded-lg ">
            <div className="img d-flex justify-content-center"> 
                <img src={img} alt=""/>
            </div>
            <div className="">
                <h4 className="text-warning">{name}</h4>
                <p>{subname}</p>
                <p>Instuctor: {Instructor}</p>
                <h3>price: ${price}</h3>
                <button 
                className="btn btn-success"
                onClick={(() => props.handleAddCourse(props.item))}
                >Enrole Now</button>
            </div>
        </div>
    );
};

export default Courses;