import { useState, useEffect } from 'react';
import fetchData from '../../../services/api/call.api';
import AdminTable from '../../../components/Common/Table/AdminTable';
import AdminSearch from '../../../components/Common/Search/AdminSearch';

function UserAdmin() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleSearch = (searchColumn, searchTerm) => {
    const filteredData = users.filter((user) => {
      if (!searchColumn) {
        return user.id.toString().toLowerCase().includes(searchTerm.toLowerCase());
      }
      return user[searchColumn].toString().toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredUsers(filteredData);
  };

  const getAllUsers = async () => {
    const usersList = await fetchData('GET', 'admin/users', null, true);
    setFilteredUsers(usersList);
    setUsers(usersList);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <h1>User</h1>
      <AdminSearch datas={users} onSearch={handleSearch} />

      <AdminTable datas={filteredUsers} />

    </>
  );
}

export default UserAdmin;
