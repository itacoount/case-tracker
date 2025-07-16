import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Search, Plus } from "lucide-react";
import TaskForm from "./TaskForm";
import { TASK_STATUSES } from "@/constant";

interface HeaderProps {
  createTask: (data: any) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onStatusChange: (status: string) => void;
  onSearchChange: (query: string) => void;
}

export default function Header({
  createTask,
  open,
  onOpenChange,
  onStatusChange,
  onSearchChange,
}: HeaderProps) {
  const [status, setStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const statusOptions = useMemo(
    () => [{ value: "all", label: "All" }, ...TASK_STATUSES],
    []
  );

  const handleApplyFilters = () => {
    onStatusChange(status);
    onSearchChange(searchQuery);
  };

  const renderFilterPopover = () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="flex-1 bg-white text-black justify-start"
        >
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-4 space-y-4">
        <div>
          <Label htmlFor="search">Search</Label>
          <Input
            id="search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search by task title..."
            className="text-black mt-1"
          />
        </div>
        <div>
          <Label htmlFor="status">Status</Label>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="mt-1 bg-white text-black w-full">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              {statusOptions.map(s => (
                <SelectItem key={s.value} value={s.value}>
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full" onClick={handleApplyFilters}>
          Apply Filters
        </Button>
      </PopoverContent>
    </Popover>
  );

  const renderCreateButton = () => (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className="flex-1 bg-white text-black hover:bg-gray-100 justify-start">
          <Plus className="w-4 h-4 mr-2" />
          New Task
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-sm">
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
        </DialogHeader>
        <TaskForm onSubmit={createTask} />
      </DialogContent>
    </Dialog>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold">Task Manager</h1>
          <div className="flex items-center gap-4">
            {renderFilterPopover()}
            {renderCreateButton()}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden py-4 space-y-4">
          <div className="text-center">
            <h1 className="text-xl font-bold">Task Manager</h1>
          </div>
          <div className="flex flex-row gap-2 px-2">
            {renderFilterPopover()}
            {renderCreateButton()}
          </div>
        </div>
      </div>
    </header>
  );
}
