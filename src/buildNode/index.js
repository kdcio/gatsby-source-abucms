import buildItem from "./item";
import buildHtml from "./html";

const BUILDERS = {
  item: buildItem,
  html: buildHtml,
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
