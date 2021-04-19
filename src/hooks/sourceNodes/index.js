import { addTask, executeTasks } from "../../utils/asyncSeries";
import processModel from "./processModel";

const sourceNodes = async (args, pluginOptions) => {
  const { reporter } = args;
  reporter.info("[abucms] Starting data fetch from API");
  // console.log("pluginOptions", pluginOptions);

  const { models } = pluginOptions;
  models.forEach((model) => {
    addTask(processModel, { pluginOptions, model, args });
  });

  // we hit the API one by one to avoid or at least minimize throttling
  // in DynamoDB specially if BillingMode set to PROVISIONED
  await executeTasks();
  reporter.info("[abucms] Done data fetch");
};

export default sourceNodes;
