import { helloFromB } from "../src/projectB";

describe("Tests for ProjectA", () => {
  test(`A Sample Test`, () => {
    expect(helloFromB()).toEqual("Hello from Project B");
  });
});
