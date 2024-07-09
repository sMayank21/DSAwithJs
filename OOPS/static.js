class User {
  constructor(name , age) {
    this.name = name;
    this.age = age;
  }
}

const user1 = new User("Rakesh",32);
const user2 = new User("Mukesh",44);
const user3 = new User("Suresh",24);

const user = [user1,user2,user3];
user.sort((a,b) => a.age-b.age);

console.log(user);

