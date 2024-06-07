/*******************************************************************************************************/
/** Importa el paquete a testear.                                                                     **/
/*******************************************************************************************************/
const handlers = require("../../componentsAKAlibAKAbackend/handlers");

/*******************************************************************************************************/
/** Cuando instalas Jest, se aniaden automaticamente algunas funciones GLOBALES.                      **/
/** Algunas de esas: test() expect() jest    ----    En TypeScript hay que importarlos explicitamente **/
/** Describi el objetivo del test.                                                                    **/
/*******************************************************************************************************/
test("home page renders", () => {
  /*******************************************************************************************************/
  /** Para ejecutar esa funcion, pedia una request y una response.                                      **/
  /** En este caso, no se necesita nada de la peticion, asi que dejas un objeto vacio.                  **/
  /*******************************************************************************************************/
  const req = {};

  /*******************************************************************************************************/
  /** En este caso, la respuesta debe ser devolver un render, asi que dentro del puntero "res"          **/
  /** enchufa una propiedad "render" que ejecute jest.fn().                                             **/
  /** "jest.fn()" es una funcion encargada de crear un nuevo objeto "mock" sin usar                     **/
  /*******************************************************************************************************/
  const res = { render: jest.fn() };

  /*******************************************************************************************************/
  /** Ahora, por fin, llamas a tu funcion                                                               **/
  /*******************************************************************************************************/
  handlers.home(req, res);
  console.log(res.render.mock.calls);
  console.log(res.render.mock.calls[0][0]);

  /*******************************************************************************************************/
  /** Verify that the 'render' method of the response object was called with 'home' as the first        **/
  /** argument. This checks that the 'home' view was rendered when the 'home' handler was invoked.      **/
  /*******************************************************************************************************/
  expect(res.render.mock.calls[0][0]).toBe("home");
});

/*******************************************************************************************************/
/** Para ejecutar el test: npm test                                                                   **/
/*******************************************************************************************************/
