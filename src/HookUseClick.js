// ★★★★★
import { useEffect, useRef } from "react"

const UseClick = (onClick) => {
    const element = useRef()

    useEffect(() => {
        // componentDidMount() 일 때 한번만 실행
        if (element.current) {
            console.log("값 설정")
            element.current.addEventListener("click", onClick)
        }

        // ComponentWillUnmount() 일 때 호출
        // 추가해준 event를 정리해줘야 함.(effect 정리): 메모리 누수, 충돌 발생 방지
        //      -> return event를 지워주는 코드 생성(componentDidUpdate)
        //                  정리가 필요없는 경우: 네트워크 리퀘스트, DOM 수동 조작, 로깅
        return () => {
            if (element.current) {
                console.log("값 바뀌기 전")
                element.current.removeEventListener('click', onClick);
            }
        };
    }, [onClick])
    // onClick에 변화가 있을 때만 mount 
    //  or 반복되는 life cycle을 막기위해 (보통) state가 변경된 후 [] 빈 배열로 mount 지정

    if (typeof onClick !== "function") {
        return
    }

    return element // 타입이 선언된 함수는 리턴이 되면 사용했던 공간을 다시 반환
}

// useEffect를 컴포넌트 안에서 불러내는 이유
//      effect을 통해 변수(또는 그 어떤 prop)에 접근할 수 있게 됨.

// React component에는 Life Cycle이 존재
//      렌더링 직전에 특정한 작업을 해야하거나
//      컴포넌트 업데이트 전후에 처리해야할 작업이 있을 수 있음.
//          => Life Cycle을 이용해 처리
//              Mount: DOM 객체가 생성되고 브라우저에 나타나는 것
//              Update: 
//              UnMount: 컴포넌트가 DOM에서 제거되는 것, 해당 컴포넌트가 제거되기 직전에 호출

// addEventListener: componentDidMount, componentDidUpdate일 때 실행(side effect)
//      did 접두사가 붙은 함수: 어떤 작업을 처리한 후에 호출
// removeEventListener: componentWillUnMount일 때 실행 
//      will 접두사가 붙은 함수: 어떤 작업을 처리하기 직전에 호출

const HookUseClick = () => {
    const input = useRef()
    // reference(ref): 우리의 component의 어떤 부분을 선택할 수 있는 방법(=document.getElementByID())
    setTimeout(() => console.log(input.current), 2000)
    setTimeout(() => input.current.focus(), 2000)
    // (input).current.focus(): html element(input) 접근할 수 있음 => 2초 후 input 블록 처리

    //     [Cannot read property 'focus' of undefined 오류 해결 방법 2가지]
    // 첫 번째 방법: input.current.focus() -> input.current?.focus()
    // 두 번째 방법: useEffect를 이용해서 마운트가 끝난 후 focus해주기
    //      useEffect(() => {
    //              setTimeout(() =>  input.current.focus(), 2000) 
    //      });

    const Hello = () => console.log("Hello")
    const title = UseClick(Hello)

    return (
        <div>
            <h1 ref={title}>HI</h1>
            <input placeholder="hi" ref={input} />
        </div>
    )
}

export default HookUseClick




