const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

// Builds query string from an object
function buildQuery(params = {}) {
  const query = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (typeof value === "object" && value !== null) {
      for (const [subKey, subValue] of Object.entries(value)) {
        query.append(`${key}[${subKey}]`, subValue);
      }
    } else {
      query.append(key, value);
    }
  }

  return query.toString();
}

async function fetchFromStrapi(
  endpoint,
  { filters = {}, populate = "*", pagination = {}, sort = "", token = "" } = {}
) {
  const query = buildQuery({
    filters,
    populate,
    sort,
    ...(pagination.page && pagination.pageSize ? { pagination } : {}),
  });

  const res = await fetch(`${STRAPI_URL}/api/${endpoint}?${query}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    cache: "no-store",
  });

  if (!res.ok) {
    console.error(`Error fetching ${endpoint}:`, res.statusText);
    return null;
  }

  const json = await res.json();
  return json.data;
}

// 🧩 Public API functions
export async function getAll(collection, options = {}) {
  return fetchFromStrapi(collection, options);
}

export async function getOneById(collection, id, options = {}) {
  return fetchFromStrapi(`${collection}/${id}`, options);
}

export async function getOneBySlug(collection, slug, options = {}) {
  const filters = {
    slug: { $eq: slug },
    ...(options.filters || {}),
  };

  const data = await fetchFromStrapi(collection, {
    ...options,
    filters,
  });

  return data?.[0] || null;
}
