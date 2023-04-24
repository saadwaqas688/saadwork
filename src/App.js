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
    const studentObject = {
      name: studentName,
      rollNumber: studentRollNumber,
    };

    setStudents([...students, studentObject]);
    console.log(studentObject);
  }

  return (
    <div>
      <label> Student Name</label>
      <input
        type="text"
        name="studentName"
        value={studentName}
        onChange={handleChangestudentName}
      />
      <br></br>
       <label>Student Roll Number</label>
      <input
        type="text"
        name="studentRollNumber"
        value={studentRollNumber}
        onChange={handleChangeStudentRollNumber}
      />
      <br></br>
      <button onClick={addStudent}>Add Student</button>
      <div>
      {
        students.map((element)=> {
          return(
            <div> {element.name}</div>
          )
        })
      }
      </div>
   
    </div>

  );
}

export default App;
