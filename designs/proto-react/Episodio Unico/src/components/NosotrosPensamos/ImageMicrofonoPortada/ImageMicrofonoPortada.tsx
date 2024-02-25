import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ImageMicrofonoPortada.module.css';

interface Props {
  className?: string;
  classes?: {
    _509700ceCb7f4630Beb0A2ddc1a586?: string;
    root?: string;
  };
}
/* @figmaId 1:427 */
export const ImageMicrofonoPortada: FC<Props> = memo(function ImageMicrofonoPortada(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div
        className={`${props.classes?._509700ceCb7f4630Beb0A2ddc1a586 || ''} ${classes._509700ceCb7f4630Beb0A2ddc1a586}`}
      ></div>
    </div>
  );
});
