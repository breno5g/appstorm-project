import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../../components/UserCard';
import Header from '../../components/Header';
import { IFavorite } from '../../interfaces/favorite';
import { IStore } from '../../interfaces/redux';
import { loadStore } from '../../store/actions';
import { Container } from './_style';

function Favorites() {
  const users = useSelector((state: IStore) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!users.length) dispatch(loadStore());
  }, []);

  return (
    <>
      <Header/>
      <Container>
        {users.map((user: IFavorite) => (
          <UserCard key={user.username} data={user}/>
        ))}
      </Container>
    </>
  );
}

export default Favorites;