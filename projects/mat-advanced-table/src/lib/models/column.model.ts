export class ColumnModel {
  /** List of options */
  verboseName: string;
  key: string;
  order: number;
  propertyType: "String" | "Date" | "Number" | "Object";
  canSort: boolean;
  sortBy: "asc" | "desc";
  visible: boolean;
  format: string | false;
  sortByAccessor: (instance) => any;
  propertyAccessor: (obj: any, thisRef?) => any;
  constructor(options: Partial<ColumnModel> = {}) {
    this.key = options.key;
    this.visible = options.visible || true;
    this.order = options.order || 0;
    this.verboseName = options.verboseName;
    this.sortBy = options.sortBy;
    this.propertyType = options.propertyType || "String";
    this.format =
      options.format === false
        ? null
        : this.propertyType === "Number"
        ? ".2"
        : this.propertyType === "Date"
        ? options.format
        : null;
    this.canSort = options.canSort || false;
    this.sortByAccessor = options.sortByAccessor;
    this.propertyAccessor = options.propertyAccessor || null;
  }
}
