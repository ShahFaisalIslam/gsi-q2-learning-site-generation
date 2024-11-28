"use client";

import { useEffect, useState } from "react";

export default function Page() {
    const [date,setDate] = useState<Date>(new Date());

    useEffect(() => {setInterval(() => setDate(new Date()),1000)},[]);

    return (
        <div className="flex flex-col px-20 pt-20 gap-5">
        <h1 className="text-5xl">Client Side Rendering</h1>
        <p className="text-xl">Use this for page or components that need to be rendered in <strong>real-time</strong>.</p>
        <h2 className="text-3xl">How to implement in NextJS?</h2>
        <ol className="list-decimal list-inside">
            <li>The first line of the component or page <strong>must be</strong> <pre className="inline">&quot;use client;&quot;</pre></li>
            <li>(Optional) Use react hooks and have fun!.</li>
        </ol>

        <h2 className="text-4xl">Sample Data:</h2>
        <div>
            {date && 
            <p className="text-3xl">Time: {date.toTimeString()}</p>
            }
        </div>
    </div>

    )
}