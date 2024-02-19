/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import fetchData from '../../../services/api/call.api';
import AdminTable from '../../../components/Common/Table/AdminTable';
import AdminSearch from '../../../components/Common/Search/AdminSearch';
import CreateForm from '../../../components/Common/Forms/createForm';

function AdminTemplate({ route, title = 'Admin', optionsList }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (searchColumn, searchTerm) => {
    const filteredDatas = data.filter((item) => {
      if (!searchColumn) {
        return item.id.toString().toLowerCase().includes(searchTerm.toLowerCase());
      }
      return item[searchColumn].toString().toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredData(filteredDatas);
  };

  const getAllData = async () => {
    const dataList = await fetchData('GET', route, null, true);
    setFilteredData(dataList);
    setData(dataList);
  };

  useEffect(() => {
    getAllData();
  }, [route]);

  return (
    <>
      <h1>{title}</h1>
      <AdminSearch datas={data} onSearch={handleSearch} />
      <AdminTable datas={filteredData} route={route} setFilteredData={setFilteredData} />
      <CreateForm optionsList={optionsList} route={route} />
    </>
  );
}

export default AdminTemplate;
