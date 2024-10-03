from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# 기본적인 라우트: 홈 경로
@app.get("/")
def read_root():
    return {"message": "Hello from FastAPI!"}

# Pydantic을 사용하여 입력 검증
class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None

# POST 요청: 아이템 생성
@app.post("/items/")
def create_item(item: Item):
    return {"message": f"Item {item.name} created successfully", "item": item}
