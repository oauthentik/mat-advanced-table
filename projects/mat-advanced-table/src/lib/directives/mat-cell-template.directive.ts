import { Directive, Input, TemplateRef, Inject, Self } from "@angular/core";

@Directive({
  selector: "[matATCellTemplate]",
})
export class MatCellTemplateDirective {
  constructor(@Self() @Inject(TemplateRef) private _tmp: TemplateRef<any>) {
    this.template = this._tmp;
  }
  @Input() template: TemplateRef<any>;
  @Input("matATCellTemplate") name: string;
}
