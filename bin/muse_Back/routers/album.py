from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .database import get_db
from .models import Album
from pydantic import BaseModel
from datetime import date

router = APIRouter()

class AlbumCreate(BaseModel):
    name: str
    description: str
    date: date
    genre: str
    user_id: str

# 앨범 생성
@router.post("/albums/")
def create_album(album: AlbumCreate, db: Session = Depends(get_db)):
    new_album = Album(name=album.name, description=album.description, date=album.date, genre=album.genre, user_id=album.user_id)
    db.add(new_album)
    db.commit()
    db.refresh(new_album)
    return new_album

# 모든 앨범 조회
@router.get("/albums/")
def read_albums(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    albums = db.query(Album).offset(skip).limit(limit).all()
    return albums
