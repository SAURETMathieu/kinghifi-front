import { faMusic } from '@fortawesome/free-solid-svg-icons';

import Dropdown from '../../../Common/Dropdown';

function DropdownLabel() {
  const labelLinks = [
    { id: 1, path: '/labels/1', label: 'les sons du label 1' },
    { id: 2, path: '/labels/2', label: 'les sons du label 2' },
    { id: 3, path: '/labels/3', label: 'les sons du label 3' },
    { id: 4, path: '/labels', label: 'tous nos sons' },

  ];

  return (
    <Dropdown title="Musiques" icon={faMusic} links={labelLinks} />
  );
}

export default DropdownLabel;
