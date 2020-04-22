import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatCardModule,
  MatTabsModule,
  MatIconModule,
  MatDialogModule,
} from "@angular/material";

@NgModule({
  imports: [CommonModule],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
  ],
})
export class MaterialModule {}
