import { NormalizeDecimalPipe } from "./normalize-decimal.pipe";

describe("NormalizeDecimalPipe", () => {
  it("create an instance", () => {
    const pipe = new NormalizeDecimalPipe();
    expect(pipe).toBeTruthy();
  });
  it("removes comma separators from decimal literals", () => {
    const pipe = new NormalizeDecimalPipe();
    expect(pipe.transform("1,210,322.21")).toEqual("112032221");
    expect(pipe.transform(",322")).toEqual("322");
  });
  it("returns 0 when null or undefined", () => {
    const pipe = new NormalizeDecimalPipe();
    expect(pipe.transform(null)).toEqual(0);
    expect(pipe.transform(undefined)).toEqual(0);
  });
  it("returns 0 when non number is passed ", () => {
    const pipe = new NormalizeDecimalPipe();
    const literal = "121121.232";
    expect(pipe.transform(literal)).toEqual(literal);
  });
  it("returns same literal when no comma is included", () => {
    const pipe = new NormalizeDecimalPipe();
    const literal = "121121.232";
    expect(pipe.transform(literal)).toEqual(literal);
  });
});
