import React from 'react';
import { ButtonsContainer, Container } from './styles';
import Image from 'next/image';
import Link from 'next/link';
import { IFavorite } from '../../interfaces/favorite';

import {AiFillHeart} from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { removeFavorite } from '../../store/actions';

interface FavoriteCardProps {
  data: IFavorite
}

function FavoriteCard({data}: FavoriteCardProps) {
  const dispatch = useDispatch();

  const handleRemoveFromFavorite = () => {
    dispatch(removeFavorite(data));
  };

  return (
    <Container>
      <h1>{data.username}</h1>
      <button className='favorite-btn' onClick={handleRemoveFromFavorite}><AiFillHeart /></button>
      <Image src={data.image} alt={data.username} width={500} height={500}/>
      <ButtonsContainer>
        <Link href={`/user/${data.username}`}>Repos</Link>
        <Link href={data.url}>GitHub</Link>
      </ButtonsContainer>
    </Container>
  );
}

export default FavoriteCard;