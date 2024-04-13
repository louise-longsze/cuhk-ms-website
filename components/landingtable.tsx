export const LandingTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full max-w-7xl">
      <table className="w-full text-sm text-blue-100 text-left">
        <thead className="text-lg text-white bg-blue-600">
          <tr>
            <th scope="col" className="px-6 py-3">
              高危因素
            </th>
            <th scope="col" className="px-6 py-3">
              相關血液濃度或讀數
            </th>
          </tr>
        </thead>
        <tbody className="text-xl text-blue-600 bg-white">
          <tr className="border-b border-blue-400">
            <th scope="row" className="px-6 py-4">
              “好”膽固醇偏低
            </th>
            <td className="px-6 py-4">
              男性：&lt; 1.03mmol/L
              <br />
              女性：&lt; 1.29mmol/L
              <br />
              或需服用降膽固醇藥物
            </td>
          </tr>
          <tr className="border-b border-blue-400">
            <th scope="row" className="px-6 py-4 whitespace-nowrap">
              三酸甘油酯偏高
            </th>
            <td className="px-6 py-4">
              &#8807; 1.7mmol/L
              <br />
              或需服用降血脂藥物
            </td>
          </tr>
          <tr className="border-b border-blue-400">
            <th scope="row" className="px-6 py-4 whitespace-nowrap">
              高血壓
            </th>
            <td className="px-6 py-4">
              上壓：&#8807; 130mmHg
              <br />
              下壓：&#8807; 85mmHg
              <br />
              或需服用降血壓藥物
            </td>
          </tr>
          <tr className="border-blue-400">
            <th scope="row" className="px-6 py-4 whitespace-nowrap">
              空腹血糖偏高
            </th>
            <td className="px-6 py-4">
              血糖：&#8807; 5.6mmol/L
              <br />
              或需服用降血糖藥物
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
