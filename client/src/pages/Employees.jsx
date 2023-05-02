import "../index.css";
import Employee from "../components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Employees() {
  const [employees, setEmployees] = useState([
    {
      name: "caleb",
      role: "Developer",
      img: "https://images.pexels.com/photos/13356439/pexels-photo-13356439.jpeg",
    },
    {
      name: "sal",
      role: "Developer",
      img: "https://images.pexels.com/photos/13356439/pexels-photo-13356439.jpeg",
    },
    {
      name: "John",
      role: "Developer",
      img: "https://images.pexels.com/photos/13356439/pexels-photo-13356439.jpeg",
    },
    {
      name: "Melanie",
      role: "Developer",
      img: "https://images.pexels.com/photos/13356439/pexels-photo-13356439.jpeg",
    },
    {
      name: "Corey",
      role: "Developer",
      img: "https://images.pexels.com/photos/13356439/pexels-photo-13356439.jpeg",
    },
    {
      name: "Jake",
      role: "Developer",
      img: "https://images.pexels.com/photos/13356439/pexels-photo-13356439.jpeg",
    },
  ]);
  const showEmployees = true;
  return (
    <div>
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              // console.log(employee);
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default Employees;
