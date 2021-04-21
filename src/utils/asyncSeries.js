// tasks repo
const tasks = [];

// task is an async function
export const addTask = (func, params) => {
  tasks.push(async (cb) => {
    await func(params);
    return cb();
  });
};

export const executeTasks = () => {
  const task = tasks.shift();
  return task(() => {
    if (tasks.length > 0) return executeTasks();
    return null;
  });
};
