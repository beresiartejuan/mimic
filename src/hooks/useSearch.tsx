import { ChangeEvent, KeyboardEventHandler, MouseEventHandler, useState } from "react";

export default function useSearch() {

    const [search, setSearch] = useState<string>("");

    const updateSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const defaultSearch: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key !== "Enter") return;

        window.location.href = "https://www.google.com/search?&q=" + search;
    }

    const handler = () => {

        return {
            onChange: updateSearchInput,
            value: search,
            onKeyUp: defaultSearch
        }

    }

    const submit = (url: string) => {

        const onClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
            e.preventDefault();
            window.location.href = (new URL(url + search)).toString();
        }

        return {
            onClick
        }

    }

    return { search, updateSearchInput, handler, submit };

}