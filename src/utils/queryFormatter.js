function formatQuery(filter) {
  let query = "";

  if (!filter) return "";

  const parsedFilter = JSON.parse(filter);

  console.log(parsedFilter);

  Object.entries(parsedFilter).map((param) => {
    const [key, value] = param;

    if (value) query += `${key}=${value}&`;
  });

  return query;
}

export default formatQuery;
