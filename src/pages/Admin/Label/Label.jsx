import AdminTemplate from '../Template/Template';
import { options } from '../../../data/formElement.json';

function LabelAdmin() {
  const optionsList = [
    options.name,
    options.year,
    options.city,
    options.country,
    options.description,
    options.url_image,
  ];

  return (
    <AdminTemplate route="admin/labels" title="Labels" optionsList={optionsList} />
  );
}

export default LabelAdmin;
