import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserTable.css';
import { ImCross } from "react-icons/im";

const UserTable = () => {
  const [students, setStudents] = useState([]);
  const [visibleStudents, setVisibleStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/users');
        console.log(response);
        if (response.data.success) {
          console.log(response.data.data);
          setStudents(response.data.data);
          setVisibleStudents(response.data.data); // Initialize visible students
        } else {
          console.error('Failed to fetch student data:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching data from backend:', error);
      }
    };

    fetchStudents();
  }, []);

  const hideStudent = (id) => {
    setVisibleStudents(visibleStudents.filter(student => student._id !== id));
  };

  return (
    <div>
      <h1>Student Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Education Stream</th>
            <th>College Name</th>
            <th>Income</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {visibleStudents.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.edu_stream}</td>
              <td>{student.college_name}</td>
              <td>{student.income}</td>
              <td>
                <ImCross onClick={() => hideStudent(student._id)} style={{ cursor: 'pointer' }} />
              </td>
              <td>
                <button className='interview-btn'>Interview</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
