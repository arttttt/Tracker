import { Folder } from 'lucide-react';
import { cn } from '@presentation/shared/lib/utils';
import type { Project } from '@domain/entities/Project';

interface ProjectItemProps {
  project: Project;
  isActive: boolean;
  onSelect: () => void;
}

export function ProjectItem({ project, isActive, onSelect }: ProjectItemProps) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        'flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-sm transition-colors',
        'hover:bg-sidebar-accent/30',
        isActive && 'bg-sidebar-accent/60',
      )}
    >
      <Folder className="h-4 w-4 flex-shrink-0 text-sidebar-foreground/70" />
      <span
        className={cn(
          'flex-1 truncate text-left',
          isActive ? 'text-sidebar-foreground' : 'text-sidebar-foreground/70',
        )}
      >
        {project.name}
      </span>
    </button>
  );
}
