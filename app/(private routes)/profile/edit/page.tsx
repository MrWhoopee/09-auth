"use client";
import Image from "next/image";
import css from "./EditProfilePage.module.css";
import { useAuthStore } from "@/lib/store/authStore";
import { updateMe } from "@/lib/api/clientApi";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

export default function EditProfilePage() {
  const { user, setUser } = useAuthStore();

  const router = useRouter();
  const [error, setError] = useState("");
  const handleSubmit = async (formData: FormData) => {
    const username = formData.get("username") as string;
    try {
      if (user) {
        const updateUser = await updateMe({ email: user.email, username });
        setUser(updateUser);
      }
      router.push("/profile");
    } catch (err) {
      console.log(err);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Registration failed");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };
  if (!user) {
    return null;
  }
  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <h1 className={css.formTitle}>Edit Profile</h1>

        <Image
          src={user.avatar}
          alt="User Avatar"
          width={120}
          height={120}
          className={css.avatar}
        />

        <form className={css.profileInfo} action={handleSubmit}>
          <div className={css.usernameWrapper}>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              name="username"
              defaultValue={user?.username}
              className={css.input}
            />
            {error && <p>Some troubles with server or with u</p>}
          </div>

          <p>Email: user_email@example.com</p>

          <div className={css.actions}>
            <button type="submit" className={css.saveButton}>
              Save
            </button>
            <button
              type="button"
              className={css.cancelButton}
              onClick={() => router.back()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
