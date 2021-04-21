import { createRemoteFileNode } from "gatsby-source-filesystem";

const buildImage = async ({
  key,
  item,
  node,
  reporter,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}) => {
  let pictureNode;

  try {
    ({ id: pictureNode } = await createRemoteFileNode({
      url: item.src,
      parentNodeId: node.id,
      store,
      cache,
      createNode,
      createNodeId,
    }));
  } catch (err) {
    reporter.warn(`[abucms] Error on ${item.src}. Skipping!`, err.message);
  }

  const linkKey = `${key}__NODE`;
  /* eslint no-param-reassign: off */
  node[linkKey] = pictureNode;

  return null;
};

export default buildImage;
