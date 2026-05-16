import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  github?: string;
  image?: string;
  featured?: boolean;
  content?: string;
}

function getProjectsDirectory(): string {
  return path.join(process.cwd(), "content/projects");
}

export function getProjects(): Project[] {
  const dir = getProjectsDirectory();

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  return files
    .map((file) => {
      const filePath = path.join(dir, file);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      return { ...data, content } as Project;
    })
    .filter((p) => p.title);
}