from fastapi import  FastAPI
from fastapi import Depends,Form
from sqlalchemy.orm import Session
from sql_app.dependencies import get_db
from . import crud
from sql_app.models import Product
from fastapi.templating import Jinja2Templates
from fastapi.encoders import jsonable_encoder
from fastapi import Request


templates = Jinja2Templates(directory="templates")
app = FastAPI()

@app.get("/product")
def product_list(request: Request,db: Session = Depends(get_db)):
    products = crud.product_list(db=db)
    return templates.TemplateResponse("list.html",{"request":request,
                                                   "products":jsonable_encoder(products)})


@app.get("/product/form")
def form_post(request: Request):
    return templates.TemplateResponse('form.html', context={'request': request})

@app.post("/product/form")
def form_post(request: Request, name: str = Form(...),
              description: str = Form(...),
              url: str = Form(...),
              price: float = Form(...),
              db: Session = Depends(get_db)):

    result = Product(name=name,description=description,url=url,price=price)
    db.add(result)
    db.commit()
    db.refresh(result)
    return templates.TemplateResponse('form.html', context={'request': request, 'result': result})
