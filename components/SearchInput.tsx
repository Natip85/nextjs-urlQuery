"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "./ui/input";
import { useDebounceCallback } from "usehooks-ts";

const SearchInput = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const title = searchParams.get("title") ?? "";
  const handleSearchTitle = (value: string) => {
    const sp = new URLSearchParams(searchParams);
    if (value.trim() === "") {
      sp.delete("title");
    } else {
      sp.set("title", value);
    }
    router.push(`${pathname}?${sp.toString()}`);
  };
  const debounce = useDebounceCallback(handleSearchTitle, 1000);
  return (
    <Input
      placeholder="Search here"
      onChange={(e) => debounce(e.target.value)}
      defaultValue={title}
    />
  );
};

export default SearchInput;
