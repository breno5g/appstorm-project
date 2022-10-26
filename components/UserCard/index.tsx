import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { IFavorite } from '../../interfaces/favorite';
import { IStore } from '../../interfaces/redux';
import { IUser } from "../../interfaces/user";
import { addFavorite, loadStore, removeFavorite } from '../../store/actions';
import { Container, FollowContainer, Header } from './styles';

interface UserCardProps {
  data: IUser
}

function UserCard({ data: {avatar_url, login,bio,followers,following,name, url} }: UserCardProps) {
  const dispatch = useDispatch();
  const users = useSelector((state: IStore) => state.favorites);

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite({username: login, image: avatar_url, url }));
      setIsFavorite(false);
    } else {
      dispatch(addFavorite({username: login, image: avatar_url, url }));
      setIsFavorite(true);
    }
  };

  const loadFavorites = (users: IFavorite[] | []) => {
    const holder = users.find((user) => user.username === login);
    if (holder) setIsFavorite(true);
  };

  useEffect(() => {
    const data = localStorage.getItem("appStorm_favorites");
    if (data) loadFavorites(JSON.parse(data));
  }, []);
  
  return (
    <Container>
      <Image src={avatar_url} alt={login} width={500} height={500}/>
      <Header>
        <h1>{name}</h1>
        <button className='favorite-btn' onClick={handleFavorite}>
          {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
      </Header>
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