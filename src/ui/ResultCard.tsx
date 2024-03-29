import Tooltip from './Tooltip';

type ResultCardProps = {
    tooltipId: string;
    tooltipContent: string;
    tooltipPlace: 'bottom' | 'top' | 'left' | 'right';
    title: string;
    results: string;
};

export default function ResultCard ({title,tooltipId,tooltipContent,tooltipPlace,results}: ResultCardProps) {
    return (
        <Tooltip tooltipId={tooltipId}>
            <div
                className='flex w-full cursor-pointer flex-col items-center justify-center bg-[var(--darker-background)] gap-2 rounded-lg p-5'
                data-tooltip-content={tooltipContent}
                data-tooltip-id={tooltipId}
                data-tooltip-place={tooltipPlace}
            >
                <h2 className='text-3xl'>{title}</h2>
                <p
                    className='text-center text-3xl text-[var(--text-color)]'
                >
                    {results}
                </p>
            </div>
        </Tooltip>
    );
};