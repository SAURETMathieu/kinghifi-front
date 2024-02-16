/* eslint-disable react/prop-types */

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons';
import styles from './AdminTable.module.css';
import DeleteModal from '../Modal/Delete';
import fetchData from '../../../services/api/call.api';

function AdminTable({ datas, setFilteredData, route }) {
  const [selectedRow, setSelectedRow] = useState(null);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const deleteElement = async () => {
    const isDelete = await fetchData('DELETE', `${route}/${selectedItem.id}`, null, true);
    return isDelete;
  };

  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  const handleOpenDeleteModal = (item) => {
    setIsDeleteModalVisible(true);
    setSelectedItem(item);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalVisible(false);
    setSelectedItem(null);
  };

  const handleConfirmDelete = async () => {
    const isDelete = await deleteElement();

    if (isDelete) {
      const updatedDatas = datas.filter((item) => item.id !== selectedItem.id);
      setIsDeleteModalVisible(false);
      setSelectedItem(null);
      setFilteredData(updatedDatas);
    }
  };

  const handleUpdate = (index) => {
    setSelectedRow(index);
  };

  if (datas.length) {
    return (
      <>
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
                      onClick={() => handleOpenDeleteModal(data)}
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
        {isDeleteModalVisible
        && (
        <DeleteModal
          handleClose={handleCloseDeleteModal}
          handleConfirm={handleConfirmDelete}
          item={selectedItem}
        />
        )}
      </>
    );
  }
  return <p>Aucunes données.</p>;
}

export default AdminTable;
