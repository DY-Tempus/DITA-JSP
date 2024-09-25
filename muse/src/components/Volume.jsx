/* https://uiverse.io/Galahhad/happy-dodo-17 */
import React from 'react';
import './css/Volume.css';

const Volume = ({ volume, setVolume }) => {
    return (
        <label className="slider">  {/* 전체 슬라이더를 감싸는 레이블 */}
            <input
                type="range"  /* 슬라이더를 나타내는 input 요소 */
                min="0"  /* 슬라이더의 최소값 */
                max="100"  /* 슬라이더의 최대값 */
                value={volume}  /* 현재 볼륨 값을 props로 받아와 설정 */
                onChange={(e) => setVolume(e.target.value)}  /* 슬라이더가 움직일 때마다 볼륨 값 업데이트 */
                className="level"  /* 슬라이더의 CSS 스타일을 적용할 클래스 */
            />
        </label>
    );
};

export default Volume;
