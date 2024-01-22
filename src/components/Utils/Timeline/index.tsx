import TimelineItem, { TimelineItemType } from "./TimelineItem";

import classes from "./Timeline.module.css";

type Props = {
  items: TimelineItemType[];
};

export default function Timeline({ items }: Props) {
  return (
    <ul className={classes.timeline}>
      {items.map((item, idx) => (
        <TimelineItem
          key={idx}
          item={item}
          position={window.innerWidth > 720 && idx % 2 === 0 ? "right" : "left"}
        />
      ))}
    </ul>
  );
}
