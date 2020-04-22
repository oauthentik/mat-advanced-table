import { SimpleChange, Component } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  MatPaginator,
  MatSortHeader,
  MatButtonModule,
} from "@angular/material";
import { By } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatAdvancedTableComponent } from "./mat-advanced-table.component";
import { MatAdvancedTableModule } from "./mat-advanced-table.module";
import { MatAdvancedTableService } from "./mat-advanced-table.service";
import { MockClass, mockData, MockAdvancedClass } from "./testing/mocks";
import {
  HostActionsComponent,
  HostLoadingComponent,
  HostEmptyComponent,
} from "./mocks/host-component";

describe("MatAdvancedTableComponent", () => {
  describe("Basic Implementation", () => {
    let component: MatAdvancedTableComponent;
    let fixture: ComponentFixture<MatAdvancedTableComponent>;
    let service: MatAdvancedTableService;
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, MatAdvancedTableModule],
      }).compileComponents();
      service = TestBed.get(MatAdvancedTableService);
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(MatAdvancedTableComponent);
      component = fixture.componentInstance;
      component.cdr.detectChanges();
    });
    const setupColumns = (typeClass) => {
      component.columns = service.getColumnsOfType(typeClass);
      component.ngOnChanges({
        columns: new SimpleChange(null, component.columns, true),
      });
      component.cdr.detectChanges();
    };
    const toggleLoadingData = (loading) => {
      component.data = loading ? [] : mockData;
      component.loading = loading;
      component.ngOnChanges({
        loading: new SimpleChange(null, component.loading, true),
      });
      component.cdr.detectChanges();
    };
    const setupData = (data = mockData) => {
      component.data = data;
      component.ngOnChanges({
        data: new SimpleChange(null, component.data, true),
      });
      component.cdr.detectChanges();
    };

    // Test cases
    describe("creating the component with defaults", () => {
      beforeEach(() => {
        setupColumns(MockClass);
      });
      it("Should create the component", () => {
        expect(component).toBeTruthy();
      });
      it("Should contains the table header", () => {
        expect(
          fixture.nativeElement.querySelector(".ngx-mat-table-header")
        ).toBeTruthy("table header not created");
      });
      it("Should contains the search bar", () => {
        expect(
          fixture.nativeElement.querySelector(".ngx-mat-table-search")
        ).toBeTruthy("table search field not created");
      });
      it("Should start with empty data text", () => {
        expect(
          fixture.nativeElement.querySelector(".ngx-mat-table-empty")
            .textContent
        ).toContain(component.options.emptyDataText);
      });
      it("Should not contain a title", () => {
        expect(
          fixture.nativeElement.querySelector(".ngx-mat-table-title")
        ).toBeFalsy();
      });
      it("Should not contain a legned", () => {
        expect(
          fixture.nativeElement.querySelector(".ngx-mat-table-legend")
        ).toBeFalsy();
      });
      it("Should not contain a selection column", () => {
        expect(
          fixture.nativeElement.querySelector(
            `thead .mat-${component.selectionColumnName}-column`
          )
        ).toBeFalsy();
      });
      it("Should not contain an actions column", () => {
        expect(
          fixture.nativeElement.querySelector(`thead th:last-child`).textContent
        ).not.toContain(component.actionsColumn.verboseName);
      });
      it("Should have a placeholder when cell data not defined", () => {
        setupData([mockData[0], { ...mockData[1], bar: null }]);
        expect(
          fixture.nativeElement.querySelector(
            "table tbody tr:last-child td:last-child"
          ).textContent
        ).toContain(component.options.placeholder);
      });
      it("Should have at least  one cell with a min width and max width style definition", () => {
        setupData();
        expect(
          fixture.nativeElement.querySelector("table tbody td").style.cssText
        ).toContain(
          `max-width: ${component.options.maxCellWidth}px; min-width: ${component.options.minCellWidth}px`
        );
      });
      it("Should have a paginator", () => {
        expect(
          fixture.debugElement.query(By.directive(MatPaginator)).nativeElement
        ).toBeTruthy("table pagination not created");
      });
      it("Should have no sorting headers", () => {
        expect(
          fixture.debugElement.queryAll(By.directive(MatSortHeader)).length
        ).toEqual(component.columns.filter((col) => col.canSort).length);
      });
      it("Should toggle the loading text depending on loading input", () => {
        toggleLoadingData(true);
        expect(
          fixture.nativeElement.querySelector(".ngx-mat-table-loading-data")
            .textContent
        ).toContain(component.options.loadingText);
        toggleLoadingData(false);
        expect(
          fixture.nativeElement.querySelector(".ngx-mat-table-loading-data")
        ).toBeFalsy();
      });
      it("should contains a table with it's headers", () => {
        const table: HTMLTableElement = fixture.nativeElement.querySelector(
          "table"
        );
        expect(table).toBeTruthy();
        const headers: HTMLTableHeaderCellElement[] = Array.from(
          table.querySelectorAll("th")
        );
        expect(headers).toBeTruthy();
        component.columns.forEach((col, i) => {
          expect(headers[i]).toBeTruthy();
          expect(headers[i].textContent).toContain(col.verboseName);
        });
      });
      it("should contains a single line of data", () => {
        setupData();
        const tableBody: HTMLTableElement = fixture.nativeElement.querySelector(
          "table tbody"
        );
        expect(tableBody).toBeTruthy();
        const rows: HTMLTableRowElement[] = Array.from(
          tableBody.querySelectorAll("tr")
        );
        expect(rows.length).toEqual(mockData.length);
        mockData.forEach((row, i) => {
          const cells = Array.from(rows[i].querySelectorAll("td"));
          component.columns.forEach((col, j) => {
            expect(cells[j]).toBeTruthy();
            expect(cells[j].textContent.trim()).toContain(mockData[i][col.key]);
          });
        });
      });
      it("should filter data using search input", () => {
        setupData();
        component.searchControl.setValue(21);
        component.cdr.detectChanges();
        const rows: HTMLTableRowElement[] = Array.from(
          fixture.nativeElement.querySelectorAll("table tbody tr")
        );
        expect(rows.length).toEqual(1);
      });
    });
    describe("creating the component with custom options", () => {
      beforeEach(() => {
        setupColumns(MockAdvancedClass);
      });
      it("Should create the component with selction", () => {
        expect(component).toBeTruthy();
      });
    });
    // End of defaults options
  });
  // When custom options made
  describe("custom templates: CellTemplate, LoadingTemplate, EmptyDataTemplate ", () => {
    describe("CellTemplate", () => {
      let component: HostActionsComponent;
      let fixture: ComponentFixture<HostActionsComponent>;

      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [HostActionsComponent],
          imports: [
            NoopAnimationsModule,
            MatButtonModule,
            MatAdvancedTableModule,
          ],
        }).compileComponents();
      }));

      beforeEach(() => {
        fixture = TestBed.createComponent(HostActionsComponent);
        component = fixture.componentInstance;
      });
      it("should render actions template when issued", () => {
        expect(component).toBeTruthy();
        const matAdvancedTable = fixture.debugElement.query(
          By.directive(MatAdvancedTableComponent)
        );
        expect(matAdvancedTable).toBeTruthy();
        fixture.detectChanges();
        expect(
          (matAdvancedTable.componentInstance as MatAdvancedTableComponent)
            .options.actions
        ).toBeTruthy();
        fixture.detectChanges();
        expect(
          Array.from(
            matAdvancedTable.nativeElement.querySelectorAll(
              "td"
            ) as HTMLElement[]
          )
            .map((td) => td.textContent)
            .filter((text) => text.trim().includes("action")).length
        ).toEqual(mockData.length);
      });
    });
    describe("Loading Template", () => {
      let component: HostLoadingComponent;
      let fixture: ComponentFixture<HostLoadingComponent>;

      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [HostLoadingComponent],
          imports: [NoopAnimationsModule, MatAdvancedTableModule],
        }).compileComponents();
      }));

      beforeEach(() => {
        fixture = TestBed.createComponent(HostLoadingComponent);
        component = fixture.componentInstance;
      });
      it("should render  loading data template", () => {
        expect(component).toBeTruthy();
        component.toggleLoading(true);
        expect(fixture.nativeElement.querySelector("table")).toBeFalsy();
        fixture.detectChanges();
        expect(
          fixture.nativeElement.querySelector(".custom-loading-template")
        ).toBeTruthy();
        expect(
          fixture.nativeElement.querySelector(".custom-loading-template")
            .textContent
        ).toContain(component.loadingText);
        component.toggleLoading(false);
        fixture.detectChanges();
        expect(
          fixture.nativeElement.querySelector(".custom-loading-template")
        ).toBeFalsy();
      });
    });
    describe("Empty Data Template", () => {
      let component: HostEmptyComponent;
      let fixture: ComponentFixture<HostEmptyComponent>;

      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [HostEmptyComponent],
          imports: [NoopAnimationsModule, MatAdvancedTableModule],
        }).compileComponents();
      }));

      beforeEach(() => {
        fixture = TestBed.createComponent(HostEmptyComponent);
        component = fixture.componentInstance;
      });
      it("should render  empty data template", () => {
        expect(component).toBeTruthy();
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector("table")).toBeTruthy();
        expect(
          fixture.nativeElement.querySelector(".empty-template")
        ).toBeTruthy();
        expect(
          fixture.nativeElement.querySelector(".empty-template").textContent
        ).toContain(component.emptyDataPlaceholder);
      });
    });
  });
});
