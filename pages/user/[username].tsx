import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import { IUser } from '../../interfaces/user';
import axios from "axios";

function User({repositories}: any) {
  const router = useRouter();
  const selector = useSelector(({user}: {user: IUser}) => user);
  
  useEffect(() => {
    if (!selector) {
      router.replace("/");  
    }
  }, []);
  
  return (
    <>
      <Header/>
    </>
  );
}

export default User;

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const {data} = await axios.get(`https://api.github.com/users/${query.username}/repos`);
  return {
    props: {
      repositories: data
    }
  };
};