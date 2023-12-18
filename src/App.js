import React from 'react'
import DrawerComponent from './Components/DrawerComponent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddEmployees from './Components/addEmployees'
import InternshipDetails from './Components/InternshipDetails'
import ProgrammingLang from './Components/programmingLang'
import ViewEmployees from './Components/viewEmployees'
import Certificate from './Components/certificate'
import CourseDetails from './Components/courseDetails'
import EmpTable from './Components/EmpTable'
import { useState, useEffect } from 'react'
import CourseData from './Coursedata.json'

const App = () => {
    const [Employees, setEmployees] = useState([]);

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem('Employees')) || [];
        setEmployees(storedEmployees);
    }, []);

    const handleSubmit = (formData) => {
        const updatedEmployees = [...Employees, formData];
        setEmployees(updatedEmployees);
        localStorage.setItem('Employees', JSON.stringify(updatedEmployees));
    };

    const handleDelete = (index) => {
        const updatedEmployees = Employees.filter((_, i) => i !== index);
        setEmployees(updatedEmployees);
        localStorage.setItem('Employees', JSON.stringify(updatedEmployees));
    };

    const handleUpdate = (index, newData) => {
        const updatedEmployees = Employees.map((Employees, i) => (i === index ? newData : Employees));
        setEmployees(updatedEmployees);
        localStorage.setItem('Employees', JSON.stringify(updatedEmployees));
    };
    return (
        <div>
            <DrawerComponent />
            <Router basename={process.env.PUBLIC_URL}>
                <Routes>
                <Route path='/' element={<DrawerComponent />} />
                    <Route
                     path='/addEmployees' 
                        element={<AddEmployees courses={CourseData} onSubmit={handleSubmit} />}   />
                    <Route path='/internshipDetails' element={<InternshipDetails />} />
                    <Route path='/programmingLang' element={<ProgrammingLang />} />
                    <Route
                        path='/viewEmployees'
                        element={<ViewEmployees Employees={Employees} onDelete={handleDelete} onUpdate={handleUpdate} />}
                    />
                    <Route path='/certificate' element={<Certificate />} />
                    <Route path='/courseDetails' 
                    element={<CourseDetails courses={CourseData} />} 
                    />
                    <Route path='/EmpTable' 
                    element={<EmpTable Employees={Employees} />} 
                    />
                </Routes>
            </Router>  
        </div>
    )
}

export default App