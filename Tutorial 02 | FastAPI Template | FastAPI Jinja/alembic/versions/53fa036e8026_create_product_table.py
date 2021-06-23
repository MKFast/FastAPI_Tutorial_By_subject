"""create product table

Revision ID: 53fa036e8026
Revises: 
Create Date: 2021-06-24 00:15:51.739566

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '53fa036e8026'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'product',
        sa.Column('id', sa.Integer, primary_key=True,unique=True),
        sa.Column('name', sa.String(100)),
        sa.Column('slug', sa.String(100)),
        sa.Column('url', sa.String(200)),
        sa.Column('description',sa.TEXT),
        sa.Column('price',sa.DECIMAL(scale=2)),
        sa.Column('available',sa.Boolean),
        sa.Column('created_date',sa.DateTime),
        sa.Column('updated', sa.DateTime)
    )

def downgrade():
    op.drop_table("orders")