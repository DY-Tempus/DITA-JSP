import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './css/UpdateAlbum.css';
import {MusicList,AlbumList} from './AlbumList'
const songs = [
    {
        id: 1,
        writer: "Getsix",
        title: "WIP That'll Never Come Out",
        duration: "2:48",
        image: "./img/Getsixart1.png", // 각 곡의 이미지 경로
    },
    {
        id: 2,
        writer: "Getsix",
        title: "The Psychedelic Experience",
        duration: "4:35",
        image: "./img/Getsixart2.png",
    },
    {
        id: 3,
        writer: "Getsix",
        title: "Astral Projection",
        duration: "5:53",
        image: "./img/Getsixart2.png",
    },
    {
        id: 4,
        writer: "Getsix",
        title: "Better Days",
        duration: "4:17",
        image: "./img/Getsixart2.png",
    },
    {
        id: 5,
        writer: "Getsix",
        title: "Envy",
        duration: "3:35",
        image: "./img/Getsixart2.png",
    },
    {
        id: 6,
        writer: "Getsix",
        title: "Diphenhydramine",
        duration: "1:57",
        image: "./img/Getsixart2.png",
    },
];

const UpdateAlbum = () => {
    const params = useParams();
    const [formData, setFormData] = useState({
        title: '',
        artist: '',        // DB에는 저장되지 않음
        producer: '',      // DB에는 저장되지 않음
        album: '',         // DB에는 저장되지 않음
        genre: '',
        copyright: '',     // DB에는 저장되지 않음
        lyrics: '',
        option: 'public'   // DB에는 저장되지 않음
    });

    const [album,setAlbum]=useState([]);
    const [musics,setMusics]=useState([]);
    useEffect(()=>{
        let aid=params.aid
        let obj = sessionStorage.getItem("idKey")
        obj = JSON.parse(obj)
        axios.post("http://localhost:3000/api/album/detail",{
            aid:aid
        })
        .then((Response)=>{
            console.log(Response.data);
            const obj=Response.data[0];
            console.log(obj)
            
            setAlbum([...album,obj]);
        });

        axios.post("http://localhost:3000/api/album/musiclist",{
            uid:obj.ID
        })
        .then((Response)=>{
            console.log(Response.data);
            const obj=Response.data;
            console.log(obj)
            
            setMusics([...musics,obj]);
        });
    },[])

    const [imageFileName, setImageFileName] = useState('');  // 이미지 파일 이름
    const [musicFileName, setMusicFileName] = useState('');  // 음악 파일 이름


    // if(!sessionStorage.getItem("idKey")){
    //     return (
    //         <div>
    //             <meta http-equiv="refresh" content="0;url=/signIn"></meta>
    //         </div>
    //     );
    // }

    return (
        <div className="album-upload-panel">
            <h1 className="title">Update Album</h1>
            <div className="album-upload-section">
                <div className="album-upload-content">
                    <div className="image-box">
                        <div className="file-AlbumUpload">
                            <input type="file" id="image-AlbumUpload" accept="image/*" />
                            <label htmlFor="image-AlbumUpload" className="custom-file-album-upload">
                                Album Image
                            </label>
                            {imageFileName && <p className="file-name">{imageFileName}</p>}
                        </div>
                    </div>
                    <>
                        {
                            <AlbumList item={album}/>
                        }
                    </>
                </div>

                <div className="album-upload-list-content">
                    <h1>List</h1>
                    <div className="album-upload-song-list">
                        <>
                            {
                                <MusicList item={musics}/>
                            }
                        </>
                    </div>
                </div>
            </div>

            <div className="button-section">
                <button className="album-upload-button">Update</button>
                <button className="cancel-button">Cancel</button>
            </div>
        </div>
    );
};

export default UpdateAlbum;


