import React from "react";

const Record = ({
  record: { id, name, price, quantity, cost },
  index,
  removeRecord,
}) => {
  const handleDelBtn = () => {
    removeRecord(id);
  };

  return (
    <tr className="row group bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-6 py-4 row-no">{index + 1}</td>
      <th
        scope="row"
        className="row-product-name px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td className="px-6 py-4 text-end">
        $ <span className="row-product-price">{price.toFixed(2)}</span>
      </td>
      <td className="px-6 py-4 text-end">
        <button className="row-q-sub -translate-x-10 group-hover:translate-x-0 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto print:hidden active:scale-75 duration-300 bg-gray-200 rounded p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 pointer-events-none"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>
        <span className="row-quantity w-5 inline-block">{quantity}</span>
        <button className="row-q-add translate-x-10 group-hover:translate-x-0 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto print:hidden active:scale-75 duration-300 bg-gray-200 rounded p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </td>
      <td className="px-6 py-4 text-end">
        $ <span className="row-cost">{cost.toFixed(2)}</span>
      </td>
      <td className="px-6 py-4 text-right">
        <button
          onClick={handleDelBtn}
          className="row-del-btn duration-300 translate-x-10 group-hover:translate-x-0 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto print:hidden font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default Record;
