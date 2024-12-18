import { useLocation } from 'react-router-dom';
import design1 from "../assets/images/general/design1.png"
import design2 from "../assets/images/general/design2.png"

export default function EgazatDetailsPage() {
  const location = useLocation();
  const { cardread, description, buttonName} = location.state || {};

  return (
    <>
      <div className=" mt-11 relative" style={{ backgroundColor: 'var(--body-bg-color)', direction: 'rtl' }}>
        <img src={design1} alt='design1' className="absolute right-0 top-0 " />
        <img src={design2} alt='design2' className="absolute left-0 bottom-0 w-56 " />

        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-bold text-green-700 mb-4">
            {cardread} : {buttonName}
          </h1>
        </div>
        


          <div className=" p-8 mt-11 flex flex-col items-start  h-screen ">
            {/* {image && (
              <img
                src={image}
                alt={narration}
                className="w-80 h-52 mb-4 rounded-lg border "
                style={{
                  borderColor: 'var(--main-dark-color)', 
                }}
              />
            )} */}
            {description && (
              <p className="text-gray-700 text-center text-lg">{description}</p>
            )}
          </div>

      </div>
    </>

  );
}