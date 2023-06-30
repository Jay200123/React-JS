import React from "react";
import Page from "./Info";
import Student from "../home-data";

function Home(){

    const studentData = Student.map((student)=>{
        return <Page name={student.name} course={student.course} section={student.section} email={student.email}/>
    })

    return(
        <div className="home-page">
            <h1>React Props</h1>
            <p>In React, the term props stands for properties, which refers to the properties of an object. This is because all elements created in React are JavaScript objects. As a result, passing data into a component is done by creating properties and values for the object.</p>
            {studentData}
        </div>
    )
}

export default Home