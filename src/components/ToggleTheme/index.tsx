"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function ToggleTheme() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex items-center justify-center border border-slate-400 rounded-full p-1" >
            <button
                className={`flex p-2 w-9 h-9 items-center justify-center rounded-full ${theme === 'light' ? 'bg-zinc-600' : ''}`}
                onClick={() => setTheme('light')}
            >
                <i className="bi bi-sun"></i>
            </button>
            <button
                className={`flex p-2 w-9 h-9 items-center justify-center rounded-full ${theme === 'system' ? 'bg-zinc-600' : ''}`}
                onClick={() => setTheme('system')}
            >
                <i className="bi bi-display"></i>
            </button>
            <button
                className={`flex p-2 w-9 h-9 items-center justify-center rounded-full ${theme === 'dark' ? 'bg-zinc-600' : ''}`}
                onClick={() => setTheme('dark')}
            >
                <i className="bi bi-moon-stars"></i>
            </button>
        </div>
    );
}
