/* eslint-env browser */
const ad = document.querySelector('.ad');
const letter = document.querySelectorAll('.heading__letter');

const randomNumber = limit => Math.floor(Math.random() * limit) + 1;

const randomizeLetters = (
  instance,
  array,
  speed = 2,
  i = 10,
  j = 360,
  { top = 210, left = -70, rotation = 0, ease = Power2.easeOut } = {},
  delay = 'letter-=0.9'
) => {
  let l = left;
  array.forEach(item => {
    instance.to(
      item,
      speed,
      {
        top,
        left: l >= 0 ? (l += i) : (l += i),
        rotation: randomNumber(j),
        ease
      },
      delay
    );
  });
  return instance;
};

const tl1 = new TimelineMax();
tl1
  .to(ad, 0.5, { opacity: 1 })
  .from(ad.querySelector('.ad__heading--2nd'), 1.3, {
    top: -100,
    ease: Power2.easeOut
  });
setHeadings(tl1, Array.from(letter));

tl1
  .from(
    ad.querySelector('.ad__img--marker'),
    1,
    {
      top: -110,
      ease: Bounce.easeOut
    },
    '-=1'
  )
  .from(
    ad.querySelector('.ad__img--shadow'),
    1,
    {
      opacity: 0,
      ease: Bounce.easeOut
    },
    '-=1'
  )
  .from(
    ad.querySelector('.ad__img--text'),
    1,
    {
      opacity: 0,
      scale: 0.2,
      ease: Power2.easeOut
    },
    '-=0.25'
  )
  .from(
    ad.querySelector('.ad__img--surfboard'),
    1,
    {
      top: 260,
      left: 300,
      rotation: -130,
      ease: Back.easeOut
    },
    'cta'
  );

// tl1.seek('cta');

const tl2 = new TimelineMax({ repeat: -1 });
tl2.to(ad.querySelector('.ad__img--clouds'), 65, {
  backgroundPositionX: 649,
  ease: Power0.easeOut
});
