import AdminTemplate from '../Template/Template';
import { options } from '../../../data/formElement.json';

function ArtistAdmin() {
  const optionsList = [
    options.firstname,
    options.lastname,
    options.nickname,
    options.year,
    options.city,
    options.country,
    options.description,
    options.function,
  ];

  return (
    <AdminTemplate route="admin/artists" title="Artistes" optionsList={optionsList} />
  );
}

export default ArtistAdmin;
