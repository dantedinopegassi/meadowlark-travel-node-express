const handlers = require("../../componentsAKAlibAKAbackend/handlers");

test("test 404 not found", () => {
  const req = {};
  const res = { render: jest.fn() };
  handlers.notFound(req, res);
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][0]).toBe("404");
});
