import { pascalCase } from "../../utils/stringCase";

const buildItem = ({ item, model, createNodeId, createContentDigest }) => {
  const nodeContent = JSON.stringify(item);
  const nodeMeta = {
    id: createNodeId(`abucms-${model}-${item.id}`),
    parent: null,
    children: [],
    internal: {
      type: `abuCms${pascalCase(model)}`,
      content: nodeContent,
      contentDigest: createContentDigest(item),
    },
  };

  return Object.assign({}, item, nodeMeta);
};

export default buildItem;
