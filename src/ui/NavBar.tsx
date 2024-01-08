"use client";
import { Listbox, Transition } from '@headlessui/react';
import { useThemeCustom } from '@/hooks/useThemeCustom';
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/16/solid';
import { Fragment } from 'react';
import { Tooltip } from 'react-tooltip';
import Link from 'next/link';

export default function NavBar() {
    const { theme, setTheme, themesList } = useThemeCustom();

    return (
        <nav className="w-full flex justify-between items-center sm:px-12 px-4 py-4">
            <span className='flex justify-start items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="sm:w-20 sm:h-20 w-10 h-10 stroke-[var(--accent)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                <h1
                    className={`text-2xl text-[var(--accent)] font-bold hover:underline sm:text-4xl`}
                >
                    DevType.
                </h1>
            </span>
            <div className='flex items-center justify-between'>
                <Listbox value={theme} onChange={setTheme}>
                    <Listbox.Button className="w-auto flex justify-between bg-[var(--darker-background)] items-center cursor-default border-[2px] border-[var(--accent)] rounded-lg sm:px-2 sm:py-1 mr-2 text-left focus:outline-[var(--accent)] focus-visible:border-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--accent)]">
                        <span className='flex items-center'>
                            <span className='sm:w-5 sm:h-5 w-3 h-3 mx-1 border-[1px] border-[var(--accent)] rounded-[50%] bg-[var(--background)]'></span>
                            <span className='sm:w-5 sm:h-5 w-3 h-3 mx-1 border-[1px] border-[var(--accent)] rounded-[50%] bg-[var(--text-color)]'></span>
                            <span className='sm:w-5 sm:h-5 w-3 h-3 mx-1 border-[1px] border-[var(--accent)] rounded-[50%] bg-[var(--accent)]'></span>
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
                        <Listbox.Options className="absolute right-15 top-20 overflow-hidden rounded-lg bg-[--darker-background] py-1">
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

                <Link 
                    data-tooltip-id="githubId"
                    data-tooltip-content="GitHub Repo"
                    data-tooltip-place="bottom" 
                    href="https://github.com/DenisSkendaj/Dev-Type"
                    className='mx-2'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30" className='w-12 h-12'>
                        <path fill='currentColor' d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                </Link>
                <Tooltip id="githubId" className='bg-[var(--background)] text-[var(--text-color)]' />
            </div>
        </nav>
    )
}