import Image from "next/image";

const cardStyles = {
  whatsapp: {
    glow:
      "bg-[radial-gradient(circle_at_top_left,rgba(37,211,102,0.2),transparent_58%)]",
    icon: "bg-[#25d366] shadow-[0_12px_30px_rgba(37,211,102,0.22)]",
  },
  email: {
    glow:
      "bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.24),transparent_58%)]",
    icon:
      "bg-gradient-to-br from-purple-500 to-violet-700 shadow-[0_12px_30px_rgba(139,92,246,0.25)]",
  },
} as const;

type ContactChannelCardProps = {
  accent: keyof typeof cardStyles;
  description: string;
  href: string;
  iconSrc: string;
  label: string;
  name: string;
  newTab?: boolean;
};

export function ContactChannelCard({
  accent,
  description,
  href,
  iconSrc,
  label,
  name,
  newTab = false,
}: ContactChannelCardProps) {
  const styles = cardStyles[accent];

  return (
    <a
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className="group relative isolate min-h-64 overflow-hidden rounded-3xl border border-purple-200/15 bg-[#160d2b]/92 p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.06),0_24px_60px_rgba(7,2,18,0.28)] transition duration-300 hover:-translate-y-1 hover:border-purple-200/30 hover:bg-[#1d1037] focus-visible:-translate-y-1 focus-visible:border-purple-200/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-200/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#160d2b] motion-reduce:transform-none motion-reduce:transition-none sm:p-8"
    >
      <span
        aria-hidden="true"
        className={`absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none ${styles.glow}`}
      />

      <span
        className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-105 group-hover:rotate-2 group-focus-visible:scale-105 motion-reduce:transform-none motion-reduce:transition-none ${styles.icon}`}
      >
        <Image
          src={iconSrc}
          alt=""
          width={28}
          height={28}
          className={accent === "email" ? "invert" : undefined}
        />
      </span>

      <span className="block text-xl font-semibold tracking-normal text-white">
        {name}
      </span>
      <span className="mt-2 block text-sm font-medium tracking-normal text-purple-200/75">
        {label}
      </span>
      <span className="mt-3 block max-w-sm text-sm leading-6 tracking-normal text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300 group-focus-visible:text-zinc-300">
        {description}
      </span>
      <span className="mt-6 inline-flex border-b border-purple-200/20 pb-1 text-sm font-semibold tracking-normal text-zinc-100 transition duration-300 group-hover:border-purple-200/70 group-focus-visible:border-purple-200/70">
        Acessar contato
      </span>
    </a>
  );
}
