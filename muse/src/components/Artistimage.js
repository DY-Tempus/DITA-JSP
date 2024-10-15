import { useEffect, useState } from "react";

function ArtistImageitemCon({ item }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    if (item.AIMG && item.AIMG.data) {
      const uint8Array = new Uint8Array(item.AIMG.data);
      const blob = new Blob([uint8Array]);
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageSrc(reader.result);
        setLoading(false); // 로딩 완료
      };

      reader.readAsDataURL(blob);
    } else {
      setLoading(false); // 이미지가 없을 경우 로딩 완료
    }
  }, [item]); // item이 바뀔 때마다 다시 실행

  return (
    <>
      {loading ? (
        <p>로딩 중...</p> // 로딩 중일 때
      ) : imageSrc ? (
        <img src={imageSrc} alt="Artist Image" className="artist-artist-image" />
      ) : (
        <p className="artist-artist-image">이미지 없음</p> // 이미지가 없을 때
      )}
    </>
  );
}

function ArtistImageitem({ item }) {
  const listItems = item.map((item) => <ArtistImageitemCon item={item} />);
  return <>{listItems}</>;
}

function ArtistImage({ item }) {
  return <>{<ArtistImageitemCon item={item} />}</>;
}

export default ArtistImage;
