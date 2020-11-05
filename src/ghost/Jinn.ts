import {Ghost} from './Ghost';
import {HardEvidence} from '../HardEvidence';
import {SoftEvidence} from '../SoftEvidence';

export default class Jinn implements Ghost {
  getName(): string {
    return 'Jinn';
  }

  getAbbreviation(): string {
    return 'J';
  }

  getHardEvidence(): Array<HardEvidence> {
    return [
      HardEvidence.SPIRIT_BOX,
      HardEvidence.GHOST_ORB,
      HardEvidence.EMF_LEVEL_5
    ];
  }

  getSoftEvidence(): Array<SoftEvidence> {
    return [
      SoftEvidence.ELECTRONICS_MANIPULATION,
      SoftEvidence.LIGHT_FLICKER,
      SoftEvidence.LIGHT_EXTINGUISH
    ];
  }
}
