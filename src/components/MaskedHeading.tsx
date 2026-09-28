import * as React from "react";

interface MaskedHeadingProps {
  text: string;
  maskChar?: string;
  reveal?: number;
}

export const MaskedHeading: React.FC<MaskedHeadingProps> = ({
  text,
  maskChar = "●",
  reveal = text.length,
}) => {
  const maskedText = text.slice(0, reveal).replace(
    /./g,
    maskChar
  ) + text.slice(reveal);

  return <h2 className="text-3xl font-extended">{maskedText}</h2>;
};