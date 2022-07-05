import React, { useEffect, useState } from 'react';

const Quote = () => {
  const quoteArray = [
    {
      quote: 'Just because we can’t find a solution, it doesn’t mean there isn’t one.',
      author: 'Andrew Wiles, English mathematician',
    },
    {
      quote: 'Mathematics is a place where you can do things which you can’t do in the real world.',
      author: 'Marcus du Sautoy',
    },
    {
      quote: 'Millions saw the apple fall, but Newton asked why.',
      author: 'Bernard Baruch, American financier, philanthropist and statesman',
    },
    {
      quote: 'The definition of a good mathematical problem is the mathematics it generates rather than the problem itself.',
      author: 'Andrew Wiles, English mathematician',
    },
    {
      quote: 'If I were again beginning my studies, I would follow the advice of Plato and start with mathematics.',
      author: 'Galileo Galilei',
    },
    {
      quote: 'The essence of math is not to make simple things complicated, but to make complicated things simple.',
      author: 'Stan Gudder, American mathematician',
    },
  ];

  const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quoteArray.length);
    return quoteArray[randomIndex];
  };

  const [quote, setQuote] = useState(randomQuote);

  useEffect(() => {
    setQuote(randomQuote);
  }, []);

  return (
    <div className="quote">
      <blockquote>{quote.quote}</blockquote>
      <div>{quote.author}</div>
    </div>
  );
};

export default Quote;
