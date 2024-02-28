import React, { useState } from 'react';

const mockData = {
  // Include any mock data you want to display on the front end
};

const styles = {
  header: {
    backgroundColor: 'darkgreen', // Use a darker shade of green
    color: 'white',
    padding: '10px',
    fontSize: '24px',
  },
  searchBar: {
    margin: '20px',
    padding: '10px',
    borderRadius: '5px',
  },
  searchButton: {
    padding: '10px 20px',
    backgroundColor: 'lightgreen', // Use a lighter shade of green
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

const Header = () => (
  <div style={styles.header}>
    Anveshana
  </div>
);

const SearchBar = ({ onSearchChange, onSearchSubmit }) => {
  return (
    <div>
      <input
        type="text"
        style={styles.searchBar}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search by keywords, tech specs, or part number"
      />
      <button
        style={styles.searchButton}
        onClick={onSearchSubmit}
      >
        SEARCH
      </button>
    </div>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [response, setResponse] = useState('');

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleSearchSubmit = async () => {
    try {
      const res = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchTerm }),
      });
      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponse('Failed to fetch data');
    }
  };

  return (
    <div>
      <Header />
      <SearchBar onSearchChange={handleSearchChange} onSearchSubmit={handleSearchSubmit} />
      <div>
        {response && <p><strong>Response from backend:</strong> {response}</p>}
      </div>
      {/* Other components */}
    </div>
  );
};

export default App;