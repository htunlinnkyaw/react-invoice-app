import React, { useState } from "react";
import Header from "./components/Header";
import CheckoutForm from "./components/CheckoutForm";
import RecordTable from "./components/RecordTable";
import Footer from "./components/Footer";
import ProductDrawer from "./components/ProductDrawer";

const App = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Apple",
      price: 0.5,
    },
    {
      id: 2,
      name: "Banana",
      price: 0.3,
    },
    {
      id: 3,
      name: "Cherry",
      price: 0.2,
    },
    {
      id: 4,
      name: "Orange",
      price: 1.0,
    },
    {
      id: 5,
      name: "Mango",
      price: 1.5,
    },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const [records, setRecord] = useState([]);

  const addRecord = (newRecord) => {
    setRecord([...records, newRecord]);
  };

  const removeRecord = (id) => {
    setRecord(records.filter((record) => record.id != id));
  };

  return (
    <div className="max-w-[1000px] px-5 lg:px-0 py-5 mx-auto h-screen flex flex-col">
      <Header />
      <CheckoutForm addRecord={addRecord} products={products} />
      <RecordTable removeRecord={removeRecord} records={records} />
      <Footer handleDrawer={handleDrawer} />
      <ProductDrawer
        addProduct={addProduct}
        products={products}
        handleDrawer={handleDrawer}
        openDrawer={openDrawer}
      />
    </div>
  );
};

export default App;
