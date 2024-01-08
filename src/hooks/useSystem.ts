"use client"
import { useCallback, useState } from 'react';
import { useLocalStorage } from "./useLocalStorage";
import { useCountdown } from "./useCountDown";
import { useKeyDown } from './useKeyDown';
import { useModal } from './useModal';
import { useWord } from './useWord';
import { calculateAccuracy, calculateErrorPercentage, calculateWPM } from '@/lib/utils';    


export interface Results {
    accuracy: number;
    cpm: number;
    wpm: number;
    error: number;
}

export interface HistoryType {
    wordHistory: string;
    typedHistory: string;
}


export const useSystem = () => {
    const [results, setResults] = useState<Results>({
        accuracy: 0,
        wpm: 0,
        cpm: 0,
        error: 0,
    });

    const [history, setHistory] = useState<HistoryType>({
        wordHistory: '',
        typedHistory: '',
    });

    const { setLocalStorage, getLocalStorage } = useLocalStorage();
    const [time, setTime] = useState(() => getLocalStorage('time') || 15000);
    const { countdown, resetCountdown, startCountdown } = useCountdown(time);  const [wordContainerFocused, setWordContainerFocused] = useState(false);
    const { word, updateWord, totalWord } = useWord(30);
    const {
        charTyped,
        typingState,
        cursorPosition,
        totalCharacterTyped,
        resetCharTyped,
        resetCursorPointer,
        setTotalCharacterTyped,
        setTypingState,
    } = useKeyDown(wordContainerFocused);
    const { modalIsOpen, aboutModal, openModal, closeModal } = useModal();

    const restartTest = useCallback(() => {
        resetCountdown();
        updateWord(true);
        resetCursorPointer();
        resetCharTyped();
        setTypingState('idle');
        setTotalCharacterTyped('');
    }, [
        resetCountdown,
        updateWord,
        resetCursorPointer,
        resetCharTyped,
        setTypingState,
        setTotalCharacterTyped,
    ]);

    const checkCharacter = useCallback(
        (index: number) => {
        if (charTyped[index] === word[index]) {
            return true;
        } else {
            return false;
        }
        },
        [charTyped, word]
    );

    if (word.length === charTyped.length) {
        updateWord();
        resetCharTyped();
        resetCursorPointer();
    }

    if (typingState === 'start') {
        startCountdown();
        setTypingState('typing');
    }

    if (countdown === 0) {
        const { accuracy } = calculateAccuracy(totalWord, totalCharacterTyped);
        const { wpm, cpm } = calculateWPM(totalCharacterTyped, accuracy, time);
        const error = calculateErrorPercentage(accuracy);

        setResults({
        accuracy,
        wpm,
        cpm,
        error,
        });

        setHistory({
        wordHistory: totalWord,
        typedHistory: totalCharacterTyped,
        });

        openModal('result');
        restartTest();
    }

    return {
        charTyped,
        countdown,
        cursorPosition,
        modalIsOpen,
        aboutModal,
        results,
        time,
        history,
        word,
        wordContainerFocused,
        setWordContainerFocused,
        setTime,
        resetCountdown,
        setLocalStorage,
        updateWord,
        restartTest,
        checkCharacter,
        closeModal,
        openModal,
    };
};
