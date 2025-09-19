"use client";

import { useState, useEffect } from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Input, { NumberInput } from "../../components/Input";
import Select from "../../components/Select";

interface Unit {
  name: string;
  symbol: string;
  factor: number; // Factor to convert to base unit
}

const unitCategories = {
  length: {
    name: "Độ dài",
    icon: "📏",
    baseUnit: "meter",
    units: [
      { name: "Milimet", symbol: "mm", factor: 0.001 },
      { name: "Centimet", symbol: "cm", factor: 0.01 },
      { name: "Met", symbol: "m", factor: 1 },
      { name: "Kilomet", symbol: "km", factor: 1000 },
      { name: "Inch", symbol: "in", factor: 0.0254 },
      { name: "Feet", symbol: "ft", factor: 0.3048 },
      { name: "Yard", symbol: "yd", factor: 0.9144 },
      { name: "Mile", symbol: "mi", factor: 1609.34 }
    ]
  },
  weight: {
    name: "Khối lượng", 
    icon: "⚖️",
    baseUnit: "kilogram",
    units: [
      { name: "Miligram", symbol: "mg", factor: 0.000001 },
      { name: "Gram", symbol: "g", factor: 0.001 },
      { name: "Kilogram", symbol: "kg", factor: 1 },
      { name: "Tấn", symbol: "t", factor: 1000 },
      { name: "Ounce", symbol: "oz", factor: 0.0283495 },
      { name: "Pound", symbol: "lb", factor: 0.453592 }
    ]
  },
  temperature: {
    name: "Nhiệt độ",
    icon: "🌡️", 
    baseUnit: "celsius",
    units: [
      { name: "Celsius", symbol: "°C", factor: 1 },
      { name: "Fahrenheit", symbol: "°F", factor: 1 },
      { name: "Kelvin", symbol: "K", factor: 1 }
    ]
  },
  volume: {
    name: "Thể tích",
    icon: "🥤",
    baseUnit: "liter", 
    units: [
      { name: "Mililít", symbol: "ml", factor: 0.001 },
      { name: "Lít", symbol: "l", factor: 1 },
      { name: "Gallon (US)", symbol: "gal", factor: 3.78541 },
      { name: "Quart", symbol: "qt", factor: 0.946353 },
      { name: "Pint", symbol: "pt", factor: 0.473176 },
      { name: "Cup", symbol: "cup", factor: 0.236588 }
    ]
  }
};

export default function UnitConverter() {
  const [category, setCategory] = useState<keyof typeof unitCategories>("length");
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [inputValue, setInputValue] = useState<number>(1);
  const [result, setResult] = useState<number>(0);

  const currentCategory = unitCategories[category];
  const unitOptions = currentCategory.units.map(unit => ({
    value: unit.symbol,
    label: `${unit.name} (${unit.symbol})`
  }));

  // Set default units when category changes
  const handleCategoryChange = (newCategory: keyof typeof unitCategories) => {
    setCategory(newCategory);
    const newCategoryData = unitCategories[newCategory];
    setFromUnit(newCategoryData.units[0].symbol);
    setToUnit(newCategoryData.units[1].symbol);
    setResult(0);
  };

  // Convert temperature (special case)
  const convertTemperature = (value: number, from: string, to: string): number => {
    if (from === to) return value;
    
    // Convert to Celsius first
    let celsius = value;
    if (from === "°F") {
      celsius = (value - 32) * 5/9;
    } else if (from === "K") {
      celsius = value - 273.15;
    }
    
    // Convert from Celsius to target
    if (to === "°F") {
      return celsius * 9/5 + 32;
    } else if (to === "K") {
      return celsius + 273.15;
    }
    
    return celsius;
  };

  // Main conversion function
  const convert = () => {
    if (!fromUnit || !toUnit || inputValue === null) {
      setResult(0);
      return;
    }

    if (category === "temperature") {
      const convertedValue = convertTemperature(inputValue, fromUnit, toUnit);
      setResult(Math.round(convertedValue * 100000) / 100000);
      return;
    }

    // Regular unit conversion
    const fromUnitData = currentCategory.units.find(u => u.symbol === fromUnit);
    const toUnitData = currentCategory.units.find(u => u.symbol === toUnit);
    
    if (!fromUnitData || !toUnitData) {
      setResult(0);
      return;
    }

    // Convert to base unit, then to target unit
    const baseValue = inputValue * fromUnitData.factor;
    const convertedValue = baseValue / toUnitData.factor;
    
    setResult(Math.round(convertedValue * 100000) / 100000);
  };

  // Auto-convert when values change
  useEffect(() => {
    convert();
  }, [inputValue, fromUnit, toUnit, category]);

  // Initialize default units
  useEffect(() => {
    if (!fromUnit && !toUnit) {
      setFromUnit(currentCategory.units[0].symbol);
      setToUnit(currentCategory.units[1].symbol);
    }
  }, []);

  const swapUnits = () => {
    const tempUnit = fromUnit;
    setFromUnit(toUnit);
    setToUnit(tempUnit);
    setInputValue(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            🔄 Unit Converter
          </h1>
          <p className="text-gray-400 text-lg">
            Chuyển đổi đơn vị đo lường nhanh chóng và chính xác
          </p>
        </div>

        {/* Category Selection */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {Object.entries(unitCategories).map(([key, cat]) => (
            <Button
              key={key}
              variant={category === key ? "primary" : "ghost"}
              onClick={() => handleCategoryChange(key as keyof typeof unitCategories)}
              className="flex flex-col gap-2 h-20"
            >
              <span className="text-2xl">{cat.icon}</span>
              <span className="text-sm">{cat.name}</span>
            </Button>
          ))}
        </div>

        {/* Converter */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* From Unit */}
          <Card variant="gradient">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white text-center">
                Từ
              </h3>
              <NumberInput
                value={inputValue}
                onChange={(e) => setInputValue(parseFloat(e.target.value) || 0)}
                placeholder="Nhập giá trị..."
                className="text-center text-xl"
              />
              <Select
                options={unitOptions}
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                placeholder="Chọn đơn vị..."
              />
            </div>
          </Card>

          {/* Swap Button */}
          <div className="flex justify-center">
            <Button
              variant="secondary"
              onClick={swapUnits}
              className="w-16 h-16 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </Button>
          </div>

          {/* To Unit */}
          <Card variant="gradient">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white text-center">
                Sang
              </h3>
              <div className="relative">
                <Input
                  value={result}
                  readOnly
                  className="text-center text-xl bg-white/20 cursor-not-allowed"
                />
              </div>
              <Select
                options={unitOptions}
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                placeholder="Chọn đơn vị..."
              />
            </div>
          </Card>
        </div>

        {/* Result Display */}
        <Card variant="glass" className="mt-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-4">📊 Kết quả chuyển đổi</h3>
            <div className="text-3xl font-mono bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              {inputValue} {fromUnit} = {result} {toUnit}
            </div>
            <div className="text-gray-400 text-sm mt-2">
              {currentCategory.name} • {currentCategory.units.find(u => u.symbol === fromUnit)?.name} → {currentCategory.units.find(u => u.symbol === toUnit)?.name}
            </div>
          </div>
        </Card>

        {/* Quick Conversions */}
        <Card variant="glass" className="mt-6">
          <h3 className="text-lg font-semibold text-white mb-4 text-center">
            ⚡ Chuyển đổi nhanh
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[1, 10, 100, 1000].map((quickValue) => {
              const quickResult = category === "temperature" 
                ? convertTemperature(quickValue, fromUnit, toUnit)
                : (() => {
                    const fromUnitData = currentCategory.units.find(u => u.symbol === fromUnit);
                    const toUnitData = currentCategory.units.find(u => u.symbol === toUnit);
                    if (!fromUnitData || !toUnitData) return 0;
                    const baseValue = quickValue * fromUnitData.factor;
                    return baseValue / toUnitData.factor;
                  })();

              return (
                <div key={quickValue} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-gray-300">
                    {quickValue} {fromUnit}
                  </span>
                  <span className="text-white font-medium">
                    {Math.round(quickResult * 100000) / 100000} {toUnit}
                  </span>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}
