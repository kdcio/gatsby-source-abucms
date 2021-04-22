import { createRemoteFileNode } from "gatsby-source-filesystem";

const buildImage = async ({
  key,
  item,
  node,
  reporter,
  actions: { createNode },
  getCache,
  createNodeId,
}) => {
  try {
    const fileNode = await createRemoteFileNode({
      url: item.src,
      parentNodeId: node.id,
      getCache,
      createNode,
      createNodeId,
    });

    if (fileNode) {
      const linkKey = `${key}__NODE`;
      /* eslint no-param-reassign: off */
      node[key] = fileNode.id;
      /* eslint no-param-reassign: off */
      node[linkKey] = fileNode.id;
    }
  } catch (err) {
    reporter.error(`[abucms] Error on ${item.src}. Skipping!`, err);
  }

  return null;
};

export default buildImage;
