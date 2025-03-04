/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import useAuth from '../../Context/authContext/authContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SectionData = ({ last = false, close = "", item = [], title }) => {
    const { token, logout } = useAuth()
    const navigateTo = useNavigate()
    const handelLogout = async () => {
        const response = await axios.delete("https://quran.codecraft1.com/api/auth/logout ", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (response.status === 200) {
            logout()
            close()
            navigateTo("/")
        }
    }
    return (
        <div className="flex justify-center w-full">
            {title && (
                <h4 className={`w-[30%] bg-[#157A67] flex items-center justify-center font-bold text-2xl p-3 ${!last && "border-b-2 border-[#CBEDD5]"}`}>
                    {title}
                </h4>
            )}
            <ul className={`w-[70%] bg-[#CBEDD5] p-3 ${!last && "border-b-2 border-[#157A67]"} p-3`}>
                {item.map(({ label, value }, index) => (
                    <div key={index}>
                        <li className="text-black sm:text-center">{`${label} : ${value || "No value provided"}`}</li>
                        {last && <button className='globalButton block  mx-auto mt-5 mb-2' onClick={handelLogout}>تسجيل الخروح</button>}
                    </div>
                ))}
            </ul>
        </div>
    );
};

SectionData.propTypes = {
    last: PropTypes.bool,
    item: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string
        })
    ),
    title: PropTypes.string
};

const UserProfile = ({ close }) => {
    return (
        <div className="w-full max-w-[550px] max-sm:w-[380px] rounded overflow-hidden absolute left-[20px] top-[120px] z-50 shadow max-sm:top-[100px] max-sm:left-[0px]">
            <SectionData
                item={[
                    { label: "تاريح الاشتراك ", value: "1-1-2019" },
                    { label: "تاريخ الاشتراك ", value: "20-9-1019" },
                    { label: "تفاصيل الاشتراك", value: "اشتراك سنوى " },
                ]}
                title="بيانات الاشتراك"
            />

            <SectionData
                item={[
                    { label: "الاسم  ", value: "محمد عبدالحكيم " },
                    { label: "رقم الهاتف ", value: "010000000000" },
                    { label: "البريد الالكترونى", value: "mohamed@abddd.gimal.com" },
                ]}
                title="بيانات المستخدم"
            />

            <SectionData
                last={true}
                close={close}
                item={[
                    { label: "أسم الكورس ", value: "1-1-2019" },
                ]}
                title="بيانات الكورس"
            />

        </div>
    );
};


export default UserProfile;
