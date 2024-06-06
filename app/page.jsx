import Image from "next/image";
import styles from "./page.module.css";
import prisma from "@/lib/prisma";
import Post from "@/components/Post";
import Link from "next/link";

async function getPosts(){
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: {name: true}
      }
    }
  })
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  
  return (
    <main className={styles.main}>
      <Link href={'/add-post'}>Add new post</Link>
      <h1>Feed</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
}
