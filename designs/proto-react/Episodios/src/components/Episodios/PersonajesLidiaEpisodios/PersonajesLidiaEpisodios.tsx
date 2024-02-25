import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Capa1Icon } from './Capa1Icon.js';
import classes from './PersonajesLidiaEpisodios.module.css';

interface Props {
  className?: string;
  classes?: {
    capa1?: string;
    root?: string;
  };
  swap?: {
    capa1?: ReactNode;
  };
}
/* @figmaId 31:4088 */
export const PersonajesLidiaEpisodios: FC<Props> = memo(function PersonajesLidiaEpisodios(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.capa1 || ''} ${classes.capa1}`}>
        {props.swap?.capa1 || <Capa1Icon className={classes.icon} />}
      </div>
    </div>
  );
});
