import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Capa1Icon } from './Capa1Icon.js';
import classes from './IconsOndaDeSonido.module.css';

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
/* @figmaId 31:7574 */
export const IconsOndaDeSonido: FC<Props> = memo(function IconsOndaDeSonido(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.capa1 || ''} ${classes.capa1}`}>
        {props.swap?.capa1 || <Capa1Icon className={classes.icon} />}
      </div>
    </div>
  );
});
