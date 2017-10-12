export function search(searchCriteria) {
  var myInit = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Basic Z2tlZXBlcjpna2VlcGVy',
      "X-Requested-With": 'XMLHttpRequest',
      "Content-Type":'application/json'
    },
    credentials: 'include',
    cache: 'default'
    //body: JSON.stringify(searchCriteria)
  };

  return fetch('http://localhost:3002/users?q=' + searchCriteria.firstName, myInit).then( response => {
    return response.json();
  })
}