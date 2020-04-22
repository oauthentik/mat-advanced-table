export interface NgxMatTableOptions {
  minCellWidth: number;
  maxCellWidth: number;
  classList: string[];
  title: string;
  actions: boolean;
  stickyHeader: boolean;
  height: number | null;
  actionsLabel: string;
  paging: boolean;
  search: boolean;
  selection: boolean;
  placeholder: string;
  emptyDataText: string;
  loadingText: string;
}
