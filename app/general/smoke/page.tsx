import MaxWidthWrapper from "@/components/maxwidthwrapper";
import HeroSection from "@/components/shared/hero";

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
          <div className="flex flex-col mx-auto lg:flex-row ">
            <div className="flex flex-col w-full py-6 lg:w-2/3 md:py-8 lg:py-12">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <span className="text-primary">代謝症候群</span>{" "}
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
                <h3 className="flex pl-5 items-center text-xl font-medium leading-6">
                  女性腰圍≧80釐米（31.5吋）
                </h3>
              </div>
            </div>
            <div className="w-full py-6 lg:w-1/3 md:py-8 lg:py-12">
              <img src="/oldman.png" alt="" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default SmokePage;
