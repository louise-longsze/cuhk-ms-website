import CompareTable from "@/components/comparetable";
import MaxWidthWrapper from "@/components/maxwidthwrapper";
import HeroSection from "@/components/shared/hero";
import { Separator } from "@/components/ui/separator";
import { sportssteps } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SportsPage = () => {
  return (
    <>
      <HeroSection
        title={"運動"}
        subtitle={
          "定時運動習慣有助減低心血管疾病的發病率和死亡率。對於⼼臟病⼈士來說，運動有助減慢冠狀動脈粥樣硬化，維持心臟的功能。運動亦有助降低⾎壓和減輕體重、鍛鍊肌肉和骨骼。除此之外，運動對情緒健康亦有幫助。運動不宜過量。世界衞⽣組織建議成⼈每星期5次，每次最少30分鐘運動可以維持⾝心健康。"
        }
        backgroundImage={"/bg-sports.jpeg"}
      />
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-between items-center">
            <h2>運動</h2>
            <div className="flex flex-col justify-center items-center px-24 m-5">
              <p>
                運動種類可因應⾝體能⼒和個⼈興趣而定。進⾏中度或強度的帶氧運動已⾜夠增加⽇常的活動量。你亦可諮詢醫護⼈員的專業意⾒，訂⽴個⼈的運動計劃。
                <br />
                <br />
                以下是根據年齡、性別和運動量⽽計算出的不同人士每⽇所需的卡路里。(日常生活活動只屬於輕度活動量;中度活動量則泛指除日常⽣活外的額外活動，相等於每⽇以每⼩時速度6⾄6.4公⾥步行2.5至5公里;⾼度活動量指除日常⽣活外額外的活動量，指標相等於每⽇以每⼩時速度5至6.5公⾥步⾏超過5公里。)
              </p>
              <CompareTable />
              <p>
                ⽇常活動⽅面，心臟病病發後需要保持日常活動和工作量的穩定性。若工作量繁重，需評估自己能否應付其工作，以免負擔過重。至於性生活方⾯，則考慮其心臟功能能否應付。{" "}
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-between items-center">
            <h4>注意事項</h4>
          </div>
          <div className="container mx-auto p-4 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="max-w-m mx-auto relative shadow-md rounded-lg">
                <img
                  src="/sports/rest.jpg"
                  alt=""
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 h-60 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                  <h1 className="text-2xl font-semibold">
                    遇到心絞痛/感到心跳加速/氣促時，應⽴即停⽌運動及進⾏休息
                  </h1>
                </div>
              </div>
              <div className="max-w-m mx-auto relative shadow-md rounded-lg">
                <img
                  src="/sports/pills4.jpg"
                  alt=""
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 h-60 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                  <h1 className="text-2xl font-semibold">
                    運動期間，脷底丸(如有)必須隨身帶備
                  </h1>
                </div>
              </div>
              <div className="max-w-m mx-auto relative shadow-md rounded-lg">
                <img
                  src="/sports/hka.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 h-60 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                  <h1 className="text-2xl font-semibold">
                    休息及/或服用脷底丸後，心絞痛若不能舒緩，必須立即召喚救護車或迅速到急症室，尋求醫護人員的幫助
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mx-auto lg:flex-row w-full max-w-screen-2xl">
            <div className="justify-center items-center px-24 m-5">
              <p>
                以下是一些運動建議給你參考，你可選擇⼀些感興趣或其他，因應⾃己的健康情況和體能作出選擇和調節:
              </p>
              <img
                src="/sports/sports2.png"
                alt=""
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-between items-center">
            <h2>運動處⽅</h2>
          </div>
          <div className="container mx-auto flex flex-col p-6">
            {sportssteps.map((step, index) => {
              return (
                <div className="divide-y">
                  <div
                    className="grid rounded-md justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0 hover:bg-blue-100"
                    key={index}
                  >
                    <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                      <svg
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="w-24 h-24 text-primary"
                      >
                        <path d={step.svgpath}></path>
                      </svg>
                    </div>
                    <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                      <span className="text-xl font-bold md:text-3xl">
                        {step.label}
                      </span>
                      <p>{step.description}</p>
                    </div>
                  </div>
                  <Separator />
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-between items-center">
            <h2>堅持運動的方法建議</h2>
            <img
              src="/sports/sports4.png"
              alt=""
              className="w-1/3 h-auto object-cover rounded-lg"
            />
            <Tabs
              defaultValue="option1"
              className="w-full max-w-7xl flex flex-col"
            >
              <TabsList>
                <TabsTrigger value="option1" className="text-lg">
                  有趣原則
                </TabsTrigger>
                <TabsTrigger value="option2" className="text-lg">
                  就近原則
                </TabsTrigger>
                <TabsTrigger value="option3" className="text-lg">
                  循序原則
                </TabsTrigger>
                <TabsTrigger value="option4" className="text-lg">
                  ⽀持原則
                </TabsTrigger>
                <TabsTrigger value="option5" className="text-lg">
                  多樣原則
                </TabsTrigger>
                <TabsTrigger value="option6" className="text-lg">
                  固定原則
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
                          <h2>有趣原則</h2>
                          <p className="mb-6 text-neutral-500">
                            選擇⾃己喜歡或者可能感興趣的運動類型。興趣是堅持的前提。
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
                          <h2>就近原則</h2>
                          <p className="mb-6 text-neutral-500">
                            運動的地點應該靠近家或者⼯作地點。可以選擇在居住⼩區或附近的廣場，或者家中做運動。
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
                          <h2>循序原則</h2>
                          <p className="mb-6 text-neutral-500">
                            如果你以前很少運動，請根據⾃己的狀況，循序漸進的安排運動。否則，運動早期的疲憊和肌⾁酸疼會影響堅持運動的信心。⽐如做⼀個運動計劃:
                            <br />
                            <br />
                            第一周:快走30分鐘，運動3天;
                            <br />
                            第二週:快走30分鐘，運動4天;
                            <br />
                            第三週:快走30分鐘，運動5天， 逐步增加運動量和強度。
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
              <TabsContent value="option6">
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
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default SportsPage;
