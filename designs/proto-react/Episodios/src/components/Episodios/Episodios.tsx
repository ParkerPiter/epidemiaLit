import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Buscar } from './Buscar/Buscar';
import { Capa1Icon2 } from './Capa1Icon2.js';
import { Capa1Icon } from './Capa1Icon.js';
import { Capa2Icon2 } from './Capa2Icon2.js';
import { Capa2Icon3 } from './Capa2Icon3.js';
import { Capa2Icon } from './Capa2Icon.js';
import classes from './Episodios.module.css';
import { GroupIcon } from './GroupIcon.js';
import { Home_StateActive } from './Home_StateActive/Home_StateActive';
import { ImageMicrofonoPortada } from './ImageMicrofonoPortada/ImageMicrofonoPortada';
import { ImageRedesSonido } from './ImageRedesSonido/ImageRedesSonido';
import { ImageTituloEpidemia } from './ImageTituloEpidemia/ImageTituloEpidemia';
import { Menu } from './Menu/Menu';
import { PersonajesCaroEpisodios } from './PersonajesCaroEpisodios/PersonajesCaroEpisodios';
import { PersonajesLidiaEpisodios } from './PersonajesLidiaEpisodios/PersonajesLidiaEpisodios';
import { PresentacionEpisodios } from './PresentacionEpisodios/PresentacionEpisodios';
import { TipografiaTitulos } from './TipografiaTitulos/TipografiaTitulos';

interface Props {
  className?: string;
  hide?: {
    loremIpsumDolorSitAmetConsecte?: boolean;
    loremIpsumDolorSitAmetConsecte2?: boolean;
    loremIpsumDolorSitAmetConsecte3?: boolean;
    loremIpsumDolorSitAmetConsecte4?: boolean;
    loremIpsumDolorSitAmetConsecte5?: boolean;
    loremIpsumDolorSitAmetConsecte6?: boolean;
  };
}
/* @figmaId 31:8684 */
export const Episodios: FC<Props> = memo(function Episodios(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.copyright}>
        <ImageRedesSonido
          className={classes.imageRedesSonido}
          classes={{ capa2: classes.capa2 }}
          swap={{
            capa2: (
              <div className={classes.capa2}>
                <Capa2Icon className={classes.icon} />
              </div>
            ),
          }}
        />
        <div className={classes.cOPYRIGHT2023ALLRIGHTSRESERVED}>COPYRIGHT 2023 ALL RIGHTS RESERVED.</div>
      </div>
      <div className={classes.episodios2}>
        <Buscar
          className={classes.buscar2}
          swap={{
            group: <GroupIcon className={classes.icon2} />,
          }}
          text={{
            buscar: <div className={classes.buscar}>Buscar</div>,
          }}
        />
        <TipografiaTitulos
          className={classes.tipografiaTitulos}
          text={{
            episodios: <div className={classes.episodios}>Episodios</div>,
          }}
        />
        <PersonajesCaroEpisodios
          className={classes.personajesCaroEpisodios}
          classes={{ capa1: classes.capa1 }}
          swap={{
            capa1: (
              <div className={classes.capa1}>
                <Capa1Icon className={classes.icon3} />
              </div>
            ),
          }}
        />
        <PersonajesLidiaEpisodios
          className={classes.personajesLidiaEpisodios}
          classes={{ capa1: classes.capa12 }}
          swap={{
            capa1: (
              <div className={classes.capa12}>
                <Capa1Icon2 className={classes.icon4} />
              </div>
            ),
          }}
        />
        <div className={classes.frame1}>
          <PresentacionEpisodios classes={{ rectangle: classes.rectangle, rectangle2: classes.rectangle2 }} />
          <PresentacionEpisodios classes={{ rectangle: classes.rectangle3, rectangle2: classes.rectangle4 }} />
          <PresentacionEpisodios classes={{ rectangle: classes.rectangle5, rectangle2: classes.rectangle6 }} />
          <PresentacionEpisodios classes={{ rectangle: classes.rectangle7, rectangle2: classes.rectangle8 }} />
          <PresentacionEpisodios classes={{ rectangle: classes.rectangle9, rectangle2: classes.rectangle10 }} />
          <PresentacionEpisodios classes={{ rectangle: classes.rectangle11, rectangle2: classes.rectangle12 }} />
        </div>
        <div className={classes.frame12}>
          <div className={classes.siguiente}>Siguiente</div>
        </div>
      </div>
      <div className={classes.inicio}>
        <div className={classes.menu2}>
          <Menu
            className={classes.menu}
            swap={{
              capa2: <Capa2Icon2 className={classes.icon5} />,
              home: (
                <Home_StateActive
                  text={{
                    home: <div className={classes.home}>Episodios</div>,
                  }}
                />
              ),
            }}
          />
        </div>
        <ImageMicrofonoPortada
          className={classes.imageMicrofonoPortada}
          classes={{ _509700ceCb7f4630Beb0A2ddc1a586: classes._509700ceCb7f4630Beb0A2ddc1a586 }}
        />
        <ImageTituloEpidemia className={classes.imageTituloEpidemia} />
        <ImageRedesSonido
          className={classes.imageRedesSonido2}
          classes={{ capa2: classes.capa22 }}
          swap={{
            capa2: (
              <div className={classes.capa22}>
                <Capa2Icon3 className={classes.icon6} />
              </div>
            ),
          }}
        />
        <div className={classes.encuentranosEn}>Encuéntranos en:</div>
      </div>
    </div>
  );
});
