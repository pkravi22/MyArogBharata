import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Doctors from './Doctors';
import Patients from './Patients';

const Admin = () => {

    const navigate = useNavigate();
  const [component, setComponent] = useState("doctors");
  const handleClick = (compo) => {
    setComponent(compo);
    console.log(component)
  };
  return (
    <div className="flex pt-12 gap-8 font-inter ">
      <div className="bg-blue-100 w-1/6 flex flex-col gap-4 pt-12">
        <div className={` p-2 ${component==="profile"?"bg-blue-600":"bg-white"} cursor-pointer`}>
          <Link to="/admin/doctors" onClick={() => handleClick("doctors")}>
            Doctors
          </Link>
        </div>
        <div className={` p-2 ${component==="patients"?"bg-blue-600":"bg-white"} cursor-pointer`} onClick={() => handleClick("patients")}>
          <Link to="/admin/patients ">Patients</Link>
        </div>
      </div>
      <div className="w-5/6">
          {component==="doctors"?<Doctors/>:<Patients/>}
      </div>
    </div>
  );
  
}

export default Admin