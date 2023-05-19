import { ReactComponent as Clipboard } from '../../assets/svg/clipboard-solid.svg';
import { ReactComponent as CircleXmark } from '../../assets/svg/circle-xmark-solid.svg';

const GeneratorOptions = (props) => {
    const { hashInput, hashOutput, setReaction, options } = props;

    const onClickHandler = (className) => {
        switch(className) {
            case 'copy-output':
                navigator.clipboard.writeText(hashOutput.textContent);
                console.log('copied', hashOutput.textContent);
                setReaction('COPIED', 0);
                break;
            case 'clear-fields':
                hashInput.value = '';
                hashOutput.textContent = '';
                setReaction('CLEARED', 0);
                options();
                break;
            default:
        }
    }

    return (
        <div className='generator__options'>
            <Clipboard className='copy-output' onClick={() => { onClickHandler('copy-output'); }}/>
            <CircleXmark className='clear-fields' onClick={() => { onClickHandler('clear-fields'); }}/>
        </div>
    )
}

export default GeneratorOptions;