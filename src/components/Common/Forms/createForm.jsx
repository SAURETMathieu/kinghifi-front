/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Input from '../Buttons/Input';
import fetchData from '../../../services/api/call.api';

function CreateForm({ optionsList, route, handleDataCreate }) {
  const [formData, setFormData] = useState({});
  const [formInit, setFormInit] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const initialForm = () => {
    const initialFormData = {};
    optionsList?.forEach((option) => {
      initialFormData[option.id] = option.value || '';
    });
    setFormData(initialFormData);
  };

  useEffect(() => {
    if (optionsList && optionsList.length > 0) {
      initialForm();
      setFormInit(true);
    }
  }, [optionsList]);

  const handleInputChange = (id, event) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleFileChange = (id, event) => {
    setFormData({
      ...formData,
      [id]: event.target.files[0].name,
      // [`${id}_file`]: event.target.files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataCreated = await fetchData('POST', route, formData, true);
    if (dataCreated) {
      handleDataCreate(dataCreated[0]);
      setFormKey((prevKey) => prevKey + 1);
      initialForm();
    }
  };

  return (
    <form key={formKey} className="" onSubmit={handleSubmit} encType="multipart/form-data">
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
