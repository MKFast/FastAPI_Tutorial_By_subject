from sqlalchemy import Boolean, TEXT, DECIMAL, Column, Integer, String,DateTime
from sqlalchemy_utils import URLType
from slugify import slugify
import datetime

from sql_app.database import Base


class Product(Base):
    __tablename__ = "product"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    slug = Column(String,unique=True)
    url = Column(URLType)
    description = Column(TEXT)
    price = Column(DECIMAL(scale=2))
    available = Column(Boolean,default=True)
    created_date = Column(DateTime, default=datetime.datetime.utcnow)
    updated = Column(DateTime, onupdate = datetime.datetime.now)

    def __init__(self, *args, **kwargs):
        if not 'slug' in kwargs:
            kwargs['slug'] = slugify(kwargs.get('title', ''))
        super().__init__(*args, **kwargs)
