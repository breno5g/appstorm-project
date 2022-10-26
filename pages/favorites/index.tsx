import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card';
import Header from '../../components/Header';
import { IFavorite } from '../../interfaces/favorite';
import { IStore } from '../../interfaces/redux';
import { Container } from './_style';

function Favorites() {
  const users = useSelector((state: IStore) => state.favorites);

  return (
    <>
      <Header/>
      <Container>
        {users.map((user: IFavorite) => (
          <Card key={user.username} data={user}/>
        ))}
      </Container>
    </>
  );
}

export default Favorites;