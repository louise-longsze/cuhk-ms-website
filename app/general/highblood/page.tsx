import MaxWidthWrapper from "@/components/maxwidthwrapper";
import { IoFemale, IoMale } from "react-icons/io5";
import Image from "next/image";
import HeroSection from "@/components/shared/hero";

const perks = [
  {
    name: "男性腰圍",
    Icon: IoMale,
    description: "≧90釐米（35.4吋）",
  },
  {
    name: "女性腰圍",
    Icon: IoFemale,
    description: "≧80釐米（31.5吋）",
  },
];

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
                  src="/highblood/heart1.jpg"
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
    </>
  );
};

export default HighBloodPressurePage;
