'use client';
import React from "react";


export default function logout() {
   
    function handleLogout(event: React.MouseEvent<HTMLButtonElement>): void {
        event.preventDefault();
        // TODO: implement sign-out logic here
        console.log('Logout clicked');
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900"> 
            <h1 className="text-xl font-bold mb-4 text-white">Logout</h1>
            <button
                className=" border border-red-500 text-white p-2 rounded-lg hover:scale-105"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
        
    );
}