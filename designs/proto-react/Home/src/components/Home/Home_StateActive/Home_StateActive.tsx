import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Home_StateActive.module.css';

interface Props {
  className?: string;
}
/* @figmaId 5:115 */
export const Home_StateActive: FC<Props> = memo(function Home_StateActive(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.home}>Home</div>
    </div>
  );
});
