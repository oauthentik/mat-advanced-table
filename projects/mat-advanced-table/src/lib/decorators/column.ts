import "reflect-metadata";
import { ColumnModel } from "../models/column.model";
import { TableModel } from "../models/table.model";
import { tableSymbol } from "./table";
let columnCount = 0;
export function Column(options: Partial<ColumnModel> = {}) {
  return function (target: any, propertyKey: string) {
    if (!target[tableSymbol]) {
      target[tableSymbol] = new TableModel();
    }
    columnCount++;
    options.key = options.key || propertyKey;
    options.order = options.order === undefined ? columnCount : options.order;
    options.verboseName = options.verboseName || options.key;
    const propType = Reflect.getMetadata("design:type", target, propertyKey);
    options.propertyType = options.propertyType || propType.name;
    const columnOptions = new ColumnModel(options);
    target[tableSymbol].addColumn(columnOptions);
    return target;
  };
}
