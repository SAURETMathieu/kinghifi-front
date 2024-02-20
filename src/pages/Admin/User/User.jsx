import AdminTemplate from '../Template/Template';
import { options } from '../../../data/formElement.json';

function UserAdmin() {
  const optionsList = [
    options.email,
    options.firstname,
    options.lastname,
    options.birthdate,
    options.zipcode,
    options.city,
    options.country,
    options.role,
  ];

  return (
    <AdminTemplate route="admin/users" title="Utilisateurs" optionsList={optionsList} />
  );
}

export default UserAdmin;
