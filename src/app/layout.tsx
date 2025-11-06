'use client';
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "./lib/firebase";


export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;}>
) {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert("Logged out successfully!");
            router.push('/login'); // redirect to login after logout
        } catch (error) {
            alert(error);
            
        }
    };
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="flex flex-col justify-center items-center">
        <Link href="/login" className=" text-3xl text-blue-500 underline">Login</Link>
        <Link href="/register" className="text-3xl text-blue-500 underline">register</Link>
        <h1 className="text-xl font-bold mb-4 text-white">Logout</h1>
            <button
                className=" border border-red-500 text-white p-2 rounded-lg hover:scale-105"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
        {children}
      </body>
    </html>
  );
}
