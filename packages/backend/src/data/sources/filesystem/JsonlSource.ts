import { injectable } from 'tsyringe';
import { readFile } from 'node:fs/promises';

/**
 * Generic source for reading JSONL (JSON Lines) files.
 * Each line in the file is parsed as a separate JSON object.
 */
@injectable()
export class JsonlSource {
  /**
   * Read all records from a JSONL file.
   * @param filePath - Absolute path to the JSONL file
   * @returns Array of parsed objects (empty if file doesn't exist or is empty)
   */
  async readAll<T>(filePath: string): Promise<T[]> {
    let content: string;

    try {
      content = await readFile(filePath, 'utf-8');
    } catch (error) {
      if (this.isFileNotFoundError(error)) {
        return [];
      }
      throw error;
    }

    if (!content.trim()) {
      return [];
    }

    const lines = content.trim().split('\n');
    const results: T[] = [];

    for (const line of lines) {
      if (!line.trim()) {
        continue;
      }

      try {
        results.push(JSON.parse(line) as T);
      } catch {
        // Skip malformed lines - graceful degradation
        console.warn(`JsonlSource: Skipping malformed line: ${line.slice(0, 50)}...`);
      }
    }

    return results;
  }

  private isFileNotFoundError(error: unknown): boolean {
    return (
      error instanceof Error &&
      'code' in error &&
      (error as NodeJS.ErrnoException).code === 'ENOENT'
    );
  }
}
