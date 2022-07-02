import express from "express";
import {
  getDateStock,
  getKOSPI,
  getSearchNews,
  getStockCurrentInfo,
  getTodayStock,
} from "../controller/apiController";

const apiRouter = express.Router();

apiRouter.route("/stockCurrentInfo").get(getStockCurrentInfo);
apiRouter.route("/dateStockInfo").get(getDateStock);
apiRouter.route("/todayStockInfo").get(getTodayStock);
apiRouter.route("/kospi").get(getKOSPI);
apiRouter.route("/news").get(getSearchNews);

export default apiRouter;
