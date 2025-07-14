"use client";

import {
  useCreateTask,
  useDeleteTask,
  useTasks,
  useUpdateTask,
} from "@/app/hooks/useTasks";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useState } from "react";
import { Task } from "@/app/lib/types";

type CaseTrackerProps = {
  // tasks?: any[];
  // isLoading: boolean;
  // error?: Error;
  // onCreateTask: (task: any) => void;
  // onDeleteTask: (id: string) => void;
  // onUpdateTask: (id: string, task: any) => void;
  // isCreating: boolean;
};

export default function CaseTracker({}: CaseTrackerProps) {
  // const { data: tasks, isLoading, error } = useTasks();
  // const { mutate: createTask } = useCreateTask();
  // const { mutate: deleteTask } = useDeleteTask();
  // const { mutate: updateTask } = useUpdateTask();

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error loading tasks</div>;

  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const createTask = (task: Omit<Task, "id">) => {
    const newTask = { ...task, id: Date.now().toString() };
    setTasks(prev => [...prev, newTask]);
  };

  const updateTask = (updatedTask: Task) => {
    console.log("updatedTask", updatedTask);

    setTasks(prev =>
      prev.map(task => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditingTask(null);
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Task Manager</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create New Task</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Tasks</DialogTitle>
            </DialogHeader>
            <TaskForm onSubmit={createTask} />
          </DialogContent>
        </Dialog>
      </div>

      <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
    </div>
  );
}
