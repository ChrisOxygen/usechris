import type { ExperienceEntry } from "@/shared/constants/experience";

type ExperienceTabsProps = {
  entries: ExperienceEntry[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export default function ExperienceTabs({
  entries,
  selectedId,
  onSelect,
}: ExperienceTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {entries.map((entry) => (
        <button
          key={entry.id}
          onClick={() => onSelect(entry.id)}
          className={[
            "px-4 py-2 rounded font-source-code-pro text-sm transition-colors duration-150",
            selectedId === entry.id
              ? "bg-accent/10 text-accent border border-accent/40"
              : "bg-surface text-muted border border-surface hover:text-foreground hover:border-foreground/20",
          ].join(" ")}
        >
          {entry.company}
        </button>
      ))}
    </div>
  );
}
