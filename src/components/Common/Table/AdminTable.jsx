/* eslint-disable react/prop-types */

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons';
import styles from './AdminTable.module.css';

function AdminTable({ datas }) {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  const handleDelete = (index) => {
    setSelectedRow(index);
  };

  const handleUpdate = (index) => {
    setSelectedRow(index);
  };

  if (datas.length) {
    return (
      <div className={styles.container}>
        <table className="table is-bordered is-hoverable is-fullwidth">
          <thead>
            <tr>
              {Object.keys(datas[0]).map((columnName) => (
                <th className="has-text-centered has-text-white" key={columnName}>{columnName}</th>
              ))}
              <th className="has-text-centered has-text-white">Modifier</th>
              <th className="has-text-centered has-text-white">Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data) => (
              <tr
                key={data.id}
                onClick={() => handleRowClick(data.id)}
                className={selectedRow === data.id ? 'is-selected' : ''}
              >
                {Object.keys(data).map((columnName) => (
                  <td key={columnName}>{data[columnName]}</td>
                ))}
                <td>

                  <button
                    className="is-danger"
                    type="button"
                    onClick={() => handleUpdate(data.id)}
                    aria-label="update"
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleDelete(data.id)}
                    aria-label="delete"
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return <p>Aucunes données.</p>;
}

export default AdminTable;
