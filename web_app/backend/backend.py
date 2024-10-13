from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from controller import Controller
import uvicorn
app = FastAPI()
controller = Controller()
from pydantic import BaseModel

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
    uvicorn.run(app, host="localhost", port=8000)