import './App.css';
import Profile from './PortfolioContainer/Home/Profile.js'
import Header from './PortfolioContainer/Header/Header.js'
import Projects from './PortfolioContainer/Projects/Projects';
import Skills from './PortfolioContainer/Skills/Skills';

function App() {
  return (
    <div className="App">
        <div>
          <Header />
          <Profile />
          <Projects />
          <Skills />
        </div>
    </div>
  );
}

export default App;
