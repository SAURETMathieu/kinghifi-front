/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';
import styles from './AdminSearch.module.css';

function AdminSearch({ datas, onSearch }) {
  const [searchColumn, setSearchColumn] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [firstRender, setFirstRender] = useState(true);
  const handleSearchColumn = (selectedColumn) => {
    setSearchColumn(selectedColumn);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchColumn, searchTerm);
  };

  useEffect(() => {
    setFirstRender(false);
  }, []);

  return (
    <section className={styles.section}>
      <div>
        Recherche par
        <select onChange={(e) => handleSearchColumn(e.target.value)}>
          {datas.length > 0
      && Object.keys(datas[0]).map((columnName) => (
        <option key={columnName} value={columnName}>
          {columnName}
        </option>
      ))}
        </select>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Rechercher..."
          onChange={handleSearch}
        />
      </div>
    </section>
  );
}

export default AdminSearch;
