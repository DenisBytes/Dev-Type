import { useCountdown } from "./useCountDown";
import { useLocalStorage } from "./useLocalStorage";
import { useState } from "react";

export function useSystem() {

    const { setLocalStorage, getLocalStorage } = useLocalStorage();
    const [time, setTime] = useState(() => getLocalStorage('time') || 15000);
    const { countdown, resetCountdown, startCountdown } = useCountdown(time);

}