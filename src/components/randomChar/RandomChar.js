import { Component } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMsg from '../errorMsg/ErrorMsg';
import MarvelService from '../../services/MarvelServece';
import './randomChar.scss';
import decoration from '../../resources/img/mjolnir.png';

class RandomChar extends Component {
  state = {
    char: {},
    loading: true,
    error: false
  }

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateChar();
    //this.timerId = setInterval(this.updateChar, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  onCharLoaded = (char) => {
    this.setState({
      char, 
      loading: false,
      error: false
    })
  }

  onCharLoading = () => {
    this.setState({
      loading: true
    })
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true
    })
  }

  updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.onCharLoading();
    this.marvelService
    .getCharacter(id)
    .then(this.onCharLoaded)
    .catch(this.onError);
  }

  render() {
    const {char, loading, error} = this.state;
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
          <button className="btn btn__main" onClick={this.updateChar}>
            <div className="inner">TRY IT</div>
          </button>
          <img className="randomchar__decoration" src={decoration} alt="Random Decoration" />
        </div>
      </div>
    )
  }
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