'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const router = useRouter()

    const handleLogin = (e) => {
        e.preventDefault()
        if (username.trim()) {
            localStorage.setItem('username', username)
            router.push('/dashboard')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <form onSubmit={handleLogin} className="bg-gray-100 p-8 rounded shadow-md space-y-4">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <input
                    type="text"
                    placeholder="Enter your username"
                    className="w-full px-4 py-2 rounded border border-gray-300"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded">
                    Login
                </button>
            </form>
        </div>
    )
}
