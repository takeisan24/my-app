"use client";

import { useState } from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Badge from "../../components/Badge";
import Modal, { ConfirmModal } from "../../components/Modal";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  createdAt: Date;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState<number | null>(null);

  const addTodo = () => {
    if (newTodo.trim()) {
      const todo: Todo = {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
        priority,
        createdAt: new Date()
      };
      setTodos([todo, ...todos]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
    setDeleteModalOpen(false);
    setTodoToDelete(null);
  };

  const openDeleteModal = (id: number) => {
    setTodoToDelete(id);
    setDeleteModalOpen(true);
  };

  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case "active": return !todo.completed;
      case "completed": return todo.completed;
      default: return true;
    }
  });

  const stats = {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    active: todos.filter(t => !t.completed).length
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "danger";
      case "medium": return "warning";
      case "low": return "success";
      default: return "default";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            📝 Todo List
          </h1>
          <p className="text-gray-400 text-lg">
            Quản lý công việc của bạn một cách hiệu quả
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card variant="glass">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {stats.total}
              </div>
              <div className="text-gray-400 text-sm mt-1">Tổng cộng</div>
            </div>
          </Card>
          <Card variant="glass">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                {stats.completed}
              </div>
              <div className="text-gray-400 text-sm mt-1">Hoàn thành</div>
            </div>
          </Card>
          <Card variant="glass">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {stats.active}
              </div>
              <div className="text-gray-400 text-sm mt-1">Đang làm</div>
            </div>
          </Card>
        </div>

        {/* Add Todo Form */}
        <Card variant="gradient" className="mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              ➕ Thêm công việc mới
            </h3>
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  placeholder="Nhập công việc cần làm..."
                  onKeyPress={(e) => e.key === "Enter" && addTodo()}
                  leftIcon={<span>📝</span>}
                />
              </div>
              <div className="w-32">
                <select 
                  value={priority}
                  onChange={(e) => setPriority(e.target.value as any)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="low" className="bg-slate-800">Thấp</option>
                  <option value="medium" className="bg-slate-800">Trung bình</option>
                  <option value="high" className="bg-slate-800">Cao</option>
                </select>
              </div>
              <Button onClick={addTodo} disabled={!newTodo.trim()}>
                Thêm
              </Button>
            </div>
          </div>
        </Card>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-6 justify-center">
          {[
            { key: "all", label: "Tất cả", count: stats.total },
            { key: "active", label: "Đang làm", count: stats.active },
            { key: "completed", label: "Hoàn thành", count: stats.completed }
          ].map(({ key, label, count }) => (
            <Button
              key={key}
              variant={filter === key ? "primary" : "ghost"}
              onClick={() => setFilter(key as any)}
              className="flex items-center gap-2"
            >
              {label}
              <Badge variant="default" size="sm">{count}</Badge>
            </Button>
          ))}
        </div>

        {/* Todo List */}
        <div className="space-y-4">
          {filteredTodos.length === 0 ? (
            <Card variant="glass">
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📋</div>
                <p className="text-gray-400 text-lg">
                  {filter === "all" ? "Chưa có công việc nào" : 
                   filter === "active" ? "Không có công việc đang làm" :
                   "Chưa hoàn thành công việc nào"}
                </p>
              </div>
            </Card>
          ) : (
            filteredTodos.map((todo) => (
              <Card key={todo.id} variant="glass" hover={false}>
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="w-5 h-5 text-blue-500 bg-white/10 border-white/30 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  
                  <div className="flex-1">
                    <div className={`${todo.completed ? 'line-through text-gray-500' : 'text-white'} transition-all duration-300`}>
                      {todo.text}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {todo.createdAt.toLocaleDateString('vi-VN')} - {todo.createdAt.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>

                  <Badge 
                    variant={getPriorityColor(todo.priority) as any}
                    size="sm"
                  >
                    {todo.priority === "high" ? "🔴 Cao" : 
                     todo.priority === "medium" ? "🟡 TB" : "🟢 Thấp"}
                  </Badge>

                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => openDeleteModal(todo.id)}
                    className="opacity-60 hover:opacity-100"
                  >
                    🗑️
                  </Button>
                </div>
              </Card>
            ))
          )}
        </div>

        {/* Delete Confirmation Modal */}
        <ConfirmModal
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onConfirm={() => todoToDelete && deleteTodo(todoToDelete)}
          title="Xóa công việc"
          message="Bạn có chắc chắn muốn xóa công việc này? Hành động này không thể hoàn tác."
          confirmText="Xóa"
          cancelText="Hủy"
          variant="danger"
        />
      </div>
    </div>
  );
}
