import { Option } from "./Option";

export interface Question {
    type: 'multipleChoice' | 'descriptive';
    question: string;
    answer?: string;
    options?: Option[];
    correctOption?: number;
}