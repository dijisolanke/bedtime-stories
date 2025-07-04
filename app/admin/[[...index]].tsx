"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../sanity/stories-for-mo/sanity.config";

export default function AdminPage() {
  return <NextStudio config={config} />;
}
