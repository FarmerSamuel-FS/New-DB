// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FightersList from './components/FightersList';
import LeaguesList from './components/LeagueList';
import FighterDetails from './components/FighterDetails';
import LeagueDetails from './components/LeagueDetails';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <div>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="header">
          <h1>MMA LookUp</h1>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fighters" element={<FightersList />} />
          <Route path="/leagues" element={<LeaguesList />} />
          <Route path="/fighters/:id" element={<FighterDetails />} />
          <Route path="/leagues/:id" element={<LeagueDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
