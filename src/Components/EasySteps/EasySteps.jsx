import img7 from "../../assets/images/general/svg7.png";
import img8 from "../../assets/images/general/svg8.png";
import img9 from "../../assets/images/general/svg9.png";
import design3 from "../../assets/images/general/design3.png";
import "./easy.css";
import useLocalization from "../../hooks/useTranslation";

const EasySteps = () => {
  const content = useLocalization("easyStep")
  return (
    <div className="relative">
      <div className="easy py-7">
        <h3 className="globalMain-header"> {content("stepsHeader")} </h3>
      </div>

      <div className="easyComponent flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="box sm:mt-0 md:mt-20">
          <img className="w-32" src={img7} alt="img7" />
          <p> {content("step1Text")}</p>
        </div>

        <div className="box sm:mt-0 mt-0">
          <img className="w-44" src={img8} alt="img8" />
          <p> {content("step2Text")} </p>
        </div>

        <div className="box sm:mt-0 md:mt-28">
          <img className="w-32" src={img9} alt="img9" />
          <p> {content("step3Text")}   </p>
        </div>
      </div>

      <img
        className='absolute w-52 left-[-20px] top-24 transform -translate-y-1/2 z-10'
        src={design3} alt="design2" />


    </div>
  );
};
export default EasySteps;
