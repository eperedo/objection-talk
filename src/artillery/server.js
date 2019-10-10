// Inicia la conexion a la BD
require("./../index");

const Hapi = require("@hapi/hapi");

const Person = require("../models/Person");

const server = new Hapi.Server({
  host: "localhost",
  port: 3100,
  routes: {
    cors: true
  }
});

async function start() {
  server.route({
    method: "GET",
    path: "/people",
    handler: async (req, h) => {
      try {
        const data = await Person.query();
        return h.response(data);
      } catch (error) {
        throw new Error(error);
      }
    }
  });

  server.route({
    method: "GET",
    path: "/people/{id}",
    handler: async (req, h) => {
      try {
        const data = await Person.query()
          .where("id", req.params.id)
          .first();
        return h.response(data);
      } catch (error) {
        throw new Error(error);
      }
    }
  });

  server.route({
    method: "POST",
    path: "/people",
    handler: async (req, h) => {
      const data = await Person.query().insert({
        name: req.payload.name
      });
      return h.response(data);
    }
  });

  await server.start();

  console.log(`Server started at ${server.info.uri}`);
}

start();

process.on("uncaughtException", err => {
  console.log(err);
});
