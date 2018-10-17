require('now-env')
import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import logger from 'morgan'
import routes from './routes'

const port = process.env.PORT || 3001;
const app = express();

if (!process.env.NODE_ENV) {
  app.use(logger("dev"));
}

app.use(helmet());
app.use(bodyParser.json());
app.use("/", routes);

app.use((req, res, next) => {
  let err = new Error("File Not Found");
  // err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({ error: err.message, status: err.status });
});

app.listen(port, () => {
  console.log(`Worker ${process.pid} listening at port: ${port}.`);
});

export default app;
