import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import { loadStore } from '../store/actions';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadStore());
  }, [dispatch]);

  return (
    <>
      <Header />
    </>
  );
}
