import type { Metadata } from "next";
import { ContactChannelCard } from "../components/contact-channel-card";
import { SocialGlassNavbar } from "../components/social-glass-navbar";

export const metadata: Metadata = {
  title: "Contato | Eduardo Porangaba",
  description: "Entre em contato com Eduardo Porangaba por WhatsApp ou e-mail.",
};

const contactChannels = [
  {
    accent: "whatsapp",
    description: "Para assuntos rápidos e uma conversa mais direta.",
    href: "https://wa.me/5547992207139",
    iconSrc: "/whatsapp.svg",
    label: "Conversa rápida",
    name: "WhatsApp",
    newTab: true,
  },
  {
    accent: "email",
    description: "Ideal para propostas, projetos e mensagens detalhadas.",
    href: "mailto:eduardoporangaba1@gmail.com",
    iconSrc: "/mail.svg",
    label: "Mensagem detalhada",
    name: "E-mail",
    newTab: false,
  },
] as const;

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-mono tracking-wide text-zinc-100">
      <SocialGlassNavbar />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-4 pb-14 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-purple-300/20 bg-purple-400/10 px-4 py-2 text-xs font-semibold tracking-normal text-purple-200 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] sm:text-sm">
            Contato &amp; colaboração
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Entre em contato
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 tracking-normal text-zinc-400 sm:text-lg sm:leading-8">
            Tem um projeto, uma oportunidade ou quer conversar sobre tecnologia?
            Escolha o canal que fizer mais sentido para você.
          </p>
        </header>

        <section
          aria-label="Canais de contato"
          className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-2 md:gap-6"
        >
          {contactChannels.map((channel) => (
            <ContactChannelCard key={channel.name} {...channel} />
          ))}
        </section>
      </main>
    </div>
  );
}
