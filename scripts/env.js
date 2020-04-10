const fs = require("fs");

const data = [
  `CLIENT_URL=${process.env.CLIENT_URL}`,
  `CLIENT_AUTH=${process.env.CLIENT_AUTH}`,
  `CLIENT_REFRESH_TOKEN=${process.env.CLIENT_REFRESH_TOKEN}`,
  `CLIENT_ID=${process.env.CLIENT_ID}`,
  `CLIENT_SECRET=${process.env.CLIENT_SECRET}`,
  `APP_URL=${process.env.APP_URL}`,
];

fs.writeFileSync("./.env", data.join("\n"));
