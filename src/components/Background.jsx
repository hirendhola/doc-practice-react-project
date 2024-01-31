import React from "react";

function Background() {
  return (
    <>
      <section className="fixed z-[2] h-screen w-screen">
        <nav className="flex w-screen justify-center text-zinc-500 py-10 text-xl pt-20 font-semibold">
          Document
        </nav>
        <h1 className=" absolute text-[14vw] leadig-none top-1/2 left-1/2  -translate-x-[50%]  -translate-y-[50%] tracking-tighter font-semibold text-zinc-900">
          Docs.
        </h1>
      </section>
    </>
  );
}

export default Background;
