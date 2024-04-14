import { sadsymptoms } from "@/constants";

const TipsPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-4 gap-6">
          {sadsymptoms.map((symptoms) => {
            return (
              <div className="group pb-24 relative overflow-hidden">
                <div className="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute bg-gradient-to-b from-transparent to-primary z-10"></div>
                <img
                  src={symptoms.imagepath}
                  className="transition-all group-hover:scale-125 duration-700 mr-4 h-auto w-full"
                  alt=""
                />
                <div className="bg-primary absolute z-10 bottom-0 left-0 w-full h-24 flex flex-col justify-center items-center">
                  <div className="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6"></div>
                  <span className="text-white p-semibold-20">
                    {symptoms.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TipsPage;
