import { Component, ViewChild, TemplateRef } from "@angular/core";
import { MatAdvancedTableService, ColumnModel } from "mat-advanced-table";
import { Product } from "./data/data.model";
import { DATA } from "./data/data.mocks";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  data: Partial<Product>[];
  columns: ColumnModel[];
  options;
  constructor(
    private dialogService: MatDialog,
    private matATService: MatAdvancedTableService
  ) {}

  @ViewChild("confirmDelete") dialog: TemplateRef<any>;

  deleteUser() {
    this.dialogService.open(this.dialog);
  }
  ngOnInit(): void {
    this.columns = this.matATService.getColumnsOfType(Product);
    this.data = DATA;
  }
}
