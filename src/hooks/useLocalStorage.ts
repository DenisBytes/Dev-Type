"use client";


export function useLocalStorage() {
    
    const getLocalStorage = (key: string) => {
        try {
            const value = window.localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            alert('Something went wrong');
        }
    };

    const setLocalStorage = (key: string, value: number) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            alert('Something went wrong');
        }
    };

    return { getLocalStorage, setLocalStorage };
};