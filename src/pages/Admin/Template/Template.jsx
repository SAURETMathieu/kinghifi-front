/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import fetchData from '../../../services/api/call.api';
import AdminTable from '../../../components/Common/Table/AdminTable';
import AdminSearch from '../../../components/Common/Search/AdminSearch';
import CreateForm from '../../../components/Common/Forms/createForm';

function AdminTemplate({ route, title = 'Admin', optionsList }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchColumn, setSearchColumn] = useState('');

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
      <AdminTable
        filteredDatas={filteredData}
        route={route}
        handleDataDelete={handleDataDelete}
      />
      <CreateForm optionsList={optionsList} route={route} handleDataCreate={handleDataCreate} />
    </>
  );
}

export default AdminTemplate;
