# TypeScript Merge Function Project

This project implements a TypeScript function:

```
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
```

that merges three arrays into a single sorted array in ascending order **without using any sort function**.

## Problem Description

- `collection_1` and `collection_3` are already sorted in ascending order (min → max).
- `collection_2` is sorted in descending order (max → min).
- The function must merge all three arrays into a single array, sorted in ascending order.

## Project Structure

```
├── src/
│   ├── merge.ts        # Main merge function implementation
├── tests/
│   ├── merge.test.ts   # Unit tests for merge function
├── package.json
├── tsconfig.json
├── jest.config.js
```

## Setup Instructions

### 0. Clone this repository

```bash
git clone https://github.com/yourusername/Primo-Test.git
cd Primo-Test
```

### 1. Install dependencies

```
npm install
```

### 2. Run the code (example)

You can run the example in `src/merge.ts`:

```
npx ts-node src/merge.ts
```

### 3. Run unit tests

```
npx jest
```

หรือ

```
npm test
```

## Example Usage

```
ts
import { merge } from './src/merge';

const result = merge([1, 3, 5], [6, 4, 2], [7, 8, 9]);
console.log(result); // Output: [1,2,3,4,5,6,7,8,9]
```
