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
        title={"做運動"}
        subtitle={
          "定時運動習慣有助減低心血管疾病的發病率和死亡率。對於⼼臟病⼈士來說，運動有助減慢冠狀動脈粥樣硬化，維持心臟的功能。運動亦有助降低⾎壓和減輕體重、鍛鍊肌肉和骨骼。除此之外，運動對情緒健康亦有幫助。運動不宜過量。世界衞⽣組織建議成⼈每星期5次，每次最少30分鐘運動可以維持⾝心健康。"
        }
        backgroundImage={"/bg-sports.jpeg"}
      />
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-between items-center">
            <h2>運動</h2>
            <div className="flex flex-col justify-center items-center px-4 lg:px-24 m-5">
              <p>
                運動種類可因應⾝體能⼒和個⼈興趣而定。進⾏中度或強度的帶氧運動已⾜夠增加⽇常的活動量。你亦可諮詢醫護⼈員的專業意⾒，訂⽴個⼈的運動計劃。
                <br />
                <br />
                以下是根據年齡、性別和運動量⽽計算出的不同人士每⽇所需的卡路里。(日常生活活動只屬於輕度活動量;中度活動量則泛指除日常⽣活外的額外活動，相等於每⽇以每⼩時速度6⾄6.4公⾥步行2.5至5公里;⾼度活動量指除日常⽣活外額外的活動量，指標相等於每⽇以每⼩時速度5至6.5公⾥步⾏超過5公里。)
              </p>
              <CompareTable />
              <p>
                ⽇常活動⽅面，心臟病病發後需要保持日常活動和工作量的穩定性。若工作量繁重，需評估自己能否應付其工作，以免負擔過重。至於性生活方⾯，則考慮其心臟功能能否應付。
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
            <div className="justify-center items-center px-4 lg:px-24 m-5">
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
                <div className="divide-y" key={index}>
                  <div className="grid rounded-md justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0 hover:bg-blue-100">
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
                          src="/sports/tab1.jpg"
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
                          src="/sports/tab2.jpg"
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
                          src="/sports/tab3.jpg"
                          alt=""
                          className="w-full rounded-tl-lg lg:rounded-tr-none lg:rounded-bl-lg"
                        />
                      </div>
                      <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                        <div className="px-6 py-12 md:px-12">
                          <h2>循序原則</h2>
                          <p className="mb-6 text-neutral-500">
                            如果你以前很少運動，請根據⾃己的狀況，循序漸進的安排運動。否則，運動早期的疲憊和肌⾁酸疼會影響堅持運動的信心。⽐如做⼀個運動計劃：
                            <br />
                            <br />
                            第一週：快走30分鐘，運動3天；
                            <br />
                            第二週：快走30分鐘，運動4天；
                            <br />
                            第三週：快走30分鐘，運動5天， 逐步增加運動量和強度。
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
                          src="/sports/tab4.jpg"
                          alt=""
                          className="w-full rounded-tl-lg lg:rounded-tr-none lg:rounded-bl-lg"
                        />
                      </div>
                      <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                        <div className="px-6 py-12 md:px-12">
                          <h2>⽀持原則</h2>
                          <p className="mb-6 text-neutral-500">
                            ⼀個⼈鍛煉很難長期堅持。請盡量選擇集體運動項目，如公園、廣場或者⼩區裡⾯組織的活動，如跳舞、太極拳、⾨球、⽻⽑球、乒乓球、瑜伽等；也可以在鄰居或者朋友中找一個或者多個夥伴，結伴進行運動。至少應該贏得家⼈朋友的⽀持，督促提醒你進行運動。請記住：⼈際⽀持是堅持運動的有效⽅法。
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
                          src="/sports/tab5.jpg"
                          alt=""
                          className="w-full rounded-tl-lg lg:rounded-tr-none lg:rounded-bl-lg"
                        />
                      </div>
                      <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                        <div className="px-6 py-12 md:px-12">
                          <h2>多樣原則</h2>
                          <p className="mb-6 text-neutral-500">
                            為避免興趣的減退，可以選擇多種運動⽅式，變換花樣進行鍛煉。
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
                          src="/sports/tab6.jpg"
                          alt=""
                          className="w-full rounded-tl-lg lg:rounded-tr-none lg:rounded-bl-lg"
                        />
                      </div>
                      <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                        <div className="px-6 py-12 md:px-12">
                          <h2>固定原則</h2>
                          <p className="mb-6 text-neutral-500">
                            請每天安排固定的時間做運動，並保持下來。持之以恆才可以將運動融入⽇常⽣活的一部分。運動要每週3-5次；每次40分鐘。因應⾃己的健康情況和體能作出調節：
                            <br />
                            <br />
                            ⇒首先，做⼤概5分鐘的熱身/伸展運動。
                            <br />
                            ⇒然後，步行⼤概30分鐘。
                            <br />
                            ⇒最後，做⼤概5分鐘的緩和運動。
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
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-between items-center">
            <h2>伸展運動及熱身運動</h2>
            <div className="flex flex-col justify-center items-center px-4 lg:px-24 m-5">
              <p>
                伸展運動及熱身運動是重要的。做⼤概5-10分鐘，主要是以拉長肌肉增加⾝體的柔軟性，並且預防肌肉損傷的發⽣。除此之外，也可以幫助降低運動後⾝體緊繃感，加速解除疲勞。伸展可分為動態式伸展與靜態式伸展。每⼀個伸展的動作靜止時最少應持續8-10秒以上才能夠有效果。每個動作做1-2次。
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-1/2">
              <img src="/sports/stretch1.png" alt="" className="w-full" />
            </div>
            <div className="w-1/2 flex flex-col px-4 lg:px-24 m-5">
              <h4>頭部及頸部</h4>
              <p>
                • 眼向前望，慢慢將頭向右轉，然後向左轉
                <br />• 眼向前望，慢慢將頭向右側，然後向左側
                <br />• 眼向前望，將下顎慢慢向後推。頭頸伸展，前後左右伸展兩次
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-1/2 flex flex-col px-4 lg:px-24 m-5">
              <h4>上肢</h4>
              <p>
                • 肩膊向上縮起，再向下壓低，然後向前移，再向後移
                <br />•
                舉⾼右⼿伸向左肩，用左⼿將右踭拉向⾃己的方向，直⾄右肩有拉緊的感覺，然後轉換左⼿重複動作
                <br />•
                右⼿屈曲放在頭後，左手輕力將右⼿手踭向左拉，然後轉換左手，重複動作
                <br />•
                雙⼿互握放在頸後，然後慢慢分開⼿肘，直至與兩肩成⼀直線，鬆鬆肩膊和上肢
              </p>
            </div>
            <div className="w-1/2">
              <img src="/sports/stretch2.png" alt="" className="w-full" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center pt-4">
            <div className="w-2/3">
              <img src="/sports/stretch3.png" alt="" className="w-full" />
            </div>
            <div className="w-full flex flex-col px-4 lg:px-24 m-5 justify-center items-center">
              <h4>身軀</h4>
              <p>
                • 雙⼿垂直放於⾝旁，慢慢將⾝體向右側下彎，然後再向左側下
                <br />• 雙⼿環抱胸前，慢慢將身體向右轉，靜止，再向左轉，靜⽌
                <br />• 轉轉腰，彎彎腰
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center pt-4">
            <div className="w-2/3">
              <img src="/sports/stretch4.png" alt="" className="w-full" />
            </div>
            <div className="w-full flex flex-col px-4 lg:px-24 m-5 justify-center items-center">
              <h4>下肢</h4>
              <p>
                • 雙手抓緊椅背，作弓箭步，後腿伸直，靜止，然後轉腿
                <br /> • 鬆鬆⼿腳，踢踢小腿
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default SportsPage;
