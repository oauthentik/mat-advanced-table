/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MatCellTemplateDirective } from './mat-cell-template.directive';
import { TemplateRef } from '@angular/core';

describe('Directive: MatCellTemplate', () => {
  it('should create an instance', () => {
    const directive = new MatCellTemplateDirective(
      TestBed.inject(TemplateRef, {} as TemplateRef<HTMLElement>)
    );
    expect(directive).toBeTruthy();
  });
});
