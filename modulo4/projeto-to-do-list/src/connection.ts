import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

export const conn = {
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_SCHEMA,
};

export const connection = knex({
  client: "mysql",
  connection: conn
});

export default connection;
