import MaxWidthWrapper from "@/components/maxwidthwrapper";
import HeroSection from "@/components/shared/hero";
import { factsvg, rumorsvg } from "@/constants";
import { GiAbstract089, GiKidneys } from "react-icons/gi";
import { RiVirusFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";

const DiabetesPage = () => {
  return (
    <>
      <HeroSection
        title={"糖尿病"}
        subtitle={
          "我們所進食的碳水化合物 ( 包括糖分、澱粉質等 ) 經消化後會轉變為葡萄糖，由小腸吸收進入血液循環系統，成為血糖。"
        }
        backgroundImage={"/bg-diabetes.jpg"}
      />
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-between items-center">
            <h2>糖尿病</h2>
            <div className="flex flex-col justify-center items-center px-4 lg:px-24 m-5">
              <p>
                胰島素是由胰臟細胞分泌，作用是控制身體的血糖水平，當胰臟的胰島素分泌不足或胰島素不能發揮功能時，血液內的糖分便不能夠轉化成人體所需的能量，導致血糖增高。過剩的糖分經由尿液排出體外，故稱為糖尿病。根據世界衞生組織定義空腹（即禁食8小時或以上）血糖值等如或高於
                7.0 度（mmol/L）或餐後二小時的血糖值等如或高於11.1度（mmol/L）
                便謂之糖尿病。而全港約有十分之一的成年人患有糖尿病。
              </p>
              <h4>糖尿病可因其病徵及成因而分為四類：</h4>
            </div>
          </div>
          <div className="w-full mx-auto">
            <div className="flex flex-col justify-center items-center px-4">
              <div className="grid gap-x-16 lg:grid-cols-4 grid-cols-2 lg:gap-x-24">
                <div className="mb-12 lg:mb-0">
                  <div className="mb-6 inline-block rounded-full bg-blue-100 p-4 text-primary shadow-sm">
                    <RiVirusFill className="w-8 h-8" />
                  </div>
                  <h5 className="mb-4 text-2xl font-bold">一型糖尿病</h5>
                </div>
                <div className="mb-12 lg:mb-0">
                  <div className="mb-6 inline-block rounded-full bg-blue-100 p-4 text-primary shadow-sm">
                    <RiVirusFill className="w-8 h-8" />
                  </div>
                  <h5 className="mb-4 text-2xl font-bold">二型糖尿病</h5>
                </div>
                <div className="mb-12 lg:mb-0">
                  <div className="mb-6 inline-block rounded-full bg-blue-100 p-4 text-primary shadow-sm">
                    <RiVirusFill className="w-8 h-8" />
                  </div>
                  <h5 className="mb-4 text-2xl font-bold">妊娠糖尿病</h5>
                </div>
                <div className="mb-12 lg:mb-0">
                  <div className="mb-6 inline-block rounded-full bg-blue-100 p-4 text-primary shadow-sm">
                    <RiVirusFill className="w-8 h-8" />
                  </div>
                  <h5 className="mb-4 text-2xl font-bold">繼發性糖尿病</h5>
                </div>
              </div>
              <div className="lg:px-24 px-4 m-5">
                <p>
                  二型糖尿病（以往稱為「非胰島素倚賴型」）是最常見的糖尿病類型，多見於成年人。病因是身體細胞對胰島素產生抗拒，使細胞不能有效攝取及利用葡萄糖，導致過多糖分積存在血液。此類糖尿病主要與遺傳、不健康飲食習慣、肥胖及缺乏運動等風險因素有關。
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="mb-32">
        <div className="container my-24 mx-auto md:px-6">
          <div className="block rounded-lg bg-white shadow-2xl">
            <div className="flex flex-wrap items-center">
              <div className="w-2/3 shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <img
                  src="/diabetes/d1.jpg"
                  alt=""
                  className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                />
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <h2>糖尿病的風險因素</h2>
                  <p className="mb-6 text-neutral-500">
                    在人生歷程中不同階段出現的因素會影響患上糖尿病的風險，例如：
                    <br />• 年齡 45 歲或以上
                    <br />• 超重及肥胖
                    <br />• 以往曾錄得空腹血糖異常 (Impaired Fasting Glucose)
                    或血糖耐量異常 (Impaired Glucose Tolerance)
                    <br />• 患有代謝症候群
                    <br />• 患有高血壓
                    <br />• 患有心血管疾病 ( 如冠心病、周邊血管疾病及中風 )
                    <br />• 患有心血管疾病的風險因素 (
                    如高血脂、高密度脂蛋白膽固醇偏低、低密
                    <br />• 度脂蛋白膽固醇偏高、吸煙及缺乏運動 )<br />•
                    家族中有直系親屬患有糖尿病
                    <br />• 如為女性，曾患妊娠糖尿病或患有多囊卵巢綜合症
                    <br />• 長期接受類固醇治療
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center">
            <div className="flex flex-col justify-center items-center px-4 lg:px-24 m-5">
              <p>
                由於大部份糖尿病患者可能完全沒有徵狀，因此建議有糖尿病風險的人士，應與家庭醫生商討，以作出合適的檢查，如每三年檢查一次；及視乎風險因素而作出較頻密的檢查，避免延誤診斷或治療。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-between items-center">
            <h2>糖尿病對健康造成的影響</h2>
            <div className="flex flex-col justify-center items-center px-4 lg:px-24 m-5">
              <p>
                由於你的身體不能控制血糖於正常水平，血糖便會過高。血糖長期過高會導致血管病變，令多個器官出現問題，影響心臟、眼睛、腎臟及神經系統等。因此糖尿病是引起腎衰竭、失明、心血管疾病、中風及下肢潰瘍的主要成因。
              </p>
              <h4>令器官出現問題：</h4>
            </div>
          </div>
          <div className="w-full mx-auto">
            <div className="flex flex-col justify-center items-center px-4">
              <div className="grid gap-x-16 lg:grid-cols-4 grid-cols-2 lg:gap-x-24">
                <div className="mb-12 lg:mb-0">
                  <div className="mb-6 inline-block rounded-full bg-pink-100 p-4 text-pink-500 shadow-sm">
                    <GoHeartFill className="w-8 h-8" />
                  </div>
                  <h5 className="mb-4 text-2xl font-bold">心臟</h5>
                </div>
                <div className="mb-12 lg:mb-0">
                  <div className="mb-6 inline-block rounded-full bg-pink-100 p-4 text-pink-500 shadow-sm">
                    <FaEye className="w-8 h-8" />
                  </div>
                  <h5 className="mb-4 text-2xl font-bold">眼睛</h5>
                </div>
                <div className="mb-12 lg:mb-0">
                  <div className="mb-6 inline-block rounded-full bg-pink-100 p-4 text-pink-500 shadow-sm">
                    <GiKidneys className="w-8 h-8" />
                  </div>
                  <h5 className="mb-4 text-2xl font-bold">腎臟</h5>
                </div>
                <div className="mb-12 lg:mb-0">
                  <div className="mb-6 inline-block rounded-full bg-pink-100 p-4 text-pink-500  shadow-sm">
                    <GiAbstract089 className="w-8 h-8" />
                  </div>
                  <h5 className="mb-4 text-2xl font-bold">神經系統</h5>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-between items-center">
            <h2>如何得知血糖控制情況？</h2>
          </div>
        </MaxWidthWrapper>
        <div className="container mx-auto text-center lg:text-left xl:px-16 mt-24 px-6">
          <div className="flex items-center lg:grid lg:grid-cols-2">
            <div className="mb-12 lg:mb-0">
              <div className="relative z-[1] block rounded-lg bg-slate-100 px-6 py-12 shadow-2xl backdrop-blur-[30px] md:px-12 lg:-mr-14">
                <h4>糖化血紅素 (HbA1c)</h4>
                <p>
                  透過定期檢查糖化血紅素 (HbA1c) 可得知最近 2 至 3
                  個月內的血糖控制情況，而理想的血糖控制 ( 理想的 HbA1c
                  水平一般應保持在少於 7%) 有助延緩及預防併發症的出現。
                  <br />
                  <br />
                </p>
                <h4>空腹及餐後血糖值</h4>
                <p>
                  醫生會根據需要，建議糖尿病患者作定期自我監察血糖，以便能更有效控制血糖，從而減低併發症的出現。
                  <br />
                  <br />
                </p>
                <h4>尿液糖分測試</h4>
                <p>
                  尿液糖分測試只可測試尿液中的糖分，但並不能準確反映真正的血糖值，或顯示有血糖過低的情況。
                </p>
              </div>
            </div>
            <div>
              <img
                src="/diabetes/d3.jpg"
                className="w-full rounded-lg shadow-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-between items-center">
            <h2>糖尿病的常見謬誤</h2>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-xl text-left rtl:text-right text-blue-100 ">
              <thead className="text-2xl text-black bg-slate-300 border-b border-blue-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex flex-col items-center justify-center">
                      <svg
                        viewBox="0 0 256 256"
                        fill="currentColor"
                        className="w-32 h-32 text-primary"
                      >
                        <path
                          fillRule="evenodd"
                          d={rumorsvg}
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      謬誤
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex flex-col items-center justify-center">
                      <svg
                        viewBox="0 0 256 256"
                        fill="currentColor"
                        className="w-32 h-32 text-primary"
                      >
                        <path
                          fillRule="evenodd"
                          d={factsvg}
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      事實
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-blue-600 border-b border-blue-400">
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap "
                  >
                    1. 我一向身體健康，需要檢驗有否患上糖尿病嗎？
                  </td>
                  <td className="px-6 py-4">
                    建議45歲或以上人士檢驗有否患上糖尿病。若結果正常，
                    則每三年再檢驗一次。無論任何年齡的人士，如有其他糖尿病風險因素，例如超重、肥胖、
                    有直系親屬患有糖尿病等，應較頻密檢驗（例如每年一次）。
                  </td>
                </tr>
                <tr className="bg-blue-600 border-b border-blue-400">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap"
                  >
                    2. 患糖尿病的人一定會有症狀
                  </th>
                  <td className="px-6 py-4">
                    大部份患糖尿病的人未必會有明顯病徵，因此單靠症狀來識別是否患有糖尿病並不可靠。建議有糖尿病風險的人士，與你的家庭醫生商討，定期作出合適的檢查。
                  </td>
                </tr>
                <tr className="bg-blue-600 border-b border-blue-400">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap "
                  >
                    3. 我使用了家人的試紙檢驗小便，
                    <br />
                    顯示無尿糖，我肯定無糖尿病啦
                  </th>
                  <td className="px-6 py-4">
                    使用試紙測試尿糖不能準確診斷是否患上糖尿病。原因是只有當血糖上升至高水平，才會從小便中驗出有尿糖，因此並不是所有糖尿病人都會在試紙測到尿糖的。
                  </td>
                </tr>
                <tr className="bg-blue-600 border-b border-blue-400">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap"
                  >
                    4. 只有攝取過多糖分的人才會患上糖尿病
                  </th>
                  <td className="px-6 py-4">
                    糖尿病主要的成因是胰島素分泌不足，或對胰島素產生抗拒，使身體不能有效攝取和使用葡萄糖，引致血液內的糖分過高。其實除了糖分，過量攝取蛋白質、脂肪等高卡路里食物也會導致超重或肥胖，從而增加患上糖尿病的風險，因此均衡飲食和理想的體重控制十分重要。
                  </td>
                </tr>
                <tr className="bg-blue-600 border-b border-blue-400">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap"
                  >
                    5. 碳水化合物對糖尿病不好，所以要完全戒食
                  </th>
                  <td className="px-6 py-4">
                    碳水化合物是健康飲食的基礎，當中含有對身體有益的維生素、礦物質及纖維。只要懂得適量調整碳水化合物進食的份量，就無必要完全戒食。
                  </td>
                </tr>
                <tr className="bg-blue-600 border-b border-blue-400">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap"
                  >
                    6. 人工甜味劑會危害糖尿病患者
                  </th>
                  <td className="px-6 py-4">
                    人工甜味劑比一般糖的甜度高很多，只需要很少的分量就能達到與糖相同的甜度，因此可減低從糖所吸收的卡路里。
                  </td>
                </tr>
                <tr className="bg-blue-600 border-b border-blue-400">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap"
                  >
                    7. 水果是健康食品，糖尿病人多食無妨
                  </th>
                  <td className="px-6 py-4">
                    雖然水果含有營養和纖維素，但當中的碳水化合物亦會成為身體所攝取的卡路里的一部份，也會影響血糖。所以無論是水果或任何食物，食用時都需注意分量。
                  </td>
                </tr>
                <tr className="bg-blue-600 border-b border-blue-400">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap"
                  >
                    8. 根據「升糖指數」，
                    <br />
                    選擇低升糖食物能有效地控制糖尿病嗎？
                  </th>
                  <td className="px-6 py-4 min-w-96">
                    「升糖指數」是用來量度各類含碳水化合物的食物在進食後對血糖影響程度的數值。個別食物的「升糖指數」，只適用於進食該單項食物時的狀況。
                    <br />
                    同時進食其他食物、採用不同的烹調方法或食物處理過程、個別食物的化學結構及來源地差異、又或水果的成熟程度，都可能影響「升糖指數」的應用。它只是計劃餐單時其中一項可考慮因素。糖尿病患者應注意每餐的總食量及食物種類的配搭，並多進食含高纖維量的食物及控制脂肪的攝取量。每個人所需要的營養和分量都不同，要有效地控制糖尿病，請諮詢營養師及醫護人員。
                  </td>
                </tr>
                <tr className="bg-blue-600 border-b border-blue-400">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap"
                  >
                    9. 糖尿病人只能進食特別糖尿病餐
                  </th>
                  <td className="px-6 py-4">
                    劃一的「特別」糖尿病餐並不存在。糖尿病人應奉行健康飲食金字塔的飲食原則，並以均衡飲食、定時定量，和理想攝取熱量的控制為目標。由於每位糖尿病人所需的營養和分量不同，
                    生活習慣也不同，因此應按照自己的健康和生活所需，訂立適合自己的餐單。
                  </td>
                </tr>
                <tr className="bg-blue-600 border-b border-blue-400">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap"
                  >
                    10. 有糖尿病可以做運動嗎？
                  </th>
                  <td className="px-6 py-4 min-w-96">
                    恆常體能活動對治療糖尿病非常重要。建議糖尿病患者每星期進行150分鐘中等強度或75分鐘劇烈強度帶氧體能活動，以及每周至少2天(非連續的2天)進行肌肉強化活動。由於糖尿病患者可能存在著某些風險因素，例如視網膜病變、隱性的心臟病等，加上部分降血糖藥物有機會引致運動期間血糖過低，故此，糖尿病患者應在開展運動計劃前徵詢醫生的意見，以對運動類別、次數和持續的時間作適當和針對性的調整。
                  </td>
                </tr>
                <tr className="bg-blue-600 border-b border-blue-400">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap"
                  >
                    11. 如果開始服用糖尿藥，
                    <br />
                    便需要服用一輩子，我還是不開始服藥為妙
                  </th>
                  <td className="px-6 py-4 min-w-96">
                    糖尿病是一種慢性疾病，除了均衡飲食及適量運動以外，
                    很多時也需要使用藥物治療，以控制理想的血糖水平，達到最佳的效果。相反，若不依照醫生的建議進行持續治療，會增加出現糖尿病併發症的風險。
                  </td>
                </tr>
                <tr className="bg-blue-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap"
                  >
                    12. 注射胰島素代表我的糖尿病已到了末期
                  </th>
                  <td className="px-6 py-4 min-w-96">
                    其實胰島素並非嚴重糖尿病專有的治療方式，相反，個別患者在診斷初期已適宜使用胰島素。醫生會根據患者的病情需要，處方適當的口服降糖藥或胰島素，又或是兩者混合使用，以達至最佳的控糖效果。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default DiabetesPage;
