import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import { Layout } from 'antd';
import { Home } from './Routes/Home/index';
import { ProductContext } from './Context/index';
const { Header, Footer, Content } = Layout;

declare global {
  interface Window {
    electron: {
      ipcRenderer: any;
      store: {
        delete: (key: string) => any;
        add: (key: string, val: any) => void;
        export: () => any;
      };
    };
  }
  interface product {
    id?: number;
    name: string;
    price: number;
    quantity: number;
    barcode: string;
  }
}

export default function App() {
  const [products, setData] = useState<product[]>([]);
  const setNewProduct = (product: product) => {
    const newProduct = {
      id: products.length + 1,
      ...product,
    };
    window.electron.store.add('add-product', newProduct);
  };
  window.electron.ipcRenderer.on('Products', (data: product[]) => {
    setData(data);
  });
  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <div className="body-content">
          <ProductContext.Provider
            value={{
              products,
              setNewProduct,
            }}
          >
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Router>
          </ProductContext.Provider>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Tesseract Design ©2022</Footer>
    </Layout>
  );
}
