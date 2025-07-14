"use client";

import { useState } from "react";
import TaskCard from "./TaskCard";
import { useDeleteTask, useTasks, useUpdateTask } from "@/app/hooks/useTasks";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Task } from "@/app/lib/types";
import { CustomPagination } from "./CustomPagination";

import { EmptyTask } from "./EmptyTask";

const PAGE_SIZE = 9;

type TaskListProps = {
  tasks: Task[];
  onDelete: (id: string) => void;
  onUpdate: () => void;
};

export default function TaskList({ tasks, onDelete, onUpdate }: TaskListProps) {
  const [page, setPage] = useState(1);
  // const { data: tasks, isLoading, error } = useTasks();
  // const { mutate: deleteTask } = useDeleteTask();
  // const { mutate: updateTask } = useUpdateTask();

  // Pagination
  const totalTasks = tasks?.length || 0;
  const totalPages = Math.ceil(totalTasks / PAGE_SIZE);
  const paginatedTasks =
    tasks?.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE) || [];

  const isLoading = false;
  // if (error)
  //   return (
  //     <Card className="p-6 text-center text-destructive">
  //       Error loading tasks
  //     </Card>
  //   );

  console.log("tasks", tasks);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div
          className="flex flex-wrap content-start gap-4 overflow-y-auto"
          style={{ alignContent: "flex-start" }}
        >
          {isLoading ? (
            Array.from({ length: PAGE_SIZE }).map((_, index) => (
              <div
                key={index}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]"
              >
                <Skeleton className="h-[150px] w-full rounded-lg" />
              </div>
            ))
          ) : paginatedTasks.length > 0 ? (
            paginatedTasks.map(task => (
              <div
                key={task.id}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]"
              >
                <TaskCard task={task} onDelete={onDelete} onUpdate={onUpdate} />
              </div>
            ))
          ) : (
            <EmptyTask />
          )}
        </div>

        {tasks.length !== 0 && (
          <CustomPagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
            className="-mt-2 -mb-2"
          />
        )}
      </Card>
    </div>
  );
}
