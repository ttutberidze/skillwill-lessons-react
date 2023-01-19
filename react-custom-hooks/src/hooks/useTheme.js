import useDetectDevice from './useDetectDevice';
import useLocalStorage from './useLocalStorage';

const themeConfig = {
    dark: {
        color: 'white',
        background: 'darkgrey'
    },
    light: {
        color: 'darkgrey',
        background: 'white'
    }
}

const useTheme = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    const deviceType = useDetectDevice();

    const toggle = () => {
        if(deviceType === 'desktop') {
            setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
        } else {
            setTheme('light');
        }
    }

    return {theme: deviceType === 'desktop' ? themeConfig[theme] : themeConfig['light'], toggle};
}

export default useTheme;