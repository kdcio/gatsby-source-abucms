import { addTask, executeTasks } from "../../utils/asyncSeries";
import processModel from "./processModel";

export const sourceNodes = async (args, pluginOptions) => {
  const { reporter } = args;
  const { models } = pluginOptions;

  reporter.info("[abucms] Starting data fetch from API");

  models.forEach((model) => {
    addTask(processModel, { pluginOptions, model, args });
  });

  // we hit the API one by one to avoid or at least minimize throttling
  // in DynamoDB specially if BillingMode set to PROVISIONED
  const total = await executeTasks();
  reporter.info(`[abucms] Done: ${total} new/updated document(s) fetched`);
};
