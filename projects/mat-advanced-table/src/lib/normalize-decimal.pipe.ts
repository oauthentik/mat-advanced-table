import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "normalizeDecimal",
})
export class NormalizeDecimalPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) {
      return "0";
    }
    let normalized = String(value).replace(/,/g, "");
    normalized = isNaN(parseFloat(normalized)) ? "0" : normalized;
    return normalized;
  }
}
