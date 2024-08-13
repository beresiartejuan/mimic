import useSearch from "./hooks/useSearch";

const LINKS = {
    chrome: 'https://www.google.com/search?q=',
    duckduckgo: 'https://duckduckgo.com/?ia=web&q=',
    youtube: 'https://www.youtube.com/results?search_query='
}

export default function App() {

    const { handler, submit } = useSearch();

    return (
        <>
            <main>
                <h1><span>🎁</span>{"Mimic."}</h1>
                <input type="text" className="search" {...handler()} />
                <ul className="options-engine">
                    <a {...submit(LINKS.chrome)}>
                        <img src="/chrome-logo.svg" alt="" />
                    </a>
                    <a {...submit(LINKS.duckduckgo)}>
                        <img src="/duckduckgo-logo.svg" alt="" />
                    </a>
                    <a {...submit(LINKS.youtube)}>
                        <img src="/youtube-logo.svg"></img>
                    </a>
                </ul>
            </main>
        </>
    )
}