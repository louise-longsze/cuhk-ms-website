import HeroSection from "@/components/shared/hero";

const DietPage = () => {
  return (
    <>
      <HeroSection
        title={"健康的飲食"}
        subtitle={
          "不健康的飲食除了會引發⼼臟病，以及令⼼臟病的情況更差外，也會引致其他問題。"
        }
        backgroundImage={"/bg-diet.jpg"}
      />
    </>
  );
};

export default DietPage;
