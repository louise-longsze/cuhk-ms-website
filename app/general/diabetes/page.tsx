import MaxWidthWrapper from "@/components/maxwidthwrapper";
import HeroSection from "@/components/shared/hero";
import {
  factsvg,
  p1svg,
  p2svg,
  p3svg,
  p4svg,
  p5svg,
  p6svg,
  p7svg,
  rumorsvg,
} from "@/constants";
import { GiAbstract089, GiKidneys } from "react-icons/gi";
import { RiVirusFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { Separator } from "@/components/ui/separator";

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
        <div className="container mx-auto text-center lg:text-left xl:px-16 mb-24 px-6">
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
            <h2>應如何控制糖尿病？</h2>
            <div className="flex flex-col justify-center items-center px-4 lg:px-24 m-5">
              <p>
                病人的參與和自我監察，對有效護理糖尿病至為重要。提升對糖尿病的認識和控制技巧，便更能夠掌握本身的健康狀況。所以病人需要：
                <br />• 認識糖尿病的特質
                <br />• 維持健康生活方式
                <br />• 保持理想的體重
                <br />• 了解血糖控制不善可引致併發病如腎臟病變，糖尿眼疾等
                <br />• 遵照醫生指示服藥或注射胰島素
                <br />• 請醫生解釋不同治療方法和藥物可能引起的副作用
                <br />•
                與家庭醫生及其他醫療專業人員成為健康合作夥伴，以訂下切合你個人需要的治療方案
              </p>
            </div>
          </div>
          <div className="container mx-auto space-y-12">
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img
                src="/diabetes/action1.jpg"
                alt=""
                className="h-120 object-cover aspect-square"
              />
              <div className="flex flex-col justify-center flex-1 p-6">
                <h3 className="text-3xl font-bold">定期到家庭醫生覆診</h3>
                <p className="mt-6">
                  •
                  與你的家庭醫生共同訂定目標治療水平，如血糖水平、血壓水平、血脂水平及體重指標
                  <br />•
                  每年接受身體檢查以評估身體狀况及有否出現併發症。建議檢查項目包括︰
                  <div className="indent--12 ml-12">
                    o 體重指標及腰圍
                    <br />o 血壓
                    <br />o 血糖
                    <br />o 血脂
                    <br />o 腎功能檢查（包括尿液蛋白檢查）
                    <br />o 眼部檢查
                    <br />o 足部檢查
                    <br />o 口腔檢查
                  </div>
                </p>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
              <img
                src="/diabetes/action2.jpg"
                alt=""
                className="h-120 object-cover aspect-square"
              />
              <div className="flex flex-col justify-center flex-1 p-6">
                <h3 className="text-3xl font-bold">
                  養成健康飲食習慣 及遵從醫生或營養師建議的
                  飲食餐單以達致有效體重管理
                </h3>
                <p className="my-6 ">
                  • 定時定量進食
                  <div className="indent-12">
                    o 避免過飢或過飽，以維持穩定的血糖水平
                  </div>
                  <br />• 維持均衡及多元化飲食
                  <div className="indent-12">
                    o 應多元化及適量地進食五穀類、蔬菜、水果、
                    肉類和奶類食物，並減少進食含高脂肪、高糖分和高鹽分的食物
                  </div>
                  <br />• 多吃含高纖維素的食物
                  <div className="indent-12">
                    o
                    多進食含高纖維素的食物，包括麥皮、全麥麵包、乾豆、蔬菜及水果
                  </div>
                  <br />• 選用健康煮食方法
                  <div className="indent--12 ml-12">
                    o 採用低脂肪的煮食方法包括白灼、蒸、炆、燉、焗和少油快炒
                    <br />o 避免採用煎、炸和多油炒等高脂肪的烹調方法
                    <br />o
                    烹調肉類或家禽時，先將肥膏和皮層去掉，以減低脂肪的攝取
                    <br />o
                    多選用天然調味料如薑、葱、蒜頭、胡椒粉、果皮等。避免選用大量含糖分的調味料如砂糖、海鮮醬、茄汁等
                    <br />o 生粉含高醣質，所以烹調時應減少用作「打獻」
                  </div>
                  <br />• 適量進食含醣質 ( 如澱粉質、果糖和乳糖 ) 的食物
                  <div className="indent--12 ml-12">
                    o
                    食物所含的醣質會影響血糖的水平，因此必須適量地分配於每日的飲食中，以維持血糖的穩定。在進食含醣質的食物時，可運用「醣質交換法」(
                    參考附頁 ) 來進行換算
                    <br />o
                    含高醣質的食物包括五穀類、根莖類蔬菜、乾豆類、水果類及奶類
                    <br />o
                    患者一般每天可吃兩份水果。一份水果相等於一個細橙、或一個細雪梨、或一個奇異果。患者可按自己的喜好每天進食合適的份量
                    <br />o
                    只要懂得使用「醣質交換法」，及用代糖來調味，糖尿病患者亦可以吃甜品。例如若吃了含有高醣質的材料如番薯、紅豆等，便要運用「醣質交換法」減少飯的進食份量，來避免進食過多醣質，以達致血糖的控制
                    <br />o 如對「醣質交換法」有疑問，可諮詢醫護人員或營養師
                  </div>
                  <br />• 採用合適的餐單
                  <div className="indent--12 ml-12">
                    o
                    每個人所需的營養和份量都不同，所以糖尿病患者宜諮詢醫護人員的意見，不應跟隨其他患者的餐單
                    <br />o 留意營養標籤中的脂肪、鈉 ( 或鹽 )
                    和糖分的含量指示，選擇含較低脂肪、低鈉 ( 或鹽
                    )和低糖分的食物
                  </div>
                </p>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img
                src="/diabetes/action3.jpg"
                alt=""
                className="h-120 object-cover aspect-square"
              />
              <div className="flex flex-col justify-center flex-1 p-6">
                <h3 className="text-3xl font-bold">進行恆常體能活動</h3>
                <p className="mt-6">
                  • 每周最好至少 3 天進行中等 ( 例如急步行 )
                  或劇烈強度的帶氧體能運動，以達至每周累積最少 150分鐘的目標
                  <br />• 帶氧體能活動可以最少每次做 10 分鐘的方式來累積進行
                  <br />• 每周至少 2 天 ( 非連續的 ) 進行肌肉強化活動
                  <br />•
                  若想獲取更多運動建議及資訊，可請教專業人士，或瀏覽衞生署運動處方網站
                </p>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
              <img
                src="/diabetes/action4.jpg"
                alt=""
                className="h-120 object-cover object-bottom aspect-square"
              />
              <div className="flex flex-col justify-center flex-1 p-6">
                <h3 className="text-3xl font-bold">不吸煙</h3>
                <p className="my-6 ">
                  • 非吸煙者切勿嘗試吸煙，而吸煙者應立刻戒煙
                </p>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img
                src="/diabetes/action5.jpg"
                alt=""
                className="h-120 object-cover aspect-square"
              />
              <div className="flex flex-col justify-center flex-1 p-6">
                <h3 className="text-3xl font-bold">避免飲酒</h3>
                <p className="mt-6">
                  •
                  酒精飲品可引致多種疾病，過量飲酒不但嚴重影響個人的生理健康，更會影響心理健康、社交健康和工作表現，因此應該遠離酒精。若選擇飲用酒精飲品，應多加節制以盡量減少與酒精相關的危害。
                  <br />
                  建議:
                  <div className="indent--12 ml-12">
                    o 男性每天不應飲多於 2 個標準酒量
                    <br />o 女性則不多於 1 個標準酒量
                    <br />o 一個標準酒量單位 (10克純酒精) 相等於 :
                  </div>
                  <div className="indent--24 ml-24">
                    <br /> 約 250 毫升 ) 含 5% 酒精的啤酒
                    <br /> 一小杯 (100 毫升 ) 含 12% 酒精的葡萄酒
                    <br /> 一杯酒吧標準容器 (30 毫升 ) 含 40% 酒精的烈酒
                  </div>
                </p>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
              <img
                src="/diabetes/action6a.jpg"
                alt=""
                className="h-120 object-cover aspect-square"
              />
              <div className="flex flex-col justify-center flex-1 p-6">
                <h3 className="text-3xl font-bold">控製血糖</h3>
                <p className="my-6 ">
                  • 養成健康的飲食習慣及生活模式
                  <br />• 定時檢測血糖水平作為治療參考
                  <br />• 有需要時接受藥物治療
                </p>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img
                src="/diabetes/action7.jpg"
                alt=""
                className="h-120 object-cover aspect-square"
              />
              <div className="flex flex-col justify-center flex-1 p-6">
                <h3 className="text-3xl font-bold">控制血壓</h3>
                <p className="mt-6">
                  • 保持目標血壓低於 130/80mmHg，可減低患上併發症的風險
                  <br />• 每次糖尿病例行檢查時均應量度血壓 <br />•
                  保持健康的飲食習慣及生活模式，有需要時接受藥物治療，有助控制血壓於理想水平，延緩及預防併發症的出現
                </p>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
              <img
                src="/diabetes/action8.jpg"
                alt=""
                className="h-120 object-cover object-bottom aspect-square"
              />
              <div className="flex flex-col justify-center flex-1 p-6">
                <h3 className="text-3xl font-bold">控制血脂</h3>
                <p className="my-6 ">
                  •
                  血脂主要是由三酸甘油脂及膽固醇組成。血脂異常是指血液中三酸甘油脂或血脂蛋白濃度異常，是引致心血管疾病的主要風險因素
                  <br />• 保持健康的飲食習慣及恆常運動，維持低密度脂蛋白膽固醇
                  (LDLc) 少於 2.6
                  度的水平，並在有需要時接受藥物治療，這均有助控制血脂於理想水平
                </p>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img
                src="/diabetes/action9.jpg"
                alt=""
                className="h-120 object-cover aspect-square"
              />
              <div className="flex flex-col justify-center flex-1 p-6">
                <h3 className="text-3xl font-bold">
                  依從醫護人員指導 服藥或注射胰島素
                </h3>
                <p className="mt-6">
                  • 清楚明白自己服用何種藥物
                  <br />•
                  應了解醫生因何處方該種藥物、如何服用及可能出現的副作用；若有不適應立即約見你的家庭醫生聽取意見，切勿自行調校藥量或停服藥物
                  <br />• 應認識血糖過低的徵狀 (
                  如出汗、發抖、心跳加速、疲倦、緊張煩躁 ) 及處理方法
                </p>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
              <img
                src="/diabetes/action10.jpg"
                alt=""
                className="h-120 object-cover aspect-square"
              />
              <div className="flex flex-col justify-center flex-1 p-6">
                <h3 className="text-3xl font-bold">接種流感疫苗</h3>
                <p className="my-6 ">
                  •
                  每年接種流感疫苗，因糖尿病患者因流感而產生併發症及死亡風險較高
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-between items-center">
            <h2>預防糖尿病併發症</h2>
            <div className="flex flex-col justify-center items-center px-4 lg:px-24 m-5">
              <p>
                若糖尿病病情控制不善，可導致併發症，影響生活素質甚至危害生命，故應小心預防。
              </p>
            </div>
          </div>
          <div className="container mx-auto flex flex-col p-6">
            <div className="divide-y">
              <div className="grid rounded-md justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0 hover:bg-blue-100">
                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                  <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-48 h-48 text-primary"
                  >
                    <path d={p1svg}></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                  <span className="text-xl font-bold md:text-3xl">
                    高血糖昏迷症
                  </span>
                  <p>
                    • 特點是血糖水平超高，可高達 30 度（mmol/L）
                    <br />•
                    成因包括：飲食過量、沒有按指示服藥或注射胰島素、生病期間或手術後
                    <br />•
                    病徵包括：患者會極度口渴、小便極少、心跳加速，嚴重的會神智不清，甚至昏迷
                    <br />•
                    預防方法：遵守控糖飲食原則及運動；按時服用糖尿藥；如發現尿糖或血糖過高，應立即求診
                  </p>
                </div>
              </div>
              <Separator />
            </div>
            <div className="divide-y">
              <div className="grid rounded-md justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0 hover:bg-blue-100">
                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                  <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-44 h-44 text-primary"
                  >
                    <path d={p2svg}></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                  <span className="text-xl font-bold md:text-3xl">
                    低血糖昏迷症
                  </span>
                  <p>
                    • 當血糖低於 4 度（mmol/L）便屬於血糖過低
                    <br />•
                    成因包括：運動量與飲食未能配合（如空腹做運動）、不正確服用藥物或過量注射胰島素、空腹飲酒
                    <br />•
                    病徵包括：感到十分飢餓、心跳、手震、出汗，嚴重的會昏迷，甚至死亡
                    <br />•
                    預防方法：定時定量進食；按照醫生指示的分量依時服藥或注射胰島素；隨身帶備糖果、餅乾等容易吸收的含醣質食物，一旦出現低血糖徵狀，可即時進食
                  </p>
                </div>
              </div>
              <Separator />
            </div>
            <div className="divide-y">
              <div className="grid rounded-md justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0 hover:bg-blue-100">
                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                  <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-44 h-44 text-primary"
                  >
                    <path d={p3svg}></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                  <span className="text-xl font-bold md:text-3xl">
                    糖尿腎病
                  </span>
                  <p>
                    •
                    長期血糖水平偏高會損害血管，包括腎臟血管，導致腎臟受損，影響腎功能，嚴重的更可導致腎衰竭
                    <br />• 預防方法：良好的血糖、血脂及血壓控制；不吸煙；
                    <br />• 恆常運動；及每年進行腎功能包括尿液蛋白檢查
                  </p>
                </div>
              </div>
              <Separator />
            </div>
            <div className="divide-y">
              <div className="grid rounded-md justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0 hover:bg-blue-100">
                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                  <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-44 h-44 text-primary"
                  >
                    <path d={p4svg}></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                  <span className="text-xl font-bold md:text-3xl">
                    糖尿眼疾
                  </span>
                  <p>
                    •
                    血糖長期過高會損害視網膜上的微絲血管，導致視網膜破壞，嚴重者可引致視網膜脫落、分離，導致失明
                    <br />•
                    預防方法：良好的血糖及血壓控制；留意病徵，如視力下降、眼睛疼痛或發炎，應立刻向你的家庭醫生求診；及每年接受眼部檢查，以便及早察覺及治療
                  </p>
                </div>
              </div>
              <Separator />
            </div>
            <div className="divide-y">
              <div className="grid rounded-md justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0 hover:bg-blue-100">
                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                  <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-44 h-44 text-primary"
                  >
                    <path d={p5svg}></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                  <span className="text-xl font-bold md:text-3xl">
                    心血管病及中風
                  </span>
                  <p>
                    •
                    長期血糖過高會加速血管硬化，當負責供應心臟血液的血管受影響時，便會導致冠心病；當負責供應腦部血液的血管受影響時，便會導致中風
                    <br />• 預防方法：保持目標血壓低於
                    130/80mmHg；良好的血糖及血脂控制；不吸煙；及恆常運動
                  </p>
                </div>
              </div>
              <Separator />
            </div>
            <div className="divide-y">
              <div className="grid rounded-md justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0 hover:bg-blue-100">
                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                  <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-44 h-44 text-primary"
                  >
                    <path d={p6svg}></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                  <span className="text-xl font-bold md:text-3xl">糖尿足</span>
                  <p>
                    •
                    長期血糖水平偏高會導致神經末梢病變，造成腳部感覺遲緩，以致不易察覺腳部問題；而血管硬化更會引致腳部血液供應不足，一旦有傷口便難以復原，嚴重的更可導致組織壞死，最後可能要截肢，以保性命
                    <br />•
                    預防方法：學習護理足部的知識，每天觀察足部情況，例如皮膚破損或潰瘍；保持足部衞生；注意生活細節，保護雙腳避免受傷；若有任何足部問題應向家庭醫生提出
                  </p>
                </div>
              </div>
              <Separator />
            </div>
            <div className="divide-y">
              <div className="grid rounded-md justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0 hover:bg-blue-100">
                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                  <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-44 h-44 text-primary"
                  >
                    <path d={p7svg}></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                  <span className="text-xl font-bold md:text-3xl">牙周病</span>
                  <p>
                    •
                    血糖控制欠佳會降低抵抗力，增加牙齦受細菌感染的機會，如糖尿病患者未能徹底清潔口腔，令牙菌膜積聚，便會導致牙周病
                    <br />•
                    預防方法：早晚用正確方法刷牙，徹底清潔牙齒；選用軟毛牙刷及使用含氟化物牙膏；使用牙線或牙縫刷清潔牙縫；及定期檢查口腔
                  </p>
                </div>
              </div>
              <Separator />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center px-4 lg:px-24 m-5">
            <p>如有需要，家庭醫生會轉介病人至有關專科接受檢查及治療。</p>
          </div>
        </MaxWidthWrapper>
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
