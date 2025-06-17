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
                title={`Best Car Lease Deals for You | ${process.env.NEXT_PUBLIC_SITE_NAME} `}
                description={`${process.env.NEXT_PUBLIC_SITE_NAME} has the best car leasing deals in Philadelphia. Our team can help you lease a car at a great rate without any trouble.`}
                canonical={process.env.NEXT_PUBLIC_SITE_URL}
                ogUrl={process.env.NEXT_PUBLIC_SITE_URL}
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