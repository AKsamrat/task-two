import React from 'react';
import ProductList from '../Component/ProductList';
import useAuth from '../hooks/useAuth';
import Register from './Register';

const Home = () => {
  const { user } = useAuth();
  return (
    <div>{user ? <ProductList></ProductList> : <Register></Register>}</div>
  );
};

export default Home;
