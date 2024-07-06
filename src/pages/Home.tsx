import TypewriterComponent from "typewriter-effect";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-[calc(100vh-56px)]">
                <div className="font-bold text-2xl md:text-4xl lg:text-6xl">
                    <TypewriterComponent
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 100,
                            strings: [
                                "Welcome to Web Wise",
                                "Create your own websites with ease",
                                "Start coding!",
                            ],
                        }}
                    />
                </div>
                <div className="mt-8">
                    <Link to="/compiler" className="font-bold">
                        <Button variant="secondary" size={"lg"}>
                            Compiler
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;
