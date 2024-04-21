import MaxWidthWrapper from "@/components/maxwidthwrapper";
import HeroSection from "@/components/shared/hero";
import { obeselist, obeselist2 } from "@/constants";
import { TiTimes } from "react-icons/ti";

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
            <div className="flex flex-col justify-center items-center px-24 m-5">
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
                      <p className="text-neutral-500 dark:text-neutral-300">
                        {obese.description}
                      </p>
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
                          {obese2.label}
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
    </>
  );
};

export default ObesePage;
