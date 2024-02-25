import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Capa4Icon } from './Capa4Icon.js';
import classes from './IconsRedesEpisodios.module.css';

interface Props {
  className?: string;
  classes?: {
    capa4?: string;
    root?: string;
  };
  swap?: {
    capa4?: ReactNode;
  };
}
/* @figmaId 31:7671 */
export const IconsRedesEpisodios: FC<Props> = memo(function IconsRedesEpisodios(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.capa4 || ''} ${classes.capa4}`}>
        {props.swap?.capa4 || <Capa4Icon className={classes.icon} />}
      </div>
    </div>
  );
});
