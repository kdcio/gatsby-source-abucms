import buildItem from "./item";

const BUILDERS = {
  item: buildItem,
};

const buildNode = (type, context) => {
  if (!BUILDERS[type]) {
    console.log(`Don't know how to build entity of type '${type}'!`);
    return;
  }

  return BUILDERS[type](context);
};

export default buildNode;
