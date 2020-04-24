import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "normalizeDecimal",
})
export class NormalizeDecimalPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) {
      return 0;
    }
    return typeof value === "string" ? value.replace(/,/g, "") : value;
  }
}
