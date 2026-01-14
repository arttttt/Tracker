import 'reflect-metadata';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { JsonlSource } from './JsonlSource.js';
import * as fs from 'node:fs/promises';

vi.mock('node:fs/promises');

describe('JsonlSource', () => {
  let jsonlSource: JsonlSource;

  beforeEach(() => {
    vi.clearAllMocks();
    jsonlSource = new JsonlSource();
  });

  describe('readAll', () => {
    it('returns parsed objects from JSONL file', async () => {
      // GIVEN
      const jsonlContent = '{"id":"1","name":"First"}\n{"id":"2","name":"Second"}';
      vi.mocked(fs.readFile).mockResolvedValue(jsonlContent);

      // WHEN
      const result = await jsonlSource.readAll<{ id: string; name: string }>('/path/to/file.jsonl');

      // THEN
      expect(result).toEqual([
        { id: '1', name: 'First' },
        { id: '2', name: 'Second' },
      ]);
      expect(fs.readFile).toHaveBeenCalledWith('/path/to/file.jsonl', 'utf-8');
    });

    it('returns empty array when file does not exist', async () => {
      // GIVEN
      const error = new Error('File not found') as NodeJS.ErrnoException;
      error.code = 'ENOENT';
      vi.mocked(fs.readFile).mockRejectedValue(error);

      // WHEN
      const result = await jsonlSource.readAll<unknown>('/path/to/missing.jsonl');

      // THEN
      expect(result).toEqual([]);
    });

    it('returns empty array for empty file', async () => {
      // GIVEN
      vi.mocked(fs.readFile).mockResolvedValue('');

      // WHEN
      const result = await jsonlSource.readAll<unknown>('/path/to/empty.jsonl');

      // THEN
      expect(result).toEqual([]);
    });

    it('skips malformed lines gracefully', async () => {
      // GIVEN
      const jsonlContent = '{"id":"1"}\ninvalid json\n{"id":"2"}';
      vi.mocked(fs.readFile).mockResolvedValue(jsonlContent);
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      // WHEN
      const result = await jsonlSource.readAll<{ id: string }>('/path/to/file.jsonl');

      // THEN
      expect(result).toEqual([{ id: '1' }, { id: '2' }]);
      expect(consoleSpy).toHaveBeenCalledOnce();
    });

    it('skips empty lines', async () => {
      // GIVEN
      const jsonlContent = '{"id":"1"}\n\n{"id":"2"}\n';
      vi.mocked(fs.readFile).mockResolvedValue(jsonlContent);

      // WHEN
      const result = await jsonlSource.readAll<{ id: string }>('/path/to/file.jsonl');

      // THEN
      expect(result).toEqual([{ id: '1' }, { id: '2' }]);
    });

    it('propagates non-ENOENT errors', async () => {
      // GIVEN
      const error = new Error('Permission denied') as NodeJS.ErrnoException;
      error.code = 'EACCES';
      vi.mocked(fs.readFile).mockRejectedValue(error);

      // WHEN/THEN
      await expect(jsonlSource.readAll<unknown>('/path/to/file.jsonl')).rejects.toThrow(
        'Permission denied',
      );
    });
  });
});
