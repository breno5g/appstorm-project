import { GetServerSideProps } from 'next';
import React from 'react';
import Header from '../../components/Header';
import { IUser } from '../../interfaces/user';
import axios from "axios";
import { IRepositories } from '../../interfaces/repositories';
import Main, {  Aside, Container } from './_styles';
import UserCard from '../../components/UserCard';
import RepoCard from '../../components/RepoCard';

interface IUserProps {
  repositories: IRepositories[],
  user: IUser
  error: string
}

function User({repositories, user, error}: IUserProps) {
  if (error) return (
    <>
      <Header />
      <h1 style={{textAlign: "center"}}>{error}</h1>
    </>
  );
  return (
    <>
      <Header/>
      <Main>
        <Container>
          <UserCard data={user}/>
        </Container>
        <Aside>
          {repositories.map((repo) => (
            <RepoCard key={repo.html_url} data={repo}/>
          ))}
        </Aside>
      </Main>
    </>
  );
}

export default User;

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  try {
    const {data: repositories} = await axios.get(`https://api.github.com/users/${query.username}/repos`);
    const {data: user} = await axios.get(`https://api.github.com/users/${query.username}`);
    return {
      props: {
        user,
        repositories
      }
    };
  } catch (error) {
    return {
      props: {
        error: "Usuário não encontrado"
      }
    };
  }
};