import { Component, ViewChild, TemplateRef } from "@angular/core";
import { MatAdvancedTableService, ColumnModel } from "mat-advanced-table";
import { MatDialog } from "@angular/material";
import { HttpClient } from "@angular/common/http";
import { map, finalize, filter, tap, single, share } from "rxjs/operators";
import { Transaction } from "./data.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  data$;
  gapiKey = `AIzaSyDcTFyM25BnezxRooccaNCKWwv4jT2_0QQ`;
  columns: ColumnModel[];
  options;
  constructor(
    private dialogService: MatDialog,
    private matATService: MatAdvancedTableService,
    private http: HttpClient
  ) {}
  countryFlags$;
  isLoading = false;
  @ViewChild("confirmDelete") dialog: TemplateRef<any>;

  viewTransaction() {
    this.dialogService.open(this.dialog);
  }
  ngOnInit(): void {
    this.countryFlags$ = this.http.get<any>("/assets/country-names.json").pipe(
      single((data) => !!data),
      map((array) =>
        array.map((entry) => ({
          [entry.Name.toLowerCase()]: `assets/flags/${entry.Code}.svg`,
        }))
      ),
      share()
    );
    this.columns = this.matATService.getColumnsOfType(Transaction);
    this.isLoading = true;
    this.data$ = this.http
      .get<Transaction[]>("assets/transactions-data.json")
      .pipe(finalize(() => (this.isLoading = false)));
  }
}
