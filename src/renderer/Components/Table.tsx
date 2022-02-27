import { Table as ATable } from 'antd';

type Props = {
  columns: [],
  data:[]
}

export const Table = (props: Props) => {
  return (
    <ATable columns={props.columns} dataSource={props.data} scroll={{ x: 1300 }} />
  )
}
