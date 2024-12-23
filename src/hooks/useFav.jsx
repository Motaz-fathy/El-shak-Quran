import axios from "axios"
import useAuth from "../Context/authContext/authContext"
import { toast, ToastContainer } from "react-toastify"
const useFav = () => {
    const { token } = useAuth()
    const BASE_URL = "https://quran.codecraft1.com/api/favorites"
    const AlertContainer = () => < ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
    />
    const addToFav = async (payload) => {
        try {
            const response = await axios.post(BASE_URL, payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })
            if (response.status === 200) {
                toast.success(response.data.message, {
                    position: "top-right",
                    autoClose: 1000,
                });
            }
            console.log("response :-", response)
        } catch (error) {
            if (error.response) {
                toast.error(
                    error.response.data.message ||
                    "حدث خطأ أثناء معالجة الطلب. حاول مرة أخرى.",
                    {
                        position: "top-right",
                        autoClose: 3000,
                    }
                );
            } else {
                toast.error("حدث خطأ غير متوقع. يرجى المحاولة لاحقًا.", {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        }
    }
    return { addToFav, AlertContainer }
}

export default useFav