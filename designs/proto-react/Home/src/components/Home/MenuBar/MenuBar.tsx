import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse1_StateDefault } from '../Ellipse1_StateDefault/Ellipse1_StateDefault';
import classes from './MenuBar.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    ellipse3?: ReactNode;
  };
}
/* @figmaId 5:537 */
export const MenuBar: FC<Props> = memo(function MenuBar(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Ellipse1_StateDefault />
      <Ellipse1_StateDefault />
      {props.swap?.ellipse3 || <Ellipse1_StateDefault />}
      <Ellipse1_StateDefault />
      <Ellipse1_StateDefault />
    </div>
  );
});
