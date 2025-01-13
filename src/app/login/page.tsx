import LoginForm from "./LoginForm";
import { authUser } from "@/lib/helper/user/authUser";

export default function LoginPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="rounded-xl bg-slate-700 p-8 shadow-lg w-full max-w-sm">
        <h1 className="text-4xl font-bold text-white mb-6 text-center uppercase">
          Login Form
        </h1>

        <LoginForm loginFormSubmitFn={authUser} />
      </div>
    </div>
  );
}
