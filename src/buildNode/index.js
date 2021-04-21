import buildItem from "./item";

const BUILDERS = {
  item: buildItem,
};

const buildNode = (type, context) => {
  if (!BUILDERS[type]) {
    const { reporter } = context;
    reporter.warn(`Don't know how to build entity of type '${type}'!`);
    return null;
  }

  return BUILDERS[type](context);
};

export default buildNode;
