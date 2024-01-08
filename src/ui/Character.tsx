type CharactersProps = {
    state?: boolean;
    character: string;
    className?: string;
};

export default function Character({ state, character, className }: CharactersProps) {
    return (
        <span className={`${className} ${state === undefined ? '' : state === true ? 'text-[var(--accent)]' : 'text-[#BD0101]'} ${state === false && character === ' ' ? 'bg-[#BD0101]' : ''}`}>
            {character}
        </span>
    );
};