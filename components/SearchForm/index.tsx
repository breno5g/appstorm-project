import React, { useState } from 'react';
import { Form } from './style';
import axios from "axios";
import { toast } from 'react-toastify';

function SearchForm() {
  const [username, setUsername] = useState("");
  
  const handleSearchUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { data } = await axios.get(`/api/user/${username}`);
      console.log(data);
    } catch (error) {
      toast.error("Não foi possivel encontrar o usuário");
    }
  };

  return (
    <Form onSubmit={handleSearchUser}>
      <input 
        type="text" 
        placeholder='Insira o username desejado' 
        name='username'
        value={username}
        onChange={({target: {value}}) => setUsername(value)}
      />
      <button type='submit'>Buscar</button>
    </Form>
  );
}

export default SearchForm;