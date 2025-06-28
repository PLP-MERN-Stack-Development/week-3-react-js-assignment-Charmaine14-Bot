import { useState } from "react";
import Button from "../ui/Button";

const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (editText.trim()) {
      onEdit(task.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(task.text);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 animate-slide-up">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
      />

      <div className="flex-1">
        {isEditing ? (
          <div className="flex gap-2">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleEdit();
                if (e.key === "Escape") handleCancel();
              }}
              className="input-base"
              autoFocus
            />
            <Button size="sm" onClick={handleEdit}>
              Save
            </Button>
            <Button size="sm" variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        ) : (
          <span
            className={`${
              task.completed
                ? "line-through text-gray-500 dark:text-gray-400"
                : "text-gray-900 dark:text-gray-100"
            } cursor-pointer`}
            onClick={() => setIsEditing(true)}
          >
            {task.text}
          </span>
        )}
      </div>

      {!isEditing && (
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setIsEditing(true)}
            className="text-blue-600 hover:text-blue-700"
          >
            Edit
          </Button>
          <Button size="sm" variant="danger" onClick={() => onDelete(task.id)}>
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
