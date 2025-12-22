import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookPandit from './pages/BookPandit';
import Events from './pages/Events';
import Daan from './pages/Daan';
import Learning from './pages/Learning';
import Kirtan from './pages/Kirtan';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book-pandit" element={<BookPandit />} />
            <Route path="/events" element={<Events />} />
            <Route path="/daan" element={<Daan />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/kirtan" element={<Kirtan />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
