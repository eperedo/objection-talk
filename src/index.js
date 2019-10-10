const { Model } = require("objection");
const Knex = require("knex");

const knex = Knex({
  client: "mysql",
  debug: true,
  pool: {
    afterCreate: (conn, done) => {
      console.log("New Connection", conn.threadId);
      done(null, conn);
    },
    idleTimeoutMillis: 30000,
    max: 10,
    min: 2
  },
  connection: {
    host: "localhost",
    user: "root",
    password: "1234",
    database: "cn"
  }
});

Model.knex(knex);
