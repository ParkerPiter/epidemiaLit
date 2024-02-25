import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ButtonSubs_StateDefault } from './ButtonSubs_StateDefault/ButtonSubs_StateDefault';
import { Capa1Icon2 } from './Capa1Icon2.js';
import { Capa1Icon3 } from './Capa1Icon3.js';
import { Capa1Icon4 } from './Capa1Icon4.js';
import { Capa1Icon5 } from './Capa1Icon5.js';
import { Capa1Icon6 } from './Capa1Icon6.js';
import { Capa1Icon7 } from './Capa1Icon7.js';
import { Capa1Icon } from './Capa1Icon.js';
import { Capa2Icon2 } from './Capa2Icon2.js';
import { Capa2Icon3 } from './Capa2Icon3.js';
import { Capa2Icon4 } from './Capa2Icon4.js';
import { Capa2Icon } from './Capa2Icon.js';
import { Capa4Icon } from './Capa4Icon.js';
import { GroupIcon2 } from './GroupIcon2.js';
import { GroupIcon } from './GroupIcon.js';
import { Home_StateActive } from './Home_StateActive/Home_StateActive';
import { IconsOndaDeSonido } from './IconsOndaDeSonido/IconsOndaDeSonido';
import { IconsPlay } from './IconsPlay/IconsPlay';
import { IconsRedesEpisodios } from './IconsRedesEpisodios/IconsRedesEpisodios';
import { ImageEpisodios } from './ImageEpisodios/ImageEpisodios';
import { ImageMicrofonoPortada } from './ImageMicrofonoPortada/ImageMicrofonoPortada';
import { ImageRedesSonido } from './ImageRedesSonido/ImageRedesSonido';
import { ImageTituloEpidemia } from './ImageTituloEpidemia/ImageTituloEpidemia';
import { InfoEpisodios } from './InfoEpisodios/InfoEpisodios';
import { LogoHome } from './LogoHome/LogoHome';
import { Menu } from './Menu/Menu';
import classes from './NosotrosPensamos.module.css';
import { PersonajesCaroEpisodios } from './PersonajesCaroEpisodios/PersonajesCaroEpisodios';
import { PersonajesLidiaEpisodios } from './PersonajesLidiaEpisodios/PersonajesLidiaEpisodios';
import { TipografiaTitulos } from './TipografiaTitulos/TipografiaTitulos';

interface Props {
  className?: string;
  hide?: {
    loremIpsumDolorSitAmetConsecte?: boolean;
  };
}
/* @figmaId 31:6240 */
export const NosotrosPensamos: FC<Props> = memo(function NosotrosPensamos(props = {}) {
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
        <ImageEpisodios
          className={classes.imageEpisodios}
          classes={{ rectangle: classes.rectangle, rectangle2: classes.rectangle2, group: classes.group }}
          swap={{
            group: (
              <div className={classes.group}>
                <GroupIcon className={classes.icon2} />
              </div>
            ),
          }}
        />
        <InfoEpisodios
          className={classes.infoEpisodios}
          hide={{
            loremIpsumDolorSitAmetConsecte: true,
          }}
          text={{
            NosotrosPensamos: <div className={classes.NosotrosPensamos}>¡Nosotros Pensamos!</div>,
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
        <IconsPlay
          className={classes.iconsPlay}
          classes={{ group: classes.group2 }}
          swap={{
            group: (
              <div className={classes.group2}>
                <GroupIcon2 className={classes.icon5} />
              </div>
            ),
          }}
        />
        <IconsOndaDeSonido
          className={classes.iconsOndaDeSonido}
          classes={{ capa1: classes.capa13 }}
          swap={{
            capa1: (
              <div className={classes.capa13}>
                <Capa1Icon3 className={classes.icon6} />
              </div>
            ),
          }}
        />
        <IconsOndaDeSonido
          className={classes.iconsOndaDeSonido2}
          classes={{ capa1: classes.capa14 }}
          swap={{
            capa1: (
              <div className={classes.capa14}>
                <Capa1Icon4 className={classes.icon7} />
              </div>
            ),
          }}
        />
        <IconsOndaDeSonido
          className={classes.iconsOndaDeSonido3}
          classes={{ capa1: classes.capa15 }}
          swap={{
            capa1: (
              <div className={classes.capa15}>
                <Capa1Icon5 className={classes.icon8} />
              </div>
            ),
          }}
        />
        <IconsOndaDeSonido
          className={classes.iconsOndaDeSonido4}
          classes={{ capa1: classes.capa16 }}
          swap={{
            capa1: (
              <div className={classes.capa16}>
                <Capa1Icon6 className={classes.icon9} />
              </div>
            ),
          }}
        />
        <IconsOndaDeSonido
          className={classes.iconsOndaDeSonido5}
          classes={{ capa1: classes.capa17 }}
          swap={{
            capa1: (
              <div className={classes.capa17}>
                <Capa1Icon7 className={classes.icon10} />
              </div>
            ),
          }}
        />
        <div className={classes._50280}>5:00 / 28:00</div>
        <IconsRedesEpisodios
          className={classes.iconsRedesEpisodios}
          classes={{ capa4: classes.capa4 }}
          swap={{
            capa4: (
              <div className={classes.capa4}>
                <Capa4Icon className={classes.icon11} />
              </div>
            ),
          }}
        />
        <div className={classes.loremIpsumDolorSitAmetConsecte}>
          Lorem ipsum dolor sit amet, consectetuer adiLorem ipsum dolor sit amet, consectetuer adiLorem ipsum dolor sit
          amet, consectetuer adiLorem ipsum dolor sit amet, consectetuer adiLorem ipsum dolor sit amet, consectetuer
          adiLorem ipsum dolor sit amet, consectetuer adiLorem ipsum dolor sit amet, consectetuer adiLorem ipsum dolor
          sit amet, consectetuer adi
        </div>
        <div className={classes.loremIpsumDolorSitAmetConsecte2}>
          Lorem ipsum dolor sit amet, consectetuer adiLorem ipsum dolor sit amet, consectetuer adiLorem ipsum dolor sit
          amet, consectetuer adiLorem ipsum dolor sit amet, consectetuer adiLorem ipsum dolor sit amet, consectetuer
          adiLorem ipsum dolor sit amet, consectetuer adiLor
        </div>
        <div className={classes.ultimosComentarios}>Últimos Comentarios</div>
        <div className={classes.loremIpsumDolorSitAmetConsecte3}>
          Lorem ipsum dolor sit amet, consectetuer adiLorem ipsum dolor sit amet, consectetuer adiLorem adi
        </div>
        <div className={classes.loremIpsumDolorSitAmetConsecte4}>
          Lorem ipsum dolor sit amet, consectetuer adiLorem ipsum dolor sit amet, consectetuer adiLorem ipsum dolor sit
          amet, consectetuer adiLorem ipsum dolor sit amet, consectetuer adiLorem ipsum dolor sit amet, consectetuer
          adiLorem ipsum dolor sit amet, consect
        </div>
        <div className={classes.DejaTuComentario}>¡Deja tu Comentario!</div>
        <div className={classes.rectangle1}></div>
        <LogoHome
          className={classes.logoHome}
          classes={{ capa2: classes.capa22 }}
          swap={{
            capa2: (
              <div className={classes.capa22}>
                <Capa2Icon2 className={classes.icon12} />
              </div>
            ),
          }}
        />
        <div className={classes.rectangle22}></div>
        <div className={classes.rectangle3}></div>
        <div className={classes.rectangle4}></div>
        <div className={classes.rectangle5}></div>
        <div className={classes.mensaje}>Mensaje:</div>
        <div className={classes.nombre}>Nombre:</div>
        <div className={classes.correo}>Correo:</div>
        <div className={classes.telefono}>Teléfono:</div>
        <ButtonSubs_StateDefault
          className={classes.buttonSubs}
          text={{
            sUBSCRIBIRSE: <div className={classes.sUBSCRIBIRSE}>ENVIAR</div>,
          }}
        />
      </div>
      <div className={classes.inicio}>
        <div className={classes.menu2}>
          <Menu
            className={classes.menu}
            swap={{
              capa2: <Capa2Icon3 className={classes.icon13} />,
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
          classes={{ capa2: classes.capa23 }}
          swap={{
            capa2: (
              <div className={classes.capa23}>
                <Capa2Icon4 className={classes.icon14} />
              </div>
            ),
          }}
        />
        <div className={classes.encuentranosEn}>Encuéntranos en:</div>
      </div>
    </div>
  );
});
