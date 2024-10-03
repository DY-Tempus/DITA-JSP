from sqlalchemy import Column, ForeignKey, Integer, String, Text, Date, BLOB
from sqlalchemy.orm import relationship
from .database import Base

# 장르 테이블
class Genre(Base):
    __tablename__ = 'genres'
    name = Column(String(30), primary_key=True)

# 사용자 테이블
class User(Base):
    __tablename__ = 'users'
    id = Column(String(20), primary_key=True, index=True)
    password = Column(String(50), nullable=False)
    email = Column(String(30), nullable=False)
    img = Column(BLOB)
    name = Column(String(20), nullable=False)
    genre1 = Column(String(30), ForeignKey('genres.name'))
    genre2 = Column(String(30), ForeignKey('genres.name'))

# 앨범 테이블
class Album(Base):
    __tablename__ = 'albums'
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(50), nullable=False)
    date = Column(Date)
    description = Column(Text)
    cover_img = Column(BLOB)
    likes = Column(Integer, default=0)
    views = Column(Integer, default=0)
    rating = Column(Integer, default=0)
    user_id = Column(String(20), ForeignKey('users.id'))
    genre = Column(String(30), ForeignKey('genres.name'))

# 음악 테이블
class Music(Base):
    __tablename__ = 'music'
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(50), nullable=False)
    file = Column(BLOB, nullable=False)
    lyrics = Column(Text)
    likes = Column(Integer, default=0)
    views = Column(Integer, default=0)
    date = Column(Date)
    rating = Column(Integer, default=0)
    genre = Column(String(30), ForeignKey('genres.name'))
    user_id = Column(String(20), ForeignKey('users.id'))
    album_id = Column(Integer, ForeignKey('albums.id'))

# 플레이리스트 테이블
class Playlist(Base):
    __tablename__ = 'playlists'
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    name = Column(String(50), nullable=False)
    date = Column(Date)
    likes = Column(Integer, default=0)
    views = Column(Integer, default=0)
    user_id = Column(String(20), ForeignKey('users.id'))

# 플레이리스트-음악 관계 테이블
class PlaylistMusic(Base):
    __tablename__ = 'playlist_music'
    playlist_id = Column(Integer, ForeignKey('playlists.id'), primary_key=True)
    music_id = Column(Integer, ForeignKey('music.id'), primary_key=True)

# 댓글 테이블
class Comment(Base):
    __tablename__ = 'comments'
    id = Column(Integer, primary_key=True, autoincrement=True)
    music_id = Column(Integer, ForeignKey('music.id'))
    album_id = Column(Integer, ForeignKey('albums.id'))
    user_id = Column(String(20), ForeignKey('users.id'))
    text = Column(Text, nullable=False)
    date = Column(Date)
