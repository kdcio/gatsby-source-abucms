import buildNode from "../../buildNode";
import abuFetch from "../../utils/fetch";

const processModel = async ({ pluginOptions, model, args }) => {
  const { actions, cache, reporter } = args;
  const { useCache = true, debug = false } = pluginOptions;
  let items = [];

  // get the last timestamp from the cache
  const lastModified =
    (useCache && (await cache.get(`lastModified-${model}`))) ||
    new Date(0).toISOString();

  if (debug) {
    reporter.info(`[abucms] Fetching new ${model} data since ${lastModified}`);
  }

  // Download data from a remote API.
  try {
    const endPoint = `content/${model}`;
    ({ Items: items } = await abuFetch({
      ...pluginOptions,
      endPoint,
      lastModified,
    }));
  } catch (error) {
    reporter.error(`Error fetching files for ${model}.`, error);
    return 0;
  }

  if (debug) {
    reporter.info(`[abucms] ${model}: ${items.length} document(s) fetched`);
  }

  if (items.length === 0) return 0;

  const { createNode } = actions;
  // Process data and create nodes.using a custom processDatum function
  items.forEach((item) => {
    const node = buildNode("item", {
      ...args,
      pluginOptions,
      item,
      model,
    });
    if (node) createNode(node);
  });

  // set the last timestamp from the cache
  if (useCache) await cache.set(`lastModified-${model}`, items[0].modified);

  return items.length;
};

export default processModel;
