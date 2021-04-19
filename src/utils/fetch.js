import path from "path";
import fetch from "node-fetch";

const abuFetch = async ({
  baseUrl,
  apiBase,
  apiKey,
  endPoint,
  lastModified,
}) => {
  const urlPath = path.join(apiBase, endPoint);
  const url = new URL(urlPath, baseUrl);
  url.searchParams.append("all", true);
  url.searchParams.append(
    "lastModified",
    lastModified || new Date(0).toISOString()
  );

  const res = await fetch(url, {
    headers: {
      Authorization: apiKey,
    },
  });

  if (res.ok) {
    const json = await res.json();
    return json.Items;
  }

  return [];
};

export default abuFetch;
