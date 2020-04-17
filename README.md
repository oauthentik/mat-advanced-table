# material advanced table

Angular Material Enhanced Table with less boilerplate [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Build Status](https://travis-ci.org/oauthentik/mat-advanced-table.svg?branch=master)](https://travis-ci.org/oauthentik/mat-advanced-table) ![npm](https://img.shields.io/npm/v/mat-advanced-table) [![codecov](https://codecov.io/gh/oauthentik/mat-advanced-table/branch/master/graph/badge.svg)](https://codecov.io/gh/oauthentik/mat-advanced-table)

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

## API

### @Column

**`verboseName: string`** The column label to be displayed

**`key: string;`** the column key: By default it's the same as the attribute name

**`order: number`** The displayed order of the column

**`propertyType: "String" | "Date" | "Number" | "Object"`** The popriety primitive type collected from the ProprietyDescriptor and can be overriden by setting a value

**`canSort: boolean`** Whether this column is sortable

**`sortBy: "asc" | "desc"`** The default sorting order

**`visible: boolean`** Whether the column is visible by default

**`format: string | false`** Date|number format as in Angular format pipe

**`sortByAccessor: (instance) => any`** Callback used for sorting the complex object

**`propertyAccessor: (obj: any, thisRef?) => any`** Callback used for accessing complex object primitives

eg:

```typescript
 @Column({ propertyAccessor:(obj:UserModel, thisRef):string => obj.role.name }) rolename :string
```

### MatAdvancedTableComponent

**`@Input() columns: ColumnModel[]` (Required)** : The table column array definition. it comes from the `@Column` decorator

**`@Input() data: any[]` (Optional)** : The data to be displayed

**`@Input() loading: boolean` (Optional)** : Whether data is loading

**`@Input() legend: TemplateRef<any>` (Optional)** : The legend template

**`@Input() @ContentChild("noDataTemplate") noDataTemplate: TemplateRef<any>` (Optional)** : The empty data template

**`@Input() @ContentChild("loadingTemplate") loadingTemplate: TemplateRef<any>` (Optional)** : The loading data template

**`@Input() selection: SelectionModel` (Optional)** : The table initial selection

**`@Input() rowNgClassFun: (item: any) => string` (Optional)** : A helper function to returns a row dependant class string

**`@Input() options:NgxMatTableOptions` (Optional)** : The table options with it's defaults values : `NgxMatTableOptionsDefaults`
| Option | Definition | Type | Default |
| ------------- | ------------------------------------------------------------------------------------------ | -------- | ----------------- |
| minCellWidth | The table cell's min-width style attribute in px | number | 80 |
| maxCellWidth | The table cell's max-width style attribute in px | number | 200 |
| classList | a list of classes to add to the table (eg: ['table-responsive','compact']... | string[] | [] |
| title | The table header title | string | null |
| actions | Whether to show the actions column (Template is issued with the MatCellTemplate Directive) | boolean | false |
| actionsLabel | The actions column header label | string | Actions |
| paging | Whether to show the MatPaginator | boolean | true |
| search | Whether to show the Search bar and activate the advanced filter | boolean | true |
| selection | whether to show the selection column | boolean | false |
| placeholder | Empty value placeholder | string | N/A |
| emptyDataText | The no data message to be displayed under the table columns | string | No Data available |
| loadingText | The loading text to be displayed when data is loading | string | Please wait |

### MatCellTemplateDirective (Selector : _matATCellTemplate_)

**`@Input() name:string` (Required)** : The column cell template name and it must be present in the @Table definition

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
<mat-table-advanced
  [columns]="userModelColumns"
  [data]="users$ | async"
></mat-table-advanced>
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
