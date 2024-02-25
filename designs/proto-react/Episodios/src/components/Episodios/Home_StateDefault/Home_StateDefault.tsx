import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Home_StateDefault.module.css';

interface Props {
  className?: string;
  text?: {
    home?: ReactNode;
  };
}
/* @figmaId 5:113 */
export const Home_StateDefault: FC<Props> = memo(function Home_StateDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      {props.text?.home != null ? props.text?.home : <div className={classes.home}>Home</div>}
    </div>
  );
});
