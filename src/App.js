import React from 'react';
import './App.scss';
import Card from './components/Card';
import jobs from './data.json';

function App() {
  console.log('jobs', jobs)

  return (
    <div className="App">
      <header>
        test primary color
      </header>
      <main id="app">
        {jobs.map(job => 
          (<Card key={job.id} job={job} />)
        )}
      </main>
      <footer>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Your Name Here</a>.
        </div>  
      </footer>
    </div>
  );
}

export default App;
