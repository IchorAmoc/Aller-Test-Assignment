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
import { ToTop } from './components/ToTop';

function App() {
  return (
    <div className="App">
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
          <ToTop />
          <Footer logo={allerLogo} />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;


/*
TODO:
- To top button on right side
- Edit button
- Input field
- Save new input functionality
  - Return to original input?
- Fancy animation on hover? For fun if easy
  - Maybe on logo as well? Pop-up with solid box-shadow?

*/