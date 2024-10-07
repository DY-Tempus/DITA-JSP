import React from "react";

function CurrentItem({item, onRemove}){
    return(
        <div className="current-my-music" key={item.id}>
        <div className="current-song-item">
            <img src={item.image} alt={item.title} className="current-song-image" />
            <div className="current-song-info">
                <div className="current-song-detail">
                    <span className="current-song-title">{item.title}</span>
                    <span className="current-song-writer">{item.writer}</span>
                </div>
                <span className="current-song-duration">{item.duration}</span>
            </div>
        </div>
        <img src='./img/move.png' className='thumbs-views' />
        <img src='./img/delete.png' className='thumbs-views' onClick={()=>onRemove(item.index)}/>
      </div>
    )
}

function CurrentList({item, onRemove}){
    return(
        <>
        {
            item.map(item=>(<CurrentItem item={item} key={item.id} onRemove={onRemove}/>))
        }
        </>
    )
}
export default CurrentList;