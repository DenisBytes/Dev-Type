import { MdRestartAlt } from 'react-icons/md';
import Tooltip from './Tooltip';

type RestartProps = {
    restart: () => void;
};

export default function Restart({ restart }: RestartProps) {
    return (
        <div className='mt-10'>
            <Tooltip tooltipId='Restart' delayHide={200}>
                <div className='flex items-center justify-center'>
                    <button
                        onClick={() => {
                        restart();
                        }}
                        className={`rotate-0 rounded-full p-3 transition delay-200 ease-out hover:text-[var(--text-color)] hover:bg-[var(--background)] hover:rotate-180 `}
                        data-tooltip-id='Restart'
                        data-tooltip-content='Restart Test'
                        data-tooltip-place='bottom'
                    >
                        <MdRestartAlt className='text-2xl lg:text-3xl ' />
                    </button>
                </div>
            </Tooltip>
        </div>
    );
};
