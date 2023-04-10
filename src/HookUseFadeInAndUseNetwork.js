import { useEffect, useRef, useState } from "react"

const useFadeIn = (duration, delay) => {
    const element = useRef()

    useEffect(() => {
        if (element.current) {
            const { current } = element
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
            current.style.opacity = 1
        }
    })

    if (typeof duration !== "number" || typeof delay !== "number") {
        return
    }


    return { ref: element, style: { opacity: 0 } }
}

const HookUseFadeIn = () => { // animation을 Hook에 포함
    const fadeInH1 = useFadeIn(2, 0)
    const fadeInP = useFadeIn(2, 2)

    return (
        <div>
            <h1 {...fadeInH1}>Hello</h1>
            <p {...fadeInP}>lorem ipsum</p>
        </div >
    )
}

export default HookUseFadeIn

// 
// =========================
//

const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine)

    const handleChange = () => {
        if (typeof onChange === "function") {
            onChange(navigator.onLine)
        }
        setStatus(navigator.onLine)
    }

    useEffect(() => {
        window.addEventListener("online", handleChange)
        window.addEventListener("offline", handleChange)

        return () => {
            window.removeEventListener("online", handleChange)
            window.removeEventListener("offline", handleChange)
        }
    }, [])

    return status
}

export const HookUseNetwork = () => { // navigator가 online/offline이 되는걸 막음
    const handleNetworkChange = (e) => {
        console.log(e ? "online" : "offline")
    }
    const online = useNetwork(handleNetworkChange)
    return (
        <div>
            <h1>{online ? "Online" : "Offline"}</h1>
        </div>
    )
}