import React from "react";
import { useHistory } from "react-router-dom";
import Input from "../components/input";

function LoginPage() {
  const { push: goTo } = useHistory()

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-300">
      <form className="flex flex-col pt-10 p-6 bg-white w-1/4 rounded shadow-md" onSubmit={() => goTo('/pedidos')} >
        <Input label="email" />
        <Input label="password" type="password" />
        <section className="flex items-center">
          <span className="text-xs font-medium">Lembre de mim</span>
        </section>
        <button type="submit" className="mt-10 bg-blue-500 py-2 px-4 rounded text-white font-medium hover:bg-blue-700 delay-200">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
