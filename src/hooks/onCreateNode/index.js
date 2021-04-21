import buildNode from "../../buildNode";

export const onCreateNode = (ctx) => {
  const { actions, node, reporter } = ctx;
  const { createNode } = actions;

  // Process only abuCms types
  if (!node.internal.type.match(/^abuCms.*/g)) return;

  reporter.info("Match found", node);
  const { parent, children, internal, ...item } = node;
  Object.keys(item).forEach((key) => {
    const fieldVal = item[key];
    if (typeof fieldVal !== "object") return;

    let newNode;
    if (fieldVal?.type === "text/html") {
      newNode = buildNode("html", { ...ctx, node, item: fieldVal, key });
    }
    if (newNode) createNode(newNode);
  });
};
