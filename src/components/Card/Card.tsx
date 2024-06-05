import { FC } from "react";
import { CardType } from "../../@types/Card";

interface Props {
    item: CardType;
}
const Card: FC<Props> = ({ item }) => (
    <div className="bg-white rounded-lg w-[318px] md:w-[438px] flex h-[212px] md:h-[336px] mb-10 overflow-hidden">
        <div className="flex flex-col gap-1 w-[120px] md:w-[180px] h-full">
            {item.images.map((img, index) => (
                <img
                    alt={item.title}
                    src={img}
                    className={`max-w-fit w-auto h-full ${
                        img.length === 1
                            ? "rounded-tl-lg rounded-bl-lg"
                            : !index
                            ? "rounded-tl-lg"
                            : "rounded-bl-lg"
                    }`}
                />
            ))}
        </div>

        <div className="px-2 pt-2 md:px-8 md:pt-10 flex flex-col gap-3 text-[#353844] min-h-full">
            <div className="font-bold text-[20px] md:text-[32px]">
                {item.title}
            </div>
            {!!item.items.length && (
                <ul className="list-disc pl-4 marker:text-[#D2AD81]">
                    {item.items.map((li, index) => (
                        <li key={index} className="font-bold text-[15px]">
                            {li}
                        </li>
                    ))}
                </ul>
            )}
            <div className="font-semibold text-[15px] line-clamp-2 md:line-clamp-none">
                {item.description}
            </div>
        </div>
    </div>
);

export default Card;
