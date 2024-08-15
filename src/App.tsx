import useSearch from "./hooks/useSearch";

const LINKS = {
    chrome: 'https://www.google.com/search?q=',
    duckduckgo: 'https://duckduckgo.com/?ia=web&q=',
    youtube: 'https://www.youtube.com/results?search_query='
}

const is_production = process.env.show_footer;

function Footer() {
    return (
        <footer>
            <span>
                Visita el repo del proyecto en <a href="https://github.com/beresiartejuan/mimic" target="_blank">Github</a>.
            </span>
        </footer>
    )
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
            {is_production && <Footer></Footer>}
        </>
    )
}