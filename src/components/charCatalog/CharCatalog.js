import { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMsg from '../errorMsg/ErrorMsg';
import MarvelService from '../../services/MarvelServece';
import './charCatalog.scss';

class CharCatalog extends Component {
  state = {
    charCatalog: [],
    loading: true,
    error: false,
    newItemLoading: false,
    offset: 210,
    charEnded: false
  }

  marvelService = new MarvelService();

  componentDidMount() {
    this.onRequest();
  }

  onRequest = (offset) => {
    this.onCharCatalogLoading();
    this.marvelService.getAllCharacters(offset)
    .then(this.onCharCatalogLoaded)
    .catch(this.onError)
  }

  onCharCatalogLoading = () => {
    this.setState({
      newItemLoading: true
    })
  }

  onCharCatalogLoaded = (newCharCatalog) => {
    let ended = false;
    if (newCharCatalog.length < 9) {
      ended = true;
    }
    this.setState(({offset, charCatalog}) => ({
      charCatalog: [...charCatalog, ...newCharCatalog], 
      loading: false,
      newItemLoading: false,
      offset: offset + 9,
      charEnded: ended
    }))
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true
    })
  }

  itemRefs = [];

  setRef = (ref) => {
    this.itemRefs.push(ref);
  }

  focusOnItem = (id) => {
    this.itemRefs.forEach(item => item.classList.remove('char__item-selected'));
    this.itemRefs[id].classList.add('char__item-selected');
    this.itemRefs[id].focus();
  }

  renderItems(arr) {
    const items = arr.map((item, i) => {
      return (
        <li 
          className="char__item" 
          tabIndex={0}
          key={item.id} 
          ref={this.setRef}
          onClick={() => {
              this.props.onCharSelected(item.id);
              this.focusOnItem(i);
            }
          }
          onKeyPress={(e) => {
            if (e.key === ' ' || e.key === "Enter") {
                this.props.onCharSelected(item.id);
                this.focusOnItem(i);
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


  render() {
    const {charCatalog, loading, error, newItemLoading, offset, charEnded} = this.state;
    const items = this.renderItems(charCatalog);

    const errorMsg = error ? <ErrorMsg/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? items : null;
    return (
      <div className="char__catalog">
        {errorMsg}
        {spinner}
        {content}
        <button 
          className="btn btn__long"
          disabled={newItemLoading}
          style={{'display': charEnded ? 'none' : 'block'}}
          onClick={() => this.onRequest(offset)}>
          <div className="inner">LOAD MORE</div> 
        </button>
      </div>
    )
  }
}

CharCatalog.propTypes = {
  onCharSelected: PropTypes.func.isRequired
}
 
export default CharCatalog;