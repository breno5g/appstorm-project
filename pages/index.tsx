import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import { loadStore } from '../store/actions';
import { Main } from './_style';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadStore());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Main>
        <SearchForm />
      </Main>
    </>
  );
}
