import { Column, Table } from "mat-advanced-table";

@Table
export class Transaction {
  @Column()
  product: string;
  @Column({ verboseName: "Transaction date", canSort: true, sortBy: "desc" })
  transaction_date: Date;
  @Column({
    format: ".3",
    verboseName: "Price",
    canSort: true,
  })
  price: number;
  @Column({
    verboseName: "Payment type",
  })
  payment_type: string;
  @Column({
    verboseName: "Name",
  })
  name: string;
  @Column({
    verboseName: "City",
  })
  city: string;
  @Column({
    verboseName: "State",
  })
  state: string;
  @Column({
    verboseName: "Country",
  })
  country: string;
  @Column({
    verboseName: "Account created",
    canSort: true,
  })
  account_created: Date;
  @Column({
    verboseName: "Last Login",
  })
  last_login: Date;
  @Column({
    verboseName: "Location",
    propertyAccessor: (location, instance) => ({
      lat: instance.latitude,
      long: instance.longitude,
    }),
  })
  location: any;
}
