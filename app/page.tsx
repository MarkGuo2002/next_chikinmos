import Hero from "./components/home/Hero";
import HomeContent from "./components/home/HomeContent";

export default function HomePage() {
    return (
        <div className="w-full flex flex-col items-center">
            <Hero />
            <HomeContent />
        </div>
    );
    }