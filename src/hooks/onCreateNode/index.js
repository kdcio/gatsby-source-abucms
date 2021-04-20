export const onCreateNode = (ctx) => {
  const { node } = ctx;

  // Process only abuCms types
  // console.log(node.internal.type);
  if (!node.internal.type.match(/^abuCms.*/g)) return;
  console.log("match", node);
};
