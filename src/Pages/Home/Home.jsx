

import Amr from '../../Components/Amr/Amr'
import BlogsSection from '../../Components/BlogsSection/BlogsSection'
import CoursesSection from '../../Components/CoursesSection/CoursesSection'
import EgazatSection from '../../Components/Egazat/EgazatSection'
import HeroHome from '../../Components/HeroHome/HeroHome'
import Numbers from '../../Components/Numbers/Numbers'
import Opinions from '../../Components/Opinions/Opinions'
import PlanBG from '../../Components/Plan/PlanBG'
import StartLearn from '../../Components/StartLearn/StartLearn'
import WhyUs from '../../Components/WhyUs/WhyUs'
import './home.css'



const Home = () => {
    return (
        <div className="home">
            <HeroHome />
            <Amr />
            <WhyUs />
            <StartLearn />
            <PlanBG />
            <Numbers />
            <CoursesSection />
            <Opinions />
            <EgazatSection />
            <BlogsSection />
        </div>
    )
}

export default Home





