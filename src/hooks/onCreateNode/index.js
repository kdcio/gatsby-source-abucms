import buildNode from "../../buildNode";

export const onCreateNode = async (ctx) => {
  const { actions, node } = ctx;
  const { createNode } = actions;

  // Process only abuCms types
  if (!node.internal.type.match(/^abuCms.*/g)) return;

  // reporter.info("Match found", node);
  const { parent, children, internal, ...item } = node;
  Object.keys(item).forEach((key) => {
    const fieldVal = item[key];
    if (typeof fieldVal !== "object") return;

    let newNode = null;
    if (fieldVal?.type === "text/html") {
      newNode = buildNode("html", { ...ctx, node, item: fieldVal, key });
    } else if (fieldVal?.type?.match(/^image\/.*/g)) {
      // console.log(fieldVal, key);
      buildNode("image", { ...ctx, node, item: fieldVal, key });
    }
    if (newNode) createNode(newNode);
  });
};
