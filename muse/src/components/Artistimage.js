
function ArtistImageitem({item}){
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        if (item.AIMG && item.AIMG.data) {
            const uint8Array = new Uint8Array(item.AIMG.data);  // Buffer 데이터를 Uint8Array로 변환
            const blob = new Blob([uint8Array]);
            const reader = new FileReader();
    
            reader.onloadend = () => {
                setImageSrc(reader.result);  // Base64 URL로 변환된 이미지 저장
            };
    
            reader.readAsDataURL(blob);
        }
    }, []);

    return(
        <img src={imageSrc} alt="Artist" className="artist-artist-image" />
    )
}

function ArtistImage({ item }) {
    console.log(item)
    return (<>{<ArtistImageitem item={item} />}</>)
}

export default ArtistImage