/*******************************************************************************************************/
/** Este test busca verificar que el link te lleva al sitio correcto                                  **/
/*******************************************************************************************************/
const portfinder = require("portfinder");
const puppeteer = require("puppeteer");

const app = require("../../meadowlarkENTRYPOINT");

let server = null;
let port = null;

/*******************************************************************************************************/
/** Verify that the 'render' method of the response object was called with 'home' as the first        **/
/** argument. This checks that the 'home' view was rendered when the 'home' handler was invoked.      **/
/*******************************************************************************************************/
beforeEach(async () => {
  port = await portfinder.getPortPromise();
  server = app.listen(port);
  return true;
});

afterEach(() => {
  server.close();
});

test("test home page link to about page", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:${port}`);
  await Promise.all([
    page.waitForNavigation(),
    page.click('[data-test-id="about"]'),
  ]);
  expect(page.url()).toBe(`http://localhost:${port}/about`);
  await browser.close();
  return true;
});
