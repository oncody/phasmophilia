export enum HardEvidence {
  GHOST_ORB,
  SPIRIT_BOX,
  FINGERPRINTS,
  EMF_LEVEL_5,
  FREEZING_TEMPERATURES,
  GHOST_WRITING
}

export function hardEvidence(): Array<HardEvidence> {
  let allEvidence: Array<HardEvidence> = [];

  for(let evidence in HardEvidence) {
    // when iterating over enums it doubles the values. one for int -> string and one for string -> int
    if(!isNaN(Number(evidence))) {
      let column: HardEvidence = HardEvidence[HardEvidence[evidence] as keyof typeof HardEvidence];
      allEvidence.push(column);
    }
  }

  return allEvidence;
}
