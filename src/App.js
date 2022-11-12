import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [studentName, setStudentName] = useState("");

  const [studentRollNumber, setStudentRollNumber] = useState("");

  function handleChangestudentName(e) {
    setStudentName(e.target.value);
  }

  function handleChangeStudentRollNumber(e) {
    setStudentRollNumber(e.target.value);
  }

  function addStudent() {
   const studentObject={name:studentName,rollNumber:studentRollNumber}

   setStudents([...students,studentObject])
    console.log(studentObject)

  }

  return (
    <div>
      <input
        type="text"
        name="studentName"
        value={studentName}
        onChange={handleChangestudentName}
      />Student Name
      <input
        type="text"
        name="studentRollNumber"
        value={studentRollNumber}
        onChange={handleChangeStudentRollNumber}
      />Student Roll Number
      <button onClick={addStudent}>Add Student</button>
    </div>
  );
}

export default App;
