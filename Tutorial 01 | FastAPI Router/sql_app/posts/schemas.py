from typing import Optional
from pydantic import BaseModel
import datetime
from fastapi import Body
from sql_app.users.schemas import User


class PostBase(BaseModel):
    title:str
    body:str

class PostList(PostBase):
    created_date: Optional[datetime.datetime]
    owner_id: int
    owner: User

    class Config:
        orm_mode=True

class CommentBase(BaseModel):
    name:str
    body:str
    email:str

class CommentList(CommentBase):
    id: int
    post_id:int
    created_date: Optional[datetime.datetime]= Body(None)

    class Config:
        orm_mode= True