export const onCreateNode = (ctx) => {
  const { node, reporter } = ctx;

  // Process only abuCms types
  // console.log(node.internal.type);
  if (!node.internal.type.match(/^abuCms.*/g)) return;
  // console.log("match", node);
  reporter.info("Match found", node);
};
