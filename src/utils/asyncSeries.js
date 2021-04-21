// tasks repo
const tasks = [];

// task is an async function
export const addTask = (func, params) => {
  tasks.push(async (cb) => {
    const count = await func(params);
    return cb(count);
  });
};

export const executeTasks = (total = 0) => {
  const task = tasks.shift();
  return task((count) => {
    if (tasks.length > 0) return executeTasks(total + count);
    return total + count;
  });
};
