import HeroSection from "@/components/shared/hero";

const SportsPage = () => {
  return (
    <>
      <HeroSection
        title={"運動"}
        subtitle={
          "定時運動習慣有助減低心血管疾病的發病率和死亡率。對於⼼臟病⼈士來說，運動有助減慢冠狀動脈粥樣硬化，維持心臟的功能。運動亦有助降低⾎壓和減輕體重、鍛鍊肌肉和骨骼。除此之外，運動對情緒健康亦有幫助。運動不宜過量。世界衞⽣組織建議成⼈每星期5次，每次最少30分鐘運動可以維持⾝心健康。"
        }
        backgroundImage={"/bg-sports.jpeg"}
      />
    </>
  );
};

export default SportsPage;
