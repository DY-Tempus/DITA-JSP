import React, { useEffect, useState } from "react";

function ProfileImgItem({item,cname}){
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        if (item.IMG && item.IMG.data) {
            const uint8Array = new Uint8Array(item.IMG.data);  // Buffer 데이터를 Uint8Array로 변환
            const blob = new Blob([uint8Array]);
            const reader = new FileReader();
    
            reader.onloadend = () => {
                setImageSrc(reader.result);  // Base64 URL로 변환된 이미지 저장
            };
    
            reader.readAsDataURL(blob);
        }
    }, []);
    return(
        <>
        {imageSrc ? (
            <img src={imageSrc} alt="Profile" className={cname} />
        ) : (
            <p4 className={cname}>이미지 없음</p4>
        )}
        </>
    )
}

function ProfileImg({item,cname}){
    return(<>{item.map(item=>(<ProfileImgItem item={item} key={item.ID} cname={cname}/>))}</>)
}

export {
    ProfileImg
}