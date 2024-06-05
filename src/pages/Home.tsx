import { FC } from "react";
import { data } from "../utils";
import Card from "../components/Card/Card";

const Home: FC = () => (
    <div className="flex flex-col gap-20 items-center px-[24px] py-[24px] md:py-[108px]">
        <h1 className=" text-[#1b264f] text-[40px] md:text-[56px] text-center font-bold leading-[55px]">
            We make creative media <br /> that
            <span className="text-[#506BCA]"> adds value</span>
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4">
            {data.map((item) => (
                <Card key={item.title} item={item} />
            ))}
        </div>
        <button className="rounded-xl bg-[#1B264F] font-bold text-white text-[17px] h-[60px] w-[216px] md:w-[316px] hover:opacity-70">
            GET STARTED
        </button>
    </div>
);

export default Home;
