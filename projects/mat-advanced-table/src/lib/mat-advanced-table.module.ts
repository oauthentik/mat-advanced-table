import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgPipesModule } from 'angular-pipes';
import { MatCellTemplateDirective } from './directives/mat-cell-template.directive';
import { MatAdvancedTableService } from './mat-advanced-table.service';
import { MatAdvancedTableComponent } from './mat-advanced-table.component';
import { NormalizeDecimalPipe } from './normalize-decimal.pipe';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    MatAdvancedTableComponent,
    MatCellTemplateDirective,
    NormalizeDecimalPipe,
  ],
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
