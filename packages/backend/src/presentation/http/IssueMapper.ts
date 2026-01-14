import type { Issue, IssueDto } from '@bealin/shared';

/**
 * Maps Issue domain model to IssueDto for API responses.
 */
export class IssueMapper {
  static toDto(issue: Issue): IssueDto {
    return {
      id: issue.id.value,
      title: issue.title,
      description: issue.description,
      status: issue.status,
      priority: issue.priority,
      labels: issue.labels.map((label) => label.value),
      createdAt: issue.createdAt.toISOString(),
      updatedAt: issue.updatedAt.toISOString(),
    };
  }

  static toDtoList(issues: Issue[]): IssueDto[] {
    return issues.map((issue) => IssueMapper.toDto(issue));
  }
}
