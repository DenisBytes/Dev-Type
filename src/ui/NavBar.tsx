"use client";
import { Listbox, Transition } from '@headlessui/react';
import { useThemeCustom } from '@/hooks/useThemeCustom';
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/16/solid';
import { Fragment } from 'react';

export default function NavBar() {
    const { theme, setTheme, themesList } = useThemeCustom();

    return (
        <div className="w-full flex justify-between items-center px-12 py-4">
            <span className='flex justify-start items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-20 h-20 stroke-[var(--accent)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                <h1
                    className={`text-3xl text-[var(--accent)] font-bold hover:underline lg:text-4xl`}
                >
                    OpenType.
                </h1>
            </span>
            <Listbox value={theme} onChange={setTheme}>
                <Listbox.Button className="flex justify-between bg-[var(--darker-background)] items-center cursor-default border-[2px] border-[var(--accent)] rounded-lg px-2 py-1 text-left focus:outline-[var(--accent)] focus-visible:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--accent)]">
                    <span className='flex items-center'>
                        <span className='w-5 h-5 mx-1 border-[1px] border-[var(--accent)] rounded-[50%] bg-[var(--background)]'></span>
                        <span className='w-5 h-5 mx-1 border-[1px] border-[var(--accent)] rounded-[50%] bg-[var(--text-color)]'></span>
                        <span className='w-5 h-5 mx-1 border-[1px] border-[var(--accent)] rounded-[50%] bg-[var(--accent)]'></span>
                    </span>
                    <ChevronDownIcon 
                        className="h-8 w-8 text-[var(--accent)]"
                        aria-hidden="true"
                    />
                </Listbox.Button>
                <Transition 
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute right-12 top-20 overflow-hidden rounded-lg bg-[--darker-background] py-1">
                        {themesList.map((themeElement) => (
                            <Listbox.Option
                                key={themeElement.themeName}
                                className={`relative border-[2px] border-[var(--accent)] select-none py-2 pr-10 pl-2 ${themeElement === themesList[0] ? 'rounded-t-lg': ''} ${themeElement === themesList[themesList.length - 1] ? 'rounded-b-lg': ''}`}
                                value={themeElement.themeName}
                            >
                            {({ selected }) => (
                                <>
                                    <span
                                        className="truncate flex items-center"
                                    >
                                        <span className="w-5 h-5 mx-1 border-[1px] border-[var(--accent)] rounded-[50%]" style={{backgroundColor: themeElement.background}}></span>
                                        <span className="w-5 h-5 mx-1 border-[1px] border-[var(--accent)] rounded-[50%]" style={{backgroundColor: themeElement.text}}></span>
                                        <span className="w-5 h-5 mx-1 border-[1px] border-[var(--accent)] rounded-[50%]" style={{backgroundColor: themeElement.accent}}></span>
                                    </span>
                                    {selected ? (
                                        <span className="absolute inset-y-0 right-2 flex items-center pl-3 text-[var(--accent)]">
                                            <CheckIcon className="h-8 w-8" aria-hidden="true" />
                                        </span>
                                    ) : null}
                                </>
                            )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </Listbox>
            
        </div>
    )
}