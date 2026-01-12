export class LabelId {
  constructor(readonly value: string) {}

  equals(other: LabelId): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
