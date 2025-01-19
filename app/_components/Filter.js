"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter({ filter }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  //fxn to filter with buttons
  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("category", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  const activeFilter = searchParams.get("category") ?? "all";
  return (
    <div className="flex justify-center items-center gap-5 mt-10 mb-10 flex-wrap">
      <Button
        filter="nature"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Nature
      </Button>
      <Button
        filter="animals"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Animals
      </Button>
      <Button
        filter="background"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Background
      </Button>
      <Button
        filter="people"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        People
      </Button>
      <Button
        filter="technology"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        Technology
      </Button>
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 rounded-md text-black text-xl font-semibold hover:bg-black hover:text-white transition duration-300 ${
        filter === activeFilter ? "bg-slate-950 text-white" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
