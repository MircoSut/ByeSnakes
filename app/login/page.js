import Link from "next/link";

export default function Login() {
  return (
    <div className="h-screen flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 bg-gray-50 shadow-lg m-4 p-6 text-black">
      <h2 className="text-2xl font-bold text-green-500">Ops...</h2>
      <p className="p-4 text-lg">Work in progress xD</p>
      <p className="p-4 text-lg">
        I want to make a feature that save and compare the list before and the
        latest one to know who recently stopped to follow you
      </p>

      <button className="bg-green-500 text-lg text-white hover:font-bold p-2 rounded-3xl hover:shadow-md hover:shadow-gray-300 px-4">
        <Link href={"/"}>Home</Link>
      </button>
    </div>
  );
}
