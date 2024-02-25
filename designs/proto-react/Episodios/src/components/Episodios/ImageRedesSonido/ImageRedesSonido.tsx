import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Capa2Icon } from './Capa2Icon.js';
import classes from './ImageRedesSonido.module.css';

interface Props {
  className?: string;
  classes?: {
    capa2?: string;
    root?: string;
  };
  swap?: {
    capa2?: ReactNode;
  };
}
/* @figmaId 1:491 */
export const ImageRedesSonido: FC<Props> = memo(function ImageRedesSonido(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.capa2 || ''} ${classes.capa2}`}>
        {props.swap?.capa2 || <Capa2Icon className={classes.icon} />}
      </div>
    </div>
  );
});
