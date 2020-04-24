import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "normalizeDecimal",
})
export class NormalizeDecimalPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) {
      return 0;
    }
    let normalized =
      typeof value === "string" ? value.replace(/,/g, "") : value;
    normalized = isNaN(value) ? 0 : value;
    return normalized;
  }
}
