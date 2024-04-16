export const TipsTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
      <table className="w-full text-sm text-blue-100 text-left">
        <thead className="text-lg text-white bg-blue-600">
          <tr>
            <th scope="col" className="px-6 py-3">
              受壓者可能會有以下的表現
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="text-xl text-blue-600 bg-white">
          <tr className="border-b border-blue-400">
            <th scope="row" className="px-6 py-4">
              經常都忙碌
            </th>
            <th className="px-6 py-4">情緒化</th>
          </tr>
          <tr className="border-b border-blue-400">
            <th scope="row" className="px-6 py-4">
              緊張
            </th>
            <th className="px-6 py-4">抱怨</th>
          </tr>
          <tr className="border-b border-blue-400">
            <th scope="row" className="px-6 py-4">
              討厭⾃己只是坐著⽽什麼都不做
            </th>
            <th className="px-6 py-4">缺乏幽默感</th>
          </tr>
          <tr className="border-b border-blue-400">
            <th scope="row" className="px-6 py-4">
              不能夠作出決定或⼗分固執
            </th>
            <th className="px-6 py-4">很容易發怒</th>
          </tr>
          <tr className="border-b border-blue-400">
            <th scope="row" className="px-6 py-4">
              討厭⾃己只是坐著⽽什麼都不做
            </th>
            <th className="px-6 py-4">缺乏幽默感</th>
          </tr>
          <tr className="border-b border-blue-400">
            <th scope="row" className="px-6 py-4">
              ⽋缺耐性
            </th>
            <th className="px-6 py-4">善忘</th>
          </tr>
          <tr className="border-b border-blue-400">
            <th scope="row" className="px-6 py-4">
              經常批評⾃己或他人
            </th>
            <th className="px-6 py-4">不會真正的聆聽別⼈</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
