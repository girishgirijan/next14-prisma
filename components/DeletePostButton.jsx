"use client";

import { useRouter } from "next/navigation";
function DeletePostButton({ postId }) {
  const router = useRouter();
  const handleDelete = async () => {
    try {
      await fetch(`/api/post/${postId}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return <button onClick={handleDelete}>Delete</button>;
}

export default DeletePostButton;
