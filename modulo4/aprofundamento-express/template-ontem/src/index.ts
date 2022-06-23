import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

type tarefas = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
const afazeres: tarefas[] = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: true,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: true,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
];
// todos usuarios
app.get("/todos", (req, res) => {
  res.send(afazeres);
});
// status completos
 app.get("/completos",(req,res)=>{
   const completos:any = afazeres.filter((afazer)=>{
     return afazer.completed === true
   })
   res.send(completos)
 })

 //status incompletos
app.get("/incompletos", (req, res) => {
  const incompletos: any = afazeres.filter((afazer) => {
    return afazer.completed === false;
  });
  res.send(incompletos);
});

// editar status
app.put("/editarstatus/:id", (req, res) => {
  const id = req.params.id;
  const completed = req.body;

  const editar: any = afazeres.map((afazer) => {
    if (afazer.id === Number(id)) {
      afazer.completed = !afazer.completed;
    }
    return afazer;
  });
  res.send(editar);
});

// buscar usuario pelo id
app.get('/todosUsers/:id', (req, res)=>{
  const idUser = req.params.id
  const users = afazeres.filter((afazer)=>{
   return afazer.userId === Number(idUser)
  

  })
  res.send(users)
})


// deletar tarefa pelo id
app.delete("/detetatarefas/:id", (req, res) => {
  const idDeletar = req.params.id;
  const index = afazeres.findIndex((afazer) => {
    return afazer.id === Number(idDeletar);
  });

  afazeres.splice(index, 1);
  res.send(afazeres);
});

// adicionar nova tarefa 
app.post("/novatarefa", (req, res) => {
  const { userId, id, title, completed }: tarefas = req.body;

  afazeres.push({ userId, id, title, completed });
  res.send(afazeres);
});

app.listen(3003);
console.log("funcionando");
