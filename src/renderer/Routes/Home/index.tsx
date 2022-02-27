import { useState, useContext, FC } from 'react';
import { Button } from 'antd';
import { ProductContext } from '../../Context/index';
import { columns } from './config';
import { Table } from '../../Components/Table';
import { Modal } from '../../Components/Modal';
import { ProductAdd } from './ProductAdd';
import './index.scss';

export const Home: FC = () => {
  const { products, setNewProduct } = useContext(ProductContext);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (product: product) => {
    setIsModalVisible(false);
    setNewProduct(product);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="tesseract-dashboard">
      <div className="add-product">
        <Button type="primary" onClick={showModal}>
          Add New Product
        </Button>
      </div>
      <Modal
        title="Add New Product"
        visible={isModalVisible}
        customFooter={{
          footer: [
            <Button type="default" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button
              type="primary"
              form="add-product"
              key="submit"
              htmlType="submit"
            >
              Submit
            </Button>,
          ],
        }}
      >
        <ProductAdd handleSubmit={handleOk} />
      </Modal>
      <Table columns={columns} data={products} scroll={{ x: 1300 }} />
    </div>
  );
};
