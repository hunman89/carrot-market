import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className=" bg-slate-400 py-20 px-20 grid gap-10 min-h-screen">
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <span className=" font-semibold text-3xl">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex justify-between my-2 odd:bg-blue-50 even:bg-yellow-50"
            >
              <span className=" text-gray-500">Gray Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>
        <ul>
          {["a", "b", "c", ""].map((c, i) => (
            <li className="bg-red-500 py-2 empty:hidden" key={i}>
              {c}
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span className="">Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <button className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-1/2 mx-auto hover:bg-teal-500 active:bg-yellow-500 focus:bg-red-500">
          Checkout
        </button>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className=" bg-white rounded-3xl p-6 relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full group-hover:bg-yellow-500 transition-colors"></div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molly</span>
            <span className="test-sm text-gray-500">USA</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <div className="flex mb-5 justify-between items-center">
          <span>←</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="shadow-lg p-2 rounded-md">❤️</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="text-xl font-medium">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-4">
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium text-2xl">$450</span>
          <div className=" bg-blue-500 py-2 px-8 text-xs text-center text-white rounded-lg">
            Add to cart
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2 p-5 bg-lime-400 focus-within:bg-yellow-600">
        <input
          type="text"
          required
          placeholder="Username"
          className=" invalid:bg-red-500 valid:bg-teal-500 placeholder:text-white peer"
        />
        <span className="hidden peer-invalid:block peer-invalid:text-red-500">
          this input is invalid
        </span>
        <span className="hidden peer-hover:block peer-hover:text-indigo-500">
          hello
        </span>
        <input type="submit" value="Login" className="bg-white" />
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <details className=" select-none open:text-white open:bg-indigo-400">
          <summary className="cursor-pointer">What is my fav. food.</summary>
          <span>kimchi</span>
        </details>
        <ul className=" list-disc marker:text-teal-400">
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
        </ul>
        <input
          type="file"
          className=" file:transition-colors file:hover:text-purple-400 file:hover:bg-white file:hover:border-2 file:cursor-pointer file:border-0 file:rounded-md file:bg-indigo-500 file:px-5 file:text-white"
        ></input>
        <p className=" first-letter:text-7xl">fjdiaj fjdiafojdiaof djaifod</p>
      </div>
    </div>
  );
};

export default Home;
