export const revalidate = 10; // The page's data will be refreshed every 10 seconds

export default async function Page() {
    const res = await fetch("https://catfact.ninja/fact", {
        next: { revalidate: 10 }
    });
    const data = await res.json();
    return (
        <div className="flex flex-col px-20 pt-20 gap-5">
            <h1 className="text-5xl">Incremental Site Regeneration</h1>
            <p className="text-xl">Use this for page or components that only need to be updated regularly, not in realtime.</p>
            <h2 className="text-3xl">How to implement in NextJS?</h2>
            <ol className="list-decimal list-inside">
                <li>Use &quot;<pre className="inline">export default async function Page()</pre>&quot; instead of &quot;<pre className="inline">export default function Page()</pre>&quot;</li>
                <li>When fetching data, add the following as second argument to fetch(): <pre>	&#123; next: 	&#123; revalidate:&lt;how many seconds after which content is to be updated &gt; &#125;&#125;</pre></li>
            </ol>

            <h2 className="text-4xl">Sample Data: (Updated every ten seconds)</h2>
            <div>
                <p className="text-3xl font-bold">{data.fact}</p>
            </div>
        </div>
    );

}