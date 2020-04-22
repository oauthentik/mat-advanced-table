import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MatAdvancedTableModule } from "mat-advanced-table";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "examples/mat-advanced-table-examples/material.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatAdvancedTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
