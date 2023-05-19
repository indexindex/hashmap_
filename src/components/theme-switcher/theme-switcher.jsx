import { ReactComponent as Sun } from '../../assets/svg/sun-solid.svg';
import { ReactComponent as Moon } from '../../assets/svg/moon-solid.svg';

const ThemeSwitcher = () => {

    const toggleTheme = (prefix) => {
        switch(prefix) {
            case 'sun':
                document.body.classList.add('light-theme');
                break;
            case 'moon':
                document.body.classList.remove('light-theme');
                break;
            default:
        }
    }

    return (
        <div className='theme-switcher'>
            <Sun className='theme-switcher--sun' onClick={() => { toggleTheme('sun'); }}/>
            <Moon className='theme-switcher--moon' onClick={() => { toggleTheme('moon'); }}/>
        </div>
    )
}

export default ThemeSwitcher;