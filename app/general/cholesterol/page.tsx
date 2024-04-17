import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import MaxWidthWrapper from "@/components/maxwidthwrapper";
import HeroSection from "@/components/shared/hero";
import {
  chobetterlist,
  cholist,
  choreasonlist,
  choreasonlist2,
  dietsvg,
  endocrinesvg,
  fatsvg,
  sportssvg,
} from "@/constants";
import { TiTick, TiTimes } from "react-icons/ti";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CholesterolPage = () => {
  return (
    <>
      <HeroSection
        title={"膽固醇"}
        subtitle={
          "保持膽固醇在健康⽔平可以幫助您降低患⼼臓病和其他嚴重狀況的風險。"
        }
        backgroundImage={"/bg-cholesterol.jpg"}
      />
      <section>
        <div className="container my-24 mx-auto md:px-6">
          <section className="mb-32">
            <div className="block rounded-lg bg-white shadow-2xl">
              <div className="flex flex-wrap items-center">
                <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                  <img
                    src="/cholesterol/cho2.png"
                    alt=""
                    className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                  />
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                  <div className="px-6 py-12 md:px-12">
                    <h2>什麼是膽固醇?</h2>
                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                      膽固醇是蠟狀，類似脂肪的物質。它是肝臟天然產生的。您的身體會產⽣膽固醇，某些⾷物中也會產⽣膽固醇。每個⼈都有膽固醇，它是製造激素和維⽣素
                      D
                      以及幫助您消化⾷物所必需的。我們需要它來保持健康，人體利用膽固醇來構建細胞，膽固醇過多會導致健康問題，使您處於患⼼臓病的危險中。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-center items-center">
            <h2>膽固醇的種類</h2>
            <p>
              膽固醇是由蛋⽩質攜帶在您的⾎液中的，當膽固醇和蛋⽩質結合時，它們稱為脂蛋白︒膽固醇有兩種主要類型。⾼密度脂蛋⽩或
              HDL
              被稱為“好”膽固醇。這是因為它消除了血液中的“壞”膽固醇。不需要的膽固醇會被帶回肝臟，肝臟將其分解，因此可以從體內排出。⾮⾼密度脂蛋⽩或⾮
              HDL
              被稱為“壞”膽固醇。這是因為當它太多時，會在血管壁內堆積，這會堵塞並導致動脈變窄，從而增加您罹患⼼臓病或中⾵的⾵險。您可能還聽說過“壞”膽固醇被稱為“LDL”膽固醇。以前曾用它作為不良膽固醇的主要量度，但現在我們知道其他形式的非
              HDL 膽固醇也是有害的。
            </p>
          </div>
          <div className="flex flex-col mx-auto lg:flex-row w-full max-w-screen-2xl justify-center items-center">
            <div className="justify-center items-center pr-20">
              {cholist.map((cho, index) => {
                return (
                  <Accordion type="single" collapsible key={index}>
                    <AccordionItem value={cho.item}>
                      <AccordionTrigger className="p-bold-20">
                        {cho.trigger}
                      </AccordionTrigger>
                      <AccordionContent className="text-lg">
                        {cho.content}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              })}
            </div>
            <div className="flex items-center space-x-2 justify-center">
              <Image
                src={"/cholesterol/cho.png"}
                alt={""}
                width="500"
                height="500"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="mb-32">
        <div className="container mx-auto text-center lg:text-left xl:px-16 my-24 px-6">
          <div className="flex items-center lg:grid lg:grid-cols-2">
            <div className="mb-12 lg:mb-0">
              <div className="relative z-[1] block rounded-lg bg-slate-100 px-6 py-12 shadow-2xl backdrop-blur-[30px] md:px-12 lg:-mr-14">
                <h4>什麼是高膽固醇?</h4>
                <p>
                  ⾼膽固醇是指血液中膽固醇過多。這會增加您患⼼臓病和循環系統疾病(例如⼼臓病發作和中⾵)的風險。了解這些水平和衡量患⼼臓病的⾵險的最佳⽅法是去諮詢醫⽣，進⾏⼼臟健康檢查。
                  <br />
                  <br />
                </p>
                <h4>高膽固醇的症狀是什麼?</h4>
                <p>
                  高膽固醇通常沒有任何典型或明顯跡象的症狀，這就是為什麼將其檢查出來如此重要的原因。這是一個隱藏的風險因素，這意味著它會在我們不知道的情況下發生，直到為時已晚。
                  <br />
                  <br />
                  如果您年滿45歲或以上，請您的醫⽣進⾏膽固醇檢查，作為心臟健康檢查的⼀部分。如果您有高膽固醇家族史，請與您的家庭醫⽣談談您患⼼臓病的風險。
                  <br />
                  <br />
                </p>
                <h4>為什麼高膽固醇對您有害?</h4>
                <p>
                  非高密度脂蛋⽩將膽固醇從肝臟吸收到身體周圍的細胞。過多的壞膽固醇
                  (非HDL)可能有害，因為它會粘在動脈內壁上。這可能會導致脂肪物質積聚，此過程稱為動脈粥樣硬化。它使⾎液更難流過，如果這些沉澱物破裂，它們會形成血塊並可能導致⼼臓病發作或中風。如果您的總膽固醇很高，可能意味著您的血液中有很多壞膽固醇(非
                  HDL)。高⽔平的好膽固醇 (HDL)
                  可以幫助控制壞膽固醇並將其從體內清除。
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <div>
              <img
                src="/cholesterol/doc.jpg"
                className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-center items-center">
            <h2>什麼會導致⾼膽固醇?</h2>
            <p>
              沒有單⼀原因導致高膽固醇的，但是有⼀些可控制的危險因素(例如:吸煙)。另外還有不可控制的危險因素(例如年齡)。
            </p>
            <h4>可控制的危險因素包括:</h4>
            <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
              {choreasonlist.map((choreason, index) => {
                return (
                  <div className="mb-12 lg:mb-0" key={index}>
                    <div className="mb-6 inline-block rounded-full bg-blue-100 p-4 text-primary shadow-sm">
                      <TiTick className="w-8 h-8" />
                    </div>
                    <h5 className="mb-4 text-lg font-bold">{choreason.item}</h5>
                    <p className="text-neutral-500 dark:text-neutral-300">
                      {choreason.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <h4>不可控制的危險因素:</h4>
            <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
              {choreasonlist2.map((choreason2, index) => {
                return (
                  <div className="mb-12 lg:mb-0" key={index}>
                    <div className="mb-6 inline-block rounded-full bg-red-100 p-4 text-red-400 shadow-sm">
                      <TiTimes className="w-8 h-8" />
                    </div>
                    <h5 className="mb-4 text-lg font-bold">
                      {choreason2.item}
                    </h5>
                    <p className="text-neutral-500 dark:text-neutral-300">
                      {choreason2.description}
                    </p>
                  </div>
                );
              })}
            </div>
            <p>
              擁有的風險因素越多，患⼼臓病或循環系統疾病（例如心臓病發作，中風或血管性癡呆）的風險就越高。無論是什麼原因，改善您的⽣活⽅式(包括飲⾷)都可以幫助降低患心臓病的⾵險。
            </p>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-center items-center">
            <h2>膽固醇如何測量?</h2>
            <p>
              膽固醇通過稱為脂質組或脂質譜的血液測試進行測量，也可用簡單的血液測試來測量，醫生或執業護⼠通常會通過刺破⼿指來採集⾎液樣本。若在醫院或化驗所進⾏血液檢查，膽固醇測試通常涉及從手臂的靜脈抽血。然後檢查血液中的好膽固醇(HDL)，壞膽固醇(非
              HDL)，三酸甘油脂，
              以及總膽固醇⽔平。該測試可以幫助確定動脈粥樣硬化的⾵險，動脈粥樣硬化是斑塊積聚，狹窄或阻塞了動脈。一般⽽言，對於健康的心臟，目標是具有較低的非
              HDL 水平和較高的 HDL 水平。
              如果您被告知膽固醇水平很高，則您的⾎液中膽固醇⽔平過多，這會增加您患心臓病或中風的⾵險。但是高水平的“好”(HDL)膽固醇可以幫助控制“壞”(非
              HDL)膽固醇。
            </p>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-center items-center">
            <h2>如何解讀您的膽固醇結果?</h2>
            <p>
              膽固醇和三酸甘油脂的單位為毫摩爾/升血液，通常縮寫為“mmol/L”。沒有特定的目標膽固醇水平，因為您的醫⽣會依據年齡和家族病史等因素研究您罹患心臓病和循環系統疾病的總體⾵險⽽有所不同，因此請諮詢您的醫⽣，哪種⽔平最適合您。
              <br />
              <br />
              全⾎膽固醇測試通常會檢查:
            </p>
            <Image
              src="/cholesterol/cho4.png"
              alt=""
              width={554}
              height={359}
            />
            <p>
              ⾼三酸⽢油脂，或者低密度脂蛋⽩膽固醇升高或高密度脂蛋白膽固醇降低，都會增加動脈中脂肪堆積的機會，從而增加心臓病發作和中⾵的⾵險。
            </p>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="flex flex-col justify-center items-center">
            <h2>如何降低高膽固醇?</h2>
            <h4>有多種⽅法可以幫助降低高膽固醇，例如</h4>
          </div>
          <div className="grid grid-cols-4 gap-6 pb-10">
            {chobetterlist.map((chobetter, index) => {
              return (
                <div
                  className="block rounded-lg bg-white shadow-secondary-1"
                  key={index}
                >
                  <div
                    className="relative overflow-hidden bg-cover bg-no-repeat"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    <img
                      className="rounded-t-lg w-full h-52 object-cover"
                      src={chobetter.imagepath}
                      alt=""
                    />
                    <a href={chobetter.link}>
                      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div className="p-6 text-surface dark:text-white">
                    <h5 className="mb-2 text-xl font-medium leading-tight">
                      {chobetter.label}
                    </h5>
                    <Button asChild>
                      <Link href={chobetter.link}>了解更多</Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col justify-center items-center">
            <h4>高膽固醇的藥物和治療</h4>
            <p>
              如果您的膽固醇很高，並且生活⽅式改變不夠，醫⽣可能建議您通過藥物控制膽固醇。他汀類藥物是用於降低膽固醇的主要藥物。醫⽣會告知您是否需要服用其他有助於控制膽固醇水平的藥物。
            </p>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default CholesterolPage;
