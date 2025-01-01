import Image from "next/image";
import { SignInAction } from "../utils/actions";

function page() {
  return (
    <div className="flex flex-col gap-10 mt-[10rem] items-center h-screen ">
      <h2 className="text-3xl font-semibold">
        Sign in to access your upload area
      </h2>
      <form action={SignInAction}>
        <button className=" flex bg-blue-500 p-5 w-15 cursor-pointer rounded-md gap-3 font-medium px-10">
          <Image
            src="https://authjs.dev/img/providers/google.svg"
            alt="Google logo"
            height="24"
            width="24"
          />
          <h2 className="border-slate-500 border-solid  text-white  ">
            Sign in with Google
          </h2>
        </button>
      </form>
    </div>
  );
}

export default page;
