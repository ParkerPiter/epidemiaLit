import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Ellipse1_StateDefault.module.css';
import { Ellipse1Icon } from './Ellipse1Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 5:521 */
export const Ellipse1_StateDefault: FC<Props> = memo(function Ellipse1_StateDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon} />
      </div>
    </div>
  );
});
