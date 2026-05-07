# Why is `any` a "Type Safety Hole and Why is `unknown` safer in TypeScript?

## Introduction

TypeScript is designed to provide for JavaScript applications. It helps developers catch errors during development instead of at runtime. However, typeScript also provides some special types like `any` or `unknown` for handling uncertain or dynamic data.

Although both can store any type of value, they behave very differently. The `any` type   completely disable TypeScripts safety system, while `unknown` keeps the safety checks active.

In this blog, we will explore why `any` is called "Type safety hole, why `unknown` is safer, and how type narrowing work.

---

## What is `any`?

The `any` type tells TypeScript:

> "Do not check anything for this variable."

example:

```ts
let value: any = "Hello";
value.indexOf();
value();
```

TypeScript will allow all of these operations, even if they are invalid.

This becomes dangerous because errors appear only at runtime.

## Why is `any` called a Type Safety Hole?

When I use `any`, TypeScript loses its ability to:

- Check property existence
- Detect invalid operations

Example:

```ts
let student: any = {
  name: "Zihad",
};
console.log(user.fName.toUpperCase());
```

This code compiles successfully.

But at runtime, it crashes because `age` is `undefined`.

So `any` creates a "hole" in TypeScript's type safety system.

---

## What is `unknown`?

The `unknown` type can also hold any value, but TypeScript does not allow unsafe operations directly.

example:

```ts
let val: unknown = "Hello";

val.toLowerCase();
```

This code  gives an error:

```ts
'value' is of type 'unknown'.
```

Because TypeScript wants you to verify the type first.

---

## Why is `unknown` Safer?

`unknown` forces developers to check the value before using it.

Example:

```ts
let name: unknown = 'Asadullah';

if (typeof name === 'string') {
  console.log(name.toLowerCase());
}
```

Now TypeScript know `name` is a string inside `if` block.

This process is called **type narrowing**

## What is Type Narrowing?

Type Narrowing means reducing a broad type into a more specific type using checks.

---

## Conclusion

Although, `any` may seem convenient, it removes TypeScript's biggest advantage: type safety. That is why it is called a "Type safety hole".

On the other hand, `unknown` provides flexibility while still enforcing safety check. By using type narrowing, developers can safely work with unpredictable data without losing the benefits of TypeScript.
