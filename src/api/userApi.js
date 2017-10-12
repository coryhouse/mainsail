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

  return fetch('http://localhost:3000/Regatta/rest/searchService/findAppUsers', myInit).then( response => {
    console.log(response);
    return response;
  })
}