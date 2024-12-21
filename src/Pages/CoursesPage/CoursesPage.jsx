import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import EasySteps from './../../Components/EasySteps/EasySteps';
import quranCourse from '../../assets/images/general/quranCourse.png';
import langCourse from '../../assets/images/general/langCourse.png';
import eslamCourse from '../../assets/images/general/eslamCourse.png';
import './coursesPage.css';

const CoursesPage = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from API
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('https://quran.codecraft1.com/api/courses');
                const result = response.data.data
                if (Array.isArray(result)) {
                    setCourses(result);
                } else {
                    throw new Error('Unexpected response format');
                }
            } catch (err) {
                setError('Failed to load courses. Please try again later.');
                console.error('Error fetching courses:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    // Reusable component for each course section
    const CourseSection = ({ title, courseType, imageSrc }) => (
        <div className="courseSection px-2 md:px-5 lg:px-10 py-10 pt-20 rounded-lg shadow-lg mb-10 flex items-center gap-5 justify-evenly bg-[--main-bgLight-color] border-[1px] border-[--main-border-color] relative">
            <h4 className="subTitle text-[--main-green-color] text-[34px] font-[700] absolute top-5 right-10">{title}</h4>
            <div className="buttons flex flex-wrap justify-between gap-y-3 lg:  md:gap-y-6 lg:gap-y-10 w-[100%] lg:w-[70%] ">
                {courses
                    .filter((course) => course.title === courseType)
                    .map((course, index) => (
                        <button
                            key={index}
                            onClick={() =>
                                navigate(`/coursesdetails/${course.id}`, {
                                    state: { ...course },
                                })
                            }
                            className="globalButton w-[48%] text-[26px] lg:text-[30px] px-1 font-[500]"
                        >
                            {course.name}
                        </button>
                    ))}
            </div>
            <div className="image w-[30%] hidden lg:block">
                <img className="imgCourse w-[100%] rounded-lg" src={imageSrc} alt={title} />
            </div>
        </div>
    );

    return (
        <div className="coursesPage my-20">
            {loading ? (
                <div className="loading">Loading courses...</div>
            ) : error ? (
                <div className="error text-red-500 text-center my-10">{error}</div>
            ) : (
                <>
                    <h4 className="globalMain-header mainTitle text-[40px] mb-10">دوراتنا عبر الانترنت</h4>

                    {/* Quran Course Section */}
                    <CourseSection
                        title="دروس القرآن"
                        courseType="one"
                        imageSrc={quranCourse}
                    />

                    {/* Language Course Section */}
                    <CourseSection
                        title="دروس اللغة العربية"
                        courseType="two"
                        imageSrc={langCourse}
                    />

                    {/* Islamic Course Section */}
                    <CourseSection
                        title="دروس إسلامية"
                        courseType="three"
                        imageSrc={eslamCourse}
                    />

                    {/* Easy Steps Section */}
                    <EasySteps />

                    <div className="text-center my-10">
                        <button className="globalButton">جميع خطط التسعير</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CoursesPage;
