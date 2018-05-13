import React from 'react';

const SearchResult = (props) => {
  const list = props.ingredients.join(', ');
  return (
    <div>
      {this.state.searchQueued && <h2>Search Result with {list}</h2>}
      <ul>
        {
          this.state.ingredients.map((ingredient, idx) => {
            return <li key={idx}>{ingredient}</li>
          })
        }
      </ul>
    </div>
  );
};

export default SearchResult;
