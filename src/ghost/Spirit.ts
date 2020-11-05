import {Ghost} from './Ghost';
import {HardEvidence} from '../HardEvidence';
import {SoftEvidence} from '../SoftEvidence';

export default class Spirit implements Ghost {
  getName(): string {
    return 'Spirit';
  }

  getAbbreviation(): string {
    return 'Sp';
  }

  getHardEvidence(): Array<HardEvidence> {
    return [
      HardEvidence.SPIRIT_BOX,
      HardEvidence.FINGERPRINTS,
      HardEvidence.GHOST_WRITING
    ];
  }

  getSoftEvidence(): Array<SoftEvidence> {
    return [];
  }
}
