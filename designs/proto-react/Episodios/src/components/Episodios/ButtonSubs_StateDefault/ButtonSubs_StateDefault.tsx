import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ButtonSubs_StateDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 5:142 */
export const ButtonSubs_StateDefault: FC<Props> = memo(function ButtonSubs_StateDefault(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      <div className={classes.sUBSCRIBIRSE}>SUBSCRIBIRSE</div>
    </button>
  );
});
