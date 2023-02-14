import tv from './tv.js';

const tv1 = new tv(
    "LG",
    45,
    36,
    54,
    "Off",
    16,
    65,
    70,
    12,
    15
);

console.log(tv1.getHue());
tv1.setHue(99);
console.log(tv1.getHue());

