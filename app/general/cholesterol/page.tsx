import HeroSection from "@/components/shared/hero";

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
    </>
  );
};

export default CholesterolPage;
