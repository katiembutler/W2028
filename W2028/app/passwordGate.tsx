"use client";

import { useEffect, useState } from "react";

const PASSWORD = "married2028";

export default function PasswordGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const isUnlocked = localStorage.getItem("wedding-unlocked");

    if (isUnlocked === "true") {
      setUnlocked(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === PASSWORD) {
      setHasError(false);
      setUnlocked(true);
      localStorage.setItem("wedding-unlocked", "true");
    } else {
      setHasError(true);
      setPassword("");
    }
  };

  if (!unlocked) {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="mb-8 text-center text-4xl font-c_g text-sage">
          We're Getting Married!
        </h1>

        <div className="w-full max-w-md rounded-lg border border-light-beige bg-white p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="text-center font-semibold text-sage">
              Enter the password to visit our wedding website:
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setHasError(false);
              }}
              placeholder="Password"
              className="w-full rounded-md border border-sage/30 px-4 py-3 text-gray-900 outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
            />

            <button
              type="submit"
              className="w-full rounded-md bg-sage px-4 py-3 font-semibold text-white transition hover:bg-light-sage focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2"
            >
              Enter
            </button>

            {hasError && (
              <p className="mt-2 text-center text-sm font-bold text-red-500">
                Incorrect password. Please check your spelling.
              </p>
            )}
          </form>
        </div>
      </main>
    );
  }

  return <>{children}</>;
}