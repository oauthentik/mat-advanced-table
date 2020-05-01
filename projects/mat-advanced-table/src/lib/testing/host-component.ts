import { Component, OnInit } from '@angular/core';
import { MatAdvancedTableService } from '../mat-advanced-table.service';
import { MockClass, mockData } from './mocks';

@Component({
  selector: 'mat-host-component',
  template: `<mat-advanced-table [data]="data" [columns]="columns">
  </mat-advanced-table>`,
  styles: [``],
})
class HostBaseComponent implements OnInit {
  constructor(protected matAdvancedService: MatAdvancedTableService) {}
  columns;
  data;
  ngOnInit(): void {
    this.columns = this.matAdvancedService.getColumnsOfType(MockClass);
    this.data = mockData;
  }
}
@Component({
  selector: 'mat-host-component',
  template: `<mat-advanced-table
    [data]="data"
    [columns]="columns"
    [options]="{ actions: true }"
  >
    <ng-template matATCellTemplate="actions">
      <button mat-button>action</button>
    </ng-template>
  </mat-advanced-table>`,
  styles: [``],
})
export class HostActionsComponent extends HostBaseComponent {
  constructor(protected matAdvancedService: MatAdvancedTableService) {
    super(matAdvancedService);
  }
  ngOnInit(): void {
    super.ngOnInit();
  }
}

@Component({
  selector: 'mat-host-component',
  template: `<mat-advanced-table
    [data]="data"
    [columns]="columns"
    [loadingTemplate]="loadingTmp"
    [loading]="isLoading"
  >
    <ng-template #loadingTmp>
      <strong class="custom-loading-template">
        {{ loadingText }}
      </strong>
    </ng-template>
  </mat-advanced-table>`,
  styles: [``],
})
export class HostLoadingComponent extends HostBaseComponent {
  constructor(protected matAdvancedService: MatAdvancedTableService) {
    super(matAdvancedService);
  }
  loadingText = 'Loading ...';
  isLoading = false;
  toggleLoading(value) {
    this.isLoading = value;
  }
  ngOnInit(): void {
    super.ngOnInit();
  }
}

@Component({
  selector: 'mat-host-component',
  template: `<mat-advanced-table
    [data]="data"
    [columns]="columns"
    [noDataTemplate]="emptyTmp"
  >
    <ng-template #emptyTmp>
      <strong class="empty-template">
        {{ emptyDataPlaceholder }}
      </strong>
    </ng-template>
  </mat-advanced-table>`,
  styles: [``],
})
export class HostEmptyComponent implements OnInit {
  emptyDataPlaceholder = 'No data is available';
  constructor(protected matAdvancedService: MatAdvancedTableService) {}
  columns;
  data;
  ngOnInit(): void {
    this.columns = this.matAdvancedService.getColumnsOfType(MockClass);
    this.data = [];
  }
}
