import { addTask, executeTasks } from "../../src/utils/asyncSeries";

describe("Async Series", () => {
  it("should run async series", async () => {
    const storage = [];
    const store = (num) =>
      new Promise((resolve) => {
        storage.push(num);
        resolve();
      });

    addTask(store, 1);
    addTask(store, 2);
    addTask(store, 3);
    addTask(store, 4);
    addTask(store, 5);

    await executeTasks();
    expect(storage).toEqual([1, 2, 3, 4, 5]);
  });
});
