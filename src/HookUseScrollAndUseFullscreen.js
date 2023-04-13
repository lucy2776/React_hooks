import { useEffect, useRef, useState } from "react"
import bgImg from './img/1.jpg'

const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    })

    const onScroll = () => {
        console.log("x: ", window.scrollX, "y: ", window.scrollY)
        setState({ x: window.scrollX, y: window.scrollY })
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll)

        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])

    return state
}

const HookUseScroll = () => { // 스크롤 감지
    const { y } = useScroll()

    return (
        <div style={{ height: "1000vh", backgroundImage: `url(${bgImg})` }}>
            <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hello</h1>
        </div>
        // 1vw = 뷰포트 너비의 1%
        // 1vh = 뷰포트 높이의 1%
    )
}

export default HookUseScroll

// 
// =====================
// 

const useFullscreen = (callback) => {
    const element = useRef()
    const runCb = isFull => {
        // element.current.requestFullscreen()
        if (callback && typeof callback === "function") {
            callback(isFull)
        }
    }

    const triggerFull = () => {
        if (element.current) {
            if (element.current.requestFullscreen) {
                element.current.requestFullscreen()
            } else if (element.current.mozRequestFullScreen) {
                element.current.mozRequestFullScreen()
            } else if (element.current.webitRequestFullScreen) {
                element.current.webitRequestFullScreen()
            } else if (element.current.msRequestFullScreen) {
                element.current.msRequestFullScreen()
            }

            runCb(true)
        }
    }

    const exitFull = () => {
        if (element.current) {
            if (element.current.requestFullscreen) {
                element.current.requestFullscreen()
            } else if (element.current.mozRequestFullScreen) {
                element.current.mozRequestFullScreen()
            } else if (element.current.webitRequestFullScreen) {
                element.current.webitRequestFullScreen()
            } else if (element.current.msRequestFullScreen) {
                element.current.msRequestFullScreen()
            }

            runCb(false)
        }
    }

    return { element, triggerFull, exitFull }
}


export const HookUseFullscreen = () => {
    const { element, triggerFull, exitFull } = useFullscreen(onFullScreen)

    const onFullScreen = (isFull) => {
        console.log(isFull ? "full" : "small")
    }

    return (
        <div ref={element}>
            <img src={bgImg} alt="#"></img>
            <button onClick={exitFull}>exit fullscreen</button>
            <button onClick={triggerFull}>Make fullscreen</button>
        </div>
    )
}