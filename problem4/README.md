## Sum to n problem

You can find this code in `solution.ts` file

```
// Complexity O(n)
export const sum_to_n_a = (n: number): number => {
	if (n <= 0) { return 0; }

	let result = 0;
	let current = n;
	while (current > 0) {
		result += current;
		current -= 1;
	}
	return result;
}
```

```
// Complexity O(1)
export const sum_to_n_b = (n: number): number => {
	if (n <= 0) { return 0; }

	return (n * (n + 1)) / 2;
}
```

```
// Complexity O(n)
export const sum_to_n_c = (n: number): number => {
	if (n <= 0) { return 0; }
	if (n === 1) { return 1; }
	return n + sum_to_n_c(n - 1);
}
```

## Running unit test
```
yarn && yarn run test
```