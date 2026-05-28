import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 630;
const TEXT_WIDTH = 680;
const PHOTO_WIDTH = WIDTH - TEXT_WIDTH;
const SOURCE = "src/assets/aneta-biurko.jpg";
const OUTPUT = "public/assets/og-image.jpg";

const photo = await sharp(SOURCE)
  .resize(PHOTO_WIDTH, HEIGHT, {
    fit: "cover",
    position: "north",
  })
  .toBuffer();

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${TEXT_WIDTH}" height="${HEIGHT}" fill="#0f1b2d"/>
  <text x="72" y="248" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="700" fill="#ffffff">Aneta Wujkowska</text>
  <text x="72" y="304" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#8b93a0">Ekspert Finansowy · Ostrów Mazowiecka</text>
  <text x="72" y="378" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="700" fill="#2a6fdb">Kredyty po ludzku.</text>
  <text x="72" y="438" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#ffffff">Porównuję banki · bez opłat od Klienta</text>
</svg>`;

await sharp({
  create: {
    width: WIDTH,
    height: HEIGHT,
    channels: 3,
    background: "#0f1b2d",
  },
})
  .composite([
    { input: Buffer.from(svg), top: 0, left: 0 },
    { input: photo, top: 0, left: TEXT_WIDTH },
  ])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(OUTPUT);

console.log(`Generated ${OUTPUT} (${WIDTH}x${HEIGHT})`);
