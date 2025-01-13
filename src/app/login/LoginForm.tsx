"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface loginFormProps {
  loginFormSubmitFn: (username: string, password: string) => Promise<string | null>;
}

export default function LoginForm({ loginFormSubmitFn }: loginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  // const [success, setSucess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault();

    try {
      const userId = await loginFormSubmitFn(username, password);
      if (userId) {
        localStorage.setItem('userId', userId);
        localStorage.setItem('username', username);
      };
      router.refresh();
      router.push("/");
    } catch (err: unknown) {
      setError(err.message);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 bg-slate-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-slate-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all"
        >
          Login
        </button>
      </form>
      {error && (
        <div className="max-w-md mx-auto mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Error</h2>
          <p>{error}</p>
          <button
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            onClick={() => setError(null)}
          >
            Dismiss
          </button>
        </div>
      )}
    </>
  );
}
