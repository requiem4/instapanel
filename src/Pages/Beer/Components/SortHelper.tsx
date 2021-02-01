
function descendingComparator<T, >(a: T, b: T, orderBy: any) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export type Order = 'asc' | 'desc';
export function getComparator(
    order: Order,
    orderBy: string,
): (a: number | string, b: number | string ) => number {
  return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
}

export function tableSort<TableInterface, TableItemInterface>(array: TableInterface[],
                                                              comparator: (a: TableItemInterface, b: TableItemInterface) => number | string): [] {
  const stabilizedThis = array.map((el, index) => [el, index]);
  // @ts-ignore
  stabilizedThis.sort((a:TableItemInterface, b:TableItemInterface) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  // @ts-ignore
  return stabilizedThis.map((el:TableItemInterface) => el[0]);
}