import { NormalizeDecimalPipe } from "./normalize-decimal.pipe";

describe("NormalizeDecimalPipe", () => {
  let pipe: NormalizeDecimalPipe;
  beforeEach(() => {
    pipe = new NormalizeDecimalPipe();
  });
  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });
  it("removes comma separators from decimal literals", () => {
    expect(pipe.transform("1,210,322.21")).toBe("1210322.21");
    expect(pipe.transform(",322")).toBe("322");
  });
  it("returns 0 when null or undefined", () => {
    expect(pipe.transform(null)).toBe("0");
    expect(pipe.transform(undefined)).toBe("0");
  });
  it("returns 0 when non number is passed ", () => {
    const literal = "not a number";
    expect(pipe.transform(literal)).toBe("0");
  });
  it("returns same literal when no comma is included", () => {
    const literal = "121121.232";
    expect(pipe.transform(literal)).toBe(literal);
  });
});
