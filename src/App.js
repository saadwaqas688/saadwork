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
    
  }


  function deleteStudent(rollNumber) {
    alert(rollNumber)
    let tempStudents=[...students]
     tempStudents=tempStudents.filter((element)=>element.rollNumber!==rollNumber)
    setStudents(tempStudents);
    
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
      <button style={{marginLeft:"5px",background:"blue"}} onClick={addStudent}>Add Student</button>

      <div>
        <table>
      {
        students.map((element)=> {
          return(
            <div style={{display:"flex",marginTop:"50px"}}>
            <div> {element.name}</div>
            <button style={{marginLeft:"5px",background:"green"}} onClick={()=>deleteStudent(element.rollNumber)}>delete</button>
            </div>
        

          )
        })
      }
      </table>
      </div>
   
    </div>

  );
}

export default App;





// import { useState } from "react";

// const divStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor: 'yellow',
//   width: '100%',
//   height: '700px',
// };

// const countStyle = {
//   marginBottom: '10px',
//   fontSize: '100px',
// };


// const buttonStyle = {
//   marginBottom: '10px',
//   padding: '10px 20px',
//   backgroundColor: 'orange',
//   color: 'white',
//   border: 'none',
//   borderRadius: '4px',
//   fontSize: '16px',
//   cursor: 'pointer',
// };

// function App() {
//   const [count, setCount] = useState(0);


//   function handleIncrement() {
//     let newCount=count+1
//     setCount(newCount);
//   }

//   function handleDecrement() {
//     let newCount=count-1
//     setCount(newCount); 
//    }


//   return (
//     <div style={divStyle}>
//     <h3 style={countStyle}>{count}</h3>
//     <button style={buttonStyle} onClick={handleIncrement}>Increment</button>
//     <button style={buttonStyle} onClick={handleDecrement}>Decrement</button>
//     </div>
//   );
// }

// export default App;







// import React, { useState } from 'react';

// const App = () => {
//   const [isOn, setIsOn] = useState(false);

//   const bulbStyle = {
//     width: '100px',
//     height: '100px',
//     borderRadius: '50%',
//     backgroundColor: isOn ? 'yellow' : 'gray',
//     boxShadow: isOn ? '0 0 10px yellow' : 'none',
//     margin: '20px',
//   };

//   const buttonStyle = {
//     padding: '10px 20px',
//     backgroundColor: 'lightblue',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     marginRight: '10px',
//   };

//   const handleTurnOn = () => {
//     setIsOn(true);
//   };

//   const handleTurnOff = () => {
//     setIsOn(false);
//   };

//   return (
//     <div>
//       <div style={bulbStyle}></div>
//       <button style={buttonStyle} onClick={handleTurnOn}>On</button>
//       <button style={buttonStyle} onClick={handleTurnOff}>Off</button>
//     </div>
//   );
// };

// export default App;

