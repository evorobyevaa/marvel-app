import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMsg from '../errorMsg/ErrorMsg';
import useMarvelService from '../../services/MarvelServece';
import './charCatalog.scss';

const CharCatalog = (props) => {

  const [charCatalog, setCharCatalog] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(210);
  const [charEnded, setCharEnded] = useState(false);

  const {loading, error, getAllCharacters} = useMarvelService();
  
  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true);
    getAllCharacters(offset)
    .then(onCharCatalogLoaded)
  }

  const onCharCatalogLoaded = (newCharCatalog) => {
    let ended = false;
    if (newCharCatalog.length < 9) {
      ended = true;
    }
   
    setCharCatalog(charCatalog => [...charCatalog, ...newCharCatalog]);
    setNewItemLoading(newItemLoading => false);
    setOffset(offset => offset + 9);
    setCharEnded(charEnded => ended);
  }

  const itemRefs = useRef([]);

  const focusOnItem = (id) => {
    itemRefs.current.forEach(item => item.classList.remove('char__item-selected'));
    itemRefs.current[id].classList.add('char__item-selected');
    itemRefs.current[id].focus();
  }

  function renderItems(arr) {
    const items = arr.map((item, i) => {
      return (
        <li 
          className="char__item" 
          tabIndex={0}
          key={item.id} 
          ref={el => itemRefs.current[i] = el}
          onClick={() => {
              props.onCharSelected(item.id);
              focusOnItem(i);
            }
          }
          onKeyPress={(e) => {
            if (e.key === ' ' || e.key === "Enter") {
                props.onCharSelected(item.id);
                focusOnItem(i);
              }
            }
          }>
          <img className="char__img" src={item.thumbnail} alt={item.name} />
          <div className="char__name">{item.name}</div>
        </li>
      )
    });

    
    return (
      <ul className="char__list"> 
        {items}
      </ul>
    )
  }

  const items = renderItems(charCatalog);
  const errorMsg = error ? <ErrorMsg/> : null;
  const spinner = loading && !newItemLoading ? <Spinner/> : null;
  return (
    <div className="char__catalog">
      {errorMsg}
      {spinner}
      {items}
      <button 
        className="btn btn__long"
        disabled={newItemLoading}
        style={{'display': charEnded ? 'none' : 'block'}}
        onClick={() => onRequest(offset)}>
        <div className="inner">LOAD MORE</div> 
      </button>
    </div>
  )
}

CharCatalog.propTypes = {
  onCharSelected: PropTypes.func.isRequired
}
 
export default CharCatalog;