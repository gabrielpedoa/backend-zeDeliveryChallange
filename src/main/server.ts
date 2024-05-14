import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT;

class Server {
  private app = express();

  private middleware() {
    this.app.use(cors({ origin: "*", credentials: true }));
    this.app.use(express.static("public"));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  private start() {
    const isStarted = () => console.log(`Server running at ${PORT}`);
    this.app.listen(PORT, isStarted);
  }

  public bootstrap() {
    this.middleware();
    this.start();
  }
}

void new Server().bootstrap();
