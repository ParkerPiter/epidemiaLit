import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Home_StateDefault } from '../Home_StateDefault/Home_StateDefault';
import classes from './MenuBar.module.css';

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
export const MenuBar: FC<Props> = memo(function MenuBar(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Home_StateDefault />
      {props.swap?.home || (
        <Home_StateDefault
          text={{
            home: <div className={classes.home}>Episodios</div>,
          }}
        />
      )}
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
