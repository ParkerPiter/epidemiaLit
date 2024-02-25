import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Home_StateDefault } from '../Home_StateDefault/Home_StateDefault';
import classes from './MenuBar2.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    home?: ReactNode;
  };
}
/* @figmaId 5:132 */
export const MenuBar2: FC<Props> = memo(function MenuBar2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.swap?.home || <Home_StateDefault />}
      <Home_StateDefault
        text={{
          home: <div className={classes.home}>Episodios</div>,
        }}
      />
      <Home_StateDefault
        text={{
          home: <div className={classes.home2}>Nosotras</div>,
        }}
      />
      <Home_StateDefault
        text={{
          home: <div className={classes.home3}>Contacto</div>,
        }}
      />
    </div>
  );
});
