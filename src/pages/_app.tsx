import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return <Component {...pageProps} />;
};

export default App;
