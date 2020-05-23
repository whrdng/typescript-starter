import { helloFromA } from "../src/projectA";

describe("Tests for ProjectA", () => {
  test(`A Sample Test`, () => {
    expect(helloFromA()).toEqual("Hello from Project A");
  });
});
