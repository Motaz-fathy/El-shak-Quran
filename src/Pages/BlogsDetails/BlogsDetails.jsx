


import { useLocation } from 'react-router-dom';
// import design1 from "../../assets/images/general/1 copy.jpg"


const BlogsDetails = () => {

    const location = useLocation();
    const blog = location.state || {};

    return (
        <div className="flex  justify-evenly py-5 md:py-10 mb-10 md:mb-3">
            <div className="text text-center md:text-start">
                <h4 className="title text-[30px] font-700 my-3">{blog.title}</h4>
                <p className="tet-[18px] pr-3 pl-3 md:pl-10">{blog.content}</p>
            </div>
            <div className="image md:w-[30%] h-[250px] hidden md:block">
                <img className="w-[100%] h-[100%] rounded-lg" src={blog.image} alt={blog.title} />
                {/* <img className="w-[100%] h-[250px] rounded-lg" src={design1} alt={blog.title} /> */}
            </div>
        </div>

    );
}


export default BlogsDetails

