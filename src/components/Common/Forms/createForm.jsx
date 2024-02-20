/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Input from '../Buttons/Input';
import fetchData from '../../../services/api/call.api';

function CreateForm({
  optionsList,
  route,
  handleDataCreate,
  handleClose, modalMode,
  itemSelected,
  setItemSelected,
  handleDataUpdate,
}) {
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
    const formElement = event.target.closest('form');

    if (formElement && formElement.checkValidity()) {
      const resultData = modalMode === 'create'
        ? await fetchData('POST', route, formData, true)
        : await fetchData('PATCH', `${route}/${itemSelected.id}`, formData, true);
      if (resultData) {
        if (modalMode === 'create') {
          handleDataCreate(resultData[0]);
        }
        if (modalMode === 'update') {
          handleDataUpdate(resultData[0]);
        }
        setFormKey((prevKey) => prevKey + 1);
        initialForm();
        setItemSelected(null);
        handleClose();
      }
    } else {
      console.log('Certains champs du formulaire ne sont pas valides.');
    }
  };

  return (
    <form key={formKey} className="create-form" onSubmit={handleSubmit} encType="multipart/form-data">
      {optionsList && optionsList.map((options) => (
        <Input
          key={options.id}
          options={options}
          handleInputChange={handleInputChange}
          handleFileChange={handleFileChange}
        />
      ))}
      <div className="modal-submit-buttons">
        <button
          type="button"
          className="is-cancel close-modal-btn"
          onClick={handleClose}
          aria-label="Close modal"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="is-success"
          onClick={(handleSubmit)}
          aria-label="Valid form"
        >
          Confirmer
        </button>
      </div>
    </form>
  );
}

export default CreateForm;
