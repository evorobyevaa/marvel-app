import { useState, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMsg from '../errorMsg/ErrorMsg';
import useMarvelService from '../../services/MarvelServece';
import './randomChar.scss';
import decoration from '../../resources/img/mjolnir.png';

const RandomChar = () => {
  const [char, setChar] = useState({});
  
  const {loading, error, getCharacter, clearError} = useMarvelService();

  useEffect(() => {
    updateChar();
    const timerId = setInterval(updateChar, 60000);
    return () => {
      clearInterval(timerId)
    }
  }, []);
  
  const onCharLoaded = (char) => {
    setChar(char);
  }

  const updateChar = () => {
    clearError();
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    getCharacter(id)
      .then(onCharLoaded);
  }

  const errorMsg = error ? <ErrorMsg/> : null;
  const spinner = loading ? <Spinner/> : null;
  const content = !(loading || error) ? <View char={char}/> : null;
  
  return (
    <div className="randomchar">
      {errorMsg}
      {spinner}
      {content}
      <div className="randomchar__static">
        <p className="randomchar__title">
        Random character for today! <br/>
        Do you want to get to know him better?
        </p>
        <p className="randomchar__title">
        Or choose another one
        </p>
        <button className="btn btn__main" onClick={updateChar}>
          <div className="inner">TRY IT</div>
        </button>
        <img className="randomchar__decoration" src={decoration} alt="Random Decoration" />
      </div>
    </div>
  )
}

const View = ({char}) => {
  const {name, description, thumbnail, homepage, wiki} = char;
  return (
    <div className="randomchar__block">
      <img className="randomchar__img" src={thumbnail} alt="Random Character" />
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">{description}</p>
        <div className="randomchar__btns">
          <a className="btn btn__main" href={homepage}>
            <div className="inner">HOMEPAGE</div> 
          </a>
          <a className="btn btn__second" href={wiki}>
            <div className="inner">WIKI</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default RandomChar;