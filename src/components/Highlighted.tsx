import { Fragment } from "react";

/**
 * Renders a string with ==marked== keywords as a gold highlighter swipe.
 * Edit the copy in content/data.json — wrap any words you want to emphasize in
 * double-equals, e.g. "a ==National Champion== in singles".
 */
export function Highlighted({ text }: { text: string }) {
  const parts = text.split(/==(.+?)==/g); // odd indices are the highlighted bits
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="mark">
            {part}
          </mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}
