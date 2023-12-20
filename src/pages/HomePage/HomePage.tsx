import stevenPic from "../../assets/images/profilePic.webp";
import austinTexas from "../../assets/images/austinTexas.jpg";
import thailand from "../../assets/images/thailand.jpg";
import italy from "../../assets/images/italy.jpg";
import japan from "../../assets/images/japan.jpg";
import manila from "../../assets/images/manila.jpg";
import unitedKingdom from "../../assets/images/unitedKingdom.jpg";
import TravelDestination from "../../components/TravelDestination";
import useScrollToTop from "../../hooks/useScrollToTop";

const HomePage = () => {
    useScrollToTop();

    return (
        <div id="top" className="pb-24 scroll-mt-24">
            <header className="py-20 mx-auto flex flex-row items-center max-w-5xl">
                <div className="w-1/2 flex flex-row justify-center">
                    <img
                        src={stevenPic}
                        alt="Steven Garcia"
                        className="border-y-[1px] border-gray-200 rounded-full max-h-64"
                    />
                </div>
                <div className="w-1/2">
                    <h1 className="font-bold text-5xl mb-2">Steven Garcia</h1>
                    <p className="text-lg mb-5">
                        I'm a Full-Stack Software Engineer. Lately, I've been
                        working on{" "}
                        <a
                            href="https://fitfuelplanner.com"
                            className="underline font-semibold"
                            target="_blank"
                        >
                            FitFuelPlanner
                        </a>
                        , a web and mobile app that I created on my own. My
                        skillset includes JavaScript, TypeScript, React,
                        Next.js, Node.js, and C#.
                    </p>
                    <p className="text-lg mb-5">
                        You can view my personal website at{" "}
                        <a
                            href="https://stevencodecraft.com/about"
                            className="underline font-semibold"
                            target="_blank"
                        >
                            StevenCodeCraft.com
                        </a>{" "}
                        and my{" "}
                        <a
                            href="https://github.com/stevenGarciaDev"
                            className="underline font-semibold"
                            target="_blank"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                    <p className="text-lg mb-5">
                        I am currently located in Southern California, and I
                        will relocate to Austin, Texas.
                    </p>
                </div>
            </header>
            <div>
                <h2 className="text-center font-bold text-4xl mb-2">
                    Travel Destination Goals
                </h2>
                <div className="max-w-7xl mx-auto grid grid-cols-2 gap-5">
                    <TravelDestination
                        title="Austin, Texas"
                        imgSrc={austinTexas}
                    />
                    <TravelDestination title="Italy 🇮🇹" imgSrc={italy} />
                    <TravelDestination
                        title="Explore Manila 🇵🇭"
                        imgSrc={manila}
                    />
                    <TravelDestination title="Japan 🇯🇵" imgSrc={japan} />
                    <TravelDestination
                        title="United Kingdom 🇬🇧"
                        imgSrc={unitedKingdom}
                    />
                    <TravelDestination
                        title="Muay Thai in Thailand 🇹🇭"
                        imgSrc={thailand}
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
