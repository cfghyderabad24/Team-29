import React from 'react'
import { useLocation } from 'react-router-dom';
import "./NewForm.css"

const NewForm = () => {
    const location = useLocation();
    const { option } = location.state || {};
    const [form, setForm] = useState({
      name: '',
      age: '',
      gender: '',
      percentage: '',
      familyIncome: '',
      fathername: '',
      fatheroccp: '',
      mothername: '',
      motheroccp: '',
      streamofeducation: '',
      collegename: '',
      collegeid: '',
      collegefee: '',
      yearofgrad: '',
      address: '',
      phone: '',
      email: '',
    });
    return (
        <div className="FormPage">
          <header className="App-header">
            <h1>Student Scholarship Form</h1>
              <div className="form-container">
                <form onSubmit={handleSubmit} className="form">
                  <div>
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="age">Age:</label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={form.age}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="gender">Gender:</label>
                    <select
                      id="gender"
                      name="gender"
                      value={form.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="percentage">Percentage in 12th Standard:</label>
                    <input
                      type="number"
                      id="percentage"
                      name="percentage"
                      value={form.percentage}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="familyIncome">Annual Family Income:</label>
                    <input
                      type="number"
                      id="familyIncome"
                      name="familyIncome"
                      value={form.familyIncome}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="fathername">Father Name:</label>
                    <input
                      type="text"
                      id="fathername"
                      name="fathername"
                      value={form.fathername}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="fatheroccp">Father Occupation:</label>
                    <input
                      type="text"
                      id="fatheroccp"
                      name="fatheroccp"
                      value={form.fatheroccp}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="mothername">Mother Name:</label>
                    <input
                      type="text"
                      id="mothername"
                      name="mothername"
                      value={form.mothername}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="motheroccp">Mother Occupation:</label>
                    <input
                      type="text"
                      id="motheroccp"
                      name="motheroccp"
                      value={form.motheroccp}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="streamofeducation">Stream of Education:</label>
                    <input
                      type="text"
                      id="streamofeducation"
                      name="streamofeducation"
                      value={form.streamofeducation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="collegename">College Name:</label>
                    <input
                      type="text"
                      id="collegename"
                      name="collegename"
                      value={form.collegename}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="collegeid">College Id:</label>
                    <input
                      type="number"
                      id="collegeid"
                      name="collegeid"
                      value={form.collegeid}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="collegefee">College Fee:</label>
                    <input
                      type="number"
                      id="collegefee"
                      name="collegefee"
                      value={form.collegefee}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="yearofgrad">Year of Graduation:</label>
                    <input
                      type="number"
                      id="yearofgrad"
                      name="yearofgrad"
                      value={form.yearofgrad}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="address">Address:</label>
                    <textarea
                      id="address"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </div>
          </header>
        </div>
  )
}

export default NewForm