import { Form, Input, InputNumber } from 'antd';

type Props = {
  handleSubmit: (value: any) => void;
};

export const ProductAdd = (props: Props) => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
    props.handleSubmit(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="add-product"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input product name' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[
          { required: true, message: 'Please input product price!' },
          { type: 'number' },
        ]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Quantity"
        name="quantity"
        rules={[
          { required: true, message: 'Please input product Quantity!' },
          { type: 'number' },
        ]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Barcode"
        name="barcode"
        rules={[{ required: true, message: 'Please input product Barcode!' }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};
