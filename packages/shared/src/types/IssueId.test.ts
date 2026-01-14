import { describe, it, expect } from 'vitest';
import { IssueId } from './IssueId';

describe('IssueId', () => {
  describe('equals', () => {
    it('returns true when values match', () => {
      // GIVEN
      const id1 = new IssueId('be-123');
      const id2 = new IssueId('be-123');

      // WHEN
      const result = id1.equals(id2);

      // THEN
      expect(result).toBe(true);
    });

    it('returns false when values differ', () => {
      // GIVEN
      const id1 = new IssueId('be-123');
      const id2 = new IssueId('be-456');

      // WHEN
      const result = id1.equals(id2);

      // THEN
      expect(result).toBe(false);
    });
  });

  describe('toString', () => {
    it('returns the underlying value', () => {
      // GIVEN
      const id = new IssueId('be-xyz');

      // WHEN
      const result = id.toString();

      // THEN
      expect(result).toBe('be-xyz');
    });
  });

  describe('value', () => {
    it('exposes the raw string value', () => {
      // GIVEN
      const rawValue = 'be-abc';

      // WHEN
      const id = new IssueId(rawValue);

      // THEN
      expect(id.value).toBe(rawValue);
    });
  });
});
