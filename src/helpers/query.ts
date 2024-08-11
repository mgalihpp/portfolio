/**
 * Builds a query string based on the provided parameters.
 *
 * @param {BuildQueryParams} params - An object containing query parameters.
 * @return {string} A query string that can be used for data retrieval.
 */
export function buildQuery(params: BuildQueryParams) {
  const { type, query, tags, page = 1, perPage = 20 } = params;

  const conditions = [`*[_type=="${type}"`];

  if (query) conditions.push(`slug.current == "${query}"`);

  if (tags && tags !== 'all') {
    conditions.push(`"${tags}" in categories[]->title`);
  }
  
  // Calculate pagination limits
  const offset = (page - 1) * perPage;
  const limit = perPage;

  return conditions.length > 1
    ? `${conditions[0]} && (${conditions
        .slice(1)
        .join(' && ')})][${offset}...${limit}]`
    : `${conditions[0]}][${offset}...${limit}]`;
}
