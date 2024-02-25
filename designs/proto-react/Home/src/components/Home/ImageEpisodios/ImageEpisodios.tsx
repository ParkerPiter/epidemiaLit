import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { GroupIcon } from './GroupIcon.js';
import classes from './ImageEpisodios.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle?: string;
    rectangle2?: string;
    root?: string;
  };
}
/* @figmaId 5:824 */
export const ImageEpisodios: FC<Props> = memo(function ImageEpisodios(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle || ''} ${classes.rectangle}`}></div>
      <div className={`${props.classes?.rectangle2 || ''} ${classes.rectangle2}`}></div>
      <div className={classes.group}>
        <GroupIcon className={classes.icon} />
      </div>
    </div>
  );
});
