import matter from "gray-matter";
import fs from "fs";
import path from "path";

export const getPath = (folder) => {
  return path.join(process.cwd(), `/${folder}`); // Get full path 
}

export const getFileContent = (filename, folder) => {
  const POSTS_PATH = getPath(folder)
  return fs.readFileSync(path.join(POSTS_PATH, filename), "utf8");
};

export const getSinglePost = (name, folder) => {
  const source = getFileContent(`${name}.md`, folder);
  const { data: frontmatter, content } = matter(source);
 
  return {
    frontmatter,
    content,
  };
};