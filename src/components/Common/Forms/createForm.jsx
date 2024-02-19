/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Input from '../Buttons/Input';
import fetchData from '../../../services/api/call.api';

function CreateForm({ optionsList, route }) {
  const initialFormData = optionsList?.reduce((acc, options) => ({
    ...acc,
    [options.id]: options.value || '',
  }), {});

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (name, event) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (name, event) => {
    setFormData({
      ...formData,
      [name]: event.target.files[0].name,
      // [`${name}_file`]: event.target.files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataCreated = await fetchData('POST', route, formData, true);
  };

  return (
    <form className="" onSubmit={handleSubmit} encType="multipart/form-data">
      {optionsList && optionsList.map((options) => (
        <Input
          key={options.id}
          options={options}
          handleInputChange={handleInputChange}
          handleFileChange={handleFileChange}
        />
      ))}
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default CreateForm;
