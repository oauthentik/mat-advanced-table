export interface NgxMatTableStyleOptions {
  selectedRowClass: string;
  tableRowHeight: string;
  tableHeaderClass: string;
  denseDisplay: boolean;
}
export interface NgxMatTableOptions {
  minCellWidth: number;
  maxCellWidth: number;
  searchDebouce: number;
  classList: string[];
  title: string;
  actions: boolean;
  stickyHeader: boolean;
  height: number | null;
  actionsLabel: string;
  styles: NgxMatTableStyleOptions;
  paging: boolean;
  search: boolean;
  selection: boolean;
  placeholder: string;
  emptyDataText: string;
  loadingText: string;
}
