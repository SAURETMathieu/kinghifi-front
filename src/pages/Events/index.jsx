// import './index.css'

import { useState } from 'react';

function Events() {
  const [uneVariable, setUneVariable] = useState('');

  return (
    <div>
      Les évènements
      <div>
        {uneVariable}
      </div>
    </div>
  );
}

export default Events;
