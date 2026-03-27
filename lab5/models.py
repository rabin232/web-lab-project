from sqlalchemy import Table, create_engine,table,Column,Integer,String,Float,MetaData
from db import metadata

users = Table('users',metadata,
              Column('id',Integer,primary_key=True),
              Column('username',String,unique=True,nullable=False,index=True),
              Column('password',String,unique=True,nullable=False))