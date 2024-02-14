import { faMusic } from '@fortawesome/free-solid-svg-icons';
// import { useParams } from 'react-router';

import Dropdown from '../../../Common/Dropdown';

function DropdownLabel() {
  

  // const { id } = useParams();
  // console.log(id);

  
  const labelLinks = [
    { id: 1, path: '/labels', label: 'tous nos sons' },
    { id: 2, path: '/labels/1', label: 'les sons du label' },

  ];

  return (
    <Dropdown title="Musiques" icon={faMusic} links={labelLinks} />
  );
}

export default DropdownLabel;
