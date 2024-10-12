from fastapi import FastAPI
from controller import Controller
import uvicorn
app = FastAPI()
controller = Controller()
from pydantic import BaseModel
class Item(BaseModel):
    age: float
    gender: str
    education: int
    intro: float
    sensing: float
    thinking: float
    judging: float
    interest: str


@app.post("/mbti-test")
def get_pearson(item: Item):
    return controller.find_pearson(item)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8080)