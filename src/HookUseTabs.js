import { useState } from "react"

const content = [
    {
        tab: "Section 1",
        content: "I'm the content of the Section 1"
    },
    {
        tab: "Section 2",
        content: "I'm the content of the Section 2"
    }
]

const UseTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab)
    // Hook은 최상위에서만 선언되어야 함.
    //      react: Hook 호출되는 순서에 의존

    // allTabs -> 배열인지 확인하는 조건
    if (!allTabs || !Array.isArray(allTabs)) {
        // Array.isArray()메서드: 해당인자가 Array인지 알려줌

        return
    }

    return {
        currentItem: allTabs[currentIndex], // allTabs의 인덱스 값으로 찾은 현재 탭의 정보
        changeItem: setCurrentIndex // 활성화된 tab: State 업데이트
    }

}

const HookUseTabs = () => {
    const { currentItem, changeItem } = UseTabs(0, content)

    return (
        <div className="HookUseTabs">
            {
                content.map((section, index) =>
                    <button
                        onClick={() => changeItem(index)}
                        key={section.tab}
                    >
                        {section.tab}
                    </button>
                )
            }
            <div className="content">{currentItem.content}</div>
        </div >
    )
}

export default HookUseTabs