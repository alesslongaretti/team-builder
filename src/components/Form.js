import React, {useState} from "react";
import "./Form.css";


const Form = ({newTeam}) => {
    const [state, setState] = useState({
    name:'',
    email: '',
    role: ''

  });

const newState = event => {
  setState({...state,[event.target.name]: event.target.value});
};

const submit = event => {
  event.preventDefault();
  newTeam(state);

  setState({name:'',email:"",role:''});

};

  return (
    <div className="submit-member">
      <form onSubmit={submit}>
        <div className="submit">
        <label>Name: </label>
        <input className="enter-name"
        name="name"
        type="text"
        placeholder="enter name"
        onChange={newState}
        value={state.name}
        /></div>

        <div className="submit">
        <label className="email-label">Email: </label>
        <input  className= "enter-email"
        name="email"
        type="text"
        placeholder="enter email"
        onChange={newState}
        value={state.email}
        />
        </div>

        <div className="submit">
        <label className="label">Role: </label>
        <input className="enter-role"
        name="role"
        type="text"
        placeholder="enter role"
        onChange={newState}
        value={state.role}
        />
        </div>
        <button type="submit">Add Member</button>

      </form>
      </div>
  );
}
export default Form;