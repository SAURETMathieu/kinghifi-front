/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import fetchData from '../../../services/api/call.api';
import AdminTable from '../../../components/Common/Table/AdminTable';
import AdminSearch from '../../../components/Common/Search/AdminSearch';
import CreateForm from '../../../components/Common/Forms/createForm';
import CreateModal from '../../../components/Common/Modal/Create';

function AdminTemplate({ route, title = 'Admin', optionsList }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchColumn, setSearchColumn] = useState('');
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);

  const handleSearch = (column, search) => {
    const filteredDatas = data.filter((item) => {
      if (!column) {
        return item.id.toString().toLowerCase().includes(search.toLowerCase());
      }
      return item[column].toString().toLowerCase().includes(search.toLowerCase());
    });
    setSearchTerm(search);
    setSearchColumn(column);
    setFilteredData(filteredDatas);
  };

  const getAllData = async () => {
    const dataList = await fetchData('GET', route, null, true);
    setFilteredData(dataList);
    setData(dataList);
  };

  const handleDataCreate = (newData) => {
    const updatedData = [...data, newData];
    setData(updatedData);
  };

  const handleDataDelete = (idToDelete) => {
    const updatedDatas = data.filter((item) => item.id !== idToDelete);
    const updatedData = updatedDatas;
    setData(updatedData);
  };

  const handleOpenCreateModal = () => {
    setIsCreateModalVisible(true);
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalVisible(false);
  };

  useEffect(() => {
    getAllData();
  }, [route]);

  useEffect(() => {
    handleSearch(searchColumn, searchTerm);
  }, [data, searchColumn]);

  return (
    <>
      <h1>{title}</h1>
      <AdminSearch datas={data} onSearch={handleSearch} />
      <button
        type="button"
        className="add-button"
        aria-label="open create modal"
        onClick={handleOpenCreateModal}
      >
        +
      </button>
      <AdminTable
        filteredDatas={filteredData}
        route={route}
        handleDataDelete={handleDataDelete}
      />
      {isCreateModalVisible
        && (
        <CreateModal handleClose={handleCloseCreateModal}>
          <CreateForm optionsList={optionsList} route={route} handleDataCreate={handleDataCreate} />
        </CreateModal>
        )}
    </>
  );
}

export default AdminTemplate;
