import { HttpClient } from '@angular/common/http';
import { Component, NgZone, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnModel, MatAdvancedTableService } from 'mat-advanced-table';
import { of } from 'rxjs';
import { delay, finalize, map, share, single } from 'rxjs/operators';
import { Transaction } from './data.model';
declare const mapboxgl: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data$;
  columns: ColumnModel[];
  options;
  constructor(
    private dialogService: MatDialog,
    private matATService: MatAdvancedTableService,
    private http: HttpClient,
    private zone: NgZone
  ) {}
  countryFlags$;
  isLoading = false;
  @ViewChild('confirmDelete') dialog: TemplateRef<any>;
  @ViewChild('apiDialog') apiDialog: TemplateRef<any>;
  apiKey; // TODO: use your google api key for the location template to work
  dataActivated: boolean;
  editAPIKey() {
    this.dialogService.open(this.apiDialog);
  }
  viewTransaction() {
    this.dialogService.open(this.dialog);
  }
  toggleData() {
    this.dataActivated = !this.dataActivated;
    this.isLoading = true;
    this.data$ = this.dataActivated
      ? this.http
          .get<any[]>('assets/transactions-data.json')
          .pipe()
          .pipe(
            finalize(() => {
              this.isLoading = false;
            })
          )
      : of([]).pipe(
          finalize(() => {
            this.isLoading = false;
          })
        );
  }
  ngOnInit(): void {
    this.countryFlags$ = this.http.get<any>('/assets/country-names.json').pipe(
      single((data) => !!data),
      map((array) => {
        let flagmap = {};
        array.forEach((entry) => {
          flagmap = {
            ...flagmap,
            [entry.Name.toLowerCase()]: `assets/flags/${entry.Code}.svg`,
          };
        });
        return flagmap;
      }),
      share()
    );
    this.columns = this.matATService.getColumnsOfType(Transaction);
  }
}
