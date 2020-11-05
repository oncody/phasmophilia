import {Ghost} from './Ghost';
import {HardEvidence} from '../HardEvidence';
import {SoftEvidence} from '../SoftEvidence';

export default class Demon implements Ghost {
  getName(): string {
    return 'Demon';
  }

  getAbbreviation(): string {
    return 'D';
  }

  getHardEvidence(): Array<HardEvidence> {
    return [
      HardEvidence.SPIRIT_BOX,
      HardEvidence.GHOST_WRITING,
      HardEvidence.FREEZING_TEMPERATURES
    ];
  }

  getSoftEvidence(): Array<SoftEvidence> {
    return [
      SoftEvidence.AGGRESSIVE
    ];
  }
}
