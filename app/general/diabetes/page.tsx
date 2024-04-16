import HeroSection from "@/components/shared/hero";

const DiabetesPage = () => {
  return (
    <>
      <HeroSection
        title={"糖尿病"}
        subtitle={
          "我們所進食的碳水化合物 ( 包括糖分、澱粉質等 ) 經消化後會轉變為葡萄糖，由小腸吸收進入血液循環系統，成為血糖。"
        }
        backgroundImage={"/bg-diabetes.jpg"}
      />
    </>
  );
};

export default DiabetesPage;
