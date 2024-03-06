import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

interface Movie {
  title: string;
  original_title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=96f2acc3996df9198e317b966b9ed339' 
  const API_IMG = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    axios.get(API_URL).then((resp) => setMovies(resp.data.results));
  }, [])

  return (
    <div className="App" style={{ background: '#3b3b3bf2' }}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px auto', backgroundColor: '#3b3b3b'}}>
        <h1 style={{ color: '#ffffff' }}>Movie App</h1>
      </div>
      <div style={{ display: 'flex', maxWidth: '80%', width: '70%', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', margin: '0px auto', padding: '20px 0px'}}>
        {movies.map((m) => (
          <div style={{ width: '25%' }}>
            <div className='film-card' style={{ padding: '8px', margin: '4px', background: '#3b3b3b', borderRadius: '24px' }}>
              <div style={{ position: 'relative'}}>
                <img style={{ width: '100%', height: 'auto', borderRadius: '16px'}}src={API_IMG + m.poster_path} alt="" />
                <div className="film-overview">
                  <p style={{ color: 'white'}}>{m.overview}</p>
                </div>
              </div>
              <p style={{ color: 'white' }}>{m.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
