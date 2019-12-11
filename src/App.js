import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form";
import MemberCard from "./components/MemberCard";

function App() {

  const [team, setTeam] = useState([
    {
      name: "Alessandra Longaretti",
      email:'alesslongaretti@gmail.com',
      role:"Software Engineer"
    }
  ]);


const newTeam= member => {
  const newMember = {
    name:member.name,
    email:member.email,
    role:member.role
  };

  const newTeamMember = [...team, newMember];
  setTeam(newTeamMember);
};



  return (
    <div className="App">
      <h1> Team Members</h1>
      <Form newTeam={newTeam} />
      <MemberCard team={team}/>
     
    </div>
  );
}
export default App;