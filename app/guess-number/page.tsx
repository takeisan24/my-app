"use client";

import { useState, useEffect } from "react";

export default function GuessNumber() {
  const [targetNumber, setTargetNumber] = useState<number>(0);
  const [guess, setGuess] = useState<string>("");
  const [attempts, setAttempts] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>("");
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing");
  const [history, setHistory] = useState<Array<{guess: number, result: string}>>([]);
  const [maxAttempts] = useState<number>(7);

  // Initialize game
  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    const newNumber = Math.floor(Math.random() * 100) + 1;
    setTargetNumber(newNumber);
    setGuess("");
    setAttempts(0);
    setFeedback("Tôi đã nghĩ ra một số từ 1 đến 100. Bạn có thể đoán được không?");
    setGameStatus("playing");
    setHistory([]);
  };

  const makeGuess = () => {
    const guessNumber = parseInt(guess);
    
    if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
      setFeedback("Vui lòng nhập một số từ 1 đến 100!");
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    let result = "";
    if (guessNumber === targetNumber) {
      result = "🎉 Chính xác!";
      setFeedback(`🎉 Chúc mừng! Bạn đã đoán đúng số ${targetNumber} sau ${newAttempts} lần thử!`);
      setGameStatus("won");
    } else if (guessNumber < targetNumber) {
      result = "📈 Quá thấp";
      setFeedback(`📈 Số ${guessNumber} quá thấp. Thử số lớn hơn!`);
    } else {
      result = "📉 Quá cao";
      setFeedback(`📉 Số ${guessNumber} quá cao. Thử số nhỏ hơn!`);
    }

    // Add to history
    setHistory(prev => [...prev, { guess: guessNumber, result }]);

    if (newAttempts >= maxAttempts && guessNumber !== targetNumber) {
      setFeedback(`😔 Hết lượt! Số tôi nghĩ là ${targetNumber}. Chơi lại nhé!`);
      setGameStatus("lost");
    }

    setGuess("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && gameStatus === "playing") {
      makeGuess();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating Numbers */}
        {[1, 7, 13, 27, 42, 69, 88, 95].map((num, i) => (
          <div 
            key={num}
            className="absolute text-white/10 text-6xl font-bold animate-bounce"
            style={{
              top: `${15 + (i * 12)}%`,
              left: `${8 + (i * 11)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i % 3)}s`
            }}
          >
            {num}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative max-w-4xl mx-auto px-8 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
            🎯 Game Đoán Số
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Thử thách trí tuệ của bạn! Tôi đã nghĩ ra một số từ 1 đến 100. Bạn có thể đoán được trong {maxAttempts} lần thử?
          </p>
        </div>

        {/* Game Area */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Game Controls */}
          <div className="space-y-6">
            {/* Game Status Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="text-2xl">
                  {gameStatus === "playing" && "🤔"}
                  {gameStatus === "won" && "🎉"}
                  {gameStatus === "lost" && "😔"}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">{feedback}</p>
                
                {gameStatus === "playing" && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 justify-center">
                      <input
                        type="number"
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Nhập số của bạn..."
                        min="1"
                        max="100"
                        className="bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white text-center text-lg w-48 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <button
                      onClick={makeGuess}
                      disabled={!guess.trim()}
                      className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:cursor-not-allowed disabled:transform-none"
                    >
                      Đoán! 🎯
                    </button>
                  </div>
                )}

                {gameStatus !== "playing" && (
                  <button
                    onClick={resetGame}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    🔄 Chơi lại
                  </button>
                )}
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    {attempts}
                  </div>
                  <div className="text-sm text-gray-400">Lần thử</div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    {maxAttempts - attempts}
                  </div>
                  <div className="text-sm text-gray-400">Còn lại</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - History */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="text-2xl">📝</span>
                Lịch sử đoán
              </h3>
              
              {history.length === 0 ? (
                <p className="text-gray-400 text-center py-8">Chưa có lần đoán nào...</p>
              ) : (
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {history.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-white/5 rounded-xl p-4 transition-all duration-300 hover:bg-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-sm font-bold text-black">
                          {index + 1}
                        </span>
                        <span className="text-white font-medium text-lg">
                          {item.guess}
                        </span>
                      </div>
                      <span className="text-gray-300 text-sm">
                        {item.result}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Tips Card */}
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                💡 Mẹo chơi
              </h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Bắt đầu với số 50 để chia đôi khoảng tìm kiếm</li>
                <li>• Sử dụng phương pháp tìm kiếm nhị phân</li>
                <li>• Ghi nhớ các gợi ý trước đó</li>
                <li>• Bạn có {maxAttempts} lần thử - hãy sử dụng khôn ngoan!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
