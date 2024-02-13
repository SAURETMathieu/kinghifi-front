
import Dropdown from '/src/components/Common/Dropdown'
import { faMusic } from '@fortawesome/free-solid-svg-icons';

function DropdownLabel() {
  const labelLinks = [
    { path: '/labels/1', label: 'Label 1' },
    { path: '/labels/2', label: 'Label 2' },
    { path: '/labels/3', label: 'Label 3' }
  ];

  return (
    <Dropdown title="Musiques" icon={faMusic} links={labelLinks} />
  );
}

export default DropdownLabel;