const doSomething = async () => {
  await Promise.resolve(console.log("🎉"));
};

doSomething();

(async function () {
  await Promise.resolve(console.log("🎉"));
  // → 🎉
})();

await Promise.resolve(console.log("🎉"));

