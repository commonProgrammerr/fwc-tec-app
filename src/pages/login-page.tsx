import React from "react";
import { useHistory } from "react-router-dom";
import Input from "../components/input";

import restaurantIcon from '../assets/restaurant-dark.svg'

function LoginPage() {
  const { push: goTo } = useHistory()

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-indigo-300">
      <form className="flex flex-col pt-10 p-6 bg-white w-1/4 rounded shadow-md" onSubmit={() => goTo('/pedidos')} >
        <div className="self-center w-full flex flex-col items-center">
          <img src={restaurantIcon} className="w-20" />
          <span className="text-gray-600 text-2xl font-semibold">Login</span>
        </div>

        <Input label="email" />
        <Input label="password" type="password" />
        <section className="flex items-center">
          <input className="text-gray-700 mr-2 border" type="checkbox" />
          <span className="text-gray-600 text-xs font-medium">Lembre de mim</span>
        </section>
        <button type="submit" className="mt-10 bg-blue-500 py-2 px-4 rounded text-white font-medium hover:bg-blue-700 delay-200">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
