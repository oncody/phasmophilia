import {Ghost} from './Ghost';
import {HardEvidence} from '../HardEvidence';
import {SoftEvidence} from '../SoftEvidence';

export default class Wraith implements Ghost {
  getName(): string {
    return 'Wraith';
  }

  getAbbreviation(): string {
    return 'W';
  }

  getHardEvidence(): Array<HardEvidence> {
    return [
      HardEvidence.FINGERPRINTS,
      HardEvidence.FREEZING_TEMPERATURES,
      HardEvidence.SPIRIT_BOX
    ];
  }

  getSoftEvidence(): Array<SoftEvidence> {
    return [];
  }
}
