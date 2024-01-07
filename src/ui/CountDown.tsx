"use client"
import { useEffect } from "react"

export default function CountDown({countdown, reset}: {countdown: number, reset: () => void}) {

    const minutes = new Date(countdown).getMinutes();
    const seconds = new Date(countdown).getSeconds();

    useEffect(() => {
        reset();
    },[reset]);

    return (
        <div className="rounded-lg bg-[var(--darker-background)] text-[var(--text-color)] px-4 py-2">
            <p>0{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
        </div>
    )
}