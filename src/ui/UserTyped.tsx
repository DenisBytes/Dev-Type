import { useMemo } from 'react';
import Character from './Character';

type UserTypedProps = {
    charTyped: string;
    check: (index: number) => boolean;
    word: string;
};

const UserTyped = ({ check, charTyped, word }: UserTypedProps) => {
    const characters = useMemo(() => {
        return charTyped.split('');
    }, [charTyped]);


    return (
        <div
            className='md:character absolute left-0 top-0 z-10 break-all font-mono text-xl lg:text-2xl last:after:bg-[var-[--darker-background)]'
        >
            {characters.map((_, index) => {
                return (
                    <span key={index} suppressHydrationWarning>
                        <Character character={word.charAt(index)} state={check(index)}  />
                    </span>
                );
            })}
        </div>
    );
};

export default UserTyped;
