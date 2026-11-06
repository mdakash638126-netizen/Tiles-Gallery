
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const MyProfile = () => {
  const router = useRouter();

  const { data: session, isPending, error } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/login");
    }
  }, [isPending, session, router]);

  if (isPending) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <p className="text-lg font-medium">Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <p className="text-red-500">Failed to load profile.</p>
      </div>
    );
  }

  if (!session?.user) return null;

  const user = session.user;

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl bg-white p-6 shadow-md sm:p-10">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              My Profile
            </h1>
            <p className="mt-2 text-gray-500">
              Manage your personal information
            </p>
          </div>

          <div className="mb-8 flex flex-col items-center">
            {user.image ? (
              <Image
                src={user.image}
                alt={user.name || "Profile"}
                width={120}
                height={120}
                unoptimized
                className="h-28 w-28 rounded-full border-4 border-gray-100 object-cover"
              />
            ) : (
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-purple-100 text-4xl font-bold text-purple-700">
                {user.name?.charAt(0)?.toUpperCase() || "U"}
              </div>
            )}

            <h2 className="mt-4 text-xl font-semibold text-gray-900">
              {user.name || "No name available"}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {user.email}
            </p>
          </div>

          <div className="space-y-5 rounded-xl bg-gray-50 p-5">
            <div>
              <p className="text-sm font-medium text-gray-500">Full Name</p>
              <p className="mt-1 font-semibold text-gray-900">
                {user.name || "Not provided"}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500">Email Address</p>
              <p className="mt-1 font-semibold text-gray-900">
                {user.email}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-500">Email Verified</p>
              <p className="mt-1 font-semibold text-gray-900">
                {user.emailVerified ? "Verified" : "Not verified"}
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/update-profile"
              className="inline-flex rounded-lg bg-purple-600 px-8 py-3 font-semibold text-white transition hover:bg-purple-700"
            >
              Update Information
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyProfile;
