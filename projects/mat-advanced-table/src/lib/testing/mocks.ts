import { Column } from "../decorators/column";
import { Table } from "../decorators/table";

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
export class MockCategory {
  name: string;
  description: string;
}
@Table
export class MockAdvancedClass {
  @Column()
  code: string;
  @Column({
    format: ".3",
  })
  price: number;
  @Column()
  name: string;
  @Column({
    propertyAccessor: (obj) => obj.name,
  })
  category: MockCategory;
}
export const advancedMockData: MockAdvancedClass[] = [
  {
    code: "123abc",
    price: 2121,
    name: "Test product 1",
    category: { name: "Test cat", description: "...." },
  },
  {
    code: "21893adaslm",
    price: 32898,
    name: "Test product 2",
    category: { name: "Test cat 2", description: "...." },
  },
  {
    code: "342uldnasjn",
    price: 32,
    name: "Test product 3 ",
    category: { name: "Test cat 3 ", description: "...." },
  },
];
