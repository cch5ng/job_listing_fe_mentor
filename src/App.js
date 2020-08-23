import React, {useState, useEffect} from 'react';
import './App.scss';
import Card from './components/Card';
import jobs from './data.json';
import headerMobile from './images/bg-header-mobile.svg';
import headerDesktop from './images/bg-header-desktop.svg';

const styles = {
  container: isDesktopSized => ({
    backgroundImage: isDesktopSized ? `url(${headerDesktop})`: `url(${headerMobile})`
  })
};

function App() {
  const mediaMatch = window.matchMedia('(min-width: 768px)');
  const [matches, setMatches] = useState(false); //mediaMatch.matches

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  }, []);

  return (
    <div>
      <header style={styles.container(matches)} />
      <main id="app">
        {jobs.map(job => 
          (<Card key={job.id} job={job} />)
        )}
      </main>
      <footer>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="http://github.com/cch5ng" target="_blank">Carol Chung</a>.
        </div>  
      </footer>
    </div>
  );
}

export default App;
