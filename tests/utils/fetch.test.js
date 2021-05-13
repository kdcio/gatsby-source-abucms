import abuFetch from "../../src/utils/abuFetch";

describe.skip("Fetch from AbuCMS API", () => {
  it.each([
    {
      baseUrl: "https://api.abucms.com",
      apiBase: "prod",
      apiKey: "my-key",
      endPoint: "content/blog",
      lastModified: undefined,
      expected: [],
    },
  ])(
    "Test %#",
    async ({ baseUrl, apiBase, apiKey, endPoint, lastModified, expected }) => {
      const result = await abuFetch({
        baseUrl,
        apiBase,
        apiKey,
        endPoint,
        lastModified,
      });
      expect(result).toEqual(expected);
    }
  );
});
