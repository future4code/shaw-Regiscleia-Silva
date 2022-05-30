import express from "express";
import cors from "cors";
import { request } from "http";

const app = express();

app.use(express.json());
app.use(cors());

type person = {
  id: number;
  name: string;
  phone: number;
  email: string;
  website: string;
};
type postagens = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
//melhor separado por questão de organização para colocar o endponts
const posts: Array<postagens> = [
  {
    id: 1,
    title: "como viver",
    body: "viver a vida não é facil",
    userId: 1,
  },
  {
    id: 2,
    title: "miar no telhado",
    body: "todo dia gosto de miar no telhado ",
    userId: 2,
  },
  {
    id: 3,
    title: "morder sempre",
    body: "para manter o respeito é importante morder sempre",
    userId: 3,
  },
];
const usuarios: Array<person> = [
  {
    id: 1,
    name: "Regiscleia",
    phone: 245548463,
    email: "regiscleia@gamil.com",
    website: "regiscleiaDias",
  },
  {
    id: 2,
    name: "Pantera",
    phone: 245548463,
    email: "panterinha@gamil.com",
    website: "panterinhamiau",
  },
  {
    id: 3,
    name: "Charlie",
    phone: 245548463,
    email: "charlie@gamil.com",
    website: "charlielindinho",
  },
];

app.get("/User", (req, res) => {
  res.send(usuarios);
});



app.get("/posts", (req, res) => {
  res.send(posts);
});

app.get("/posts/:userId", (req, res) => {
  const userId = Number(req.params.userId);
  const postId = posts.filter((post) => {
    return post.userId === userId;
  });

  res.send(postId);
});

app.listen(3003, () => {
  console.log("hello");
});
