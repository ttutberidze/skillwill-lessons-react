import { useRef } from 'react';
import './App.css';
import useCopyToClipboard from './hooks/useCopyToClipboard';
import useLocalStorage from './hooks/useLocalStorage';
import usePageBottom from './hooks/usePageBottom';
import useDetectDevice from './hooks/useDetectDevice';
import useTheme from './hooks/useTheme';

function App() {

  const [isOpen, toggleBox] = useLocalStorage('is-open', false);

  const {isCopied, copy} = useCopyToClipboard(1000)

  const inputRef = useRef();

  const isBottom = usePageBottom()
  console.log(isBottom);

  const deviceType = useDetectDevice();
  const {theme, toggle} = useTheme();

  return (
    <div className="App" style={theme}>
      <button onClick={() => toggleBox((isOpen) => !isOpen)}>Toggle</button>
      {isOpen && <div>
        Hello World!
      </div>}
      {deviceType}
      <br />
      <div>
        <input ref={inputRef} />
        <button onClick={() => copy(inputRef.current.value)}>Copy</button>
        {isCopied && <p>Your text was successfully copied!</p>}
      </div>
      {/* <div style={{height: 3000}}>Hello WOrld</div> */}
      <button onClick={toggle}>Toggle Theme</button>
    </div>
  );
}

export default App;
