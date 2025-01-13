import RegisterForm from "./RegisterForm";
import { createUser } from "@/lib/helper/user/createUser";

export default function RegisterPage() {

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="rounded-xl bg-slate-700 p-8 shadow-lg w-full max-w-sm">
        <h1 className="text-4xl font-bold text-white mb-6 text-center uppercase">
          Registration Form
        </h1>

        <RegisterForm registerFormSubmitFn={createUser} />
      </div>
    </div>
  );
}
