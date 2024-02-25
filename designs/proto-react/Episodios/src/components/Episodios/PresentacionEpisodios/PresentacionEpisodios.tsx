import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { IconsOndaDeSonido } from '../IconsOndaDeSonido/IconsOndaDeSonido';
import { IconsPlay } from '../IconsPlay/IconsPlay';
import { ImageEpisodios } from '../ImageEpisodios/ImageEpisodios';
import { InfoEpisodios } from '../InfoEpisodios/InfoEpisodios';
import { Capa1Icon2 } from './Capa1Icon2.js';
import { Capa1Icon3 } from './Capa1Icon3.js';
import { Capa1Icon4 } from './Capa1Icon4.js';
import { Capa1Icon5 } from './Capa1Icon5.js';
import { Capa1Icon } from './Capa1Icon.js';
import { GroupIcon2 } from './GroupIcon2.js';
import { GroupIcon } from './GroupIcon.js';
import classes from './PresentacionEpisodios.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle?: string;
    rectangle2?: string;
  };
  hide?: {
    loremIpsumDolorSitAmetConsecte?: boolean;
  };
}
/* @figmaId 31:10602 */
export const PresentacionEpisodios: FC<Props> = memo(function PresentacionEpisodios(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <InfoEpisodios
        className={classes.infoEpisodios}
        hide={{
          loremIpsumDolorSitAmetConsecte: true,
        }}
        text={{
          NosotrosPensamos: <div className={classes.NosotrosPensamos}>¡Nosotros Pensamos!</div>,
        }}
      />
      <div className={classes._50280}>5:00 / 28:00</div>
      <div className={classes.rectangle6}></div>
      <div className={classes.loremIpsumDolorSitAmetConsecte}>
        Lorem ipsum dolor sit amet, consectetuer adiLorem ipsum dolor sit amet, consectetuer adiLorem ipsum dolor sit
        amet, consectetuer adiLorem ipsum dolor sit amet, consectetuer adiLorem ipsum dolor sit amet, consectetuer
        adiLorem ipsum dolor sit amet, consectetuer adiLorem ipsum dolor sit amet, consectetuer adiLorem ipsum dolor sit
        amet, consectetuer adi
      </div>
      <IconsPlay
        className={classes.iconsPlay}
        classes={{ group: classes.group }}
        swap={{
          group: (
            <div className={classes.group}>
              <GroupIcon className={classes.icon} />
            </div>
          ),
        }}
      />
      <IconsOndaDeSonido
        className={classes.iconsOndaDeSonido}
        classes={{ capa1: classes.capa1 }}
        swap={{
          capa1: (
            <div className={classes.capa1}>
              <Capa1Icon className={classes.icon2} />
            </div>
          ),
        }}
      />
      <IconsOndaDeSonido
        className={classes.iconsOndaDeSonido2}
        classes={{ capa1: classes.capa12 }}
        swap={{
          capa1: (
            <div className={classes.capa12}>
              <Capa1Icon2 className={classes.icon3} />
            </div>
          ),
        }}
      />
      <IconsOndaDeSonido
        className={classes.iconsOndaDeSonido3}
        classes={{ capa1: classes.capa13 }}
        swap={{
          capa1: (
            <div className={classes.capa13}>
              <Capa1Icon3 className={classes.icon4} />
            </div>
          ),
        }}
      />
      <IconsOndaDeSonido
        className={classes.iconsOndaDeSonido4}
        classes={{ capa1: classes.capa14 }}
        swap={{
          capa1: (
            <div className={classes.capa14}>
              <Capa1Icon4 className={classes.icon5} />
            </div>
          ),
        }}
      />
      <IconsOndaDeSonido
        className={classes.iconsOndaDeSonido5}
        classes={{ capa1: classes.capa15 }}
        swap={{
          capa1: (
            <div className={classes.capa15}>
              <Capa1Icon5 className={classes.icon6} />
            </div>
          ),
        }}
      />
      <ImageEpisodios
        className={classes.imageEpisodios}
        classes={{
          rectangle: `${props.classes?.rectangle || ''} ${classes.rectangle}`,
          rectangle2: `${props.classes?.rectangle2 || ''} ${classes.rectangle2}`,
          group: classes.group2,
        }}
        swap={{
          group: (
            <div className={classes.group2}>
              <GroupIcon2 className={classes.icon7} />
            </div>
          ),
        }}
      />
    </div>
  );
});
