import React from 'react';

const SearchResult = (props) => {
  const list = props.ingredients.join(', ');
  return (
    <div>
      {props.searchQueued && <h2>Search Result with {list}</h2>}

      <ul>
        {
          props.ingredients.map((ingredient, idx) => {
            return <li key={idx}>{ingredient}</li>
          })
        }
      </ul>
    </div>
  );
};

export default SearchResult;
