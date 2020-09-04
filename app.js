import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


import { gradeRouter } from './routes/gradeRouter.js';

import { db } from './models/index.js';


(async () => {
  try {
    await db.mongoose.connect('mongodb+srv://root:root@cluster0.kr0op.mongodb.net/gradesDataBase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ')
  } catch (error) {
    console.log('nao conectou')
    process.exit(); 
  }
})();


  // console.log('chegou aqui') 


//define o dominio de origem para consumo do servico
const app = express();
//  require('dotenv').config();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'https://grades-welisson.herokuapp.com/grade',
  }),
);
app.use(gradeRouter);

app.get('/', (req, res) => {
  console.log('chegou aqui')

  res.send('API em execucao');
});
app.listen(process.env.PORT || 8081, () => {});
