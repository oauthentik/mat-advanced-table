import { TestBed } from "@angular/core/testing";

import { MatAdvancedTableService } from "./mat-advanced-table.service";
import { MockClass } from "./testing/mocks";
describe("MatAdvancedTableService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [MatAdvancedTableService],
    })
  );

  it("should be created", () => {
    const service: MatAdvancedTableService = TestBed.inject(
      MatAdvancedTableService
    );
    expect(service).toBeTruthy();
  });
  it("should return a list of Columns when passed a registred table type", () => {
    const service: MatAdvancedTableService = TestBed.inject(
      MatAdvancedTableService
    );
    spyOn(service, "getColumnsOfType").and.callThrough();
    const columns = service.getColumnsOfType(MockClass);
    expect(service.getColumnsOfType).toHaveBeenCalledWith(MockClass);
    expect(columns).toBeTruthy();
    expect(columns.length).toEqual(2);
    expect(columns[0].key).toEqual("foo");
    expect(columns[1].key).toEqual("bar");
  });
});
