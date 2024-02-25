import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconsLupa } from '../IconsLupa/IconsLupa';
import classes from './Buscar.module.css';
import { GroupIcon } from './GroupIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    group?: ReactNode;
  };
  text?: {
    buscar?: ReactNode;
  };
}
/* @figmaId 1:563 */
export const Buscar: FC<Props> = memo(function Buscar(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <IconsLupa
        className={classes.iconsLupa}
        classes={{ group: classes.group }}
        swap={{
          group: props.swap?.group || (
            <div className={classes.group}>
              <GroupIcon className={classes.icon} />
            </div>
          ),
        }}
      />
      {props.text?.buscar != null ? props.text?.buscar : <div className={classes.buscar}>Buscar</div>}
    </div>
  );
});
