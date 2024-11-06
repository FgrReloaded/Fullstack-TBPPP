import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard';

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (search.trim() === "") return;
    setResults([]);
    console.log(search);

    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`);
    const data = await res.json();
    setResults(data);
  }


  return (
    <div className='flex flex-col gap-4 px-4 py-4'>
      <h1 className='text-7xl font-bold text-center mb-4 uppercase text-transparent bg-clip-text bg-gradient-to-bl from-red-200 via-red-500 to-green-900'>
        TV Show Search
      </h1>
      <SearchBar handleSearch={handleSearch} setSearch={setSearch} />
      <div className='flex gap-4 flex-wrap justify-center px-8'>
        {
          results.map((result) => (
            <MovieCard key={result.id} movie={result.show} />
          ))
        }
      </div>
    </div>
  )
}

export default App
