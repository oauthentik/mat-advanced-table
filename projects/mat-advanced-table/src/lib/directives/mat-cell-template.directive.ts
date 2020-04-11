import { Directive, Input, TemplateRef } from "@angular/core";

@Directive({
  selector: "[matATCellTemplate]",
})
export class MatCellTemplateDirective {
  constructor() {}
  @Input() template: TemplateRef<any>;
  @Input() name: string;
}
