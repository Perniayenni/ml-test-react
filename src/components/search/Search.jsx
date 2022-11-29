import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { fetchItems } from '../../redux/actions/items';


const Search = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')
  const [query, setQuery] = useState(search);

  useEffect(() => {
    if (search) {
      dispatch(fetchItems({search: search}))
      setQuery("");
    }
  }, [search]);

  function searching() {
    navigate(`/items?search=${query}`);
   
  }
  
  function enterPressed(e) {
    var code = e.keyCode || e.which;
    if (code === 13) {
      searching();
    }
  }

  return (
    <div className='search'>
      <input
        className='search__input'
        type='text'
        placeholder='Nunca dejes de buscar'
        onChange={(e) => setQuery(e.target.value)}
        maxLength='120'
        value={query}
        onKeyPress={enterPressed.bind(this)}
      ></input>
      <button className='search__button' onClick={searching} >
        <FontAwesomeIcon className='search__icon' icon={faSearch} />
      </button>
    </div>
  )
}

export default Search
