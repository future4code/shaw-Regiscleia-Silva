import { useState } from "react";

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleInput = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const clear = () => {
    setForm(initialState);
  };
  return [form, handleInput, clear];
};
export default useForm;
