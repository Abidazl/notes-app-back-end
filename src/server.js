/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable semi */
const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server ini berjalan pada ${server.info.uri}`);
};

init();
