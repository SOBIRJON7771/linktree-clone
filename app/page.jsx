import Image from "next/image";

// pages/index.js
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Linktree Clone</h1>
        <p className="text-lg text-gray-600">Create and share all your links in one place</p>
        <div className="space-x-4">
          <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded">Login</a>
          <a href="/dashboard" className="bg-gray-800 text-white px-4 py-2 rounded">Go to Dashboard</a>
        </div>
      </div>
    </div>
  )
}
