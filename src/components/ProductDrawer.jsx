import React from "react";
import ProductCreateForm from "./ProductCreateForm";
import ProductGroup from "./ProductGroup";

const ProductDrawer = ({ openDrawer, handleDrawer, products, addProduct }) => {
  return (
    <section
      id="inventorySheet"
      className={`fixed w-80 h-screen bg-gray-50 shadow-lg right-0 top-0 duration-300 z-50 p-5 ${
        !openDrawer && "translate-x-full"
      }`}
    >
      <div className="sheet-header flex justify-between mb-10">
        <h1 className="text-2xl font-bold">Your Product</h1>
        <button
          onClick={handleDrawer}
          id="inventorySheetCloseBtn"
          className="border p-2 duration-300 rounded active:scale-75 active:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ProductGroup products={products} />
      <ProductCreateForm addProduct={addProduct} />
    </section>
  );
};

export default ProductDrawer;
