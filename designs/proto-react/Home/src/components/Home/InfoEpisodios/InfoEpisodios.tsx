import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './InfoEpisodios.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 5:1099 */
export const InfoEpisodios: FC<Props> = memo(function InfoEpisodios(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.NosotrosPensamos}>¡Nosotros Pensamos!</div>
      <div className={classes.loremIpsumDolorSitAmetConsecte}>
        <div className={classes.textBlock}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
          vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
          et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
          facilisi.
        </div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
    </div>
  );
});
