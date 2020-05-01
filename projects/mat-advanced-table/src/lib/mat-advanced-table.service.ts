import { Injectable } from '@angular/core';
import { tableSymbol } from './decorators/table';

@Injectable({
  providedIn: 'root',
})
export class MatAdvancedTableService {
  getColumnsOfType<T extends { new (...args: any[]): {} }>(type: T) {
    return type.prototype[tableSymbol].columns;
  }
  constructor() {}
}
