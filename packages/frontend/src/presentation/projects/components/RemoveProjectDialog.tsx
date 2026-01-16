import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@presentation/shared/components/ui/dialog';
import { Button } from '@presentation/shared/components/ui/button';
import type { Project } from '@domain/entities/Project';

interface RemoveProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
  onConfirm: () => void;
}

export function RemoveProjectDialog({
  isOpen,
  onClose,
  project,
  onConfirm,
}: RemoveProjectDialogProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open: boolean) => !open && onClose()}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Remove project?</DialogTitle>
        </DialogHeader>

        <div className="space-y-2 py-2">
          <p className="text-sm font-medium text-foreground">"{project.name}"</p>
          <p className="text-sm text-muted-foreground break-all">{project.path}</p>
          <p className="text-sm text-muted-foreground pt-2">
            This will only remove the project from the list. Files on disk will not be deleted.
          </p>
        </div>

        <DialogFooter>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            Remove
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
