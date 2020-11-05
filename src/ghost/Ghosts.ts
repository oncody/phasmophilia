import {Ghost} from './Ghost';
import Spirit from './Spirit';
import Wraith from './Wraith';
import Phantom from './Phantom';
import Poltergeist from './Poltergeist';
import Banshee from './Banshee';
import Jinn from './Jinn';
import Mare from './Mare';
import Revenant from './Revenant';
import Shade from './Shade';
import Demon from './Demon';
import Yurei from './Yurei';

export function ghosts(): Array<Ghost> {
  return [
    new Spirit(),
    new Wraith(),
    new Phantom(),
    new Poltergeist(),
    new Banshee(),
    new Jinn(),
    new Mare(),
    new Revenant(),
    new Shade(),
    new Demon(),
    new Yurei(),
  ];
}
