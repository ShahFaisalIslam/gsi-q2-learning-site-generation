
export default function Home() {
    return (
        <div className="flex flex-col px-20 pt-20 gap-5">
            <h1 className="text-5xl">Static Site Generation</h1>
            <p className="text-xl">Use this for page or components that almost never will get updated, nor have anything required to be rendered in real-time</p>
            <h2 className="text-3xl">How to implement in NextJS?</h2>
            <p className="text-xl">It is apparently the default.</p>
        </div>
    );
}