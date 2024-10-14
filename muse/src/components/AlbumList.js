import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function MusicItemCon({item,checkItemHandler}){
    const [imageSrc, setImageSrc] = useState(null);
    

    useEffect(() => {
        if (item.MIMG && item.MIMG.data) {
            const uint8Array = new Uint8Array(item.MIMG.data);  // Buffer 데이터를 Uint8Array로 변환
            const blob = new Blob([uint8Array]);
            const reader = new FileReader();
    
            reader.onloadend = () => {
                setImageSrc(reader.result);  // Base64 URL로 변환된 이미지 저장
            };
    
            reader.readAsDataURL(blob);
        }
    }, []);
    const [checked, setChecked] = useState(false);  // 체크 상태 관리
    const checkHandled = ({target}) => {
        setChecked(!checked);
        checkItemHandler(target.value, target.checked);
      }

    return(
        <div>
            <div className="album-song-element">
                <input type='checkbox' checked={checked} value={item.MID} onChange={checkHandled} checkItemHandler={checkItemHandler}/>
                <img src={imageSrc} alt={item.MNAME} className="album-song-image" />
                <div className="album-song-info">
                    <div className="album-song-detail">
                        <span className="album-song-title">{item.MNAME}</span>
                    </div>
                    <span className="album-song-duration">{item.duration}</span>
                </div>
            </div>
        </div>
    )
}
function AlbumItem({item}){
    console.log(item)
    return(
        <div className="input-fields">
            <div><label>Title</label><input type="text" name="title" value={item.ANAME} /></div>
            <div><label>Genre</label><input type="text" name="genre" value={item.AGENRE} /></div>
            <div><label>Detail</label><input type="text" name="detail" value={item.ATEXT} /></div>
        </div>
    )
}


function MusicItem({ item,checkItemHandler }) {
    const listItems = item.map(item=>(<MusicItemCon item={item} checkItemHandler={checkItemHandler} key={item.MID}/>))
    return(<>{listItems}</>)
}
function MusicList({item,checkItemHandler}){
    return(<>{item.map(item=>(<MusicItem item={item} checkItemHandler={checkItemHandler}/>))}</>)
}
function AlbumList({item}){
    return(<>{item.map(item=>(<AlbumItem item={item}/>))}</>)
}
export {
    MusicList,
    AlbumList
}