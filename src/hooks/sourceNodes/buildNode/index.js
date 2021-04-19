import buildItem from "./item";

const BUILDERS = {
  item: buildItem,
};

const buildNode = (type, context) => {
  if (!BUILDERS[type]) {
    console.log(`Don't know how to build entity of type '${type}'!`);
    return;
  }

  const result = BUILDERS[type](context);
  const nodesToCreate = Array.isArray(result) ? result : [result];

  nodesToCreate.map((node) => {
    context.actions.createNode(node);
  });
};

export default buildNode;
