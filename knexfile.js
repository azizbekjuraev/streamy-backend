import { DATABASE_URL } from "./src/config/index.js";

export default {
  development: {
    client: 'pg',
    connection: DATABASE_URL
  },
};
