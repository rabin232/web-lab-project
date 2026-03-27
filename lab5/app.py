from fastapi import FastAPI, HTTPException
from db import database, engine, metadata
from controllers.user_controller import register_user, login_user, get_current_user
from schema import UserCreate, UserLogin

app = FastAPI()
metadata.create_all(engine)


@app.on_event("startup")
async def startup():
    await database.connect()


@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()


@app.post("/register")
async def register(user: UserCreate):
    return await register_user(user)


@app.post("/login")
async def login(user: UserLogin):
    return await login_user(user)


@app.get("/users/me")
async def read_users_me(current_user: str = Depends(get_current_user)):
    return {"username": current_user}