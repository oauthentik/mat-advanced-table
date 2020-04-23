import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatCardModule,
  MatTabsModule,
  MatIconModule,
  MatDialogModule,
  MatProgressBarModule,
  MatExpansionModule,
  MatMenuModule,
  MatFormFieldModule,
} from "@angular/material";

@NgModule({
  imports: [CommonModule],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatMenuModule,
    MatProgressBarModule,
  ],
})
export class MaterialModule {}
