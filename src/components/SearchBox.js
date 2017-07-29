import React from 'react';
import {fetchQuestionsByTagUrl} from '../JsonFetch'
import './SearchBox.css'
const SearchBox = (props) => {
  let input;
  return (
    <div className="searchbox">
      <form onSubmit={e =>{
        e.preventDefault();
        props.handleSubmit(fetchQuestionsByTagUrl(input.value));
        }}>
        <input type="text" name="search" ref={node => input = node} />
        <input className="btn-search" type="submit" value="Search"/> 
      </form>
    </div>
      );
}

export default SearchBox;