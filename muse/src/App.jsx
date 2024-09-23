import React from 'react';
import Home from './components/Home';
import MusicPlayer from './components/MusicPlayer'; // MusicPlayer 컴포넌트도 함께 가져오기

const App = () => {
    return (
        <div>
            <Home />
            <MusicPlayer /> {/* MusicPlayer를 하단에 유지되도록 추가 */}
        </div>
    );
};

export default App;
