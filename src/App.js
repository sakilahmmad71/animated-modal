import React from 'react';
import './styles.css';

import Application from './components/modal/Application';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
    return (
        <div className='App'>
            <GlobalStyle />
            <Application />
        </div>
    );
};

export default App;
