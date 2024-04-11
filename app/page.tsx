import { Button } from "@/components/ui/button";
import { IoFemale, IoMale } from "react-icons/io5";
import Link from "next/link";
import MaxWidthWrapper from "@/components/maxwidthwrapper";

import Image from "next/image";
import { dietsvg, endocrinesvg, fatsvg, sportssvg } from "@/constants";
import { FaArrowAltCircleDown } from "react-icons/fa";

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
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              了解更多
            </h2>
            <FaArrowAltCircleDown
              className="animate-bounce w-8 h-8 text-primary"
              href="#section02"
            />

            <Link href={"#section02"}></Link>
          </div>
        </MaxWidthWrapper>
      </section>
      <section id="section02">
        <div className="min-h-screen flex items-center justify-center px-16">
          <div className="relative w-full max-w-7xl">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="m-8 relative space-y-4">
              <div className="py-20 px-5 bg-white rounded-lg flex flex-col items-center justify-center space-x-8">
                <h1 className="text-6xl font-semibold leading-none ">
                  代謝症候群的成因
                </h1>
                <p className="pt-5 dark:text-gray-600">導致因素包括：</p>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-2">
                  <div className="flex flex-col items-center p-4">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
