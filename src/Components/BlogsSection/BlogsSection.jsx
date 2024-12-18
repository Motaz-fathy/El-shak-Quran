
import './blogsSection.css'
import { useNavigate } from 'react-router-dom'
import  { useEffect, useState } from 'react'
import axios from 'axios'

const BlogsSection = () => {

    const navigate = useNavigate()

    // Blogs List 
    const [blogs, setBlogs] = useState([]);

    // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://quran.codecraft1.com/api/articles');
                console.log(response.data); // Log the response
                setBlogs(response.data.data); // Ensure `response.data.data` is an array
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    
// 1- that have one issue when use empty array , you should check it first . 

    return (
        <div className='blogsSection my-[80px]'>
            <h4 className='globalMain-header mb-[40px] text-[40px]'>المدونات</h4>
            <div className="bigBox flex justify-center gap-[50px]">
            {Array.isArray(blogs) && blogs.slice(0, 2).map((item, index) => (
    <div
        className={`box w-[35%] bg-[--main-bgLight-color] flex items-center flex-col p-10 rounded-[15px] shadow-[5px 5px 15px 3px red] ${
            index === 0 ? "translate-y-[60px]" : ""
        }`}
        key={index}
    >
        <img
            className="w-[50%]"
            src={`https://quran.codecraft1.com/public/${item?.image}`}
            alt=""
        />
        <h5 className="font-[700] text-[28px] text-[--main-dark-color] py-7">{item?.title}</h5>
        <p className="mb-10 text-[20px] text-center">{item.content}</p>
        <button
            className="globalButton text-[24px] rounded-[15px]"
            onClick={() => navigate("/blogs")}
        >
            قراءة المزيد
        </button>
    </div>
            ))}

            </div>
        </div>
    )
}

export default BlogsSection
