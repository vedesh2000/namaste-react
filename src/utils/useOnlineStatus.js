import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => {
            console.log("Offline");
            setOnlineStatus(false);
        });
        window.addEventListener("online", () => {
            console.log("Online");
            setOnlineStatus(true);
        });
    }, [])

    return onlineStatus;
}

export default useOnlineStatus;