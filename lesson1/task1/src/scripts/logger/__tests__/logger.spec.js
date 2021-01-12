import { createLogger } from "../logger";

it("should return stored logs", () => {
  const logger = createLogger("user");
  expect(logger.getLogs()).toEqual([]);
});

it("should save log message", () => {
  const logger = createLogger("user");
  logger.log("success");
  expect(logger.getLogs()).toEqual(["log - user - success"]);
});

it("should save log error", () => {
  const logger = createLogger("user");
  logger.error("failed");
  expect(logger.getLogs()).toEqual(["error - user - failed"]);
});
