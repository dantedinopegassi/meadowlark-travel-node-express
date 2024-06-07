const handlers = require("../../componentsAKAlibAKAbackend/handlers");

test("about page renders", () => {
  const req = {};
  const res = { render: jest.fn() };
  handlers.about(req, res);

  console.log(res.render);
  console.log(res.render.mock);
  console.log(res.render.mock.calls);

  /*******************************************************************************************************/
  /** Los siguientes 3 tets verifican que:                                                              **/
  /** A- "about" se renderice - COMO? DEBE APARECER EN LA MATRIZ DE ARGUMENTOS                          **/
  /**                           EN LA POSICION [0][0]                                                   **/
  /** B- solo se haga un llamado a renderizar - COMO? LA MATRIZ DEBE TENER UN                           **/
  /**                                           SOLO VECTOR COMO ARGUMENTO                              **/
  /** C- que se pase un "prop" - COMO? EN EL UNICO VECTOR QUE SE PASA, DEBE HABER                       **/
  /**                            UN OBJETO CON LA PROPIEDAD A PASARLE EN LA POSICION 1                  **/
  /*******************************************************************************************************/

  expect(res.render.mock.calls[0][0]).toBe("about");
  expect(res.render.mock.calls.length).toBe(1);
  expect(res.render.mock.calls[0][1]).toEqual(
    expect.objectContaining({ fortune: expect.stringMatching(/\W/) })
  );
});
