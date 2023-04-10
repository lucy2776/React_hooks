import { useEffect, useState } from "react"

// useEffect()
// component가 mount되는 즉시 실행
//      componentDidMount()     컴포넌트가 마운트된 직후
//      componentDidUpdate()    갱신이 일어난 직후
//      componentWillUnmount()  컴포넌트가 마운트 해제되어 제거되기 직전에 실행되는 컴포넌트


const HookUseEffect = () => {
    const [number, setNumber] = useState(0)
    const [aNumber, setaNumber] = useState(0)

    const sayHello = () => console.log("Hello")

    useEffect(() => {
        sayHello()
    }, [aNumber])

    return (
        <div className="HookUseEffect">
            <button onClick={() => setNumber(number + 1)}>{number}</button>
            <button onClick={() => setaNumber(aNumber + 1)}>{aNumber}</button>
        </div>
    )
}

export default HookUseEffect