import { useEffect } from "react"

const useBeforeLeave = (onBefore) => {
    const handle = (event) => {
        const { clientY } = event
        console.log(event)

        if (clientY <= 0) {
            onBefore()
        }
    }

    useEffect(() => {
        document.addEventListener("mouseleave", handle)

        return () => {
            document.removeEventListener("mouseleave", handle)
        }
    }, [])

    if (typeof onBefore !== "function") {
        return
    }


}

const HookUseBeforeLeave = () => { // 마우스가 창에서 벗어날 때 어떤 동작을 할 수 있음.
    const begForLife = () => console.log("가지마~")
    useBeforeLeave(begForLife)

    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default HookUseBeforeLeave