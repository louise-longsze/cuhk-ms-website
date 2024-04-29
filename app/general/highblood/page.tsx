"use client";

import MaxWidthWrapper from "@/components/maxwidthwrapper";
import HeroSection from "@/components/shared/hero";
import CountUp from "react-countup";
import { factsvg, hbpprevent, hbpsymptoms, rumorsvg } from "@/constants";
import { TiTick } from "react-icons/ti";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HighBloodPressurePage = () => {
  return (
    <>
      <HeroSection
        title={"高血壓"}
        subtitle={
          "代謝症候群其中一個重要的可改變風險因素。研究發現，現時已知道代謝症候群有多個風險因素。其中，有八成以上的風險因素是可以改變的。冠⼼病的可改變⾵險因素包括有不良飲⾷習慣, 缺乏運動, 吸煙, 身體過重, 血脂過⾼, ⾼血壓, 菸酒, 和糖尿病。⾼⾎壓是這些因素中重要的⼀項, 因為可增加⼼臟的負荷及會加速動脈粥樣硬化。"
        }
        backgroundImage={"/bg-highblood.jpg"}
      />
      <section className="mb-32">
        <div className="container my-24 mx-auto md:px-6">
          <div className="block rounded-lg bg-white shadow-2xl">
            <div className="flex flex-wrap items-center">
              <div className="w-2/3 shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <img
                  src="/highblood/hbp2.png"
                  alt=""
                  className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                />
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <h2>甚麼是⾎壓?</h2>
                  <p className="mb-6 text-neutral-500">
                    ⾎壓是當⼼臟收縮時將血液泵⼊血管所加諸⾎管壁的壓⼒。我們需要維持正常的⾎壓，推動⾎液在體內運⾏，才能把氧氣和營養輸送到⾝體各組織。
                    <br />
                    <br />
                    ⾎壓可以利⽤⾎壓計量度出來，一般以毫⽶水銀柱(mmHg)
                    為單位。血壓度數由兩個數字組成，前者
                    (收縮壓/上壓)代表心臟收縮泵⾎時加諸血管壁的壓⼒，⽽後者(舒張壓/下壓)則代表兩下⼼跳之間⼼臟放鬆時⾎管壁所承受的壓⼒。
                    <br />
                    <br />
                    正常⾎壓並不固定，會隨著時間有所變化，亦會受情緒的起伏和不同程度的體能活動影響。舉例說，在⽣氣或焦慮時，⾎壓會上升;⽽休息或入睡時，血壓則會下降。
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
            <h2>⾼血壓</h2>
            <div className="flex flex-col justify-center items-center px-4 lg:px-24 m-5">
              <p>
                ⾼血壓是指⾎壓持續處於⾼⽔平的一種慢性疾病。⾎壓是當⼼臟收縮，
                將血液泵入動脈時所加諸動脈⾎管壁的壓⼒︒我們需要維持正常的血壓，推動⾎液在體內運行，把氧氣和營養輸送到⾝體各組織。然⽽，如果⾎壓上升並持續處於⾼水平，便可能會引致嚴重的健康問題，包括中⾵︑冠⼼病及⼼臟衰竭、慢性腎病。
                在⼀天裡，⾎壓每分鐘都會隨著不同的因素⽽變化，包括⾝體姿勢、體能活動、情緒及睡眠等。
              </p>
              <h4>以下是美國⼼臟協會針對成年人的⾼⾎壓指引:</h4>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-lg text-left rtl:text-right text-white border-4 border-white">
                <thead className="text-white bg-primary ">
                  <tr className="border-4 border-white">
                    <th scope="col" className="px-6 py-3 ">
                      血壓類別
                    </th>
                    <th scope="col" className="px-6 py-3 border-4 border-white">
                      收縮墼毫米汞柱mm Hg(在上面的数值)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 border-4 border-white"
                    ></th>
                    <th scope="col" className="px-6 py-3">
                      舒張壂毫米汞柱(mm Hg(在下面的数值)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-lime-600 border-4 border-white">
                    <td scope="row" className="px-6 py-4 whitespace-nowrap">
                      正常
                    </td>
                    <td className="px-6 py-4 border-4 border-white">不到120</td>
                    <td className="px-6 py-4 border-4 border-white">及</td>
                    <td className="px-6 py-4">不到80</td>
                  </tr>
                  <tr className="bg-amber-300 border-4 border-white">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap"
                    >
                      偏高
                    </th>
                    <td className="px-6 py-4 border-4 border-white text-black ">
                      120-129
                    </td>
                    <td className="px-6 py-4 border-4 border-white text-black ">
                      及
                    </td>
                    <td className="px-6 py-4 text-black ">不到80</td>
                  </tr>
                  <tr className="bg-orange-500 border-4 border-white">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap"
                    >
                      高血壓，第一期
                    </th>
                    <td className="px-6 py-4 border-4 border-white">130-139</td>
                    <td className="px-6 py-4 border-4 border-white">或</td>
                    <td className="px-6 py-4">80-89</td>
                  </tr>
                  <tr className="bg-red-600 border-4 border-white">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap"
                    >
                      高血墅，第二期
                    </th>
                    <td className="px-6 py-4 border-4 border-white">
                      140或更高
                    </td>
                    <td className="px-6 py-4 border-4 border-white">或</td>
                    <td className="px-6 py-4">90或更高</td>
                  </tr>
                  <tr className="bg-red-800 border-4 border-white">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap"
                    >
                      高血堅危險期
                      <br />
                      (請立即諮詢您的醫師)
                    </th>
                    <td className="px-6 py-4 border-4 border-white">高於180</td>
                    <td className="px-6 py-4 border-4 border-white">及/或</td>
                    <td className="px-6 py-4">高於120</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-col justify-center items-center px-4 lg:px-24 m-5">
              <p>
                若收縮壓處於 120 至 139mmHg 之間，或舒張壓處於 80 至 89mmHg
                之間，
                則屬於前期(第一期)⾼血壓，應多加注意。而就兒童或青少年而⾔，如果重複量度的收縮壓或舒張壓的度數相等或⾼於同年齡、⾼度和性別⼈士的⾎壓的第95百分位數，則表示患有⾼血壓。
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-between items-center">
            <h2>⾼血壓</h2>
            <div className="flex flex-col justify-center items-center px-4 lg:px-24 m-5">
              <p>
                根據衞⽣署進⾏的 2014/15 年度⼈口健康調查顯⽰，15-84
                歲人士從⾃述或在⾝體檢查時發現患有⾼血壓的總患病率為 :
              </p>
            </div>
            <CountUp
              end={27.7}
              suffix="%"
              decimals={1}
              duration={3}
              enableScrollSpy={true}
              className="text-7xl"
            />
            <h3 className="my-3 text-2xl font-semibold">⾼血壓的總患病</h3>
            <div className="container mx-auto grid justify-center gap-4 lg:grid-cols-2">
              <div className="flex flex-col justify-center items-center p-4">
                <CountUp
                  end={30.1}
                  suffix="%"
                  decimals={1}
                  duration={3}
                  enableScrollSpy={true}
                  className="text-7xl text-sky-500"
                />
                <h3 className="my-3 text-2xl font-semibold">男性</h3>
              </div>
              <div className="flex flex-col items-center p-4">
                <CountUp
                  end={25.5}
                  suffix="%"
                  decimals={1}
                  duration={3}
                  enableScrollSpy={true}
                  className="text-7xl text-pink-500"
                />
                <h3 className="my-3 text-2xl font-semibold">⼥性</h3>
              </div>
            </div>
            <CountUp
              end={47.5}
              prefix="其中 "
              suffix="%"
              decimals={1}
              duration={3}
              enableScrollSpy={true}
              className="text-7xl"
            />
            <h3 className="my-3 text-2xl font-semibold">
              ⼈口健康調查前未被確診
            </h3>
            <div className="flex flex-col justify-center items-center px-4 lg:px-24 m-5">
              <p>⾼血壓的總患病率隨年齡增⾧而持續上升，比例由 15-24 歲的</p>
              <CountUp
                end={4.5}
                suffix="%"
                decimals={1}
                duration={3}
                enableScrollSpy={true}
                className="text-7xl"
              />
              <p>
                <br />
                上升⾄ 65-84 歲的
              </p>
              <CountUp
                end={64.8}
                suffix="%"
                decimals={1}
                duration={3}
                enableScrollSpy={true}
                className="text-7xl"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="py-6 bg-primary text-gray-50">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-3xl font-bold leading-none text-center">
            ⾼血壓一般沒有症狀，患者往往在出現併發症後才發現患病，所以⾼血壓常被稱為
            <span className="text-red-400 font-bold">「隱形殺手」</span>
            。不過，⾎壓太高也可引致眩暈、視線模糊不清、頭痛、疲勞和⾯部發紅等症狀。
          </h1>
        </div>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
            <div className="w-full mx-auto">
              <div className="flex flex-col justify-center items-center">
                <h2>高危因素</h2>
                <div className="lg:px-24 px-4 m-5">
                  <p>
                    超過
                    90%的⾼血壓個案無法確定明確的病因。這些個案均診稱為原發性⾼血壓。
                  </p>
                </div>
                <h4>⾼危因素令⼈較易患上⾼⾎壓包括</h4>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {hbpsymptoms.map((symptoms, index) => {
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
        <MaxWidthWrapper>
          <div className="w-full mx-auto">
            <div className="flex flex-col justify-center items-center">
              <h2>為何發現及控制⾼血壓如此重要?</h2>
              <div className="lg:px-24 px-4 m-5">
                <p>
                  患上⾼血壓⽽不加以治療或控制，可導致嚴重後果、甚或致命，包括:
                </p>
              </div>
              <h4>冠心病</h4>
              <h4>心臟衰竭</h4>
              <h4>中⾵</h4>
              <h4>視網膜⾎管病變</h4>
              <h4>腎衰竭</h4>
              <div className="lg:px-24 px-4 m-5">
                <p>
                  ⾎壓越高和不受控制的時間越⾧，出現併發症的機會及其嚴重性越⼤。
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="w-full mx-auto">
            <div className="flex flex-col justify-center items-center px-4">
              <h2>如何預防和控制⾼血壓</h2>
              <h4>奉⾏健康的生活模式對預防和控制高血壓⾄為重要，其中包括:</h4>
              <div className="grid gap-x-6 lg:grid-cols-2 lg:gap-x-12">
                {hbpprevent.map((hbpprevent, index) => {
                  return (
                    <div className="mb-12 lg:mb-0" key={index}>
                      <div className="mb-6 inline-block rounded-full bg-blue-100 p-4 text-primary shadow-sm">
                        <TiTick className="w-8 h-8" />
                      </div>
                      <h5 className="mb-4 text-2xl font-bold">
                        {hbpprevent.item}
                      </h5>
                      <p className="text-neutral-500">
                        {hbpprevent.description}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="lg:px-24 px-4 m-5">
                <p>
                  若已確診患上⾼血壓，應按醫⽣指⽰服⽤藥物，同時應了解藥物的效⽤、服⽤⽅法和時間，並定期覆診，以作跟進。
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-center items-center px-4">
            <h2>⾎壓計的準確度</h2>
            <div className="lg:px-24 px-4 m-5">
              <p>
                選⽤經臨床驗證的⾎壓計。於操作血壓計前，必須仔細閱讀說明書和按照指示。在家量度的⾎壓度數可能會與於醫⽣診所量度的結果有出⼊。如有疑問，可攜同家⽤血壓計應診，好讓醫生協助檢視你所⽤血壓計的準確度。
              </p>
            </div>
            <h4>如何量度出正確的度數</h4>
          </div>
          <div className="lg:px-24 px-4 m-5">
            <Carousel className="border-4 border-primary">
              <CarouselContent>
                <CarouselItem>
                  <div className="bg-gradient-to-tr from-blue-100 to-primary relative w-full lg:h-120 h-200">
                    <div className="absolute my-3 text-5xl font-semibold text-blue-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                      <h3>1. 何時量度:</h3>
                      <p>
                        • 於每天差不多同⼀時間量度。
                        <br />•
                        不要在感到不適、寒冷、焦慮、有壓⼒、疼痛或憋尿時量度。
                      </p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-gradient-to-tr from-blue-100 to-pink-500 relative w-full lg:h-120 h-200">
                    <div className="absolute my-3 text-5xl font-semibold text-blue-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                      <h3>2. 量度⾎壓前:</h3>
                      <p>
                        • 在量度⾎壓前的 30
                        分鐘，不要運動、吸煙、進⾷或飲⽤含咖啡因的飲料(例如茶或咖啡)。
                        <br />• 緊記穿鬆⾝衣服。 <br />•
                        放鬆休息5分鐘，期間不要做分心的活動(如看電視)。
                      </p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-gradient-to-tr from-blue-100 to-fuchsia-500 relative w-full lg:h-120 h-200">
                    <div className="absolute my-3 text-5xl font-semibold text-blue-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                      <h3>3. 手臂位置:</h3>
                      <p>
                        • 靠著背舒適地坐下。
                        <br />• 捲起⾐袖露出⼿臂，再以袖帶包捲手臂。
                        <br />• 確保⼿臂承托於⼼臟同一水平。
                        <br />• 雙腳平放在地上，不要交叉雙腿。
                      </p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="bg-gradient-to-tr from-blue-100 to-emerald-500 relative w-full lg:h-120 h-200">
                    <div className="absolute my-3 text-5xl font-semibold text-blue-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                      <h3>4. 量度血壓:</h3>
                      <p>
                        • 在量度⾎壓時，保持放鬆和不要說話。
                        <br />•
                        在首次量度⾎壓後，將袖帶完全鬆開，重覆之前的步驟量度⼀次。
                        <br />• 兩次量度最少相隔 1 分鐘。
                        <br />• 取兩次量度得出度數的平均數。倘若兩者相差超過
                        5mmHg，應額外多量度一次再取其平均數。
                        <br />• 紀錄度數以持續監測血壓。
                        <br />• 如有任何疑問，應請教醫⽣或護士。
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-between items-center">
            <h2>關於⾼血壓的常見謬誤</h2>
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
                    className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap"
                  >
                    高血壓是無法預防
                  </td>
                  <td className="px-6 py-4">
                    實踐健康生活模式，尤其是減少食鹽，可以減低患上高血愿的風險。
                  </td>
                </tr>
                <tr className="bg-blue-600 border-b border-blue-400">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap"
                  >
                    只有肥胖或經常焦慮的人才會患高血壓
                  </th>
                  <td className="px-6 py-4">
                    高血壓的風險會隨年齡增加。因此，所有人都感關注自己的血壓，如有疑問，應諮詢醫生。
                  </td>
                </tr>
                <tr className="bg-blue-600 border-b border-blue-400">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap "
                  >
                    患高血壓的人會覺得頭痛及疲倦
                  </th>
                  <td className="px-6 py-4">
                    大多數高血壓患者都沒有症狀，因此，單靠症狀來識別是否患病並不可靠。有需要定期量度血壓。
                  </td>
                </tr>
                <tr className="bg-blue-600 border-b border-blue-400">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap"
                  >
                    我有高血壓，醫生說如果開始服用血壓藥話，
                    <br />
                    便須服用一輩子。我還是不開始服藥為妙
                  </th>
                  <td className="px-6 py-4">
                    患高血壓的事實，不會因你拒絕服藥而改變。但是，若不依照醫生的指示服藥的話，會大大增加出現併發症或縮短壽命的機會。
                  </td>
                </tr>
                <tr className="bg-blue-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap"
                  >
                    血壓回復正常後，便不再需要服藥
                  </th>
                  <td className="px-6 py-4 min-w-96">
                    高血壓是一種慢性疾病，雖能透過藥物控制，但並不能治癒。因此，患者須按醫生指示接受持續治療，調整生活模式，並在往後的日子定期進行檢查，以跟進身體狀況。若沒有醫生指示，絕不可自我調較藥量，或自行停藥。
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
            <h2>如何選擇血壓計</h2>
          </div>

          <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm lg:mb-12 lg:grid-cols-2 bg-white">
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                <div className="flex justify-center">
                  <img
                    className="w-96 h-96 object-cover"
                    src="/highblood/test1.jpg"
                  ></img>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 pt-4">
                  手臂式抑或手腕式⾎壓計
                </h3>
                <p className="my-4">
                  ⼀般電⼦血壓計可用於⼿臂或⼿腕。由於⼿臂式⾎壓計比較準確，所以較為合⽤。然而，對那些沒有合適尺寸或形狀袖帶，或因袖帶充氣導致痛楚的人⼠來說，⼿腕式⾎壓計是另一個選擇。請向醫生或合資格的醫護人員諮詢哪⼀種⾎壓計最適合你。建議不要採⽤用⼿指式⾎壓計。
                </p>
              </blockquote>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
              <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
                <div className="flex justify-center">
                  <img
                    className="w-96 h-96 object-cover"
                    src="/highblood/test2.jpg"
                  ></img>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 pt-4">
                  袖帶的尺⼨
                </h3>
                <p className="my-4">
                  • ⾎壓計袖帶有不同的尺寸，使用不稱⾝的袖帶會量度出錯誤的度數。
                  <br />•
                  袖帶過⼩可能會得出⽐正確度數⾼的結果;袖帶過大則會出現過低的度數。因此，應確保袖帶的尺寸適合你的⼿臂。袖帶的寬度應能覆蓋三分之⼆手臂⾧度，⾧度應⾜夠完全圍繞⼿臂。⼤部分⾎壓計都附有中等尺寸的袖帶，適合大多數成年⼈使⽤。⼿臂較粗或肥胖的⼈⼠可能需要使用尺⼨較大的袖帶。有關選⽤血壓計的建議，可向醫⽣或供應商查詢。
                </p>
              </blockquote>
            </figure>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-center items-center px-4">
            <h2>量度血壓的正確步驟</h2>
            <div className="lg:px-24 px-4 m-5">
              <h4>以下是美國心臟協會印製的量度血壓的正確步驟:</h4>
            </div>
            <img className="w-2/3 object-fit" src="/highblood/hbp3.png"></img>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default HighBloodPressurePage;
