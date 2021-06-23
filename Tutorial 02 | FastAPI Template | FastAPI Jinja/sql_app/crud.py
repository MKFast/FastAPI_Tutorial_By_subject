from sql_app import models

def product_list(db):
    return db.query(models.Product).all()