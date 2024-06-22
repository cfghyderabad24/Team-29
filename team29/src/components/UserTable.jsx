import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/users');
        console.log(response)
        if (response.data.success) {
          setStudents(response.data.data);
        } else {
          console.error('Failed to fetch student data:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching data from backend:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Student Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Percentage (12th Grade)</th>
            <th>Family Income</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.percentage}</td>
              <td>{student.familyIncome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
