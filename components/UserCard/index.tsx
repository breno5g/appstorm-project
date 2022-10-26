import Image from 'next/image';
import React from 'react';
import { IUser } from "../../interfaces/user";
import { Container, FollowContainer } from './styles';

interface UserCardProps {
  data: IUser
}

function UserCard({ data: {avatar_url, login,bio,followers,following,name} }: UserCardProps) {
  return (
    <Container>
      <Image src={avatar_url} alt={login} width={500} height={500}/>
      <h1>{name}</h1>
      <span>{login}</span>
      <p>{bio}</p>
      <FollowContainer>
        <span>Seguidores: {followers}</span>
        <span>Seguindo: {following}</span>
      </FollowContainer>
    </Container>
  );
}

export default UserCard;