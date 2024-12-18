    import React from 'react'
    import overlay from '../assets/images/contact/overlay.png'
    import design4 from '../assets/images/contact/design4.png'
    import photo from '../assets/images/contact/photo.png'
    export default function contact() {
    return (
        <div className=' flex  w-[100%] relative'>
            <div className='flex mt-12'>
            <img src={overlay} className='w-[80px] h-[80px]' alt="img" />
            <p className='' >نحن ملتزمون بتقديم مجموعة واسعة من الدروس لتلبية احتياجات الطلاب من المستوى المبتدئ الى المستوى المتقدم. تركز دروسنا عبر الأنترنت على التقنيات والأدوات القائمة على العلوم وأحدث الأساليب المحدثة لتحسين التعلم لكل من البالغين والأطفال. يسعدنا ان نسمع منك, أرسل لنا رسالة وسنرد عليك فى أسرع وقت ممكن.</p>
            </div>
            <div className='w-[200px] absolute top-[-100px] left-[100px]' >
                <img src={design4} alt="" />
            </div>
                <div className='w-[100%]  bg-[--main-bgLight-color] rounded-lg flex justify-center items-center mt-[300px] translate-x-[300px] px-[10px]'>
                <div className='w-[50%] pl-[100px] flex flex-col'>
                <img src={photo} className='bg-[--main-dark-color] rounded-lg shadow-md  flex-col ' alt="" />
              </div>
              <div className='w-[100%]'>
              <form className=" w-full  space-y-4 bg-[--main-bgLight-color] p-6 rounded-lg">
              <div className="flex flex-col w-full">
              <label htmlFor="name" className="w-full text-right mb-1">الاسم:</label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md p-2 text-right"
                required
                />
            </div>
            <div>
              <label htmlFor="email" className="block text-right mb-1">البريد الإلكتروني:</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md p-2 text-right"
                required
                />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-right mb-1">الواتساب:</label>
              <input
                type="tel"
                id="whatsapp"
                className="w-full border border-gray-300 rounded-md p-2 text-right"
                required
                />
            </div>
            <div>
              <label htmlFor="message" className="block text-right mb-1">رسالة:</label>
              <textarea
                id="message"
                rows={4}
                className="w-full border border-gray-300 rounded-md p-2 text-right"
                required
                />
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-[--main-dark-color] text-white px-8 py-2 rounded-md focus:ring-2 focus:ring-[--main-border-color]"
                >
                إرسال
              </button>
            </div>
          </form> 
          </div>
          </div>
          </div>
        
    )
    }
