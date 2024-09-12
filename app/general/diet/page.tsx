import MaxWidthWrapper from "@/components/maxwidthwrapper";
import HeroSection from "@/components/shared/hero";
import { dietlist1, diettable, nutlist } from "@/constants";
import { TiTick, TiTimes } from "react-icons/ti";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IoFemale, IoMale } from "react-icons/io5";

const DietPage = () => {
  return (
    <>
      <HeroSection
        title={"健康飲食"}
        subtitle={
          "不健康的飲食除了會引發⼼臟病，以及令⼼臟病的情況更差外，也會引致其他問題。"
        }
        backgroundImage={"/bg-diet.jpg"}
      />
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-between items-center">
            <h2>關於脂肪</h2>
            <div className="lg:px-24 px-4 m-5">
              <p>
                健康的飲⾷包括進⾷少些脂肪，這也包括改變你進⾷脂肪的種類。脂肪有多種不同的形態，我們需要脂肪來使身體可以有正常的運作。脂肪可以是液體狀態，例如粟⽶油，也可以是固體狀態，像烹調用脂肪。有時我們是可以看見脂肪的，像肉類上的脂肪；但它也可以是看不見的，像隱藏在蛋糕內的脂肪。除了這些較明顯的分別外，你也可能聽過另外三種不同種類的脂肪。
              </p>
            </div>
          </div>

          <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm lg:mb-12 lg:grid-cols-3 bg-white">
            <figure className="flex flex-col justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                <div className="flex justify-center ">
                  <img
                    className="w-96 h-96 object-cover"
                    src="/diet/fat1.jpg"
                  ></img>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 pt-4">
                  飽和脂肪
                </h3>
                <p className="my-4">
                  ⾁類和奶類⾷物都含有很豐富的飽和脂肪。很多烤過的食物都含有很高的飽和脂肪。飽和脂肪能令⾎內的膽固醇⽔平上升。
                </p>
              </blockquote>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                <div className="flex items-center justify-center ">
                  <img
                    className="w-96 h-96 object-cover"
                    src="/diet/fat2.jpg"
                  ></img>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 pt-4">
                  多元不飽和脂肪
                </h3>
                <p className="my-4">
                  蔬菜類的⾷品，例如粟⽶、向⽇葵和大⾖都含有很豐富的多元不飽和脂肪。⼀些油性的⿂，例如鯖⿂和三⽂⿂都含有很⾼的多元不飽和脂肪。多元不飽和脂肪不會令血管內的膽固醇升高。{" "}
                </p>
              </blockquote>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                <div className="flex items-center justify-center ">
                  <img
                    className="w-96 h-96 object-cover"
                    src="/diet/fat3.jpg"
                  ></img>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 pt-4">
                  單元不飽和脂肪
                </h3>
                <p className="my-4">
                  油性⿂、橄欖油、油菜子和果仁都含有很多單元不飽和脂肪。單元不飽和脂肪能降低⾎管內膽固醇的⽔平。{" "}
                </p>
              </blockquote>
            </figure>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-between items-center">
            <h2>膽固醇參考</h2>
            <div className="lg:px-24 px-4 m-5">
              <p>
                高膽固醇可以引起⼼臟病。降低你的膽固醇水平能夠減慢⾎管粥樣硬化及減低你將來得⼼臟病的機會。
                <br />
                <br />
                ⼼血管疾病⼈士應該盡量避免攝取高膽固醇⾷物，宜進食低或無膽固醇食物，而每日總膽固醇攝取量應少於300毫克。以下列出⼀些飽和脂肪食物的膽固醇:
              </p>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-xl text-left rtl:text-right text-blue-100">
              <thead className="text-xl text-white bg-blue-600">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    膽固醇
                  </th>
                  <th scope="col" className="px-6 py-3">
                    食物
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-blue-500 border-b border-blue-400">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap"
                  >
                    無膽固醇
                    <br />
                    0微克/100 克
                  </th>
                  <td className="px-6 py-4">
                    粟⽶、芝麻、豆、南瓜、
                    <br />
                    椒、蕃茄、竹簥、西蘭花、
                    <br />
                    甘簥、蒜頭、茄子、
                    <br />
                    生菜、菠菜、洋蔥及菇類等
                  </td>
                  <td>
                    <img
                      className="w-full h-52 object-cover"
                      src="/diet/table1.jpg"
                    ></img>
                  </td>
                </tr>
                <tr className="bg-blue-600 border-b border-blue-400">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap"
                  >
                    低量膽固醇
                    <br />
                    0-100微克/100 克
                  </th>
                  <td className="px-6 py-4">豬肉、火腿等</td>
                  <td>
                    <img
                      className="w-full h-52 object-cover"
                      src="/diet/table2.jpg"
                    ></img>
                  </td>
                </tr>
                <tr className="bg-blue-500 border-b border-blue-400">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap"
                  >
                    中量膽固醇
                    <br />
                    100-200微克/100 克
                  </th>
                  <td className="px-6 py-4">
                    牛肉、羊肉、蝦、帶子、
                    <br />
                    豬尾、煙肉、腸仔、膶腸等
                  </td>
                  <td>
                    <img
                      className="w-full h-52 object-cover"
                      src="/diet/table3.jpg"
                    ></img>
                  </td>
                </tr>
                <tr className="bg-blue-600 border-b border-blue-400">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap"
                  >
                    高量膽固醇
                    <br />
                    200以上微克/100 克以上
                  </th>
                  <td className="px-6 py-4">
                    雞蛋、鴨蛋、家禽內臟、墨魚、乾貝等
                  </td>
                  <td>
                    <img
                      className="w-full h-52 object-cover"
                      src="/diet/table4.jpg"
                    ></img>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-between items-center">
            <h4>中式美⾷膽固醇及卡路里指標參考列表(以每100克計算)</h4>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-xl text-left rtl:text-right text-primary">
              <thead className="text-xl text-white bg-primary border-b border-blue-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    點心
                  </th>
                  <th scope="col" className="px-6 py-3">
                    膽固醇 (毫克)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    卡路里 (千卡)
                  </th>
                  <th scope="col" className="px-6 py-3 border-l-4 border-white">
                    點心
                  </th>
                  <th scope="col" className="px-6 py-3">
                    膽固醇 (毫克)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    卡路里 (千卡)
                  </th>
                </tr>
              </thead>
              <tbody>
                {diettable.map((food, index) => {
                  return (
                    <tr
                      className="bg-white border-b border-blue-400 hover:bg-blue-200"
                      key={index}
                    >
                      <td className="px-6 py-4">{food.food1}</td>
                      <td className="px-6 py-4">{food.food1cho}</td>
                      <td className="px-6 py-4">{food.food1kcal}</td>
                      <td className="px-6 py-4 border-l-4 border-primary">
                        {food.food2}
                      </td>
                      <td className="px-6 py-4">{food.food2cho}</td>
                      <td className="px-6 py-4">{food.food2kcal}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="w-full mx-auto">
            <div className="flex flex-col justify-center items-center px-4">
              <h2>如何預防和控制⾼血壓</h2>
              <h4>奉⾏健康的生活模式對預防和控制高血壓⾄為重要，其中包括:</h4>
              <div className="grid gap-x-6 lg:grid-cols-3 lg:gap-x-12">
                {dietlist1.map((diet, index) => {
                  return (
                    <div className="mb-12 lg:mb-0" key={index}>
                      <div className="mb-6 inline-block rounded-full bg-blue-100 p-4 text-primary shadow-sm">
                        <TiTick className="w-8 h-8" />
                      </div>
                      <h5 className="mb-4 text-2xl font-bold">{diet.item}</h5>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="mb-32">
        <div className="container my-24 mx-auto md:px-6">
          <div className="block rounded-lg bg-white shadow-2xl">
            <div className="flex flex-wrap items-center">
              <div className="w-full object-cover shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <img
                  src="/diet/sugar.jpg"
                  alt=""
                  className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                />
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <h2>我可以怎樣減低糖份的吸收呢?</h2>
                  <p className="mb-6 text-neutral-500">
                    若飲品或用餐需用「糖」，請改用代糖。你也可以⽤⽣果或低脂甜品代替蛋糕、餅乾、糖果、朱古⼒和布甸。選擇低卡路⾥的⾷物或不含糖的飲品，或甚至是飲清⽔！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="w-full mx-auto">
            <div className="flex flex-col justify-center items-center px-4">
              <h2>為什麼我應該吃多些纖維呢?</h2>
              <div className="lg:px-24 px-4 m-5">
                <p>
                  我們平時吃的⾷物大部份都是過份淨化的。很多纖維都被抽走。多吃含豐富纖維的食物對你是十分重要的。它除了可以降低膽固醇之外，也可以幫助消化及減少腸胃病。因為纖維容易令人有飽肚的感覺，所以你很自然地會吃少些脂肪和甜品。因此，多吃含豐富纖維的食物有助你減肥。全⿆的麵⾷和糙⽶等都含有豐富的纖維。另外，所有的蔬果都含有豐富的纖維。⾖類⾷物和⿆⽚粥都有不錯的纖維素。
                </p>
              </div>
              <h4>食物的選擇建議</h4>
              <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                  <img
                    src="/diet/diet1.jpg"
                    alt=""
                    className="h-80 object-cover aspect-video"
                  />
                  <div className="flex flex-col justify-center flex-1 p-4">
                    <h3 className="text-3xl font-bold">
                      五穀類
                      <br />
                      每天 250-400 克
                    </h3>
                    <p className="my-4">
                      • 五穀類如白飯、米粉、意粉、通粉、上海麵、烏冬等
                      <br />• 鹹麵包
                      <br />• 低脂餅乾如梳打餅、茶餅、馬利餅、水泡餅、高纖維餅等
                      <br />•
                      宜多選高纖維五穀類食品如全麥麵包及餅乾、糙米、麥皮、全麥穀類早餐
                    </p>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                  <img
                    src="/diet/diet2.jpg"
                    alt=""
                    className="h-80 object-cover aspect-video"
                  />
                  <div className="flex flex-col justify-center flex-1 p-4">
                    <h3 className="text-3xl font-bold">
                      果類
                      <br />
                      每天2碗蔬菜 每天2至3個水果
                    </h3>
                    <p className="my-4">
                      • 各種蔬菜及水果
                      <br />•
                      根莖類食物如薯仔、芋頭、紅蘿蔔及蕃薯等（根莖類含較高澱粉質）
                      <br />•
                      在菜餚中加添高纖維配料如冬菇、蘑菇、百合、雲耳、黑雲耳、粟米、蓮藕、馬蹄、青豆、海帶等
                    </p>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                  <img
                    src="/diet/diet3.jpg"
                    alt=""
                    className="h-80 object-cover aspect-video"
                  />
                  <div className="flex flex-col justify-center flex-1 p-4">
                    <h3 className="text-3xl font-bold">
                      油
                      <br />
                      每天不宜多於 6 茶匙
                    </h3>
                    <p className="my-4">
                      •
                      首選芥花籽油和橄欖油。其他植物油有花生油、黃豆油、粟米油、菜油、麻油、軟植物牛油等
                    </p>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                  <img
                    src="/diet/diet4.jpg"
                    alt=""
                    className="h-80 object-cover aspect-video"
                  />
                  <div className="flex flex-col justify-center flex-1 p-4">
                    <h3 className="text-3xl font-bold">
                      飲品及小食
                      <br />
                      每天6至8杯飲品 多選高纖維小食
                    </h3>
                    <p className="my-4">
                      • 清水、清茶、綠茶、如龍井、碧螺春、 日本綠茶、為龍茶等
                      <br />• 去油清湯、菜湯
                      <br />•
                      高纖維小食如低脂全麥餅乾、全麥麵包、乾果、番暮、栗米、乾豆、果仁等
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="w-full mx-auto">
            <div className="flex flex-col justify-center items-center px-4">
              <h2>限酒</h2>
              <div className="lg:px-24 px-4 m-5">
                <p>
                  如果醫生告訴你，你的健康狀況不允許喝酒，或者你⽬前正在吃的藥物禁止和酒精混合，請你不要喝任何含有酒精的飲品。
                </p>
                <h4>通常情況如下:</h4>
              </div>
              <ResizablePanelGroup
                direction="horizontal"
                className="min-h-[200px] w-full rounded-lg border bg-white"
              >
                <ResizablePanel defaultSize={50}>
                  <div className="flex flex-col h-full items-center justify-center p-6">
                    <div className="flex items-center justify-center w-48 h-48 rounded-md bg-sky-500 text-gray-50">
                      <IoMale className="w-40 h-40" />
                    </div>
                    <h4>男士</h4>
                    <p>
                      每天喝不超過2份酒-即300毫升的紅/白酒
                      <br />
                      或500毫升的啤酒
                    </p>
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={50}>
                  <div className="flex flex-col h-full items-center justify-center p-6">
                    <div className="flex items-center justify-center w-48 h-48 rounded-md bg-pink-500 text-gray-50">
                      <IoFemale className="w-40 h-40" />
                    </div>
                    <h4>⼥士</h4>
                    <p>
                      每天喝不超過1.5份酒-即200毫升的紅/⽩酒
                      <br />
                      或400毫升的啤酒
                    </p>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="w-full mx-auto">
            <div className="flex flex-col justify-center items-center px-4">
              <h4>如果你每天飲酒超過3份量，就會</h4>
            </div>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <TiTimes className="text-red-500 w-8 h-8" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium pt-2">令⾎壓升⾼</h3>
                  </div>
                </div>{" "}
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <TiTimes className="text-red-500 w-8 h-8" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium pt-2">
                      損害心血管系統和肝臟的功能
                    </h3>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <TiTimes className="text-red-500 w-8 h-8" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium pt-2">
                      增加⼼律不正、心肌梗塞、中⾵甚⾄猝死的風險
                    </h3>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <TiTimes className="text-red-500 w-8 h-8" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium pt-2">
                      酒類的熱量很高，如果吃飯時飲酒，請減少飯量，否則容易引起肥胖
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src="/diet/beer.jpg"
                alt=""
                className="mx-auto rounded-lg shadow-lg h-150"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-center items-center px-4">
            <h2>低鹽低鈉飲⾷</h2>
            <div className="lg:px-24 px-4 m-5">
              <p>
                吃鹹是控制血壓的敵⼈。吃鹽多的⼈患⾼⾎壓的機會就高。世界衛⽣組織建議每人每天最多可吃5克鹽，即1茶匙。
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="container mx-auto text-center lg:text-left xl:px-16 px-6">
          <div className="flex items-center lg:grid lg:grid-cols-2">
            <div className="mb-12 lg:mb-0">
              <div className="relative z-[1] block rounded-lg bg-slate-100 px-6 py-12 shadow-2xl backdrop-blur-[30px] md:px-12 lg:-mr-14">
                <h4>港⼈攝入鹽/鈉的主要膳⾷來源</h4>
                <p>
                  世界衛⽣組織指出，在西⽅飲食中，鈉主要來⾃加⼯⾷物中的鹽(約佔75%)。在亞洲國家的傳統膳食中，鈉主要來自在烹調⾷物或進食時加入過量的鹽。在本港，鈉主要來自佐料及醬料，以及湯水等。
                </p>
                <span className="text-primary p-bold-20">
                  因此，維持飲⾷均衡，少吃精製加工⾷品(例如罐頭食物，加鹽醃制食物)，多吃新鮮蔬果及不加鹽的豆/豌⾖和堅果。
                </span>
                <p>
                  做飯時除了直接加的鹽，調味⽤的蘇打、醬油、味精、麵醬以及鹹菜等食品中都含有大量的鹽，無形中增加了⾷鹽的攝入。每天每⼈吃醬油不超過10毫升，約2茶匙。
                </p>
                <span className="text-primary p-bold-20">
                  以下食物都含有很高的鹽分，平時一定要少吃，盡量不吃!
                </span>
                <p>
                  • 醬油、味精、雞精等調味品
                  <br />•
                  甜麵醬、豆瓣醬、番茄醬、辣椒醬、豆豉、醬豆、腐乳、臭豆腐等醬料
                  <br />• 鹹菜、醬菜、榨菜、酸菜等醃製食物
                  <br />•
                  午餐⾁、火腿腸、烤腸、香腸、臘腸、鹹肉、臘肉、肉鬆等加⼯肉食
                  <br />• 鹹⿂、熏⿂、罐頭魚等加工水產類食物
                  <br />• 鹹雞蛋、鹹鴨蛋、松花蛋(皮蛋)等醃蛋類食物
                </p>
              </div>
            </div>
            <div>
              <img
                src="/diet/salt.jpg"
                className="w-full rounded-lg shadow-lg"
                alt=""
              />
            </div>
          </div>
        </div>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-center items-center px-4">
            <div className="lg:px-24 px-4 m-5">
              <p>
                你可能一開始不習慣低鹽的飲食，認為“沒有味道”、“過於清淡”或“不喜歡吃”。建議多用醋、薑、蔥⽩、大蒜、茴香、花椒、胡椒、⾹菜等調味品，來提升食物的⼝感。請一定要堅持，沒多久你的口味就會逐漸適應清淡!{" "}
                <br />
                <br />
                你也可以:
                <br />• 比較食物標籤以選擇鈉含量較低的⾷物
                <br />• 外出用餐時做出較健康的選擇
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="py-6 bg-primary text-gray-50">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leading-none text-center">
            謹記: 堅持低鹽低鈉飲食，降低血壓，保護腎臟功能!
          </h1>
        </div>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="container flex flex-col mx-auto bg-white">
            <div className="w-full draggable">
              <div className="container flex flex-col items-center gap-8 mx-auto my-16">
                <h2>四種最重要的東西是</h2>
                <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 border-4 border-primary rounded-lg">
                  <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                    <TiTick className="w-16 h-16 text-primary" />
                    <p className="text-2xl font-extrabold">減少攝取脂肪</p>
                    <p className="text-grey-600">特別是動物脂肪</p>
                  </div>
                  <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                    <TiTick className="w-16 h-16 text-primary" />
                    <p className="text-2xl font-extrabold">減少攝取糖份</p>
                    <p className="text-grey-600">
                      在飲品和⾷物內，不要加太多的糖。減少進食糖份高的食物，例如餅乾、蛋糕、糖果、朱古⼒、果醬和汽水
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                    <TiTick className="w-16 h-16 text-primary" />
                    <p className="text-2xl font-extrabold">多吃纖維的食物</p>
                    <p className="text-grey-600">
                      ⽣果、蔬菜、穀類、麵包、麵團和飯可以令你容易有飽肚的感覺
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                    <TiTick className="w-16 h-16 text-primary" />
                    <p className="text-2xl font-extrabold">低鹽低鈉飲⾷</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-center items-center px-4">
            <h2>學會閱讀營養標籤</h2>
            <img
              src="/diet/nut.png"
              className="w-full lg:w-1/2 shadow-lg"
              alt=""
            />
            <div className="lg:px-24 px-4 m-5">
              <p>
                營養標籤是包括食品營養成分名稱、含量和佔營養素參考數值(NRV)的百分⽐的表格。通常營養標籤會涵蓋五個⽅面的營養素，能量、蛋白質、脂肪（飽和脂肪和反式脂肪）、碳水化合物和鈉的含量。部分⾷物還會標識膽固醇、膳⾷纖維、鈣等營養素的含量。營養成分的含量標⽰使用每100克(g)、100毫升(ml)食品或每份食用量作為單位，營養成分的含量用具體數值表示，同時標示該營養成分含量佔營養素參考值(NRV)的百分比。
                <br />
                <br />
                香港也有營養標籤管理制度，也就是說所有預先包裝食品上⾯都必須貼有描述其熱能和營養素含量的標誌。學會閱讀營養標籤，對選擇正確的食物種類，控制每天的熱量、脂肪和鹽的攝入量非常重要。
              </p>
            </div>
            <h4>其中對我們健康相關的幾個指標有:</h4>
            {nutlist.map((nut, index) => {
              return (
                <Accordion type="single" collapsible key={index}>
                  <AccordionItem value={nut.item}>
                    <AccordionTrigger className="p-bold-20">
                      {nut.trigger}
                    </AccordionTrigger>
                    <AccordionContent className="text-lg">
                      {nut.content}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}
            <div className="lg:px-24 px-4 m-5">
              <p>
                營養標籤的最後⼀欄通常是NRV%，指能量或營養成分含量佔相應營養素參考值(NRV)的百分⽐。比如某奶粉100克，其蛋白質含量的NRV%是28%，也就是說吃100克奶粉，可以滿⾜人體一天對蛋白質標準需求的28%。有的方便麵鈉的NRV%在90%以上，說明極端⾼鈉，那麼這⼀天就別再吃什麼含鹽⾷品了。{" "}
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center">
          <h4>其他注意事項:</h4>
        </div>
        <div className="flex flex-col mx-auto lg:flex-row w-full max-w-screen-2xl">
          <div className="flex flex-col w-full py-6">
            <div className="bg-gradient-to-tr from-slate-500 to-stone-500 relative w-full h-full max-w-full overflow-hidden">
              <img
                className="mix-blend-overlay absolute inset-0 w-full h-full object-cover"
                src="/diet/tri.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center px-5 m-5">
            <p>
              <br />
              <br />
              ⇒要看清營養素含量的單位，有的是100克，有的是⼀瓶、一包。比如薯片能量太⾼，企業⾃己看著都不順眼，就標小包裝的量25克，消費者最好都以每100克食品所含量為準，以作出比較。
              <br />
              <br />
              ⇒如果要⾖類或奶製品，如⾖漿、⽜奶等，⾸先看每100克裡蛋白質含量多少，然後看脂肪含量，請選擇蛋白質含量⾼，同時脂肪含量低的。
              <br />
              <br />
              ⇒如果想吃零食⼜不想長胖，那就對⽐一下每100克的脂肪和能量的量，誰低就買誰。
              <br />
              <br />
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DietPage;
