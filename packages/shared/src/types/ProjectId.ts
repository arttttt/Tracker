export class ProjectId {
  constructor(readonly value: string) {}

  equals(other: ProjectId): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
