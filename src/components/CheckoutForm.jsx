import React, { useRef } from "react";

const CheckoutForm = ({ products, addRecord }) => {
  const idRef = useRef("");
  const quantityRef = useRef("");

  const handleBuyBtn = () => {
    const currentProduct = products.find(
      (product) => product.id === parseInt(idRef.current.value)
    );
    const cost = currentProduct.price * quantityRef.current.valueAsNumber;
    const newRecord = {
      id: Date.now(),
      productId: parseInt(idRef.current.value),
      name: currentProduct.name,
      price: currentProduct.price,
      quantity: quantityRef.current.valueAsNumber,
      cost,
    };
    addRecord(newRecord);
    idRef.current.value = 1;
    quantityRef.current.value = "";
  };

  return (
    <section className="mb-10 print:hidden" id="createFormSection">
      <div id="createForm">
        <div className="flex gap-3 border rounded-lg p-5">
          <div className="basis-5/12">
            <label
              htmlFor="productSelect"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>
            <select
              id="productSelect"
              name="productSelect"
              ref={idRef}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {products.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="basis-5/12">
            <div>
              <label
                htmlFor="inputQuantity"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Quantity
              </label>
              <input
                type="number"
                id="inputQuantity"
                ref={quantityRef}
                name="inputQuantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
          </div>
          <button
            onClick={handleBuyBtn}
            type="submit"
            className="text-white bg-blue-700 basis-2/12 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Buy
          </button>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
