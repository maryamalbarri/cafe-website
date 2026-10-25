"use client";

export default function Footer(){
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return(
        <footer className="bg-[var(--violet)] px-6 py-12 text-[var(--accent)]">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="font-display text-3xl font-bold">
                Café
              </p>
              <p className="mt-2 max-w-xs text-sm text-[var(--accent)]/70">
                Good coffee. Better days.
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
                <button 
                onClick={() => scrollToSection("hero")}
                className="transition-opacity hover:opacity-60"
                >
                    Home
                </button>
              <button 
              onClick={() => scrollToSection("menu")}
               className="transition-opacity hover:opacity-60">
                Menu
              </button>
              <button 
              onClick={() => scrollToSection("about")}
              className="transition-opacity hover:opacity-60"> 
                About
              </button>
              <button 
              onClick={() => scrollToSection("contact")}
              className="transition-opacity hover:opacity-60">
                Contact
              </button>
            </nav>
          </div>

          <div className="mt-10 border-t border-[var(--accent)]/20 pt-6">
            <div className="flex flex-col gap-2 text-sm text-[var(--accent)]/60 md:flex-row md:items-center md:justify-between">
              <p>© 2026 Café. All rights reserved.</p>
              <span className="opacity-60">Instagram</span>
            </div>
          </div>
        </div>        
      </footer>
    );
}