export default async function Page() {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    return (
        <div className="flex flex-col px-20 pt-20 gap-5">
            <h1 className="text-5xl">Server Side Rendering</h1>
            <p className="text-xl">Use this for page or components that need to be rendered only when accessed.</p>
            <h2 className="text-3xl">How to implement in NextJS?</h2>
            <ol className="list-decimal list-inside">
                <li>Use &quot;<pre className="inline">export default async function Page()</pre>&quot; instead of &quot;<pre className="inline">export default function Page()</pre>&quot;</li>
                <li>(Optional) fetch data from some api and then use it for rendering purposes.</li>
            </ol>

            <h2 className="text-4xl">Sample Data:(Updated on every page load)</h2>
            <div>
                <p className="text-3xl font-bold">{data.fact}</p>
                <p className="text-2xl">length: {data.length}</p>
            </div>
        </div>
    );
}