import {Ghost} from './Ghost';
import {HardEvidence} from '../HardEvidence';
import {SoftEvidence} from '../SoftEvidence';

export default class Mare implements Ghost {
  getName(): string {
    return 'Mare';
  }

  getAbbreviation(): string {
    return 'M';
  }

  getHardEvidence(): Array<HardEvidence> {
    return [
      HardEvidence.SPIRIT_BOX,
      HardEvidence.GHOST_ORB,
      HardEvidence.FREEZING_TEMPERATURES
    ];
  }

  getSoftEvidence(): Array<SoftEvidence> {
    return [
      SoftEvidence.LIGHT_EXTINGUISH,
      SoftEvidence.AGGRESSIVE
    ];
  }
}
