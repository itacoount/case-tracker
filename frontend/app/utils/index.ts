export const getBadgeVariant = (status: TaskStatus) => {
  console.log("status", status);
  switch (status) {
    case "done":
      return "primary";
    case "in-progress":
      return "chart-3";
    case "todo":
      return "destructive";
    default:
      return "outline";
  }
};
