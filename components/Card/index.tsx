import React from 'react';
import { ButtonsContainer, Container } from './styles';
import Image from 'next/image';
import Link from 'next/link';
import { IFavorite } from '../../interfaces/favorite';

function Card({data}: {data: IFavorite}) {

  return (
    <Container>
      <h1>{data.username}</h1>
      <Image src={data.image} alt={data.username} width={500} height={500}/>
      <ButtonsContainer>
        <Link href={`/user/${data.username}`}>Repos</Link>
        <Link href={data.url}>GitHub</Link>
      </ButtonsContainer>
    </Container>
  );
}

export default Card;