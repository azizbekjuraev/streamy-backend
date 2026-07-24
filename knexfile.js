import { DATABASE_URL } from "./src/config/index.js";

let toSnake = (str) => str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
let toCamel = (str) => str.replace(/[-_][a-z]/g, (group) => group.toUpperCase().replace("-", "").replace("_", ""));

export default {
  development: {
    client: 'pg',
    connection: DATABASE_URL,
    wrapIdentifier: (value, origImpl) => {
      if (value === "*") return origImpl(value);
      return origImpl(toSnake(value));
    },
    postProcessResponse: (result) => {
      if (!result) return result;

      let convertRow = (row) => {
        if (typeof row !== "object" || row === null || row instanceof Date) return row;
        
        return Object.keys(row).reduce((acc, key) => {
          acc[toCamel(key)] = row[key];
          return acc;
        }, {});
      };

      if (Array.isArray(result)) return result.map(convertRow);
      return convertRow(result);
    }
  },
};
