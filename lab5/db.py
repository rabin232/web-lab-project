from sqlalchemy import create_engine,MetaData
from databases import Database

Database_URL = "sqlite:///./test.db"
database = Database(Database_URL)
metadata = MetaData()
engine = create_engine(Database_URL)
