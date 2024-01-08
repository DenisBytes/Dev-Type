"use client"

export default function TimeSelector({time, setTime, restart, setLocalStorage}: {time: number, setTime: (time: number) => void, restart: () => void, setLocalStorage: (key: string, value: number) => void}) {
    return (
        <div className='flex gap-4 rounded-lg bg-[var(--darker-background)] px-4 py-2'>
            <span 
                className={`cursor-pointer rounded-md p-2 font-mono text-xl ${time === 15000 ? "text-[var(--accent)] font-bold underline" : " text-[var(--text-color)]"} hover:underline`}
                onClick={() => {
                    setTime(15000);
                    setLocalStorage('time', 15000);
                    restart();
                }}
            >
                15s
            </span>
            <span 
                className={`cursor-pointer rounded-md p-2 font-mono text-xl ${time === 30000 ? "text-[var(--accent)] font-bold underline" : " text-[var(--text-color)]"} hover:underline`}
                onClick={() => {
                    setTime(30000);
                    setLocalStorage('time', 30000);
                    restart();
                }}
            >
                30s
            </span>
            <span 
                className={`cursor-pointer rounded-md p-2 font-mono text-xl ${time === 60000 ? "text-[var(--accent)] font-bold underline" : " text-[var(--text-color)]"} hover:underline`}
                onClick={() => {
                    setTime(60000);
                    setLocalStorage('time', 60000);
                    restart();
                }}
            >
                60s
            </span>
        </div>
    )
}