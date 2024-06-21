require("dotenv").config();
const request = require("supertest");
const buildApp = require("../../app");
const UserRepo = require("../../repos/user-repo");
const status = require("http-status");
const {
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
} = require("../../config/envConfs");
const pool = require("../../pool");

beforeAll(() => {
  return pool.connect({
    host: DB_HOST,
    port: DB_PORT,
    database: "social-network-test",
    user: DB_USER,
    password: DB_PASSWORD,
  });
});

afterAll(() => {
  return pool.close();
});

it("create a user", async () => {
  const startingCount = await UserRepo.count();

  await request(buildApp())
    .post("/users")
    .send({ username: "testuser", bio: "test bio" })
    .expect(status.OK);

  const finishCount = await UserRepo.count();
  expect(finishCount - startingCount).toEqual(1);
});
