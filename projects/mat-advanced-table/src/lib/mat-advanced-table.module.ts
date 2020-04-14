import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSortModule,
  MatTableModule,
} from "@angular/material";
import { NgPipesModule } from "angular-pipes";
import { MatCellTemplateDirective } from "./directives/mat-cell-template.directive";
import { MatAdvancedTableService } from "./mat-advanced-table.service";
import { MatAdvancedTableComponent } from "./mat-advanced-table.component";

@NgModule({
  declarations: [MatAdvancedTableComponent, MatCellTemplateDirective],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgPipesModule,
    MatCardModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatListModule,
    MatSliderModule,
    MatAutocompleteModule,
  ],
  providers: [MatAdvancedTableService],
  exports: [MatAdvancedTableComponent, MatCellTemplateDirective],
})
export class MatAdvancedTableModule {}
