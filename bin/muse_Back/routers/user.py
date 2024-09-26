from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .database import get_db
from .models import User, Genre
from pydantic import BaseModel

router = APIRouter()

class UserCreate(BaseModel):
    id: str
    password: str
    email: str
    name: str
    genre1: str | None = None
    genre2: str | None = None

# 사용자 생성
@router.post("/users/")
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.id == user.id).first()
    if db_user:
        raise HTTPException(status_code=400, detail="User already registered")
    new_user = User(id=user.id, password=user.password, email=user.email, name=user.name, genre1=user.genre1, genre2=user.genre2)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

# 모든 사용자 조회
@router.get("/users/")
def read_users(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    users = db.query(User).offset(skip).limit(limit).all()
    return users

# 장르 목록 조회
@router.get("/genres/")
def read_genres(db: Session = Depends(get_db)):
    genres = db.query(Genre).all()
    return genres
