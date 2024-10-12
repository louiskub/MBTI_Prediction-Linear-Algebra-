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
    # return item