import { useState } from 'react';

import RandomChar from '../randomChar/RandomChar';
import CharCatalog from '../charCatalog/CharCatalog';
import CharInfo from '../charInfo/CharInfo';
import CharSearchForm from '../charSearchForm/CharSearchForm'
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import decoration from '../../resources/img/vision.png';

const MainPage = () => {

  const [selectedChar, setChar] = useState(null);

  const onCharSelected = (id) => {
    setChar(id);
  }

  return (
    <>
      <ErrorBoundary>
        <RandomChar/>
      </ErrorBoundary>
      <div className="char__content">
        <ErrorBoundary>
          <CharCatalog onCharSelected={onCharSelected}/>
        </ErrorBoundary>
        <div>
          <ErrorBoundary>
            <CharInfo charId={selectedChar}/>
          </ErrorBoundary>
          <ErrorBoundary>
            <CharSearchForm/>
          </ErrorBoundary>
        </div>
      </div>
      <img className="main__decoration" src={decoration} alt="vision" />
    </>
  )
}

export default MainPage;