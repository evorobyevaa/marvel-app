import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMsg from '../errorMsg/ErrorMsg';
import useMarvelService from '../../services/MarvelServece';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';

const CharInfo = (props) => {
  const [char, setChar] = useState(null);

  const {loading, error, getCharacter, clearError} = useMarvelService();

  useEffect(() => {
    updateChar();
  }, [props.charId])
  
  const updateChar = () => {
    clearError();
    const {charId} = props;
    if (!charId) {
      return;
    }
    getCharacter(charId)
      .then(onCharLoaded)
  }

  const onCharLoaded = (char) => {
    setChar(char);
  }

  const skeleton = char || loading || error ? null : <Skeleton/>;
  const errorMsg = error ? <ErrorMsg/> : null;
  const spinner = loading ? <Spinner/> : null;
  const content = !(loading || error || !char) ? <View char={char}/> : null;
  return (
    <div className="char__info">
      {skeleton}
      {errorMsg}
      {spinner}
      {content}
    </div>
  )
}

const View = ({char}) => {
  const {name, description, thumbnail, homepage, wiki, comics} = char;
  
  return (
    <>
      <div className="char__basic">
          <img className="char__info-img" src={thumbnail} alt={name} />
          <div className="char__wrapper">
            <p className="char__info-name">{name}</p>
            <div className="char__info-btns">
              <a className="btn btn__main" href={homepage}>
                <div className="inner">HOMEPAGE</div> 
              </a>
              <a className="btn btn__second" href={wiki}>
                <div className="inner">WIKI</div>
              </a>
            </div>
          </div>
        </div>
        <div className="char__descr">
          {description}
        </div>
        <div className="char__comics">
          Comics:
        </div>
        <ul className="char__comics-list">
          {comics.length > 0 ? null : 'There is no comics for this character'}
          {
            comics.map((item, i) => {
              // eslint-disable-next-line
              if (i > 9) return;
              return (
                <li className="char__comics-item" key={i}>{item.name}</li>
              )
            })
          }
        </ul>
    </>
  )
}

CharInfo.propTypes = {
  charId: PropTypes.number
}

export default CharInfo;