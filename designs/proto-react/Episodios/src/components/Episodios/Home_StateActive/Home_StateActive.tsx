import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Home_StateActive.module.css';

interface Props {
  className?: string;
  text?: {
    home?: ReactNode;
  };
}
/* @figmaId 5:115 */
export const Home_StateActive: FC<Props> = memo(function Home_StateActive(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      {props.text?.home != null ? props.text?.home : <div className={classes.home}>Home</div>}
    </div>
  );
});
