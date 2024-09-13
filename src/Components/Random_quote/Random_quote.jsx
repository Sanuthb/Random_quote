import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { quotes } from '../../Utils/Quotes';

const Random_quote = () => {
  const [randomquote, setrandomquote] = useState({});

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setrandomquote(quotes[randomIndex]);
  }, []);

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center"
      style={{ backgroundColor: randomquote.backgroundColor }}
    >
      <Card randomquote={randomquote} />
    </div>
  );
};

export default Random_quote;
