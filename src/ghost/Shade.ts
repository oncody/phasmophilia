import {Ghost} from './Ghost';
import {HardEvidence} from '../HardEvidence';
import {SoftEvidence} from '../SoftEvidence';

export default class Shade implements Ghost {
  getName(): string {
    return 'Shade';
  }

  getAbbreviation(): string {
    return 'Sh';
  }

  getHardEvidence(): Array<HardEvidence> {
    return [
      HardEvidence.EMF_LEVEL_5,
      HardEvidence.GHOST_ORB,
      HardEvidence.GHOST_WRITING
    ];
  }

  getSoftEvidence(): Array<SoftEvidence> {
    return [
      SoftEvidence.SHY,
      SoftEvidence.AGGRESSIVE
    ];
  }
}
