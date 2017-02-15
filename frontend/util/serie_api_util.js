export const fetchSeries = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/series'
  });
};

export const fetchSerie = id => {
  return $.ajax({
    method: 'GET',
    url: `api/series/${id}`
  });
};
