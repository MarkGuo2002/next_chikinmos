import { Metadata } from "next";
import Hero from "./components/home/Hero";
import HomeContent from "./components/home/HomeContent";

export const metadata: Metadata = {
    title: 'Chikinmos',
    description: 'Descubre el mejor pollo frito coreano en Chikinmos. ¡Visítanos en Madrid!',
};

export default function HomePage() {
    return (
        <div className="w-full flex flex-col items-center">
            <Hero />
            <HomeContent />
        </div>
    );
    }