import { useState } from "react";

const UseForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  const onChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };
  const clear =()=>{
    setForm(initialState)
  }
  return[form, onChange, clear]
};
export default UseForm