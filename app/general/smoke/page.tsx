import MaxWidthWrapper from "@/components/maxwidthwrapper";
import HeroSection from "@/components/shared/hero";
import { nicotinesvg, co2svg, smokelist } from "@/constants";

const SmokePage = () => {
  return (
    <>
      <HeroSection
        title={"吸煙"}
        subtitle={"吸煙危害健康，吸煙和二⼿煙是⼼血管疾病已知的⾵險因素。"}
        backgroundImage={"/bg-smoke.jpg"}
      />
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-between items-center">
            <h2>吸煙和二⼿煙是⼼血管疾病已知的⾵險因素</h2>
            <div className="flex flex-col justify-center items-center px-24 m-5">
              <p>
                吸煙和二手煙對健康構成極大的危害，不少致命疾病與吸煙有關，包括⼼臟病、腦⾎管疾病、下呼吸道感染、慢性阻塞性肺病、肺結核及氣管、支氣管和肺癌。吸煙可引致⼼血管疾病，包括冠⼼病、中風、主動脈瘤及周圍⾎管疾病等。
                <br />
                <br />
                除此之外，吸煙也會影響血液循環，甚至引致皮膚壞死。每年，都會有成千上萬的人都是由於這原因⽽需要把一隻，甚⾄兩隻腳切去。如果你在二十歲開始，便每⽇食⼆十⽀煙的話，你的壽命便會減少四分之一。
              </p>
              <h4>吸煙怎樣危害我們呢?</h4>
              <p>
                煙草含有超過7000種化學物質，超過70種是致癌物，其中2⼤
                <span className="text-red-500 font-bold">殺手</span> :
              </p>
            </div>
            <div className="container mx-auto grid justify-center gap-4 lg:grid-cols-2">
              <div className="flex flex-col justify-center items-center p-4">
                <svg
                  viewBox="0 0 256 256"
                  fill="currentColor"
                  className="w-32 h-32 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d={nicotinesvg}
                    clipRule="evenodd"
                  ></path>
                </svg>
                <h3 className="my-3 text-2xl font-semibold">尼古丁</h3>
              </div>
              <div className="flex flex-col items-center p-4">
                <svg
                  viewBox="0 0 256 256"
                  fill="currentColor"
                  className="w-32 h-32 text-primary"
                >
                  <path fillRule="evenodd" d={co2svg} clipRule="evenodd"></path>
                </svg>
                <h3 className="my-3 text-2xl font-semibold">⼀氧化碳</h3>
              </div>
            </div>
            <div className="container mx-auto space-y-12">
              <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                <img
                  src="/smoke/smoke2.jpg"
                  alt=""
                  className="h-80 object-cover aspect-video"
                />
                <div className="flex flex-col justify-center flex-1 p-6">
                  <h3 className="text-3xl font-bold">尼古丁</h3>
                  <p className="my-6">
                    尼古丁會破壞血液裏的細胞，使這些細胞黏在血壁上。它令⾎液更容易凝結及令到血壁容易受損。血液從這些損壞的血壁可能會變成凝塊，這些凝塊會在身體內移動⾄較窄的血管，如果它們不能通過⾎管，便會做成栓塞，引致心臟病或其他疾病。此外尼古丁也會令腎上腺分泌增加，增加心臟⼯作負荷，令⾎壓上升。
                  </p>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                <img
                  src="/smoke/co2.jpg"
                  alt=""
                  className="h-80 object-cover aspect-video"
                />
                <div className="flex flex-col justify-center flex-1 p-6">
                  <h3 className="text-3xl font-bold">⼀氧化碳</h3>
                  <p className="my-6 ">
                    ⼀氧化碳是一種無⾊無味無臭的有毒氣體，在香烟中佔有很⼤的分量。
                    當你吸⼊一氧化碳時，它會取代你⾎液內的氧氣，並且會在你的體內運行，破壞你體內的細胞。
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center px-24 pt-24 m-5">
              <h4>吸煙如何引致心血管疾病</h4>
              <p>
                香煙在點燃下，肺部會吸入尼古丁和一氧化碳並進⼊血液而引發⾎管病變。尼古丁會刺激神經系統，引起心跳加快和血管收縮，因此令血壓上升。尼古丁亦令血中的膽固醇增加，因而加快血凝塊的造成並會阻塞⾎管。一氧化碳會減低⾎液帶氧能⼒，令⾎氧濃度下降，組織供氧不⾜，對⼼臟造成壓力。以上情況會促成動脈粥樣硬化，引發心肌梗塞，心臟病和各種⼼血管疾病
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-between items-center">
            <h2>如果你想戒煙的話</h2>
            <div className="flex flex-col justify-center items-center px-24 m-5">
              <p>
                無論你吸了多少年或多少枝煙，戒煙都有好處，戒煙後不久，與吸煙相關的冠⼼病風險就會開始減少，
                並且戒煙愈久，這種風險通常會繼續降低。
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="py-6 bg-primary text-gray-50">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leading-none text-center">
            戒煙一年後 患上冠心病的機率比吸煙者將會
            <span className="text-red-400 font-bold">減半</span>
          </h1>
        </div>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="container mx-auto p-4 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="max-w-m mx-auto relative shadow-md rounded-lg">
                <img
                  src="/smoke/pills2.jpg"
                  alt=""
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 h-60 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                  <h1 className="text-2xl font-semibold">戒煙輔助藥物</h1>
                  <p className="mt-2 text-white">
                    大部分戒煙輔助藥物可於駐有註冊藥劑師的藥房購買，只是戒煙⼈士使用戒煙藥物前請先諮詢醫護⼈員或戒煙輔導員。戒煙⼈士需要保持意志堅定。即使失敗也不要放棄嘗試戒煙，並不是每個人都可能一次成功。
                  </p>
                </div>
              </div>

              <div className="max-w-m mx-auto relative shadow-md rounded-lg">
                <img
                  src="/smoke/consult2.jpg"
                  alt=""
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 h-60 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                  <h1 className="text-2xl font-semibold">戒煙輔導服務</h1>
                  <p className="mt-2 text-white">由政府及不同團體進行。</p>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-center items-center px-24 m-5">
            <h2>對抗煙癮提示</h2>
          </div>
          <div className="flex flex-col justify-center items-center md:grid md:grid-cols-5 gap-3">
            {smokelist.map((smoke, index) => {
              return (
                <div className="max-w-xs p-3 rounded-md shadow-md " key={index}>
                  <img
                    src={smoke.imagepath}
                    alt=""
                    className="object-cover object-center w-full rounded-md h-72"
                  />
                  <div className="mt-6">
                    <h2 className="text-xl font-semibold tracking-wide">
                      {smoke.label}
                    </h2>
                  </div>
                  <p>{smoke.description}</p>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="py-6 bg-primary text-gray-50">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leading-none text-center">
            新型吸煙產品也有健康風險, 沒有證據可以有效幫助戒煙 !!
          </h1>
        </div>
      </section>
      <section>
        <div className="container mx-auto text-center lg:text-left xl:px-16 mt-24 px-6">
          <div className="flex items-center lg:grid lg:grid-cols-2">
            <div className="mb-12 lg:mb-0">
              <div className="relative z-[1] block rounded-lg bg-slate-100 px-6 py-12 shadow-2xl backdrop-blur-[30px] md:px-12 lg:-mr-14">
                <h4>加熱煙</h4>
                <p>
                  (加熱非燃燒煙草製品)是含有煙草，透過電子裝置將煙草⾼溫加熱，因此也會產⽣尼古丁(與傳統煙含量相近)和其他化學物質，會令人上癮及有害健康:
                  <br />
                  <span className="text-primary font-bold">
                    可引致⾎壓上升、⼼跳加速、⼼肌梗塞、腦中風、冠⼼病等。
                    <br />
                    <br />
                  </span>
                </p>
                <h4>電⼦煙</h4>
                <p>
                  沒有使用煙草，是將化學溶液加熱氣化為煙霧。使⽤者會吸⼊含有多種有害物質和揮發性有機化合物︒每天使用電子煙者會增加約兩倍機會患上心臟病。使⽤電⼦煙者:
                  <br />
                  <span className="text-primary font-bold">
                    會有較⾼機會患上胸⼝痛，⼼悸，冠狀動脈病，⼼律失常。
                  </span>
                  <br />
                  <br />
                  新型吸煙產品被定位為符合潮流的產品。電⼦煙價格較傳統⾹煙低，口味眾多，讓⼈容易接觸和嘗試。煙草商也宣稱加熱煙害處較少，甚⾄可以有效幫助戒煙。但是現在沒有證據證明新型吸煙產品可以有效幫助戒煙，世界衛⽣組織亦不認可它們為戒煙⼯具。它們的安全性存疑，例如電⼦煙可發⽣爆炸。
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <div>
              <img
                src="/smoke/electronic-cigarette.jpg"
                className="w-full rounded-lg shadow-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SmokePage;
