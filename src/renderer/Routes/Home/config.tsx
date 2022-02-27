
type TABLE_CONFIG = {
  title: string,
  width?: number,
  dataIndex?: string,
  key: string,
  fixed?: string,
  render?: any
}

export const columns:TABLE_CONFIG[] = [
  {
    title: '#',
    width: 100,
    dataIndex: 'id',
    key: 'id',
    fixed: 'left',
  },
  {
    title: 'Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Quantity',
    width: 100,
    dataIndex: 'quantity',
    key: 'quantity',
    fixed: 'left',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Barcode',
    dataIndex: 'barcode',
    key: 'barcode',
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];
