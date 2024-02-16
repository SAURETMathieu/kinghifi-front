const fetchData = async (method, endpoint, requestData = null, needToken = false) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  try {
    const url = `${apiUrl}/${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
    };
    if (needToken) {
      const token = localStorage.getItem('authApiToken');
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      } else {
        console.log('Un token est nécessaire mais n\'a pas été fourni.');
      }
    }

    const options = {
      method,
      headers,
      body: requestData ? JSON.stringify(requestData) : null,
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    if (response.status === 204) {
      console.log('Suppression réussie.');
      return true;
    }
    const data = await response.json();
    const dataArray = Array.isArray(data) ? data : [data];
    return dataArray;
  } catch (error) {
    console.error('Une erreur s\'est produite:', error);
    return null;
  }
};

export default fetchData;

// Exemples d'utilisation :

// GET request
// const labelsData = await fetchData('GET', 'labels');

// POST request avec des données
// const postedData = await fetchData('POST', 'labels', postData, true);

// PATCH request avec des données
// const patchedData = await fetchData('PATCH', 'labels/:id', patchData);

// DELETE request
// const deletedData = await fetchData('DELETE', 'labels/:id', null, true);
