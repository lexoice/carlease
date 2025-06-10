// pages/index.js

import Seo from '../components/UI/Seo'
import Hero from '../components/Home/Hero'
import LogoSection from '../components/Home/LogoSection'
import DealerSection from '../components/Home/DealerSection'
import About from '../components/Home/About'
import Counter from '../components/Home/Counter'
import CarSectionHome from '../components/CarSection/CarSectionHome'
import CarInDays from '../components/Home/CarInDays'
import HowDoes from '../components/Home/HowDoes'
import SameCar from '../components/Home/SameCar'
import Reviews from '../components/Home/Reviews'
import MakeList from '../components/Home/MakeList'

export default function HomePage() {
    return (
        <>
            <Seo
                title="718 Auto Lease Offering Great Leasing Specials in Brooklyn"
                description="718 Auto Lease has the best car leasing deals in Brooklyn. Our team can help you lease a car at a great rate without any trouble."
                canonical="https://www.718autolease.com/"
                ogUrl="https://www.718autolease.com/"
            />

            <Hero />
            <LogoSection />
            <DealerSection />
            <About />
            <Counter />
            <CarSectionHome />
            <CarInDays />
            <HowDoes />
            <SameCar />
            <Reviews />
            <MakeList />
        </>
    )
}