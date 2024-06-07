const handlers = require("../../componentsAKAlibAKAbackend/handlers");

test("test 500", () => {
  const req = {};
  const res = { render: jest.fn() };
  const err = new Error("errorcito");
  const next = jest.fn();
  handlers.serverError(err, req, res, next);
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe("500");
});
