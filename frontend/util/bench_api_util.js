
export const fetchBenches = () => (
  $.ajax({
    method: 'get',
    url: 'api/benches',
    error: err => console.log(err)
  })
);

