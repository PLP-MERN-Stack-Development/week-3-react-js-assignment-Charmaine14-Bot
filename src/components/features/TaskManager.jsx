import { useState, useMemo } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import TaskItem from "./TaskItem";
import TaskFilter from "./TaskFilter";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { TASK_FILTERS } from "../../utils/constants";

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState(TASK_FILTERS.ALL);

  const addTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case TASK_FILTERS.ACTIVE:
        return tasks.filter((task) => !task.completed);
      case TASK_FILTERS.COMPLETED:
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const taskCounts = useMemo(
    () => ({
      total: tasks.length,
      active: tasks.filter((task) => !task.completed).length,
      completed: tasks.filter((task) => task.completed).length,
    }),
    [tasks]
  );

  return (
    <Card className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Task Manager
        </h2>

        <div className="flex gap-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            placeholder="Add a new task..."
            className="input-base"
          />
          <Button onClick={addTask}>Add Task</Button>
        </div>
      </div>

      <TaskFilter
        currentFilter={filter}
        onFilterChange={setFilter}
        taskCounts={taskCounts}
      />

      <div className="space-y-3 mb-6">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            {filter === TASK_FILTERS.ALL && tasks.length === 0
              ? "No tasks yet. Add one above!"
              : `No ${filter} tasks.`}
          </div>
        ) : (
          filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
              onEdit={editTask}
            />
          ))
        )}
      </div>

      {taskCounts.completed > 0 && (
        <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {taskCounts.completed} completed task
            {taskCounts.completed !== 1 ? "s" : ""}
          </span>
          <Button variant="danger" size="sm" onClick={clearCompleted}>
            Clear Completed
          </Button>
        </div>
      )}
    </Card>
  );
};

export default TaskManager;
