import React, { useState } from 'react';
import { Form } from './style';

function SearchForm() {
  const [username, setUsername] = useState("");
  
  const handleSearchUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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