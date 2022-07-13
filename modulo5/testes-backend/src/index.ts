import express from 'express'
import knex from 'knex'
import cors from 'cors'
import { BaseDataBase } from './data/BaseDataBase'
import { userInfo } from 'os'
import { UserController } from './controller/UserController'
import { app } from '../app'
import { UserData } from './data/UserData'
import { UserBusiness } from './business/UserBusiness'
import { GetControllerUser } from './controller/GetControllerUser'
import { GetBusinessUser } from './business/GetBusinessUser'
import { IdGenerator } from './services/idGenerator'
import { HashManager } from './services/hashManager'
import { Autheticator } from './services/authenticator'

 const getControllerUser = new GetControllerUser(
   GetBusinessUser
   )
     new UserData(),
     new IdGenerator(),
     new HashManager(),
     new Autheticator()

   

app.get("/users/profile/:id",getControllerUser.GetControllerUser)

app.post ("/user", UserController.signup)
   


