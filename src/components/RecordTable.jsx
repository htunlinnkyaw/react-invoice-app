import React from "react";
import RecordGroup from "./RecordGroup";

const RecordTable = ({ records, addRecord, removeRecord }) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            #
          </th>
          <th scope="col" className="px-6 py-3">
            Product name
          </th>
          <th scope="col" className="px-6 py-3 text-end">
            Price
          </th>
          <th scope="col" className="px-6 py-3 text-end">
            Quantity
          </th>
          <th scope="col" className="px-6 py-3 text-end">
            Cost
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody id="recordGroup">
        <RecordGroup records={records} removeRecord={removeRecord} />
      </tbody>
      <tfoot>
        <tr className="border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 hidden last:table-row">
          <th
            scope="row"
            colSpan="4"
            className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white"
          >
            Total
          </th>
          <td className="px-6 py-4 text-end">
            $
            <span id="recordTotal">
              {records.reduce((pv, cv) => pv + cv.cost, 0).toFixed(2)}
            </span>
          </td>
          <td />
        </tr>
      </tfoot>
    </table>
  );
};

export default RecordTable;
