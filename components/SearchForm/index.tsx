import React, { useState } from 'react';
import { Form } from './style';
import axios from "axios";
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/actions';
import { IUser } from '../../interfaces/user';

interface IAxiosData {
  data: IUser
}

function SearchForm() {
  const [username, setUsername] = useState<string>("");
  const router = useRouter();
  const dispatch = useDispatch();
  
  const handleSearchUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { data }: IAxiosData = await axios.get(`/api/user/${username}`);
      dispatch(addUser(data));
      router.replace(`/user/${username}`);
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