const useConfirm = (message = "", onConfirm, onCancel) => {
    const confirmAction = () => {
        if (window.confirm(message)) {
            onConfirm()
        } else {
            onCancel()
        }
    }

    if (!onConfirm || typeof onConfirm !== "function") {
        return
    }
    if (!onCancel || typeof onCancel !== "function") {
        return
    }

    return confirmAction
}

const HookUseConfirm = () => { // 사용자의 이벤트를 재확인을 받을 때
    const deleteAnything = () => { console.log("Delete") }
    const cancel = () => { console.log("cancel") }
    const confirmDelete = useConfirm("Are you sure", deleteAnything, cancel)
    return (
        <div>
            <button onClick={confirmDelete}>Delete the world</button>
        </div>
    )
}

export default HookUseConfirm





const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault()
        event.returnValue = ""
    }

    const enablePrevent = () => window.addEventListener("beforeunload", listener)
    const disablePrevent = () => window.removeEventListener("beforeunload", listener)

    return { enablePrevent, disablePrevent }

}

export const HookUsePreventLeave = () => { // 사용자가 창을 닫을 때 재확인
    const { enablePrevent, disablePrevent } = usePreventLeave()

    return (
        <div>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>unProtect</button>
        </div>
    )
}