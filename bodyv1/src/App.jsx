import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Style
import allerLogo from "./assets/allerLogo.png"

// Pages
import { Home } from './pages/Home';


// Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { PageDoesNotExist } from './components/PageDoesNotExist';

function App() {
  const handleScroll = event => {
    console.log('scrollTop: ', event.currentTarget.scrollTop);
    console.log('offsetHeight: ', event.currentTarget.offsetHeight);
  };

  return (
    <div className="App" onScroll={handleScroll}>
      <div id='topAnchor'></div>
      <Router>
        <ScrollToTop>
          <Header logo={allerLogo} />
          <main>
            <Routes>
              <Route index path='/' element={<Home />} />
              
              <Route path='*' element={ <PageDoesNotExist /> } />
            </Routes>
            

          </main>

          <Footer logo={allerLogo} />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
