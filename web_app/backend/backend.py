from fastapi import FastAPI
from controller import Controller
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


@app.post("/")
def get_pearson(item: Item):
    return controller.find_pearson(item)
    # return item