from fastapi import status,File, UploadFile,Depends,HTTPException,APIRouter
from sqlalchemy.orm import Session
import cloudinary
import cloudinary.uploader
from sql_app.dependencies import get_db,get_current_user
from . import crud
from . import models
from . import schemas
from sql_app.users.models import User


router = APIRouter(
    prefix="/posts",
)


@router.post("/",status_code=status.HTTP_201_CREATED)
def create_post(
    title:str,body:str,file: UploadFile = File(...), db: Session = Depends(get_db),current_user: User = Depends(get_current_user)
):
    user_id=current_user.id

    result = cloudinary.uploader.upload(file.file)
    url = result.get("url")

    return crud.create_post(db=db,user_id=user_id,title=title,body=body,url=url)

@router.get("/")
def post_list(db: Session = Depends(get_db)):
    return crud.post_list(db=db)

@router.post("/{post_id}/comment",response_model=schemas.CommentList)
def create_comment(
        comment:schemas.CommentBase ,post_id:int,db:Session = Depends(get_db)
):
    return  crud.create_comment(db=db,post_id=post_id,comment=comment)

@router.get("/{post_id}")
def post_detail(post_id:int,db: Session = Depends(get_db)):
    post =crud.get_post(db=db, id=post_id)
    comment = db.query(models.Comment).filter(models.Comment.post_id == post_id)
    active_comment = comment.filter(models.Comment.is_active == True).all()

    if post is None:
        raise HTTPException(status_code=404,detail="post does not exist")
    return {"post":post,"active_comment":active_comment}