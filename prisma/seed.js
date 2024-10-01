import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const posts = [
  {
    title: "Javascript Performance Tips",
    body: "We will look at 10 simple tips and tricks to increase the speed of your code when writing JS",
  },
  {
    title: "Advanced JS Debugging",
    body: "Master the art of debugging with these advanced techniques in JavaScript.",
  },
  {
    title: "Optimizing DOM Manipulation",
    body: "Learn how to optimize DOM manipulation for faster and smoother web performance.",
  },
  {
    title: "JavaScript Memory Management",
    body: "Understand memory management in JS to avoid memory leaks and optimize performance.",
  },
  {
    title: "Async Programming in JS",
    body: "Explore how to improve code efficiency with asynchronous programming patterns.",
  },
  {
    title: "Handling Large Datasets in JS",
    body: "Techniques to efficiently handle large datasets without compromising speed.",
  },
  {
    title: "JavaScript Code Profiling",
    body: "Learn how to profile your JS code to identify and fix performance bottlenecks.",
  },
  {
    title: "Efficient Event Handling",
    body: "Best practices for event handling in JavaScript to avoid performance issues.",
  },
  {
    title: "JS Best Practices for Loops",
    body: "Discover optimal loop structures and techniques for high-performance JS code.",
  },
  {
    title: "Lazy Loading Techniques",
    body: "Implement lazy loading to improve performance and reduce initial load times.",
  },
  {
    title: "JS Framework Performance Comparison",
    body: "A deep dive into the performance of popular JS frameworks like React, Vue, and Angular.",
  },
  {
    title: "Minifying JS for Performance",
    body: "Learn how to minify your JS code to reduce load times and improve performance.",
  },
  {
    title: "Concurrency in JavaScript",
    body: "Understand concurrency and how to use web workers to improve performance.",
  },
  {
    title: "Best Practices for JS Promises",
    body: "Optimize promise handling to ensure efficient async operations in your code.",
  },
  {
    title: "Tree Shaking in JavaScript",
    body: "Explore how tree shaking can help reduce bundle size and boost performance.",
  },
  {
    title: "Throttling and Debouncing in JS",
    body: "Learn how to use throttling and debouncing to improve UI responsiveness.",
  },
  {
    title: "Memory-Efficient Data Structures in JS",
    body: "Use memory-efficient data structures to keep your JavaScript code lean and fast.",
  },
  {
    title: "Modular JavaScript for Better Performance",
    body: "Structure your JS code into modules for better maintainability and performance.",
  },
  {
    title: "Efficient JSON Handling in JS",
    body: "Handle JSON data efficiently in JavaScript to avoid performance slowdowns.",
  },
  {
    title: "JS Performance Testing Tools",
    body: "Discover various tools that help test and improve JavaScript performance.",
  },
];

const users = [
  {
    username: "jian",
    password: "jian123",
  },
];

async function seedPost() {
  await Promise.all(
    getPosts().map((post) => {
      return db.post.create({ data: post });
    })
  );
}
seedPost();

async function seedUser() {
  await Promise.all(
    getUsers().map((user) => {
      return db.user.create({ data: user });
    })
  );
}

seedUser();

function getPosts() {
  return posts;
}

function getUsers() {
  return users;
}
