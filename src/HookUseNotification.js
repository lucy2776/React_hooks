// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
import { useEffect } from "react";

const UseNotification = (title, options) => {
    if (!("Notification" in window)) {
        console.log("undefined return")
        return
    } // undefined 반환

    const fireNotification = () => {
        if (Notification.permission !== "granted") {
            console.log("!granted")
            // Notification.permission 속성값이 granted인지 확인
            Notification.requestPermission().then((permission) => { // 사용자에게 권한 요청
                // Notification.requestPermission(): Promise 반환 
                //                                  -> 사용자가 권한을 결정할 때 까지 대기
                //                                      => 허용: "granted"/거절: "denied"
                // then(): 권한 부여 여부 확인
                if (permission === "granted") {
                    console.log("권한 허용 -> 알림 생성1")
                    new Notification(title, options) // 알림 생성
                } else {
                    console.log("권한 거부")
                    return // 권한 거부하면 종료
                }
            })
        } else {
            new Notification(title, options) // 권한이 있으면 바로 알림 생성
            console.log("권한 허용 -> 알림 생성2")
        }
    }

    return fireNotification
};

const HookUseNotification = () => { // 알림
    const triggerNotif = UseNotification("알림 떠주세요", { body: "알림이 왜 안뜰까요 ?" })

    return (
        <div>
            <button onClick={triggerNotif}>알림</button>
        </div>
    );
};

export default HookUseNotification