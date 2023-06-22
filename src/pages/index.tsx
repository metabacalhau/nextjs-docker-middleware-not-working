import { NextPage } from 'next';
import React from 'react';
import { useRouter } from 'next/router';

const MainPage: NextPage = () => {
  const router = useRouter();

  return <>Current locale: {router.locale}</>;
};

export default MainPage;
