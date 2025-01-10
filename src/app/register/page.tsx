export default function RegisterPage() {
    
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="rounded-xl bg-slate-700 p-8 shadow-lg w-full max-w-sm">
        <h1 className="text-4xl font-bold text-white mb-6 text-center uppercase">
          Registration Form
        </h1>
        <form action="" className="space-y-4">
          {/* Username Field */}
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
              className="w-full px-4 py-2 bg-slate-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>

          {/* Password Field */}
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
              className="w-full px-4 py-2 bg-slate-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
