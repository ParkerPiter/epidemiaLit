import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ImageTituloEpidemia.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 1:486 */
export const ImageTituloEpidemia: FC<Props> = memo(function ImageTituloEpidemia(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ePIDEMIALITERARIA}>
        <div className={classes.textBlock}>EPIDEMIA </div>
        <div className={classes.textBlock2}>LITERARIA</div>
      </div>
      <div className={classes.pODCAST}>PODCAST </div>
    </div>
  );
});
