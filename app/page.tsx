"use client";
import { useAtom } from "jotai";
import { citiesAtom, countAtom, countryAtom } from "../state/atoms";

// import countAtom

export default function Home() {
    const [count, setCount] = useAtom(countAtom);
    const [country, setCountry] = useAtom(countryAtom);
    const [cities, _] = useAtom(citiesAtom);
    return (
        <main className="flex min-h-screen flex-col items-center gap-2  bg-slate-700">
            <div className="gap-2 flex">
                <button onClick={() => setCount(count + 1)}>Increment</button>
                {count}
            </div>
            <div className="gap-2 flex">
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                {count}
            </div>

            <div className="">{country}</div>

            <div className="flex justify-center flex-col items-center">
                <div className="p-2">Cities</div>
                {cities.map((city, i) => (
                    <p
                        className=""
                        key={i}
                    >
                        {city}
                    </p>
                ))}
            </div>
        </main>
    );
}
