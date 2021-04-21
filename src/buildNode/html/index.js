const buildHtml = ({ key, item, node, createNodeId, createContentDigest }) => {
  const nodeContent = JSON.stringify(item);
  const nodeMeta = {
    id: createNodeId(`abucms-html-${node.id}-${key}`),
    parent: node.id,
    children: [],
    internal: {
      type: "abuCmsHtml",
      mediaType: "text/html",
      content: nodeContent,
      contentDigest: createContentDigest(item),
    },
  };

  const linkKey = `${key}__NODE`;
  /* eslint no-param-reassign: off */
  node[linkKey] = nodeMeta.id;

  return { ...item, ...nodeMeta };
};

export default buildHtml;
