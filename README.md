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

import the `MatAdvancedTableModule` with the `forRoot()` to the singleton module of your app
and without `forRoot()` into your component declared module

```typescript
import { MatAdvancedTableModule } from "mat-table-advanced";

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, MatAdvancedTableModule.forRoot()],
})
export class AppModule {}
```

Use `@Table` and `@Column` decorators to define table columns

```typescript
@Table
export class UserModel {
  @Column({
    verboseName: "User ID",
    canSort: true,
    sortBy: "desc",
    format: null,
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
 constructor(
    private advancedTableService: MatTableAdvancedService
  ) {}
  users$: Observable<User[]>;
  userModelColumns: ColumnModel[];
  ngOnInit() {
    this.users$ = of([
        userId: 1,
        username: "admin",
        displayName: "Admin ",
        isAdmin: true,
        role: UserRoles.Moderator,
    ])
    this.userModelColumns = this.advancedTableService.getColumnsOfType(
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

## License

MIT
