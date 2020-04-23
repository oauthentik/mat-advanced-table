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
    MatProgressBarModule,
  ],
})
export class MaterialModule {}
