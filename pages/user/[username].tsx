import { GetServerSideProps } from 'next';
import React from 'react';
import Header from '../../components/Header';
import { IUser } from '../../interfaces/user';
import axios from "axios";
import { IRepositories } from '../../interfaces/repositories';

interface IUserProps {
  repositories: IRepositories,
  user: IUser
}

function User({repositories, user}: IUserProps) {
  return (
    <>
      <Header/>
    </>
  );
}

export default User;

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const {data: repositories} = await axios.get(`https://api.github.com/users/${query.username}/repos`);
  const {data: user} = await axios.get(`https://api.github.com/users/${query.username}`);
  return {
    props: {
      user,
      repositories
    }
  };
};