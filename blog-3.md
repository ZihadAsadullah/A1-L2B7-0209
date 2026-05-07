# How do Generics help build reusable and strictly Typed components in TypeScript?

## Introduction

One of the most popular features of TypeScript is **Generics**. Generics allow developers to write reusable code while preserving strict type safety.

Without Generic, developers often need to create multiple versions of the same `function` or component of different data types. Generics solve this problem by making code flexible and reusable.

In this blog, i will explain how Generics  work and why they are important in TypeScript development.

---

## What are Generics?

Generics allow us to create `functions, classes or interfaces` that work with multiple types.

Instead of hardcoding a specific type, we use a placeholder type.

```ts
function students<T>(value: T): T {
  return value;
}
```

Here:

- `T` is a Generic type parameter
- It represents any type
- The return type matches the any type

---

## Using Generics with different types

```ts
const stringValue = students<string> ('Asadullah')
const numberValue = students<number> (7)
```

TypeScript automatically understands:

- `stringValue` is a `string`
- `numberValue` is a `number`

This keeps the `function` reusable while maintaining strict typing.

---

## When Without Write Generics Function

```ts
function getString(value: string): string {
  return value;
}
function getNumber(value: number): number {
  return value;
}
```

This create unnecessary code duplication.

Generics solve this problem using single reusable function.

---

## Generic in Arrays

```ts
function getFirstOption<T>(arr: T[]):T{
return arr[0]
}
```

Use case:

```ts
const aStrArr = getFirstOption(['Zihad', 'Asadullah']);
const bNumArr = getFirstOption([20, 30, 55]);
```

TypeScript automatically infers the types.

---

## Benefits of Generics

Generics provide many advantages:

- Reusable code
- Less code duplication
- Strong type safety
- Better scalability
- Better autocomplete
- Better IntelliSense
- Easier to maintenance

---

## Widely usage

-- React components
-- Utility functions
-- Data Structures

They are essential for large scale application.

## Ending

Generics are one of the core features that make TypeScript powerful. They allow developers to create reusable and scalable code without sacrificing type safety.

By using generics, developers can write cleaner, more maintainable, and more flexible applications. Whether building utilities functions, APIs or React applications, generics help ensure that code stays both reusable and strictly typed.
