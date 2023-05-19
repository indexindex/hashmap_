import { useState, useEffect } from 'react';
import ThemeSwitcher from './components/theme-switcher/theme-switcher';
import PasswordGenerator from './components/password-generator/password-generator';
import hashmapData from './json/hashmap.json';
import './scss/App.scss';

const App = () => {
    // ? initial state
    const [hashInput, setHashInput] = useState('');
    const [hashOutput, setHashOutput] = useState('');
    const [isKeyDown, setKeyDown] = useState(false);
    const [timeoutID, setTimeoutID] = useState(null);
    const hashmapKeys = hashmapData;

    // ? same as componentDidMount()
    // ? runs once and then only when state values change inside given []
    // ? if array stays empty then this effect only ever runs once
    useEffect(() => {
        setHashInput(document.querySelector('#hashInput'));
        setHashOutput(document.querySelector('#hashOutput'));
    }, []);



    const keyDownEvent = (key) => {
        if (isKeyDown === false && key === 'Backspace') {
            setKeyDown(true);
        }
    }

    const setReaction = (reaction, delay) => {
        const reactionElem = document.querySelector('.generator__reaction');
        clearTimeout(timeoutID);

        setTimeoutID(setTimeout(() => {
            reactionElem.textContent = reaction;

            setTimeoutID(setTimeout(() => {
                setKeyDown(false);
                reactionElem.textContent = '';
                setTimeoutID(null);
            }, 3000))

        }, delay || 0))
    }

    const options = () => {
        const optionsElem = document.querySelector('.generator__options');

        hashOutput.textContent !== '' ? 
        optionsElem.classList.add('show') : 
        optionsElem.classList.remove('show');
    }
  
    return (
        <div className='App'>
            <ThemeSwitcher/>
            <section className='hashmap'>
                <div className='hashmap__content'>
                    <h2>Secure your passwords_!</h2>
                    <PasswordGenerator 
                        hashInput={hashInput} 
                        hashOutput={hashOutput} 
                        hashmapKeys={hashmapKeys} 
                        keyDownEvent={keyDownEvent} 
                        setReaction={setReaction} 
                        options={options}
                    />
                </div>
            </section>
        </div>
    )
}

export default App;