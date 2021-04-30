from .. import models
from fastapi import Depends,APIRouter,HTTPException,status
from ..dependencies import get_current_user,Session,get_db,ACCESS_TOKEN_EXPIRE_MINUTES
from datetime import timedelta
from . import schemas
from . import crud
from . import models
from fastapi.security import OAuth2PasswordRequestForm

router = APIRouter(
    prefix="/users",
)

@router.get("/me/")
async def read_users_me(current_user: models.User = Depends(get_current_user)):
    return current_user

@router.post("/")
def create_user(
    user: schemas.UserCreate, db: Session = Depends(get_db)
):
    return crud.create_user(db=db, user=user)

@router.post("/token", response_model=schemas.Token)
async def login_for_access_token(db: Session = Depends(get_db),form_data: OAuth2PasswordRequestForm = Depends()):
    user = crud.authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = crud.create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}