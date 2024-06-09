import React from "react";

const EmptyStage = () => {
  return (
    <tr className="bg-white hidden last:table-row border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        colSpan="6"
        className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white"
      >
        There is no record
      </th>
    </tr>
  );
};

export default EmptyStage;
