import { useEffect, useState } from "react"

const UseTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle)

    const updateTitle = () => {
        const htmlTitle = document.querySelector("title") // <title> (in HTML <head>)

        htmlTitle.innerText = title
    }

    useEffect(() => {
        updateTitle()
    }, [title])

    return (
        setTitle
    )
}

const HookUseTitle = () => {
    const titleUpdator = UseTitle("Loading...")

    setTimeout(() => {
        titleUpdator("아무것도 없는 창")
    }, 3000);

    return (
        <div>

        </div>
    )
}

export default HookUseTitle