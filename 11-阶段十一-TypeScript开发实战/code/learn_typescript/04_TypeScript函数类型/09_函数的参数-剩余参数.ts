function foo(...args: (string | number)[]) {
  console.log(args);
}

foo(123, 321)
foo("abc", 111, "cba")
