import GeneratorOptions from '../generator-options/generator-options';
import { ReactComponent as Eye } from '../../assets/svg/eye-solid.svg';

const PasswordGenerator = (props) => {
    const { hashInput, hashOutput, hashmapKeys, setReaction, options } = props;

    const onInputHandler = ({ target, key }) => {
        const reactionValue = document.querySelector('.generator__reaction').textContent;

        generateHashKey();

        if (reactionValue !== 'COPIED' && reactionValue !== 'CLEARED') {
            setReaction('', 0);
        }
    }

    const generateHashKey = () => {
        const inputValue = hashInput.value;
        
        hashOutput.textContent = '';

        [...inputValue].forEach(char => { keyMatch(char.toLowerCase()); })

        options();
    }

    const keyMatch = (typedKey) => {
        const key = hashmapKeys.find(key => key.input === typedKey);

        key ? 
        hashOutput.textContent += key.output : 
        hashOutput.textContent += typedKey;
    }

    return (
        <div className='generator'>
            <p className='generator__reaction'>Type your password in and see the magic</p>
            <div className='input-container'>
                <input type='password' placeholder='...' id='hashInput' onInput={onInputHandler}/>
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