from fastapi import Depends, FastAPI, HTTPException, status
from .database import engine
from . import users,posts
from .users import models,main
from .posts import models,main

users.models.Base.metadata.create_all(bind=engine)
posts.models.Base.metadata.create_all(bind=engine)


app = FastAPI()

app.include_router(users.main.router)
app.include_router(posts.main.router)