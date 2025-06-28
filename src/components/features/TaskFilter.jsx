import Button from "../ui/Button";
import { TASK_FILTERS } from "../../utils/constants";

const TaskFilter = ({ currentFilter, onFilterChange, taskCounts }) => {
  const filters = [
    { key: TASK_FILTERS.ALL, label: "All", count: taskCounts.total },
    { key: TASK_FILTERS.ACTIVE, label: "Active", count: taskCounts.active },
    {
      key: TASK_FILTERS.COMPLETED,
      label: "Completed",
      count: taskCounts.completed,
    },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {filters.map((filter) => (
        <Button
          key={filter.key}
          variant={currentFilter === filter.key ? "primary" : "secondary"}
          size="sm"
          onClick={() => onFilterChange(filter.key)}
          className="flex items-center gap-2"
        >
          {filter.label}
          <span className="bg-white bg-opacity-20 rounded-full px-2 py-0.5 text-xs">
            {filter.count}
          </span>
        </Button>
      ))}
    </div>
  );
};

export default TaskFilter;
