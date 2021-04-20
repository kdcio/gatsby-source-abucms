export const camelize = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};

export const upperFirst = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const pascalCase = (str) => upperFirst(camelize(str));
