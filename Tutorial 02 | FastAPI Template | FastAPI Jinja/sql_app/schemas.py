import decimal
from pydantic import BaseModel,AnyUrl


class ProductList(BaseModel):
    name: str
    slug: str
    url: AnyUrl
    description: str
    price: decimal.Decimal
    available = bool
    category_id = int

    class Config:
        orm_mode=True