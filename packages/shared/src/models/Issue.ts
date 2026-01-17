import { IssueId } from '../types/IssueId.js';
import { LabelId } from '../types/LabelId.js';

export type IssueStatus = 'backlog' | 'todo' | 'in_progress' | 'done' | 'canceled';
export type IssuePriority = 'none' | 'low' | 'medium' | 'high' | 'urgent';
export type IssueType = 'bug' | 'feature' | 'task' | 'epic' | 'chore';

export interface Issue {
  readonly id: IssueId;
  readonly title: string;
  readonly description: string;
  readonly status: IssueStatus;
  readonly priority: IssuePriority;
  readonly type: IssueType;
  readonly labels: readonly LabelId[];
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
