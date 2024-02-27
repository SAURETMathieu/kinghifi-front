import AdminTemplate from '../Template/Template';
import { options } from '../../../data/formElement.json';

function EventAdmin() {
  const optionsList = [
    options.name,
    options.type,
    options.description,
    options.starting_date,
    options.ending_date,
    options.city,
    options.location,
    options.country,
    options.url_image,
  ];

  return (
    <AdminTemplate route="admin/events" title="Events" optionsList={optionsList} />
  );
}

export default EventAdmin;
