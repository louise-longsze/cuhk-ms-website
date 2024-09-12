import Image from "next/image";
import HeroSection from "@/components/shared/hero";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { pressurelist, relaxlist, sadsymptoms } from "@/constants";
import MaxWidthWrapper from "@/components/maxwidthwrapper";
import { TipsTable } from "@/components/tipstable";

const TipsPage = () => {
  return (
    <>
      <HeroSection
        title={"慢活放鬆"}
        subtitle={
          "代謝症候群的高危因素很多，其中部分因素可以避免或控制，包括⾼血壓、⾼⾎脂、吸煙、糖尿病、肥胖、缺乏體能活動和⾧期受到壓⼒。家族成員曾患有心臟病，也會增加患病風險。根據美國⼼臟協會的建議，健康生活模式需要包括不吸煙/戒煙，規律運動與飲食管理等，還有在生活中緩解到壓力與懂得放鬆⾃己也是不可或缺的。"
        }
        backgroundImage={"/bg-tips.jpg"}
      />
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-between items-center">
            <h2>壓力與放鬆</h2>
            <div className="mx-auto p-6">
              <div className="flex flex-col justify-center items-center px-4 lg:px-24 m-5">
                <p>
                  當我們的壓力指數上升時，我們體內的腎上腺素也不斷上升。腎上腺素是一種十分有用的化學物質，可以令我們清醒，幫助我們怎樣處理問題。如果腎上腺素上升的話，我們的情緒會由輕鬆的狀態轉移⾄興奮狀態，如果腎上腺素上升得過多的話，我們會覺得緊張，脾氣差，疲倦，感到有壓力，飽肚等的感覺。適量的壓力可以是一種正面的動⼒，但若不懂得去舒壓就會形成一種負能量，對身體健康會有害。如果我們長期在壓⼒下，我們⾝體的抵抗力都會降低。美國心臟協會認為壓力是引致⼼臟病的其中⼀個危險因素。所以當壓⼒開始上升時，要學習如何找出問題所在。
                </p>
                <h4>受壓者可能會有以下的表現:</h4>
                <TipsTable />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
            <div className="w-full mx-auto">
              <div className="flex flex-col justify-center items-center">
                <h2>感到❤️情低落?</h2>
                <div className="px-4 lg:px-24 m-5">
                  <p>
                    有些⼈在得知有心臟病後會感到憂愁的。這些感受同時比別⼈特別敏感的。亦有些⼈會出現傷心，對事物失去興趣，⾷慾下降。更甚者會有想哭的感覺，甚⾄感到憂鬱。
                    <br />
                    <br />
                    憂鬱最令人擔⼼的是憂鬱者的想法。因此我們需要學識怎樣放鬆!保持心境輕鬆愉快是重要的。無論遇到什麼困難，以輕鬆愉快的⼼情去面對任何事情，以保持精神健康。
                  </p>
                </div>
                <h4>憂鬱的症狀包括</h4>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {sadsymptoms.map((symptoms, index) => {
                  return (
                    <div
                      className="group pb-24 relative overflow-hidden"
                      key={index}
                    >
                      <div className="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute bg-gradient-to-b from-transparent to-primary z-10"></div>
                      <img
                        src={symptoms.imagepath}
                        className="transition-all group-hover:scale-125 duration-700 mr-4 h-full w-full object-cover"
                        alt=""
                      />
                      <div className="p-5 bg-primary absolute z-10 bottom-0 left-0 w-full h-24 flex flex-col justify-center items-center">
                        <div className="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6"></div>
                        <span className="text-white p-semibold-20">
                          {symptoms.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center">
          <h4>你是否有壓力?以下幾項，有多少是符合你的呢?</h4>
        </div>
        <div className="flex flex-col mx-auto lg:flex-row w-full max-w-screen-2xl">
          <div className="w-1/2">
            <div className="bg-gradient-to-tr from-slate-500 to-stone-500 relative w-full h-full max-w-full overflow-hidden">
              <img
                className="mix-blend-overlay absolute inset-0 w-full h-full object-cover"
                src="/tips/tips-pressure.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 pl-2 items-center space-x-2 justify-center">
            {pressurelist.map((pressure, index) => {
              return (
                <div
                  className="group pb-12 relative overflow-hidden"
                  key={index}
                >
                  <Checkbox id={pressure.label} />
                  <label
                    htmlFor={pressure.label}
                    className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {"  "}
                    {pressure.label}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col mx-auto lg:flex-row w-full max-w-screen-2xl">
          <div className="justify-center items-center px-4 lg:px-24 m-5">
            <p>
              如果您在承受壓力或遭受創傷時傾向於關閉身體，那麼減輕壓力的活動可能會特別有幫助。如果令你開心的事情就只有吸煙、酗酒，不做運動，吃膩的⾷物和做一些令你⼗分疲倦的事情的話——那怪不得你有⼼臟病了！你應該找其它的東西去代替這些事了。
              <br />
              <br />
              但如果新的壓⼒源在挑戰您的應對能力，或者⾃我減壓措施仍無法緩解壓力，則可能需要以治療或諮詢的形式尋求幫助。如果您感到不知所措或被困，過度擔心或無法承擔責任時。專業的輔導員或治療師可以幫助您確定壓力的來源並學習新的應對工具。如果你有想傷害⾃己的意念或情況，請盡快尋求醫生診治。
            </p>
          </div>
        </div>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-center items-center">
            <h2>減壓方法</h2>
          </div>
          <div className="flex mx-auto flex-col gap-20 lg:flex-row w-full max-w-screen-2xl justify-center items-center">
            <div className="w-5/6 lg:w-1/2 justify-center items-center">
              {relaxlist.map((relax, index) => {
                return (
                  <Accordion type="single" collapsible key={index}>
                    <AccordionItem value={relax.item}>
                      <AccordionTrigger className="p-bold-20">
                        {relax.trigger}
                      </AccordionTrigger>
                      <AccordionContent className="text-lg">
                        {relax.content}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              })}
            </div>
            <div className="items-center space-x-2 justify-center">
              <Image
                src={"/tips/tips-questions.jpg"}
                alt={""}
                width="500"
                height="500"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default TipsPage;
