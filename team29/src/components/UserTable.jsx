import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/users');
        if (response.data.success) {
            console.log(response.data)
          setStudents(response.data.data);
          console.log(students)
        } else {
          console.error('Failed to fetch student data:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching data from backend:', error);
      }
    };

    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/v1/users/${id}`);
      if (response.data.success) {
        setStudents(students.filter(student => student._id !== id));
        alert('User deleted successfully.');
      } else {
        console.error('Failed to delete user:', response.data.message);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h1>Student Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Percentage (12th Grade)</th>
            <th>Family Income</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.percentage}</td>
              <td>{student.familyIncome}</td>
              <td>
                <button onClick={() => handleDelete(student._id)}>Delete</button>
              </td>
            </tr>
          )) : <tr><td colSpan="4">No data available</td></tr>}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
