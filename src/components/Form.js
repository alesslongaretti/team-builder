import React, {useState} from "react";

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
      <form onSubmit={submit}>
        <label>Name</label>
        <input 
        name="name"
        type="text"
        placeholder="enter name"
        onChange={newState}
        value={state.name}
        />

        <label >Email</label>
        <input 
        name="email"
        type="text"
        placeholder="enter email"
        onChange={newState}
        value={state.email}
        />

        <label>Role</label>
        <input 
        name="role"
        type="text"
        placeholder="enter role"
        onChange={newState}
        value={state.role}
        />

        <button type="submit">Add Member</button>

      </form>
  );
}
export default Form;