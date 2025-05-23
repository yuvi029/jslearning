// 🌟 JavaScript Quick Notes & Demo: Number, Math, Date/Time

// ======= 🔢 NUMBER METHODS =======
const num = 123.456;
console.log("Original:", num);

console.log("toString():", num.toString());        // "123.456"
console.log("toFixed(2):", num.toFixed(2));        // "123.46" (2 decimal places)
console.log("toPrecision(4):", num.toPrecision(4)); // "123.5" (4 significant digits)
console.log("toLocaleString('en-IN'):", num.toLocaleString('en-IN')); // "123.456" in Indian format

// ======= 🧮 MATH OBJECT =======

// Absolute value
console.log("Math.abs(-10):", Math.abs(-10));

// Rounding
console.log("Math.round(4.7):", Math.round(4.7));  // 5
console.log("Math.ceil(4.3):", Math.ceil(4.3));    // 5
console.log("Math.floor(4.9):", Math.floor(4.9));  // 4

// Power & Root
console.log("Math.pow(2, 3):", Math.pow(2, 3));    // 8
console.log("Math.sqrt(81):", Math.sqrt(81));      // 9

// Min & Max
console.log("Math.min(1, 4, 7):", Math.min(1, 4, 7));
console.log("Math.max(1, 4, 7):", Math.max(1, 4, 7));

// Random number between 1 and 10
const rand = Math.floor(Math.random() * 10) + 1;
console.log("Random (1-10):", rand);

// Constants
console.log("Math.PI:", Math.PI);
console.log("Math.E:", Math.E);

// Trigonometry
console.log("Math.sin(PI/2):", Math.sin(Math.PI / 2)); // 1

// Volume & Area (Circle/Sphere)
let r = 5;
console.log("Area (Circle):", (Math.PI * r ** 2).toFixed(2));
console.log("Volume (Sphere):", ((4 / 3) * Math.PI * r ** 3).toFixed(2));

// ======= 📅 DATE & TIME =======

const now = new Date();
console.log("\n📅 Current Date:", now.toString()); // Full date string
console.log("📅 Locale Date:", now.toLocaleDateString()); // Short format
console.log("📅 Locale DateTime:", now.toLocaleString()); // Date + time

// Extracting components
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1); // 0-indexed
console.log("Date:", now.getDate());
console.log("Day:", now.getDay()); // 0=Sun
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());

// Timestamp
console.log("Timestamp (ms since 1970):", Date.now());
