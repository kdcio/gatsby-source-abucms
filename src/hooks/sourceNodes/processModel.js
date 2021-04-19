import buildNode from "./buildNode";
import abuFetch from "../../utils/fetch";

const processModel = async ({ pluginOptions, model, args }) => {
  const { cache, reporter } = args;
  const { useCache = true } = pluginOptions;
  let items = [];

  // get the last timestamp from the cache
  const lastModified = useCache
    ? await cache.get(`lastModified-${model}`)
    : new Date(0).toISOString();
  reporter.info(
    `[abucms] Fetching new ${model} data ${
      lastModified && `since ${lastModified}`
    }`
  );

  // Download data from a remote API.
  try {
    const endPoint = `content/${model}`;
    const { Items: items } = await abuFetch({
      ...pluginOptions,
      endPoint,
      lastModified,
    });
    reporter.info(`[abucms] ${model}: ${items.length} document(s) fetched`);
  } catch (error) {
    reporter.error(`Error fetching files for ${model}.`, error);
    return 0;
  }

  if (items.length === 0) return 0;

  // Process data and create nodes.using a custom processDatum function
  items.forEach((item) =>
    buildNode("item", {
      ...args,
      pluginOptions,
      item,
      model,
    })
  );

  // set the last timestamp from the cache
  useCache && (await cache.set(`lastModified-${model}`, items[0].modified));

  return items.length;
};

export default processModel;
