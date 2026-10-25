"use client";
import Navbar from "@/components/Navbar";
import DrinkCard from "@/components/DrinkCard";
import Footer from "@/components/Footer";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const drinks = [
              {
              image:"/cups/espresso.png",
            name:"Espresso",
            price:"1.400BD",
              },
              {
                image:"/cups/americano.png",
            name:"Americano",
            price:"1.800BD",
              },
              {
                image:"/cups/latte.png",
            name:"Latte",
            price:"2.000BD",
              },
              {
                image:"/cups/cappuccino.png",
            name:"Cappuccino",
            price:"2.000BD",
              },
              {
                image:"/cups/cortado.png",
            name:"Cortado",
            price:"1.700BD",
              },
              {
                image:"/cups/flat-white.png",
            name:"Flat White",
            price:"2.000BD",
              },
              {
                image:"/cups/mocha.png",
            name:"Mocha",
            price:"2.000BD",
              },
              {
                image:"/cups/matcha.png",
            name:"Matcha",
            price:"2.200BD",
              },
              {
                image:"/cups/iced-alfredo.png",
            name:"Iced Espresso Alfredo",
            price:"1.700BD",
              },
              {
                image:"/cups/iced-americano.png",
            name:"Iced Americano",
            price:"1.800BD",
              },
              {
                image:"/cups/iced-latte.png",
            name:"Iced Latte",
            price:"2.200BD",
              },
              {
                image:"/cups/iced-cappuccino.png",
            name:"Iced Cappuccino",
            price:"2.200BD",
              },
              {
                image:"/cups/iced-mocha.png",
            name:"Iced Mocha",
            price:"2.200BD",
              },
              {
                image:"/cups/iced-matcha.png",
            name:"Iced Matcha",
            price:"2.500BD",
              },
              {
                image:"/cups/v60.png",
            name:"V60",
            price:"2.500BD",
              },
              {
                image:"/cups/cold-brew.png",
            name:"Cold Brew",
            price:"2.500BD",
              },
              {
                image:"/cups/water.png",
            name:"Water",
            price:"0.700BD",
              },
              {
                image:"/cups/sparkling-water.png",
            name:"Sparkling Water",
            price:"1.000BD",
              },
            ];

export default function Home() {
  const cups = [
    "/cups/iced-latte.png",
    "/cups/iced-matcha.png",
    "/cups/americano.png",
  ];

  const [rotation, setRotation] = useState(0);

  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLParagraphElement>(null);
  const cupsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setRotation((current) => (current + 1) % 3);
    }, 3000);

    return () => clearInterval(timer);
  },[]);

  useEffect(() => {
  const elements = [
    subtitleRef.current,
    headingRef.current,
    cupsRef.current,
    ctaRef.current,
  ];

  if (elements.some((element) => !element)) return;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.65,
        ease: "power3.out",
      },
    });

    tl.from(subtitleRef.current, {
      opacity: 0,
      y: 20,
    })
      .from(headingRef.current, {
        opacity: 0,
        y: 30,
      }, "-=0.35")
      .from(cupsRef.current, {
        opacity: 0,
        y: 35,
      }, "-=0.3")
      .from(ctaRef.current, {
        opacity: 0,
        y: 20,
      }, "-=0.3");
  });

  return () => ctx.revert();
}, []);

    useEffect(() => {
  const menu = menuRef.current;
  if (!menu) return;

  const ctx = gsap.context(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const cards = Array.from(menu.children) as HTMLElement[];

    // Group cards based on their actual row positions
    const rows: HTMLElement[][] = [];

    cards.forEach((card) => {
      const top = card.offsetTop;

      const row = rows.find(
        (row) => Math.abs(row[0].offsetTop - top) < 5
      );

      if (row) {
        row.push(card);
      } else {
        rows.push([card]);
      }
    });

    // Animate each row when it enters the viewport
   rows.forEach((row) => {
  const firstCard = row[0];

  gsap.from(row, {
    opacity: 0,
    y: 35,
    duration: 0.7,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
      trigger: firstCard,
      start: "top 90%",
      once: true,
    },
  });
});
  }, menu);

  return () => ctx.revert();
}, []);

useEffect(() => {
  const about = aboutRef.current;
  const contact = contactRef.current;

  if (!about || !contact) return;

  const ctx = gsap.context(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // About
    const aboutHeading = about.querySelector("h2");
    const aboutContent = about.querySelectorAll("h3, p");

    gsap.from(aboutHeading, {
      opacity: 0,
      y: 25,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: about,
        start: "top 80%",
        once: true,
      },
    });

    gsap.from(aboutContent, {
      opacity: 0,
      x: (index) => (index === 0 ? -30 : 30),
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: about,
        start: "top 75%",
        once: true,
      },
    });

    // Contact
    const contactHeading = contact.querySelector("h2");
    const contactColumns = contact.querySelectorAll(
      ":scope > div > div"
    );

    gsap.from(contactHeading, {
      opacity: 0,
      y: 25,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: contact,
        start: "top 80%",
        once: true,
      },
    });

    gsap.from(contactColumns, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: contact,
        start: "top 75%",
        once: true,
      },
    });
  });

  return () => ctx.revert();
}, []);

  return (
    <>
      <main className="min-h-screen">
        {/* Navigation */}
          <Navbar />

        {/* Hero */}
        <section id="hero" className="flex flex-col items-center justify-center px-6 py-16 text-center md:min-h-[85svh] md:py-6">
          <p ref={subtitleRef} className="mb-5 whitespace-nowrap text-[10px] uppercase tracking-[0.08em] sm:text-xs sm:tracking-[0.2em] lg:text-sm lg:tracking-[0.25em]">Specialty coffee, made for your everyday.</p>
          <p ref={headingRef} className="font-display text-4xl min-[390px]:text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block md:inline">Good coffee.</span>{" "}
            <span className="block md:inline">Better days.</span>
            </p>

          {/* cups */}
          <div ref={cupsRef} className="relative mt-12 h-[200px] w-[300px] max-w-full md:mt-24 md:h-[320px] md:w-[570px]">
            <img src={cups[0]} alt="Iced latte" width="270" height="370" 
            className={`absolute bottom-0 w-[130px] h-auto md:w-[270px] transition-all duration-1000 ease-in-out ${
              rotation === 0
              ? "left-1/2 z-10 -translate-x-1/2 scale-100"
              : rotation === 1
              ? "right-0 scale-75"
              : "left-0 scale-75"
            } `} />
            <img src={cups[1]} alt="Iced matcha" width="270" height="370" 
            className={`absolute bottom-0 w-[130px] h-auto md:w-[270px] transition-all duration-1000 ease-in-out ${
              rotation === 0
              ? "left-0 scale-75"
              : rotation === 1
              ? "left-1/2 z-10 -translate-x-1/2 scale-100"
              : "right-0 scale-75"
            } `} />
            <img src={cups[2]} alt="Americano" width="270" height="370" 
            className={`absolute bottom-0 w-[130px] h-auto md:w-[270px] transition-all duration-1000 ease-in-out ${
              rotation === 0
              ? "right-0 scale-75"
              : rotation === 1
              ? "left-0 scale-75"
              : "left-1/2 z-10 -translate-x-1/2 scale-100"
               } `} />
          </div>

          {/* CTA */}
          <div ref={ctaRef} className="group relative mt-5 w-fit">
              <div className="pointer-events-none absolute -inset-2 -z-10 overflow-hidden rounded-full opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-80">
                <div className="absolute -inset-4 animate-[steam_3s_ease-in-out_infinite] rounded-full bg-[var(--accent)] opacity-70" />
                <div className="absolute -inset-3 animate-[steam_4s_ease-in-out_infinite_reverse] rounded-full bg-[var(--accent)] opacity-70" />
              </div>
              <button 
              onClick={() =>
                document.getElementById("menu")?.scrollIntoView({
                behavior: "smooth",
              })
          }
          className="relative rounded-full bg-[var(--accent)] px-7 py-3 text-[var(--violet)] font-medium transition-all duration-300 hover:scale-105"
          >
            Explore the menu
  
          </button>
          </div>

        </section>

        {/* Menu */}
        <section id="menu" className="px-6 py-24">
          <h2 className="font-display text-5xl font-bold">
            Menu
          </h2>
          
          {/* cards */}
          <div ref={menuRef} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {drinks.map((drink) => (
              <DrinkCard 
              key={drink.name}
              image={drink.image}
              name={drink.name}
              price={drink.price}
              />
            ))}
          </div>
          
        </section>

        {/* About */}
        <section ref={aboutRef} id="about" className="px-6 py-24">
            <h2 className="font-display text-5xl font-bold">
            About
          </h2>
          <div className="mx-auto max-w-6xl mt-12 grid gap-12 md:grid-cols-2 md:items-center">
            <h3 className="text-3xl font-semibold leading-tight md:text-4xl">
              Good coffee.
              <br />
              Better moments.
            </h3>
            <p className="max-w-lg text-base leading-7 opacity-70">
            A little café made for slow mornings, late conversations, and
            everything in between. We keep things simple: carefully made coffee,
            cozy corners, and something good waiting for you.
            </p>
          </div>
          
        </section>

        {/* Contact */}
        <section ref={contactRef} id="contact" className="px-6 py-24">
          <h2 className="font-display text-5xl font-bold">
            Contact
          </h2>
          
          <div className="mx-auto max-w-6xl mt-12 grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em]">
                Get in touch
                </p>
                <p className="mb-10 text-sm font-bold md:text-2xl">
                  Come say hello.
                </p>
              <p className="text-base leading-7 opacity-70">
                Good coffee is better when shared. Find us, drop us a message, or come by for a cup.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-wider opacity-50">
                  Location
                </p>
                <p className="mt-1">Manama, Bahrain</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider opacity-50">
                  Opening hours
                </p>
                <p className="mt-1">Daily · 8 AM — 11 PM</p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider opacity-50">
                  Email
                </p>
                <p className="mt-1">hello@cafe.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </>
  );
}
