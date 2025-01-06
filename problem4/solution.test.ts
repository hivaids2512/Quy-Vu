import { expect, describe, it } from '@jest/globals';
import { sum_to_n_a, sum_to_n_b, sum_to_n_c } from './solution';

// Test sum_to_n_a
describe('sum_to_n_a', () => {
	it('should return 15 when n = 5', () => {
		expect(sum_to_n_a(5)).toBe(15);
	});

	it('should return 15 when n = 5', () => {
		expect(sum_to_n_a(500)).toBe(125250);
	});

	it('should return 0 when n <= 0', () => {
		expect(sum_to_n_a(-1)).toBe(0);
	});
});

// Test sum_to_n_b
describe('sum_to_n_b', () => {
	it('should return 15 when n = 5', () => {
		expect(sum_to_n_b(5)).toBe(15);
	});

	it('should return 15 when n = 5', () => {
		expect(sum_to_n_b(500)).toBe(125250);
	});

	it('should return 0 when n <= 0', () => {
		expect(sum_to_n_b(-1)).toBe(0);
	});
});

// Test sum_to_n_c
describe('sum_to_n_c', () => {
	it('should return 15 when n = 5', () => {
		expect(sum_to_n_c(5)).toBe(15);
	});

	it('should return 15 when n = 5', () => {
		expect(sum_to_n_c(500)).toBe(125250);
	});

	it('should return 0 when n <= 0', () => {
		expect(sum_to_n_c(-1)).toBe(0);
	});
});
