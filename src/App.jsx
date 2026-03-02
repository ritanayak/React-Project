import { useState } from 'react'
import './App.css'
import SearchForm from './components/SearchForm';
import InfoPanel from './components/InfoPanel';
import MapView from './components/MapView';
import { useIPData } from './hooks/useIPData';

function App() {
  const [ query, setQuery] = useState(""); // Search state
  const { data, loading, error } = useIPData(query);

  return (
    <>
      <div>
        <h1> IP Address Tracker</h1>
        {/* Pass setter function to child */}
        <SearchForm onSearch={setQuery} />
        {/* Conditional rendering for loading */}
        {loading && <p> Loading...</p>}
        {/* Accessible error message */}
        {error && <p role='alert'> {error}</p>}
        
        {/* Only render info panel when data exists */}
        {data && <InfoPanel data={data} />}
        {/* Map always renders but updates dynamically */}
        <MapView data={data} />
      </div>
    </>
  )
}

export default App
