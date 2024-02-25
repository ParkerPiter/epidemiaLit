import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Ellipse1_StateActive.module.css';
import { Ellipse1Icon } from './Ellipse1Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 5:517 */
export const Ellipse1_StateActive: FC<Props> = memo(function Ellipse1_StateActive(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon} />
      </div>
    </div>
  );
});
