export const performSearch = (search) => {
  return $.ajax({
    method: 'POST',
    url: `/api/search`,
    data: {search}
  });
};
