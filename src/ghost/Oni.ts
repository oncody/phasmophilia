import {Ghost} from './Ghost';
import {HardEvidence} from '../HardEvidence';
import {SoftEvidence} from '../SoftEvidence';

export default class Oni implements Ghost {
  getName(): string {
    return 'Oni';
  }

  getAbbreviation(): string {
    return 'O';
  }

  getHardEvidence(): Array<HardEvidence> {
    return [
      HardEvidence.EMF_LEVEL_5,
      HardEvidence.SPIRIT_BOX,
      HardEvidence.GHOST_WRITING
    ];
  }

  getSoftEvidence(): Array<SoftEvidence> {
    return [
      SoftEvidence.SOCIAL,
      SoftEvidence.AGGRESSIVE,
      SoftEvidence.OBJECT_MANIPULATION
    ];
  }
}
