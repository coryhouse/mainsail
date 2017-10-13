export function search(searchCriteria) {
  var myInit = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: 'Basic Z2tlZXBlcjpna2VlcGVy',
      "X-Requested-With": 'XMLHttpRequest',
      "Content-Type":'application/json'
    },
    credentials: 'include',
    cache: 'default',
    body: JSON.stringify(searchCriteria)
  };

  return fetch('Regatta/rest/searchService/findAppUsers', myInit).then( response => {
    console.log(response);
    return response.json();
  }).catch( error => {
    return alert(error);
  });
}