const fs = require("fs");
const https = require("https");
const path = require("path");

const dir = path.join(__dirname, "public", "logos", "tech");

// Create directory if it doesn't exist
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Map your tech names to Simple Icons slugs
const techLogos = {
  react: "react",
  nextjs: "nextdotjs",
  typescript: "typescript",
  javascript: "javascript",
  tailwind: "tailwindcss",
  framer: "framer",
  shadcn: "shadcnui",
  figma: "figma",
  java: "openjdk",
  spring: "springboot",
  nodejs: "nodedotjs",
  express: "express",
  cpp: "cplusplus",
  mongodb: "mongodb",
  postgresql: "postgresql",
  prisma: "prisma",
  sql: "sqlite",
  docker: "docker",
  aws: "amazonaws",
  git: "git",
  github: "github",
};

Object.entries(techLogos).forEach(([name, slug]) => {
  const file = fs.createWriteStream(path.join(dir, `${name}.svg`));
  https.get(`https://cdn.simpleicons.org/${slug}`, (response) => {
    response.pipe(file);
    console.log(`✅ Downloaded: ${name}.svg`);
  });
});
