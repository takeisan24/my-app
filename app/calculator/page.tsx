"use client";

import { useState } from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  // 🆕 Thêm state cho memory
  const [memory, setMemory] = useState(0);
  const [hasMemory, setHasMemory] = useState(false);

  const [history, setHistory] = useState<string[]>([]);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const handleMemoryOpoeration = (op: string) => {
    const currentValue = parseFloat(display) || 0;
    
    switch (op) {
      case "MC": // Memory Clear
        setMemory(0);
        setHasMemory(false);
        break;
      case "MR": // Memory Recall
        setDisplay(String(memory));
        setWaitingForOperand(true);
        break;
      case "M+": // Memory Add
        setMemory(memory + currentValue);
        setHasMemory(true);
        break;
      case "M-": // Memory Subtract
        setMemory(memory - currentValue);
        setHasMemory(true);
        break;
    }
  };

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(display);
    } else if (operation) {
      const currentValue = previousValue || "0";
      const newValue = calculate(currentValue, display, operation);

      setDisplay(String(newValue));
      setPreviousValue(String(newValue));
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: string, secondValue: string, operation: string) => {
    const prev = parseFloat(firstValue);
    const current = parseFloat(secondValue);
    let result: number;

    switch (operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "×":
        result = prev * current;
        break;
      case "÷":
        result = prev / current;
        break;
      case "=":
        result = current;
        break;
      default:
        result = current;
    }

    if (operation !== "="){
      const historyEntry = `${prev} ${operation} ${current} = ${result}`;
      setHistory(prev => [historyEntry, ...prev].slice(0, 5)); // Giới hạn lịch sử tối đa 10 mục
    }

    return result;
  };

  

  const clearHistory = () => {
    setHistory([]);
  }

  const handleOperation = (op: string) => {
    if (op === "=") {
      if (operation && previousValue !== null) {
        const newValue = calculate(previousValue, display, operation);
        setDisplay(String(newValue));
        setPreviousValue(null);
        setOperation(null);
        setWaitingForOperand(true);
      }
    } else {
      performOperation(op);
    }
  };

  // 🆕 Thêm hàm xử lý memory operations
  const handleMemoryOperation = (op: string) => {
    const currentValue = parseFloat(display) || 0;
    
    switch (op) {
      case "MC": // Memory Clear
        setMemory(0);
        setHasMemory(false);
        break;
      case "MR": // Memory Recall
        setDisplay(String(memory));
        setWaitingForOperand(true);
        break;
      case "M+": // Memory Add
        setMemory(memory + currentValue);
        setHasMemory(true);
        break;
      case "M-": // Memory Subtract
        setMemory(memory - currentValue);
        setHasMemory(true);
        break;
    }
  };

  const buttons = [
    { label: "C", type: "clear", variant: "danger" as const },
    { label: "±", type: "operation", variant: "secondary" as const },
    { label: "%", type: "operation", variant: "secondary" as const },
    { label: "÷", type: "operation", variant: "warning" as const },
    
    { label: "7", type: "number", variant: "ghost" as const },
    { label: "8", type: "number", variant: "ghost" as const },
    { label: "9", type: "number", variant: "ghost" as const },
    { label: "×", type: "operation", variant: "warning" as const },
    
    { label: "4", type: "number", variant: "ghost" as const },
    { label: "5", type: "number", variant: "ghost" as const },
    { label: "6", type: "number", variant: "ghost" as const },
    { label: "-", type: "operation", variant: "warning" as const },
    
    { label: "1", type: "number", variant: "ghost" as const },
    { label: "2", type: "number", variant: "ghost" as const },
    { label: "3", type: "number", variant: "ghost" as const },
    { label: "+", type: "operation", variant: "warning" as const },
    
    { label: "0", type: "number", variant: "ghost" as const, span: 2 },
    { label: ".", type: "dot", variant: "ghost" as const },
    { label: "=", type: "equals", variant: "primary" as const },
  ];

  const handleButtonClick = (button: typeof buttons[0]) => {
    switch (button.type) {
      case "number":
        inputNumber(button.label);
        break;
      case "dot":
        inputDot();
        break;
      case "clear":
        clear();
        break;
      case "operation":
        if (button.label === "±") {
          setDisplay(String(parseFloat(display) * -1));
        } else if (button.label === "%") {
          setDisplay(String(parseFloat(display) / 100));
        } else {
          handleOperation(button.label);
        }
        break;
      case "equals":
        handleOperation("=");
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative max-w-md mx-auto px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            🧮 Calculator
          </h1>
          <p className="text-gray-400">
            Máy tính đơn giản với giao diện hiện đại
          </p>
        </div>

        {/* Calculator */}
        <Card variant="gradient" className="overflow-hidden">
          {/* Display */}
          <div className="bg-black/30 p-6 mb-6 rounded-xl">
            <div className="text-right">
              {previousValue && operation && (
                <div className="text-gray-400 text-sm mb-1">
                  {previousValue} {operation}
                </div>
              )}
              <div className="text-white text-4xl font-mono overflow-hidden">
                {display.length > 10 ? display.slice(0, 10) + "..." : display}
              </div>
            </div>
          </div>

          {/* Buttons Grid */}
          <div className="grid grid-cols-4 gap-3">
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant}
                onClick={() => handleButtonClick(button)}
                className={`h-16 text-xl font-semibold ${
                  button.span === 2 ? "col-span-2" : ""
                } ${
                  button.type === "operation" || button.type === "equals" 
                    ? "active:scale-95" 
                    : ""
                }`}
              >
                {button.label}
              </Button>
            ))}
          </div>

          {/* Memory Functions */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-3">
              <span>🧠 Memory</span>
              {hasMemory && (
                <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">
                  {memory}
                </span>
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs hover:bg-red-500/20 hover:text-red-400"
                onClick={() => handleMemoryOperation("MC")}
              >
                MC
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs hover:bg-blue-500/20 hover:text-blue-400"
                onClick={() => handleMemoryOperation("MR")}
              >
                MR
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs hover:bg-green-500/20 hover:text-green-400"
                onClick={() => handleMemoryOperation("M+")}
              >
                M+
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-xs hover:bg-yellow-500/20 hover:text-yellow-400"
                onClick={() => handleMemoryOperation("M-")}
              >
                M-
              </Button>
            </div>
          </div>
        </Card>

        {/* History */}
        <Card variant="glass" className="mt-6">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-2">
              <span>📊 Lịch sử tính toán</span>
              {history.length > 0 && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearHistory}
                  className="text-xs text-red-400 hover:bg-red-500/20"
                >
                  Xóa
                </Button>
              )}
            </div>
          </div>
          
          {history.length === 0 ? (
            <div className="text-gray-500 text-xs text-center py-4">
              Chưa có phép tính nào...
            </div>
          ) : (
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {history.map((entry, index) => (
                <div 
                  key={index}
                  className="text-xs text-gray-300 bg-white/5 rounded-lg p-2 font-mono text-center hover:bg-white/10 transition-colors cursor-pointer"
                  onClick={() => {
                    const result = entry.split(' = ')[1];
                    setDisplay(result);
                    setWaitingForOperand(true);
                  }}
                >
                  {entry}
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
