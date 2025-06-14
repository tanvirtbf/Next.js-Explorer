import React from "react";

const Loading = () => {
  return (
    <div>
      <h1>Practice Page!</h1>
      <div className="bg-black min-h-screen p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="shimmer-card space-y-3">
            <div className="w-full h-48 bg-gray-800 rounded-lg shimmer" />
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-800 shimmer" />
              <div className="flex flex-col flex-1 gap-2">
                <div className="w-3/4 h-4 bg-gray-800 rounded shimmer" />
                <div className="w-1/2 h-4 bg-gray-800 rounded shimmer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
