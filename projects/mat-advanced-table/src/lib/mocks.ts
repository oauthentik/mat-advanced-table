import { Column } from "./decorators/column";
import { Table } from "./decorators/table";

@Table
export class MockClass {
  @Column()
  foo: string;
  @Column()
  bar: number;
}
export const mockData = [
  { foo: "Test value", bar: 21 },
  { foo: "Mock value", bar: 23 },
];
