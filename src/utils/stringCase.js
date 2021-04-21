export const camelize = (str) =>
  str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

export const upperFirst = (str) => str[0].toUpperCase() + str.slice(1);

export const pascalCase = (str) => upperFirst(camelize(str));
