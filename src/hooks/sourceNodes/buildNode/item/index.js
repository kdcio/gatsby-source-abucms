const buildItem = ({ item, model, createNodeId, createContentDigest }) => {
  const nodeContent = JSON.stringify(item);
  const nodeMeta = {
    id: createNodeId(`abucms-${item.id}`),
    parent: null,
    children: [],
    internal: {
      type: `abuCms${model}`,
      content: nodeContent,
      contentDigest: createContentDigest(item),
    },
  };

  return Object.assign({}, item, nodeMeta);
};

export default buildItem;
