export {};

namespace Japanese{
  export class Person {
    constructor(public name: string) {}
  }

}
namespace English{
  class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Person("はむさん");
console.log(me.name);
