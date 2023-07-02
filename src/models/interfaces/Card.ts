import { CardType } from "../types/CardType";
import { Option } from "./Option";

export interface Card {
    id?: number;
    type: CardType;
    question: string;
    answer?: string;
    options?: Option;
}
