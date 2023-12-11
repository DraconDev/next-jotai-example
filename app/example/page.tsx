"use client";
import { countAtom } from "@/state/atoms";
import { useAtom } from "jotai";

type Props = {};

const Example = (props: Props) => {
    const [count, setCount] = useAtom(countAtom);
    return (
        <div>
            Example
            <div className="">{count}</div>
        </div>
    );
};

export default Example;
