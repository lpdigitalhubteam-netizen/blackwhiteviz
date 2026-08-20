import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "About",
};

export default function StudioPage() {
  redirect("/about");
}
