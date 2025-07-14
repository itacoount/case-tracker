export function EmptyTask() {
  return (
    <div className="w-full flex flex-col items-center justify-center h-[300px] gap-4 p-8 text-center">
      <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted-foreground"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
          <path d="M10 9H8" />
        </svg>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-muted-foreground">
          No tasks found
        </h3>
        <p className="text-sm text-muted-foreground max-w-md">
          You don't have any tasks yet. Click the "Create New Task" button to
          create your first one.
        </p>
      </div>
    </div>
  );
}
