import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Search = () => {

  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          format: 'json',
          origin: '*',
          srsearch: term
        }
      }
      );
      setResults(data.query.search);
    }

    const timeout = setTimeout(() => {
      if(term.length){
        search();      
      }
    }, 500)

    return () => {
      clearTimeout(timeout);
    }

  }, [term])

  const renderedResults = results.map(r => {
    return (
      <div key={r.pageid} className='item'>
        <div className='right floated content'>
          <a
            className='ui button'
            href={`https://en.wikipedia.org?curid=${r.pageid}`}
          >
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>
            {r.title}
          </div>
          <span dangerouslySetInnerHTML={{__html: r.snippet}}></span>
        </div>
      </div>
    )
  })

  const onSearchInput = e => {
    return setTerm(e.target.value);
  }

  return(
    <div className='ui container'>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input 
            className='input'
            value={term}
            onChange={onSearchInput}  
          />
        </div>
      </div>
      <div className='ui celled list'>
        
      {renderedResults}
      </div>
    </div>
  ) 
}
export default Search;