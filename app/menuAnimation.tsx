"use client";
import { useState, useEffect, useRef } from "react";

export default function MenuButton() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fechar ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="
          text-2xl p-2 rounded-xl 
          transition-all 
          hover:bg-neutral-300 dark:hover:bg-neutral-700
          active:scale-95
          select-none
        "
      >
        ⋮
      </button>

      {menuOpen && (
        <div
          className="
            absolute right-0 mt-2 
            bg-white dark:bg-neutral-900 
            border border-neutral-300 dark:border-neutral-700 
            shadow-lg rounded-xl p-2 w-40
            animate-fade 
          "
        >
          <button className="block w-full text-left px-3 py-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md">
            Opção 1
          </button>
          <button className="block w-full text-left px-3 py-2 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md">
            Opção 2
          </button>
        </div>
      )}
    </div>
  );
}
