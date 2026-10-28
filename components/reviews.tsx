import { ArrowRight } from "@/components/icons";
import type { Dictionary } from "@/lib/dictionaries";
import { MAPS_SEARCH } from "@/lib/site";

function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M10 1.6 12.4 7l5.8.8-4.2 4 1 5.7L10 14.8 4.9 17.5l1-5.7L1.8 7.8 7.6 7 10 1.6Z"
      />
    </svg>
  );
}

function Stars({ value, label }: { value: number; label: string }) {
  return (
    <span className="inline-flex items-center gap-0.5" role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, index) => {
        const fill = Math.min(1, Math.max(0, value - index));
        return (
          <span key={index} className="relative h-4 w-4">
            <Star className="h-4 w-4 text-white/20" />
            <span
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star className="h-4 w-4 text-primary" />
            </span>
          </span>
        );
      })}
    </span>
  );
}

export function Reviews({ copy }: { copy: Dictionary["reviews"] }) {
  const scoreLabel = copy.starsLabel.replace("{n}", String(copy.scoreValue));

  return (
    <section id="resenas" className="relative py-24">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
              {copy.kicker}
            </div>
            <h2 className="font-display text-4xl leading-[1.05] font-extrabold text-white md:text-5xl lg:text-6xl">
              {copy.titleLead}
              <span className="text-metal">{copy.titleAccent}</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
              {copy.body}
            </p>
          </div>
          <div className="shrink-0">
            <div className="flex items-center gap-3">
              <div className="font-display text-5xl font-extrabold text-white">
                {copy.score}
              </div>
              <Stars value={copy.scoreValue} label={scoreLabel} />
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/45">
              {copy.scoreLabel}
            </div>
            <a
              href={MAPS_SEARCH}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-primary transition-all hover:gap-3"
            >
              {copy.googleLink}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((review) => (
            <figure
              key={review.name}
              className="surface-glass flex h-full flex-col rounded-2xl p-6"
            >
              <Stars
                value={review.rating}
                label={copy.starsLabel.replace("{n}", String(review.rating))}
              />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/75">
                <p>{review.text}</p>
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-display font-semibold text-white">{review.name}</div>
                {review.authorReviews ? (
                  <div className="mt-1 text-xs text-white/40">{review.authorReviews}</div>
                ) : null}
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">
                  {review.when}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
