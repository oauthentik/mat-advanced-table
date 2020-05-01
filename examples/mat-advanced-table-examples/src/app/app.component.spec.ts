import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { MatAdvancedTableModule } from "mat-advanced-table";
import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "examples/mat-advanced-table-examples/material.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { SafePipeModule } from "safe-pipe";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        HttpClientModule,
        SafePipeModule,
        MatAdvancedTableModule,
      ],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should render the table component", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css("mat-advanced-table"))
    ).toBeTruthy();
  });
});
