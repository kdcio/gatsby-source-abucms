import buildNode from "../../buildNode";
import abuFetch from "../../utils/abuFetch";

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

  if (useCache) {
    items = (await cache.get(`abucms-${model}`)) || [];
  }

  // Download data from a remote API.
  let newItemsCount = 0;
  try {
    const endPoint = `content/${model}`;
    const { Items } = await abuFetch({
      ...pluginOptions,
      endPoint,
      lastModified,
    });
    items = [...items, ...Items];
    newItemsCount = Items.length;
  } catch (error) {
    reporter.error(`Error fetching files for ${model}.`, error);
    return 0;
  }

  if (debug) {
    reporter.info(`[abucms] ${model}: ${newItemsCount} document(s) fetched`);
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
  if (useCache) {
    await cache.set(`abucms-${model}`, items);
    await cache.set(`lastModified-${model}`, items[0].modified);
  }

  return newItemsCount;
};

export default processModel;
