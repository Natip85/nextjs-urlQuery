import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Link from "next/link";
import SearchInput from "./SearchInput";

interface SearchMenuProps {
  searchParams: { tab?: string; title?: string };
}

const SearchMenu = ({ searchParams }: SearchMenuProps) => {
  let currentTab = searchParams.tab ?? "gallery";
  const title = searchParams.title;
  if (currentTab !== "messages" && currentTab !== "settings") {
    currentTab = "gallery";
  }
  return (
    <div>
      <SearchInput />
      <Tabs defaultValue={currentTab}>
        <TabsList className="w-full">
          <TabsTrigger value="gallery" className="w-full" asChild>
            <Link href={{ query: { ...searchParams, tab: "gallery" } }}>
              Gallery
            </Link>
          </TabsTrigger>
          <TabsTrigger value="messages" className="w-full" asChild>
            <Link href={{ query: { ...searchParams, tab: "messages" } }}>
              Messages
            </Link>
          </TabsTrigger>
          <TabsTrigger value="settings" className="w-full" asChild>
            <Link href={{ query: { ...searchParams, tab: "settings" } }}>
              Settings
            </Link>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="gallery">
          <h2 className="text-center text-2xl">Gallery {title}</h2>
        </TabsContent>
        <TabsContent value="messages">
          <h2 className="text-center text-2xl">Messages {title}</h2>
        </TabsContent>
        <TabsContent value="settings">
          <h2 className="text-center text-2xl">Settings {title}</h2>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SearchMenu;
