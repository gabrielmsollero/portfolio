import { ReactNode } from "react";

import WavesSpacer from "../Spacers/WavesSpacer";

type Props = {
  hasTopSpacer?: boolean;
  hasBottomSpacer?: boolean;
  colors: [string, string?, string?, string?];
  className?: string;
  children?: ReactNode;
};

export default function WaveSpacedSection({
  hasTopSpacer = true,
  hasBottomSpacer = true,
  colors,
  className = "",
  children = <></>,
}: Props) {
  return (
    <>
      {hasTopSpacer && <WavesSpacer colors={colors} />}
      <section
        style={{ color: "#F9F9F9", backgroundColor: colors[colors.length - 1], margin: "auto" }}
        className={className}
      >
        {children}
      </section>
      {hasBottomSpacer && <WavesSpacer colors={colors} flipped />}
    </>
  );
}
