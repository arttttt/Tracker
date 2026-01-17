export interface IssueViewModel {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly status: string;
  readonly statusColor: string;
  readonly priority: string;
  readonly priorityColor: string;
  readonly type: string;
  readonly typeColor: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly labels: readonly string[];
}
