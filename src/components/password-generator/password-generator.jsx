import GeneratorOptions from '../generator-options/generator-options';
import { ReactComponent as Eye } from '../../assets/svg/eye-solid.svg';

const PasswordGenerator = (props) => {
    const { hashInput, hashOutput, hashmapKeys, keyDownEvent, setReaction, options } = props;

    const onKeyDownHandler = ({ target, key }) => {
        const reactionValue = document.querySelector('.generator__reaction').textContent;

        if (target.value) { keyDownEvent(key); }

        generateHashKey(key);

        if (reactionValue !== 'COPIED' && reactionValue !== 'CLEARED') {
            setReaction('', 0);
        }
    }

    const onKeyUpHandler = ({ key }) => { generateHashKey(key); }

    const generateHashKey = (key) => {
        const typedKey = key.toLowerCase();
        const inputValue = hashInput.value;
        
        keyMatch(typedKey);
        hashOutput.textContent = '';

        [...inputValue].forEach(char => { keyMatch(char); })

        options();
    }

    const keyMatch = (typedKey) => {
        const key = hashmapKeys.find(key => key.input === typedKey);
        const num = parseInt(typedKey);

        if (key) { hashOutput.textContent += key.output; }

        // ? check for number
        if (num || num === 0) { hashOutput.textContent += typedKey; }
    }

    return (
        <div className='generator'>
            <p className='generator__reaction'>Type your password in and see the magic</p>
            <div className='input-container'>
                <input type='password' placeholder='...' id='hashInput' onKeyDown={onKeyDownHandler} onKeyUp={onKeyUpHandler}/>
                <Eye className='toggle-password-visibility' onClick={() => {
                        hashInput.type === 'password' ? hashInput.type = 'text' : hashInput.type = 'password'
                    }
                }/>
            </div>
            <span id='hashOutput'></span>
            <GeneratorOptions 
                hashInput={hashInput} 
                hashOutput={hashOutput} 
                setReaction={setReaction} 
                options={options}
            />
        </div>
    )
}

export default PasswordGenerator;