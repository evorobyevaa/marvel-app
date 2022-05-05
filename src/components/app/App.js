import { Component } from 'react';
import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharCatalog from '../charCatalog/CharCatalog';
import CharInfo from '../charInfo/CharInfo';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

import decoration from '../../resources/img/vision.png';

class App extends Component {
  state = {
    selectedChar: null
  }

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id 
    })
  }

  render() {
    return (
      <div className="app">
        <AppHeader />
        <main className="main">
          <ErrorBoundary>
            <RandomChar/>
          </ErrorBoundary>
          <div className="char__content">
            <ErrorBoundary>
              <CharCatalog onCharSelected={this.onCharSelected}/>
            </ErrorBoundary>
            <ErrorBoundary>
              <CharInfo charId={this.state.selectedChar}/>
            </ErrorBoundary>
          </div>
          <img className="main__decoration" src={decoration} alt="vision" />
        </main>
      </div>
    )
  }
}

export default App;