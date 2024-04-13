import { Button } from "@/components/ui/button";
import { IoFemale, IoMale } from "react-icons/io5";
import Link from "next/link";
import MaxWidthWrapper from "@/components/maxwidthwrapper";

import Image from "next/image";
import { dietsvg, endocrinesvg, fatsvg, sportssvg } from "@/constants";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { LandingTable } from "@/components/landingtable";

export default function Home() {
  return (
    <>
      <section>
        <MaxWidthWrapper className="py-20">
          <div className="flex flex-col mx-auto lg:flex-row ">
            <div className="flex flex-col w-full py-6 lg:w-2/3 md:py-8 lg:py-12">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <span className="text-blue-600">代謝症候群</span>{" "}
                不是一種特定疾病，而是一個健康的危險訊號，表示病人同時積累了多個高危致病因素。
              </h1>
              <p className="mt-6 text-lg max-w-prose text-muted-foreground sm:text-xl">
                包括：腰部脂肪過多(中央肥胖)、高密度脂蛋白膽固醇（好膽固醇）偏低、三酸甘油酯偏高、高血壓及高血糖。雖然此症患者沒有即時生命危險，初期亦沒有明顯病徵，但其實健康已開始受威脅，並有機會出現多種併發症，例如心臟病、腎衰竭、中風等。
                <br />
                <br />
                根據國際糖尿聯盟（International Diabetes
                Federation，IDF）最新發佈的指引，如果病人有中央肥胖，再加上有兩個或以上高危因素，則被確認患上代謝症候群。
              </p>
              <h3 className="flex text-lg font-bold justify-center pt-5 text-red-800 sm:text-xl">
                以亞洲地區的標準，中央肥胖的定義是
              </h3>
              <div className="flex flex-col justify-center sm:flex-row mt-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md bg-sky-500 text-gray-50">
                    <IoMale className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="flex pl-5 items-center text-xl font-medium leading-6">
                  男性腰圍≧90釐米（35.4吋）
                </h3>
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-pink-500 text-gray-50">
                  <IoFemale className="w-8 h-8" />
                </div>
                <h3 className="flex pl-5 items-center text-xl font-medium leading-6">
                  女性腰圍≧80釐米（31.5吋）
                </h3>
              </div>
            </div>
            <div className="w-full py-6 lg:w-1/3 md:py-8 lg:py-12">
              <img src="/oldman.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center pt-5">
            <LandingTable />
            <Link href={"#section02"}>
              <h2 className="pt-5 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                了解更多
              </h2>
            </Link>
            <Link href={"#section02"} className="pt-5">
              <FaArrowAltCircleDown
                className="animate-bounce w-7 h-7 text-primary"
                href="#section02"
              />
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>
      <section id="section02">
        <div className="min-h-screen flex items-center justify-center pb-10">
          <div className="relative w-full max-w-7xl">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="relative space-y-4">
              <div className="p-20 m-5 bg-white rounded-lg flex flex-col items-center justify-center">
                <h1 className="text-4xl lg:text-6xl font-semibold leading-none pb-10">
                  代謝症候群的成因
                </h1>
                <p>導致因素包括：</p>
                <div className="container mx-auto grid justify-center gap-4 lg:grid-cols-2">
                  <div className="flex flex-col justify-center items-center p-4">
                    <svg
                      viewBox="0 0 160 160"
                      fill="currentColor"
                      className="w-32 h-32 text-blue-600"
                    >
                      <path
                        fillRule="evenodd"
                        d={endocrinesvg}
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <h3 className="my-3 text-2xl font-semibold">內分泌失調</h3>
                  </div>
                  <div className="flex flex-col items-center p-4">
                    <svg
                      viewBox="0 0 160 160"
                      fill="currentColor"
                      className="w-32 h-32 text-blue-600"
                    >
                      <path
                        fillRule="evenodd"
                        d={dietsvg}
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <h3 className="my-3 text-2xl font-semibold">
                      不適當的飲食習慣
                    </h3>
                  </div>
                  <div className="flex flex-col items-center p-4">
                    <svg
                      viewBox="0 0 160 160"
                      fill="currentColor"
                      className="w-32 h-32 text-blue-600"
                    >
                      <path
                        fillRule="evenodd"
                        d={fatsvg}
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <h3 className="my-3 text-2xl font-semibold">肥胖</h3>
                  </div>
                  <div className="flex flex-col items-center p-4">
                    <svg
                      viewBox="0 0 160 160"
                      fill="currentColor"
                      className="w-32 h-32 text-blue-600"
                    >
                      <path
                        fillRule="evenodd"
                        d={sportssvg}
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <h3 className="my-3 text-2xl font-semibold">缺乏運動</h3>
                  </div>
                </div>
                <p className="mt-4 mb-8 p-regular-20 font-medium leading-6">
                  內分泌失調、肥胖、不適當的飲食習慣和缺乏運動等多方面因素皆會導致代謝症候群。缺乏體育活動和不良飲食都與肥胖、高血壓、三酸甘油酯和高膽固醇有關。另外，其他疾病也可能增加代謝症候群的風險。例如，多囊卵巢綜合症、睡眠窒息症和抑鬱症等疾病都與代謝症候群有關。
                  <br />
                  <br />
                  代謝症候群的病理學是與胰島素阻抗有關，即身體細胞對胰島素的反應不正常，無法有效利用葡萄糖作為能量。這導致血液中葡萄糖水平增加，進而引起胰臟產生更多的胰島素，進一步加劇胰島素阻抗和葡萄糖水平升高。此外，高脂肪飲食也會產生肝臟過氧化壓力、導致發炎和過氧化損傷。
                  <br />
                  <br />
                  香港中文大學內科及藥物治療學系進行的研究顯示，隨著年齡的增長，代謝症候群的風險增加，老年人更容易患此疾病。
                </p>
                <Image src="/reason2.png" alt="" width={895} height={628} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col justify-center items-center bg-white py-16">
          <h1 className="text-4xl lg:text-6xl font-semibold leading-none pb-10">
            代謝症候群併發症
          </h1>
          <div className="mx-auto p-6">
            <div className="md:flex justify-center space-x-10">
              <div className="bg-gradient-to-tr from-slate-700 to-stone-700 relative w-80 h-80 max-w-full rounded-lg shadow-2xl overflow-hidden">
                <img
                  className="mix-blend-overlay absolute inset-0 w-full h-full object-cover"
                  src="/hearts_640x427.jpg"
                  alt=""
                />
                <h3 className="absolute bottom-10 right-10 my-3 text-2xl font-semibold text-blue-50">
                  心血管疾病
                </h3>
              </div>
              <div className="bg-gradient-to-tr from-slate-700 to-stone-700 relative w-80 h-80 max-w-full rounded-lg shadow-2xl overflow-hidden">
                <img
                  className="mix-blend-overlay absolute inset-0 w-full h-full object-cover"
                  src="/stroke.jpg"
                  alt=""
                />
                <h3 className="absolute bottom-10 right-10 my-3 text-2xl font-semibold text-blue-50">
                  中風
                </h3>
              </div>
              <div className="bg-gradient-to-tr from-slate-700 to-stone-700 relative w-80 h-80 max-w-full rounded-lg shadow-2xl overflow-hidden">
                <img
                  className="mix-blend-overlay absolute inset-0 w-full h-full object-cover"
                  src="/diabetes_640x1138.jpg"
                  alt=""
                />
                <h3 className="absolute bottom-10 right-10 my-3 text-2xl font-semibold text-blue-50">
                  糖尿病
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center px-24 m-5">
            <p className="mt-4 mb-8 p-regular-20 font-medium leading-6">
              代謝症候群可以增加心血管疾病、中風和糖尿病等疾病的風險。高三酸甘油酯、高膽固醇和高血壓可以損害血管壁，增加動脈粥樣硬化的風險。高空腹血糖可以導致胰島素阻力和糖尿病的發生。
              對於胰島素抵抗的人，身體的細胞變得對胰島素的作用產生抵抗，並且身體必須產生更多的胰島素來補償。這可能會導致血液中胰島素水平升高，進而增加患2型糖尿病的風險。
              高血糖水平還會導致血管受損，增加患心血管疾病的風險。血液中過多的葡萄糖會使血管變得僵硬且不靈活，從而增加動脈粥樣硬化的風險。動脈粥樣硬化是一種疾病，其中動脈壁上形成斑塊，進而導致心肌梗死或中風。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
