import { Column, Table } from "mat-advanced-table";

class Category {
  name: string;
  description: string;
}
@Table
export class Product {
  @Column({ verboseName: "Ref", canSort: true, sortBy: "desc" })
  code: string;
  @Column({
    verboseName: "High Price",
    canSort: true,
    propertyAccessor: (obj, instance) => instance.price > 1000,
  })
  isHighPrice: boolean;

  @Column({
    format: ".3",
    verboseName: "Price",
    canSort: true,
  })
  price: number;
  @Column({
    verboseName: "Name",
    canSort: true,
  })
  name: string;
  @Column({
    verboseName: "Category",
    canSort: true,
    propertyAccessor: (obj) => obj.name,
  })
  category: Category;
}
