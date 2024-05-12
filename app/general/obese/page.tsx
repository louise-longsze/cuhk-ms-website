import MaxWidthWrapper from "@/components/maxwidthwrapper";
import HeroSection from "@/components/shared/hero";
import { obeselist, obeselist2 } from "@/constants";
import Link from "next/link";
import { TiTimes } from "react-icons/ti";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ObesePage = () => {
  return (
    <>
      <HeroSection
        title={"超重或肥胖"}
        subtitle={
          "根據美國疾病預防控制中心，高於正常體重的體重稱為超重或肥胖。體重指數(BMI)用作超重或肥胖的篩查⼯具。肥胖定義為損害健康的多餘脂肪，通常以BMI ≥ 30kg/m2來定義的。美國肥胖醫學協會將肥胖定義為⼀種慢性，復發性，多因素的神經⾏為疾病，其中體脂的增加會促進脂肪組織功能障礙和異常的脂肪體⼒，從⽽導致不良的代謝，⽣物力學和⼼理健康後果。"
        }
        backgroundImage={"/bg-obese.jpg"}
      />
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-center items-center">
            <h2>肥胖與罹患心⾎管疾病</h2>
            <div className="flex flex-col justify-center items-center px-4 lg:px-24 m-5">
              <p>
                肥胖與罹患心⾎管疾病，尤其是⼼力衰竭和冠⼼病的⾵險增加有關。脂肪組織本⾝產⽣的促炎細胞因子可誘發⼼臟功能障礙並促進動脈粥樣硬化斑塊的形成。肥胖和超重也與⾼⾎壓和左⼼室增⼤(左⼼室肥大)有關，增加了⼼力衰竭的風險。此外，超重和肥胖可能與某些癌症，膽囊疾病和⾻關節炎亦有關。
              </p>
              <h4>
                肥胖和超重與增加心⾎管疾病(冠狀動脈疾病和中風)風險的幾個因素有關:
              </h4>
              <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
                {obeselist.map((obese, index) => {
                  return (
                    <div className="mb-12 lg:mb-0" key={index}>
                      <div className="mb-6 inline-block rounded-full bg-red-100 p-4 text-red-400 shadow-sm">
                        <TiTimes className="w-8 h-8" />
                      </div>
                      <h5 className="mb-4 text-lg font-bold">{obese.item}</h5>
                      <p className="text-neutral-500">{obese.description}</p>
                    </div>
                  );
                })}
              </div>
              <h4>⼼血管疾病⾵險增加</h4>
              <p>
                肥胖一直與代謝疾病和⼼血管疾病的風險增加有關。美國有硏究專家發現體內脂肪的增加可通過⼼房增⼤，⼼室增⼤和動脈粥樣硬化直接導致⼼臟病。此外，體內脂肪的增加間接地促進睡眠呼吸暫停，血栓塞性疾病以及新陳代謝疾病的發作或惡化。
              </p>
              <h4>以下是一些現⾏減肥⽅法作為參考:</h4>
              <div className="relative w-full max-w-lg">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="relative space-y-4">
                  {obeselist2.map((obese2, index) => {
                    return (
                      <div
                        className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8"
                        key={index}
                      >
                        <div className="pl-5 h-8 w-full bg-gray-200 rounded p-regular-20">
                          <Link
                            href={obese2.link}
                            className="text-primary hover:text-secondary"
                          >
                            {obese2.label}
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <p>
                對超重和肥胖症的常⾒治療方法包括通過健康飲食來減肥，增強運動能⼒以及對慣常習慣進行其他改變。體重管理計劃可以幫助某些⼈減輕體重。對於⼀些肥胖的人無法減輕體重以改善健康，在這種情況下可諮詢醫生，他可能會考慮增加其他治療⽅法，包括減肥藥，體內減肥裝置或減肥⼿術。
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section id="section02">
        <MaxWidthWrapper>
          <div className="flex flex-col justify-between items-center">
            <div className="container mx-auto space-y-12">
              <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                <img
                  src="/obese/list1.jpg"
                  alt=""
                  className="h-80 object-cover aspect-video"
                />
                <div className="flex flex-col justify-center flex-1 p-6">
                  <h3 className="text-3xl font-bold">
                    健康飲食計劃和定期體能鍛煉
                  </h3>
                  <p className="my-6">
                    遵循熱量少的健康飲食計劃通常是嘗試治療超重和肥胖症的第⼀步。超重或肥胖的人在開始健康飲食計劃時也應同時開始定期進⾏體能鍛煉。活躍可能有助於您消耗卡路里。定期進行體能鍛煉可以幫助您保持健康的體重。
                  </p>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                <img
                  src="/obese/list2.jpg"
                  alt=""
                  className="h-80 object-cover aspect-video"
                />
                <div className="flex flex-col justify-center flex-1 p-6">
                  <h3 className="text-3xl font-bold">改變生活習慣</h3>
                  <p className="my-6 " id="section03">
                    改變飲食和體能鍛煉習慣及⽣活⽅式有時很困難，但是有了計劃，努⼒，定期的⽀持和耐心，您可能可以減輕體重並改善健康。以下提示可幫助您思考減輕體重，進⾏定期體能鍛煉並長期改善健康的方法。{" "}
                    <br />
                    <br />
                    •
                    為挫折做好準備，這是正常現象。遭受挫折後，例如在家庭聚會或工作場所聚會上暴飲暴⾷，請嘗試重新分配並集中精⼒盡快恢復健康的飲食計劃。僅在坐在餐廳或廚房的桌子上時嘗試吃東西。在⼯作中，請避免在可能有零食的地方使⽤。
                    <br />
                    <br />
                    •
                    設⽴目標。制定特定的⽬標可以幫助您保持進度。與其“更加活躍”，不如將⽬標定為在⼯作前或星期⼀和星期五的午餐前15至30分鐘步⾏。如果您錯過週⼀的散步，請在周⼆再次撿起它。
                    <br />
                    <br />•
                    尋求⽀持。向家⼈，朋友或醫療專業⼈員尋求幫助或⿎勵。您可以通過發短信或通過電話交談親自獲得⽀持。也可以加入支持小組。
                  </p>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                <img
                  src="/obese/list3.jpg"
                  alt=""
                  className="h-80 object-cover object-bottom aspect-video"
                />
                <div
                  className="flex flex-col justify-center flex-1 p-6 "
                  id="section04"
                >
                  <h3 className="text-3xl font-bold">體重管理計劃</h3>
                  <p className="my-6">
                    有些人會從正式的體重管理計劃中受益。在體重管理計劃中，體重管理人士將為您設計一個計劃，並輔助您執行。計劃可以包括低熱量飲食，增加運動量以及幫助您改變習慣並堅持下去的⽅法。現時⾹港的醫院及坊間也有體重管理計劃的存在。有些人是可以從體重管理計劃中受益。但也需要參加者嚴格配合計劃內容。
                  </p>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                <img
                  src="/obese/list4.jpg"
                  alt=""
                  className="h-80 object-cover aspect-video"
                />
                <div
                  className="flex flex-col justify-center flex-1 p-6"
                  id="section05"
                >
                  <h3 className="text-3xl font-bold">減肥藥</h3>
                  <p className="my-6 ">
                    當健康飲食和體能鍛煉習慣不⾜時，醫⽣可能會因應您個人健康情況，有需要時會開藥治療超重和肥胖。但您應該堅持健康的飲食計劃，並在服用減肥藥的同時繼續進⾏定期的體能鍛煉。𧫴記如服⽤任何⾮處⽅藥物之前，請先諮詢醫⽣，以確保安全及達到減肥的目的。
                  </p>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                <img
                  src="/obese/list5.jpg"
                  alt=""
                  className="h-80 object-cover aspect-video"
                />
                <div className="flex flex-col justify-center flex-1 p-6 ">
                  <h3 className="text-3xl font-bold">特殊飲⾷</h3>
                  <p className="my-6">
                    熱量限制飲食。醫護人員可能會建議您減少卡路里的攝入。卡路里⽔平取決於您的體重和體能鍛煉⽔平。較低熱量的飲食以及各種健康⾷品將為您提供保持健康所需的營養。{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-center items-center">
            <h2>您的⾵險增加了嗎?</h2>
            <div className="flex flex-col justify-center items-center px-4 lg:px-24 m-5">
              <h4>
                為了確定體重是否與增加患⼼臟病的風險有關，使⽤了兩種測量方法:
              </h4>
            </div>
            <div className="container mx-auto p-4 flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="max-w-m mx-auto relative shadow-md rounded-lg">
                  <img
                    src="/obese/bmi3.jpg"
                    alt=""
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-auto bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                    <h1 className="text-2xl font-semibold">
                      體重指數 Body Mass Index (BMI)
                    </h1>
                    <p className="mt-2 text-white">
                      BMI是⼀個數學公式，可⽤來確定肥胖者的身高和體重比例。對於失去肌肉質量的運動員或老年⼈來說，準確性可能較低。
                      <br />• 體重不足：低於 18.5
                      <br />• 正常：18.5 - 24.9
                      <br />• 超重：25.0 - 29.9
                      <br />• 肥胖：30.0 - 及以上
                      <br />
                      那些超重或肥胖且有兩個或更多危險因素的⼈應減肥，以降低患心臟病的風險。
                    </p>
                  </div>
                </div>

                <div className="max-w-m mx-auto relative shadow-md rounded-lg">
                  <img
                    src="/obese/measure.jpg"
                    alt=""
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-auto bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                    <h1 className="text-2xl font-semibold">腰圍</h1>
                    <p className="mt-2 text-white">
                      它是預測腹部脂肪的好指標，腹部脂肪是⼼臟病的危險因素。
                      <br />
                      • 男性腰圍超過90厘米
                      <br />
                      • 女性腰圍超過80厘米
                      <br />
                      時，這種⾵險會增加。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="py-6 bg-primary text-gray-50">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leading-none text-center">
            體重的少量減少可以大大降低心臟病的風險
          </h1>
        </div>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-center items-center">
            <h4>以下是目前流⾏的不同飲⾷計劃的簡介，僅供參考和認識。</h4>
          </div>
          <Tabs
            defaultValue="option1"
            className="w-full max-w-7xl flex flex-col"
          >
            <TabsList>
              <TabsTrigger value="option1" className="text-lg">
                地中海飲⾷
              </TabsTrigger>
              <TabsTrigger value="option2" className="text-lg">
                治療生活方式改變
              </TabsTrigger>
              <TabsTrigger value="option3" className="text-lg">
                DASH
              </TabsTrigger>
              <TabsTrigger value="option4" className="text-lg">
                素食
              </TabsTrigger>
              <TabsTrigger value="option5" className="text-lg">
                Ornish
              </TabsTrigger>
            </TabsList>
            <TabsContent value="option1">
              <div className="container my-24 mx-auto md:px-6">
                <div className="block rounded-lg bg-white shadow-2xl">
                  <div className="flex flex-wrap items-center">
                    <div className="w-2/3 shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                      <img
                        src="/obese/tab1.jpg"
                        alt=""
                        className="w-full rounded-tl-lg lg:rounded-tr-none lg:rounded-bl-lg"
                      />
                    </div>
                    <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                      <div className="px-6 py-12 md:px-12">
                        <h2>地中海飲⾷ (Mediterranean Diet)</h2>
                        <p className="mb-6 text-neutral-500">
                          地中海飲⾷是一種以地中海沿岸國家的傳統美⾷為基礎的飲⾷方式。儘管地中海飲⾷沒有單一定義，但通常富含蔬菜，水果，全穀類，豆類，堅果和種子以及橄欖油。地中海飲⾷的主要成分包括:
                          <br />
                          <br />• 每天⾷用蔬菜，⽔果，全穀物和健康脂肪
                          <br />• 每週攝⼊⿂，禽，豆類和雞蛋
                          <br />• 適量的乳製品
                          <br />• 紅肉攝入量有限
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="option2">
              <div className="container my-24 mx-auto md:px-6">
                <div className="block rounded-lg bg-white shadow-2xl">
                  <div className="flex flex-wrap items-center">
                    <div className="w-2/3 shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                      <img
                        src="/obese/tab2.jpg"
                        alt=""
                        className="w-full rounded-tl-lg lg:rounded-tr-none lg:rounded-bl-lg"
                      />
                    </div>
                    <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                      <div className="px-6 py-12 md:px-12">
                        <h2>
                          治療生活方式改變 (Therapeutic Lifestyle Changes (TLC))
                        </h2>
                        <p className="mb-6 text-neutral-500">
                          美國糖尿病協會，美國⼼臟協會和肥胖學會等各種健康組織都推薦TLC，作為對處於2-型糖尿病和/或冠心病危險中的超重或肥胖者的治療策略。TLC是針對低密度脂蛋⽩膽固醇(⼀種冠⼼病的危險因素)的有效⽣活⽅式療法。TLC飲⾷是低脂飲食，由美國國立衛生研究院的國家膽固醇教育計劃創建的，⽬的是降低膽固醇，將其作為有益於心臟健康的飲⾷方案的一部分。TLC常⽤於膽固醇臨床試驗，它要求吃⼤量的蔬果，麵包，穀物，麵⾷和瘦⾁。{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="option3">
              <div className="container my-24 mx-auto md:px-6">
                <div className="block rounded-lg bg-white shadow-2xl">
                  <div className="flex flex-wrap items-center">
                    <div className="w-2/3 shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                      <img
                        src="/obese/tab3.jpg"
                        alt=""
                        className="w-full rounded-tl-lg lg:rounded-tr-none lg:rounded-bl-lg"
                      />
                    </div>
                    <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                      <div className="px-6 py-12 md:px-12">
                        <h2>DASH飲⾷ (DASH Diet）</h2>
                        <p className="mb-6 text-neutral-500">
                          DASH提倡通過飲⾷途徑來預防⾼血壓，是⼀種終⾝健康飲⾷方法。旨在幫助治療或預防高血壓。DASH飲⾷鼓勵您減少飲食中的鈉，強調吃各種蔬菜，⽔果和低脂乳製品以及適量的全穀類，魚類，家禽和堅果。並吃各種富含營養物質的食物，例如鉀，鈣和鎂，這些營養物質有助於降低血壓。{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="option4">
              <div className="container my-24 mx-auto md:px-6">
                <div className="block rounded-lg bg-white shadow-2xl">
                  <div className="flex flex-wrap items-center">
                    <div className="w-2/3 shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                      <img
                        src="/obese/tab4.jpg"
                        alt=""
                        className="w-full rounded-tl-lg lg:rounded-tr-none lg:rounded-bl-lg"
                      />
                    </div>
                    <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                      <div className="px-6 py-12 md:px-12">
                        <h2>素食(Vegetarian Diet)</h2>
                        <p className="mb-6 text-neutral-500">
                          素⾷通常被稱為飲⾷習慣，其中以植物為主要食物來源，並且排除了⼤部分或全部肉，內臟和動物產品。素⾷飲⾷可分為以下幾種:
                          <br />
                          <br />•
                          乳卵素⾷飲食:一種飲食，不包括雞蛋和奶製品除外的所有動物產品。
                          <br />•
                          卵素⾷飲食:不包括雞蛋在內的所有動物和奶製品的飲食。
                          <br />•
                          乳素⾷飲⾷:不包括乳製品在內的所有雞蛋和動物產品的飲⾷。
                          <br />•
                          嚴格的素⾷飲⾷:不包括所有雞蛋，乳製品，⾁，內臟和動物源性食品(如蜂蜜和燕窩)的飲食。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="option5">
              <div className="container my-24 mx-auto md:px-6">
                <div className="block rounded-lg bg-white shadow-2xl">
                  <div className="flex flex-wrap items-center">
                    <div className="w-2/3 shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                      <img
                        src="/obese/tab5b.jpg"
                        alt=""
                        className="w-full rounded-tl-lg lg:rounded-tr-none lg:rounded-bl-lg"
                      />
                    </div>
                    <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                      <div className="px-6 py-12 md:px-12">
                        <h2>Ornish飲⾷ (Ornish Diet)</h2>
                        <p className="mb-6 text-neutral-500">
                          是限制飲食中的脂肪，精製碳⽔化合物和動物蛋白。Ornish
                          Diet
                          不僅是飲⾷食法，它還強調運動，壓⼒管理和⼈際關係。例如，在營養方⾯，Ornish將食物分為五類，從最健康(第一組)到最少健康(第五組)。例如，全⿆麵包和餅乾之間，⼤⾖熱狗與豬肉或⽜⾁之間的區別就在於此。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default ObesePage;
