import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './TipografiaTitulos.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    episodios?: ReactNode;
  };
}
/* @figmaId 5:1107 */
export const TipografiaTitulos: FC<Props> = memo(function TipografiaTitulos(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.episodios != null ? props.text?.episodios : <div className={classes.episodios}>Episodios</div>}
    </div>
  );
});
