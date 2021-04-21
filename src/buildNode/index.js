import buildItem from "./item";
import buildHtml from "./html";
import buildImage from "./image";

const BUILDERS = {
  item: buildItem,
  html: buildHtml,
  image: buildImage,
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
