import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Buscar } from '../Buscar/Buscar';
import { ButtonSubs_StateDefault } from '../ButtonSubs_StateDefault/ButtonSubs_StateDefault';
import { LogoHome } from '../LogoHome/LogoHome';
import { MenuBar2 } from '../MenuBar2/MenuBar2';
import { Capa2Icon } from './Capa2Icon.js';
import classes from './Menu.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    capa2?: ReactNode;
    home?: ReactNode;
  };
}
/* @figmaId 5:418 */
export const Menu: FC<Props> = memo(function Menu(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <LogoHome
        className={classes.logoHome}
        classes={{ capa2: classes.capa2 }}
        swap={{
          capa2: props.swap?.capa2 || (
            <div className={classes.capa2}>
              <Capa2Icon className={classes.icon} />
            </div>
          ),
        }}
      />
      <Buscar className={classes.buscar} />
      <MenuBar2
        className={classes.menuBar}
        swap={{
          home: props.swap?.home,
        }}
      />
      <ButtonSubs_StateDefault className={classes.buttonSubs} />
    </div>
  );
});
