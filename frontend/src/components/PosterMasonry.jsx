import React, { useEffect, useMemo, useState } from "react";
import { posters } from "../constants/posters";

function getColumnCount(width) {
  if (width <= 600) return 2;
  if (width <= 900) return 3;
  if (width <= 1200) return 5;
  return 7;
}

function buildColumns(items, columnCount) {
  return Array.from({ length: columnCount }, (_, col) => {
    const column = [];
    for (let i = col; i < items.length; i += columnCount) {
      column.push({ poster: items[i], index: i });
    }
    return column;
  });
}

function MasonryCard({ poster, index }) {
  return (
    <article
      className={`masonry-card masonry-card--${poster.size} masonry-card--${poster.accent} reveal`}
      style={{ "--reveal-delay": `${Math.min(index * 40, 400)}ms` }}
    >
      <div className="masonry-card__media">
        <img src={poster.src} alt={poster.title} loading="lazy" decoding="async" />
        <div className="masonry-card__sheen" aria-hidden="true" />
        <div className="masonry-card__vignette" aria-hidden="true" />
      </div>
      <div className="masonry-card__meta">
        <span className="masonry-card__tag">{poster.tag}</span>
        <h3 className="masonry-card__title">{poster.title}</h3>
      </div>
    </article>
  );
}

export default function PosterMasonry() {
  const [columnCount, setColumnCount] = useState(() =>
    typeof window !== "undefined" ? getColumnCount(window.innerWidth) : 7
  );

  useEffect(() => {
    const onResize = () => setColumnCount(getColumnCount(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const columns = useMemo(() => buildColumns(posters, columnCount), [columnCount]);
  const staggered = columnCount === 7;

  return (
    <div className="poster-masonry-stage">
      <div
        className={`poster-masonry ${staggered ? "poster-masonry--staggered" : ""}`}
        role="list"
      >
        {columns.map((column, colIdx) => (
          <div
            key={colIdx}
            className={[
              "poster-column",
              staggered && (colIdx % 2 === 0 ? "poster-column--raise" : "poster-column--lower"),
            ]
              .filter(Boolean)
              .join(" ")}
            role="presentation"
          >
            {column.map(({ poster, index }) => (
              <div key={poster.title} role="listitem">
                <MasonryCard poster={poster} index={index} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
