export class IssueId {
  constructor(readonly value: string) {}

  equals(other: IssueId): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
