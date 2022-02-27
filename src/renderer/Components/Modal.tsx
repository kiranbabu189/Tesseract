import { Modal as AModal } from 'antd';

type Props = {
  visible: boolean;
  title: string;
  handleOk?: () => void;
  handleCancel?: () => void;
  children: any;
  customFooter?:any
};

export const Modal = (props: Props) => {
  return (
    <AModal
      title={props.title}
      visible={props.visible}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      {...(props.customFooter ? {...props.customFooter} : null)}
    >
      {props.children}
    </AModal>
  );
};
