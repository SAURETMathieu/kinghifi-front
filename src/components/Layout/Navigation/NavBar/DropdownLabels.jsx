import { faMusic } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../../../Common/Dropdown';

function DropdownLabel() {
  const labelLinks = [
    { id: 1, path: '/labels/1', label: 'Label 1' },
    { id: 2, path: '/labels/2', label: 'Label 2' },
    { id: 3, path: '/labels/3', label: 'Label 3' },
  ];

  return (
    <Dropdown title="Musiques" icon={faMusic} links={labelLinks} />
  );
}

export default DropdownLabel;
