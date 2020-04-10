import { TableModel } from "../models/table.model";
export const tableSymbol = "ngxMatAdvancedTable";

export function Table<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    tableModel = new TableModel();
  };
}
