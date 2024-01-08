"use client"
import CountDown from '../ui/CountDown'
import NavBar from '../ui/NavBar'
import TimeSelector from '../ui/TimeSelector'
import { ThemeProvider } from 'next-themes'
import { useSystem } from '../hooks/useSystem'
import UserTyped from '../ui/UserTyped'
import WordContainer from '../ui/WordContainer'
import WordWrapper from '../ui/WordWrapper'
import ModalComponent from '../ui/ModalComponent'
import ModalContent from '../ui/ModelContent'
import Restart from '../ui/Restart'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  },[])

  const {
    charTyped,
    countdown,
    word,
    wordContainerFocused,
    modalIsOpen,
    aboutModal,
    history,
    time,
    results,
    resetCountdown,
    setLocalStorage,
    setWordContainerFocused,
    restartTest,
    checkCharacter,
    closeModal,
    openModal,
    setTime,
  } = useSystem();

  //Hydration error (NextJS...)
  if (isClient){
    return (
      <ThemeProvider themes={['blue', 'purple', "green", "dark", "light"]} enableSystem={false} defaultTheme='dark' attribute="data-theme">
        <div id='main' className='w-full h-full'>
          <NavBar />
          <div className='my-8 flex justify-center items-center'>
            <TimeSelector time={time} setTime={setTime} restart={restartTest} setLocalStorage={setLocalStorage} />
            <CountDown countdown={countdown} reset={resetCountdown} />
          </div>
          <div className='flex justify-center items-center w-full'>
            <div className='w-3/4'>
              <WordWrapper
                focused={wordContainerFocused}
                setFocused={setWordContainerFocused}
              >
                <WordContainer word={word} />
                <UserTyped
                  word={word}
                  check={checkCharacter}
                  charTyped={charTyped}
                />
              </WordWrapper>
            </div>
          </div>
          <Restart restart={restartTest} />
          <ModalComponent
            type='result'
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            <ModalContent
              totalTime={time}
              results={results}
              history={history}
            />
          </ModalComponent>
        </div>
      </ThemeProvider>
    )
  }
  else{
    return (
      <ThemeProvider themes={['blue', 'purple', "green", "dark", "light"]} enableSystem={false} defaultTheme='dark' attribute="data-theme">
        <div className='w-full h-[100vh] bg-[var(--background)] text-[var(--accent)]'>
          <div className='flex justify-center items-center w-full h-full'>
            <p>Loading...</p>
          </div>
        </div>
      </ThemeProvider>
    )
  }
  
}
