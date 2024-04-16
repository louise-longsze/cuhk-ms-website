import HeroSection from "@/components/shared/hero";

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
    </>
  );
};

export default ObesePage;
