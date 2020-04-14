# material advanced table

Angular Material Enhanced Table with less boilerplate [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Build Status](https://travis-ci.org/oauthentik/mat-advanced-table.svg?branch=master)](https://travis-ci.org/oauthentik/mat-advanced-table) ![npm](https://img.shields.io/npm/v/mat-advanced-table)

## Features

- Abstraction of html elements needed for creating the table
- Easy and precise column mapping with class decorators
- Advanced column filtering
- Loading / Empty Data Templates
- All MatTable features included (Pagination, Sorting, Search...)

## Installation

1. Install using npm / yarn

   ```shell
   npm i mat-advanced-table
   ```

## Usage

### Quick usage

import the `MatAdvancedTableModule` to the modules you are using it in

```typescript
import { MatAdvancedTableModule } from "mat-table-advanced";

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, MatAdvancedTableModule],
})
export class AppModule {}
```

Use `@Table` and `@Column` decorators to define table columns

```typescript
export enum UserRoles {
  Moderator,
  Guest,
}
@Table
export class UserModel {
  @Column({
    verboseName: "User ID",
    canSort: true,
    sortBy: "desc",
  })
  id: number;
  @Column({ verboseName: "User name", canSort: true })
  username: string;
  @Column({ verboseName: "Role", canSort: true })
  role: UserRoles;
}
```

then load the columns in your host component ts file

```typescript
import {MatAdvancedTableService} from 'mat-advanced-table';
 constructor(
    private tableService: MatAdvancedTableService
  ) {}
  users$: Observable<UserModel[]>;
  userModelColumns: ColumnModel[];
  ngOnInit() {
    this.users$ = of([
        userId: 1,
        username: "admin",
        displayName: "Admin ",
        isAdmin: true,
        role: UserRoles.Moderator,
    ])
    this.userModelColumns = this.tableService.getColumnsOfType(
      UserModel
    );
  }
```

after that you're ready to use it in the component template as

```html
<ngx-mat-table-advanced
  [columns]="userModelColumns"
  [data]="users$ | async"
></ngx-mat-table-advanced>
```

### Advanced usage

### 1. Using actions cell with a template cell directive:

**CAUTION**: Use `actions` as the template name to allow the table to bind correctly to the actions column, if another column in your defined table contains the same key, pray to change it in the `ColumnModel.key` option.

```typescript
@Component({
  selector: "app-component",
  template: `<mat-advanced-table
    [data]="data"
    [columns]="columns"
    [options]="{ actions: true }"
  >
    <ng-template matATCellTemplate name="actions">
      <button mat-button (click)="deleteUser($event)">delete</button>
    </ng-template>
  </mat-advanced-table>`,
  styles: [``],
})
export class AppComponent implements OnInit {
  constructor(private matAdvancedService: MatAdvancedTableService) {}
  columns;
  data;
  ngOnInit(): void {
    this.columns = this.matAdvancedService.getColumnsOfType(MockClass);
    this.data = [
      {
        // some mock data
      },
    ];
  }
  deleteUser(user) {
    console.log("User Deleted", user);
  }
}
```

### 2. Using custom data loader

```typescript
@Component({
  selector: "app-component",
  template: `<mat-advanced-table
    [data]="data"
    [columns]="columns"
    [loadingTemplate]="loadingTmp"
    [loading]="isLoading"
  >
    <ng-template #loadingTmp>
      <your-custom-loader [text]="'Please wait...'"></your-custom-loader>
    </ng-template>
  </mat-advanced-table>`,
  styles: [``],
})
export class AppComponent implements OnInit {
  constructor(private matAdvancedService: MatAdvancedTableService) {}
  columns;
  data;
  isLoading = false;
  ngOnInit(): void {
    this.columns = this.matAdvancedService.getColumnsOfType(MockClass);
    this.loadData();
  }
  loadData(user) {
    this.isLoading = true;
    setTimeout(() => {
      this.data = [
        {
          // some mock data
        },
      ];
      this.isLoading = false;
    }, 5000);
  }
}
```

## License

MIT
