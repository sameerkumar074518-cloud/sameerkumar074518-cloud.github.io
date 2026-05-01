const CACHE_NAME = "gamehub-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.png",

  /* GAMES */
  "./games/tic.html",
  "./games/snake.html",
  "./games/rps.html",
  "./games/guess.html",
  "./games/memory.html",
  "./games/breakout.html",
  "./games/mole.html",
  "./games/2048.html",
  "./games/flappy.html",
  "./games/aim.html",
  "./games/color-switch.html",
  "./games/bomb.html",
  "./games/puzzle.html",
  "./games/runner.html",
  "./games/reaction.html",
  "./games/beat.html",
  "./games/shooting.html",
  "./games/stack.html",
  "./games/traffic.html",
  "./games/iq.html",
  "./games/music-quiz.html",

  /* QUIZ */
  "./quiz/quiz.html",

  /* OPTIONAL */
  "./video/bg.mp4"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});