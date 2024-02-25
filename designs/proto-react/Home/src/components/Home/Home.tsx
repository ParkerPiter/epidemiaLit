import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ButtonSubs_StateDefault } from './ButtonSubs_StateDefault/ButtonSubs_StateDefault';
import { Capa1Icon } from './Capa1Icon.js';
import { Capa2Icon2 } from './Capa2Icon2.js';
import { Capa2Icon3 } from './Capa2Icon3.js';
import { Capa2Icon4 } from './Capa2Icon4.js';
import { Capa2Icon } from './Capa2Icon.js';
import { Ellipse1_StateActive } from './Ellipse1_StateActive/Ellipse1_StateActive';
import { GroupIcon } from './GroupIcon.js';
import classes from './Home.module.css';
import { Home_StateActive } from './Home_StateActive/Home_StateActive';
import { IconsInstagram } from './IconsInstagram/IconsInstagram';
import { ImageEpisodios } from './ImageEpisodios/ImageEpisodios';
import { ImageMicrofonoPortada } from './ImageMicrofonoPortada/ImageMicrofonoPortada';
import { ImageRedesSonido } from './ImageRedesSonido/ImageRedesSonido';
import { ImageTituloEpidemia } from './ImageTituloEpidemia/ImageTituloEpidemia';
import { InfoEpisodios } from './InfoEpisodios/InfoEpisodios';
import { LogoHome } from './LogoHome/LogoHome';
import { Menu } from './Menu/Menu';
import { MenuBar } from './MenuBar/MenuBar';
import { PersonajesCarolina } from './PersonajesCarolina/PersonajesCarolina';
import { PersonajesCarolinaContacto } from './PersonajesCarolinaContacto/PersonajesCarolinaContacto';
import { PersonajesLidia } from './PersonajesLidia/PersonajesLidia';
import { TipografiaTitulos } from './TipografiaTitulos/TipografiaTitulos';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon5 } from './VectorIcon5.js';
import { VectorIcon6 } from './VectorIcon6.js';
import { VectorIcon7 } from './VectorIcon7.js';
import { VectorIcon8 } from './VectorIcon8.js';
import { VectorIcon9 } from './VectorIcon9.js';
import { VectorIcon10 } from './VectorIcon10.js';
import { VectorIcon11 } from './VectorIcon11.js';
import { VectorIcon12 } from './VectorIcon12.js';
import { VectorIcon13 } from './VectorIcon13.js';
import { VectorIcon14 } from './VectorIcon14.js';
import { VectorIcon15 } from './VectorIcon15.js';
import { VectorIcon16 } from './VectorIcon16.js';
import { VectorIcon17 } from './VectorIcon17.js';
import { VectorIcon18 } from './VectorIcon18.js';
import { VectorIcon19 } from './VectorIcon19.js';
import { VectorIcon20 } from './VectorIcon20.js';
import { VectorIcon21 } from './VectorIcon21.js';
import { VectorIcon22 } from './VectorIcon22.js';
import { VectorIcon23 } from './VectorIcon23.js';
import { VectorIcon24 } from './VectorIcon24.js';
import { VectorIcon25 } from './VectorIcon25.js';
import { VectorIcon26 } from './VectorIcon26.js';
import { VectorIcon27 } from './VectorIcon27.js';
import { VectorIcon28 } from './VectorIcon28.js';
import { VectorIcon29 } from './VectorIcon29.js';
import { VectorIcon30 } from './VectorIcon30.js';
import { VectorIcon31 } from './VectorIcon31.js';
import { VectorIcon32 } from './VectorIcon32.js';
import { VectorIcon33 } from './VectorIcon33.js';
import { VectorIcon34 } from './VectorIcon34.js';
import { VectorIcon35 } from './VectorIcon35.js';
import { VectorIcon36 } from './VectorIcon36.js';
import { VectorIcon37 } from './VectorIcon37.js';
import { VectorIcon38 } from './VectorIcon38.js';
import { VectorIcon39 } from './VectorIcon39.js';
import { VectorIcon40 } from './VectorIcon40.js';
import { VectorIcon41 } from './VectorIcon41.js';
import { VectorIcon42 } from './VectorIcon42.js';
import { VectorIcon43 } from './VectorIcon43.js';
import { VectorIcon44 } from './VectorIcon44.js';
import { VectorIcon45 } from './VectorIcon45.js';
import { VectorIcon46 } from './VectorIcon46.js';
import { VectorIcon47 } from './VectorIcon47.js';
import { VectorIcon48 } from './VectorIcon48.js';
import { VectorIcon49 } from './VectorIcon49.js';
import { VectorIcon50 } from './VectorIcon50.js';
import { VectorIcon51 } from './VectorIcon51.js';
import { VectorIcon52 } from './VectorIcon52.js';
import { VectorIcon53 } from './VectorIcon53.js';
import { VectorIcon54 } from './VectorIcon54.js';
import { VectorIcon55 } from './VectorIcon55.js';
import { VectorIcon56 } from './VectorIcon56.js';
import { VectorIcon57 } from './VectorIcon57.js';
import { VectorIcon58 } from './VectorIcon58.js';
import { VectorIcon59 } from './VectorIcon59.js';
import { VectorIcon60 } from './VectorIcon60.js';
import { VectorIcon61 } from './VectorIcon61.js';
import { VectorIcon62 } from './VectorIcon62.js';
import { VectorIcon63 } from './VectorIcon63.js';
import { VectorIcon64 } from './VectorIcon64.js';
import { VectorIcon65 } from './VectorIcon65.js';
import { VectorIcon66 } from './VectorIcon66.js';
import { VectorIcon67 } from './VectorIcon67.js';
import { VectorIcon68 } from './VectorIcon68.js';
import { VectorIcon69 } from './VectorIcon69.js';
import { VectorIcon70 } from './VectorIcon70.js';
import { VectorIcon71 } from './VectorIcon71.js';
import { VectorIcon72 } from './VectorIcon72.js';
import { VectorIcon73 } from './VectorIcon73.js';
import { VectorIcon74 } from './VectorIcon74.js';
import { VectorIcon75 } from './VectorIcon75.js';
import { VectorIcon76 } from './VectorIcon76.js';
import { VectorIcon77 } from './VectorIcon77.js';
import { VectorIcon78 } from './VectorIcon78.js';
import { VectorIcon79 } from './VectorIcon79.js';
import { VectorIcon80 } from './VectorIcon80.js';
import { VectorIcon81 } from './VectorIcon81.js';
import { VectorIcon82 } from './VectorIcon82.js';
import { VectorIcon83 } from './VectorIcon83.js';
import { VectorIcon84 } from './VectorIcon84.js';
import { VectorIcon85 } from './VectorIcon85.js';
import { VectorIcon86 } from './VectorIcon86.js';
import { VectorIcon87 } from './VectorIcon87.js';
import { VectorIcon88 } from './VectorIcon88.js';
import { VectorIcon89 } from './VectorIcon89.js';
import { VectorIcon90 } from './VectorIcon90.js';
import { VectorIcon91 } from './VectorIcon91.js';
import { VectorIcon92 } from './VectorIcon92.js';
import { VectorIcon93 } from './VectorIcon93.js';
import { VectorIcon94 } from './VectorIcon94.js';
import { VectorIcon95 } from './VectorIcon95.js';
import { VectorIcon96 } from './VectorIcon96.js';
import { VectorIcon97 } from './VectorIcon97.js';
import { VectorIcon98 } from './VectorIcon98.js';
import { VectorIcon99 } from './VectorIcon99.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 20:1683 */
export const Home: FC<Props> = memo(function Home(props = {}) {
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
      <div className={classes.contacto}>
        <TipografiaTitulos
          className={classes.tipografiaTitulos}
          text={{
            episodios: <div className={classes.episodios}>Contáctanos</div>,
          }}
        />
        <PersonajesCarolinaContacto
          className={classes.personajesCarolinaContacto}
          classes={{ capa1: classes.capa1 }}
          swap={{
            capa1: (
              <div className={classes.capa1}>
                <Capa1Icon className={classes.icon2} />
              </div>
            ),
          }}
        />
        <div className={classes.rectangle1}></div>
        <LogoHome
          className={classes.logoHome}
          classes={{ capa2: classes.capa22 }}
          swap={{
            capa2: (
              <div className={classes.capa22}>
                <Capa2Icon2 className={classes.icon3} />
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
            sUBSCRIBIRSE: <div className={classes.sUBSCRIBIRSE}>SUBSCRIBIRSE</div>,
          }}
        />
      </div>
      <div className={classes.infoRedesSociales}>
        <div className={classes.encuentranosEnNuestrasRedesSoc}>Encuéntranos en nuestras redes sociales</div>
        <div className={classes.Caritolectura}>@caritolectura</div>
        <div className={classes.LcreyesBooks}>@lcreyes.books</div>
        <IconsInstagram
          className={classes.iconsInstagram}
          swap={{
            vector: <VectorIcon className={classes.icon4} />,
          }}
        />
        <IconsInstagram
          className={classes.iconsInstagram2}
          swap={{
            vector: <VectorIcon2 className={classes.icon5} />,
          }}
        />
      </div>
      <div className={classes.nosotras}>
        <div className={classes.holaLectoresSomosCarolinaBusta}>
          <div className={classes.textBlock}>Hola lectores!</div>
          <div className={classes.textBlock2}>
            <p></p>
          </div>
          <div className={classes.textBlock3}>
            Somos Carolina Bustamante y Lidia Reyes, dos apasionadas por la literatura que se conocieron hace mas de 15
            años mientras estudiaban juntas en la secundaria. Quisieramos decirles que desde entonces hemos sido
            inseparables, pero la verdad es muy distinta, aunque nunca dejamos de estar en contacto simplemente sucedio
            lo que a todo el mundo le sucede &quot;la vida&quot;. Crecimos, emigrando a distintos paises y nos enfocamos
            en nuestros propios objetivos.
          </div>
          <div className={classes.textBlock4}>
            <p></p>
          </div>
          <div className={classes.textBlock5}>
            En el 2022 cuando renovamos el contacto, fue cuando hablamos por primera vez de esa loca idea por hacer un
            podcast, nos parecia fenomenal unir ese hobbie que siempre habiamos compartiro por la lectura, creando un
            proyecto netamente con fines de divertirnos.
          </div>
          <div className={classes.textBlock6}>
            <p></p>
          </div>
          <div className={classes.textBlock7}>
            Así nacio Epidemia literaria, un espacio creado desde el amor donde la idea principal es disfrutar la
            lectura en conjunto, creando una comunidad donde podamos compartir nuestra pasión y conocimiento, e
            intentando contagiar a cuanta persona podamos con este inflavalorado hobbie que ha sido el escape y la
            motivación que muchas veces nos ha mantenido en pie.
          </div>
          <div className={classes.textBlock8}>
            <p></p>
          </div>
          <div className={classes.textBlock9}>
            Nos hemos propuesto que cada episodio de nuestra podcast sea una oportunidad para sumergirnos en el mundo de
            la literatura y descubrir nuevos títulos, autores y temas interesantes. Discutiendo ideas, analizando
            frases, compartirendo recomendaciones y nuestras más honestas opiniones de lectura.
          </div>
          <div className={classes.textBlock10}>
            <p></p>
          </div>
          <div className={classes.textBlock11}>
            Al dia de hoy podemos confesar que amamos sentarnos a grabar y que ha sido la mejor idea que hemos tenido.{' '}
          </div>
          <div className={classes.textBlock12}>
            <p></p>
          </div>
          <div className={classes.textBlock13}>
            Si eres un amante de la lectura, no puedes perderte nuestro podcast, ¡te aseguramos que te encantará!
          </div>
        </div>
        <TipografiaTitulos
          className={classes.tipografiaTitulos2}
          text={{
            episodios: <div className={classes.episodios2}>Nosotras</div>,
          }}
        />
        <PersonajesLidia
          className={classes.personajesLidia}
          classes={{ vector: classes.vector }}
          swap={{
            vector: <VectorIcon3 className={classes.icon6} />,
            vector2: <VectorIcon4 className={classes.icon7} />,
            vector3: <VectorIcon5 className={classes.icon8} />,
            vector4: <VectorIcon6 className={classes.icon9} />,
            vector5: <VectorIcon7 className={classes.icon10} />,
            vector6: <VectorIcon8 className={classes.icon11} />,
            vector7: <VectorIcon9 className={classes.icon12} />,
            vector8: <VectorIcon10 className={classes.icon13} />,
            vector9: <VectorIcon11 className={classes.icon14} />,
            vector10: <VectorIcon12 className={classes.icon15} />,
            vector11: <VectorIcon13 className={classes.icon16} />,
            vector12: <VectorIcon14 className={classes.icon17} />,
            vector13: <VectorIcon15 className={classes.icon18} />,
            vector14: <VectorIcon16 className={classes.icon19} />,
            vector15: <VectorIcon17 className={classes.icon20} />,
            vector16: <VectorIcon18 className={classes.icon21} />,
            vector17: <VectorIcon19 className={classes.icon22} />,
            vector18: <VectorIcon20 className={classes.icon23} />,
            vector19: <VectorIcon21 className={classes.icon24} />,
            vector20: <VectorIcon22 className={classes.icon25} />,
            vector21: <VectorIcon23 className={classes.icon26} />,
            vector22: <VectorIcon24 className={classes.icon27} />,
            vector23: <VectorIcon25 className={classes.icon28} />,
            vector24: <VectorIcon26 className={classes.icon29} />,
            vector25: <VectorIcon27 className={classes.icon30} />,
            vector26: <VectorIcon28 className={classes.icon31} />,
            vector27: <VectorIcon29 className={classes.icon32} />,
            vector28: <VectorIcon30 className={classes.icon33} />,
            vector29: <VectorIcon31 className={classes.icon34} />,
            vector30: <VectorIcon32 className={classes.icon35} />,
            vector31: <VectorIcon33 className={classes.icon36} />,
            vector32: <VectorIcon34 className={classes.icon37} />,
            vector33: <VectorIcon35 className={classes.icon38} />,
            vector34: <VectorIcon36 className={classes.icon39} />,
            vector35: <VectorIcon37 className={classes.icon40} />,
            vector36: <VectorIcon38 className={classes.icon41} />,
            vector37: <VectorIcon39 className={classes.icon42} />,
            vector38: <VectorIcon40 className={classes.icon43} />,
            vector39: <VectorIcon41 className={classes.icon44} />,
            vector40: <VectorIcon42 className={classes.icon45} />,
            vector41: <VectorIcon43 className={classes.icon46} />,
            vector42: <VectorIcon44 className={classes.icon47} />,
            vector43: <VectorIcon45 className={classes.icon48} />,
            vector44: <VectorIcon46 className={classes.icon49} />,
            vector45: <VectorIcon47 className={classes.icon50} />,
            vector46: <VectorIcon48 className={classes.icon51} />,
            vector47: <VectorIcon49 className={classes.icon52} />,
            vector48: <VectorIcon50 className={classes.icon53} />,
            vector49: <VectorIcon51 className={classes.icon54} />,
            vector50: <VectorIcon52 className={classes.icon55} />,
            vector51: <VectorIcon53 className={classes.icon56} />,
            vector52: <VectorIcon54 className={classes.icon57} />,
            vector53: <VectorIcon55 className={classes.icon58} />,
            vector54: <VectorIcon56 className={classes.icon59} />,
            vector55: <VectorIcon57 className={classes.icon60} />,
            vector56: <VectorIcon58 className={classes.icon61} />,
            vector57: <VectorIcon59 className={classes.icon62} />,
            vector58: <VectorIcon60 className={classes.icon63} />,
            vector59: <VectorIcon61 className={classes.icon64} />,
            vector60: <VectorIcon62 className={classes.icon65} />,
            vector61: <VectorIcon63 className={classes.icon66} />,
            vector62: <VectorIcon64 className={classes.icon67} />,
            vector63: <VectorIcon65 className={classes.icon68} />,
            vector64: <VectorIcon66 className={classes.icon69} />,
            vector65: <VectorIcon67 className={classes.icon70} />,
            vector66: <VectorIcon68 className={classes.icon71} />,
            vector67: <VectorIcon69 className={classes.icon72} />,
            vector68: <VectorIcon70 className={classes.icon73} />,
            vector69: <VectorIcon71 className={classes.icon74} />,
            vector70: <VectorIcon72 className={classes.icon75} />,
            vector71: <VectorIcon73 className={classes.icon76} />,
            vector72: <VectorIcon74 className={classes.icon77} />,
            vector73: <VectorIcon75 className={classes.icon78} />,
            vector74: <VectorIcon76 className={classes.icon79} />,
            vector75: <VectorIcon77 className={classes.icon80} />,
            vector76: <VectorIcon78 className={classes.icon81} />,
            vector77: <VectorIcon79 className={classes.icon82} />,
            vector78: <VectorIcon80 className={classes.icon83} />,
            vector79: <VectorIcon81 className={classes.icon84} />,
            vector80: <VectorIcon82 className={classes.icon85} />,
            vector81: <VectorIcon83 className={classes.icon86} />,
            vector82: <VectorIcon84 className={classes.icon87} />,
            vector83: <VectorIcon85 className={classes.icon88} />,
            vector84: <VectorIcon86 className={classes.icon89} />,
            vector85: (
              <div className={classes.vector}>
                <VectorIcon87 className={classes.icon90} />
              </div>
            ),
            vector86: <VectorIcon88 className={classes.icon91} />,
            vector87: <VectorIcon89 className={classes.icon92} />,
            vector88: <VectorIcon90 className={classes.icon93} />,
            vector89: <VectorIcon91 className={classes.icon94} />,
            vector90: <VectorIcon92 className={classes.icon95} />,
            vector91: <VectorIcon93 className={classes.icon96} />,
            vector92: <VectorIcon94 className={classes.icon97} />,
            vector93: <VectorIcon95 className={classes.icon98} />,
            vector94: <VectorIcon96 className={classes.icon99} />,
            vector95: <VectorIcon97 className={classes.icon100} />,
            vector96: <VectorIcon98 className={classes.icon101} />,
            vector97: <VectorIcon99 className={classes.icon102} />,
          }}
        />
        <PersonajesCarolina
          className={classes.personajesCarolina}
          classes={{ group: classes.group }}
          swap={{
            group: (
              <div className={classes.group}>
                <GroupIcon className={classes.icon103} />
              </div>
            ),
          }}
        />
      </div>
      <div className={classes.episodios3}>
        <ButtonSubs_StateDefault
          className={classes.buttonSubs2}
          text={{
            sUBSCRIBIRSE: <div className={classes.masEpisodios}>Mas Episodios</div>,
          }}
        />
        <MenuBar
          className={classes.menuBar}
          swap={{
            ellipse3: <Ellipse1_StateActive />,
          }}
        />
        <ImageEpisodios
          className={classes.imageEpisodios}
          classes={{ rectangle: classes.rectangle, rectangle2: classes.rectangle2 }}
        />
        <InfoEpisodios className={classes.infoEpisodios} />
        <TipografiaTitulos className={classes.tipografiaTitulos3} />
      </div>
      <div className={classes.info}>
        <div className={classes.episodiosLos15Y30DeCadaMesALas}>
          Episodios los 15 y 30 de cada mes a las 15:00hs Arg
        </div>
      </div>
      <div className={classes.inicio}>
        <div className={classes.menu2}>
          <Menu
            className={classes.menu}
            swap={{
              capa2: <Capa2Icon3 className={classes.icon104} />,
              home: <Home_StateActive />,
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
                <Capa2Icon4 className={classes.icon105} />
              </div>
            ),
          }}
        />
        <div className={classes.encuentranosEn}>Encuéntranos en:</div>
      </div>
    </div>
  );
});
