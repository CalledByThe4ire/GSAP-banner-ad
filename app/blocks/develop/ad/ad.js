/* eslint-env browser */
// eslint-disable-next-line
const ad = document.querySelector('.ad');
const heading = document.querySelector('.heading');
// eslint-disable-next-line
const tl1 = new TimelineMax();
tl1
  .to(ad, 0.5, { opacity: 1 })
  .from(ad.querySelector('.ad__heading--2nd'), 1.3, {
    top: -100,
    // eslint-disable-next-line
    ease: Power2.easeOut
  })
  .to(
    heading.querySelector('.heading__letter--1'),
    2,
    {
      top: 210,
      left: -70,
      rotation: -100,
      // eslint-disable-next-line
      ease: Power2.easeOut
    },
    'letter-=0.9'
  )
  .to(
    heading.querySelector('.heading__letter--2'),
    2,
    {
      top: 210,
      left: -60,
      rotation: 45,
      // eslint-disable-next-line
      ease: Power2.easeOut
    },
    'letter-=0.9'
  )
  .to(
    heading.querySelector('.heading__letter--3'),
    2,
    {
      top: 210,
      left: -50,
      rotation: 200,
      // eslint-disable-next-line
      ease: Power2.easeOut
    },
    'letter-=0.9'
  )
  .to(
    heading.querySelector('.heading__letter--4'),
    2,
    {
      top: 210,
      left: -40,
      rotation: -130,
      // eslint-disable-next-line
      ease: Power2.easeOut
    },
    'letter-=0.9'
  )
  .to(
    heading.querySelector('.heading__letter--5'),
    2,
    {
      top: 210,
      left: -30,
      rotation: 140,
      // eslint-disable-next-line
      ease: Power2.easeOut
    },
    'letter-=0.9'
  )
  .to(
    heading.querySelector('.heading__letter--6'),
    2,
    {
      top: 210,
      left: -20,
      rotation: 125,
      // eslint-disable-next-line
      ease: Power2.easeOut
    },
    'letter-=0.9'
  )
  .to(
    heading.querySelector('.heading__letter--7'),
    2,
    {
      top: 210,
      left: -10,
      rotation: 95,
      // eslint-disable-next-line
      ease: Power2.easeOut
    },
    'letter-=0.9'
  )
  .to(
    heading.querySelector('.heading__letter--8'),
    2,
    {
      top: 210,
      left: 0,
      rotation: -80,
      // eslint-disable-next-line
      ease: Power2.easeOut
    },
    'letter-=0.9'
  )
  .to(
    heading.querySelector('.heading__letter--9'),
    2,
    {
      top: 210,
      left: 10,
      rotation: 220,
      // eslint-disable-next-line
      ease: Power2.easeOut
    },
    'letter-=0.9'
  )
  .to(
    heading.querySelector('.heading__letter--10'),
    2,
    {
      top: 210,
      left: 20,
      rotation: -310,
      // eslint-disable-next-line
      ease: Power2.easeOut
    },
    'letter-=0.9'
  )
  .to(
    heading.querySelector('.heading__letter--11'),
    2,
    {
      top: 210,
      left: 30,
      rotation: 48,
      // eslint-disable-next-line
      ease: Power2.easeOut
    },
    'letter-=0.9'
  )
  .to(
    heading.querySelector('.heading__letter--12'),
    2,
    {
      top: 210,
      left: 40,
      rotation: -30,
      // eslint-disable-next-line
      ease: Power2.easeOut
    },
    'letter-=0.9'
  )
  .to(
    heading.querySelector('.heading__letter--13'),
    2,
    {
      top: 210,
      left: 50,
      rotation: -67,
      // eslint-disable-next-line
      ease: Power2.easeOut
    },
    'letter-=0.9'
  )
  .to(
    heading.querySelector('.heading__letter--14'),
    2,
    {
      top: 210,
      left: 60,
      rotation: -83,
      // eslint-disable-next-line
      ease: Power2.easeOut
    },
    'letter-=0.9'
  )
  .to(
    heading.querySelector('.heading__letter--15'),
    2,
    {
      top: 210,
      left: 70,
      rotation: 70,
      // eslint-disable-next-line
      ease: Power2.easeOut
    },
    'letter-=0.9'
  )
  .to(
    heading.querySelector('.heading__letter--16'),
    2,
    {
      top: 210,
      left: 80,
      rotation: 280,
      // eslint-disable-next-line
      ease: Power2.easeOut
    },
    'letter-=0.9'
  )
  .to(
    heading.querySelector('.heading__letter--17'),
    2,
    {
      top: 210,
      left: 90,
      rotation: -100,
      // eslint-disable-next-line
      ease: Power2.easeOut
    },
    'letter-=0.9'
  )
  // .to(document.querySelector('.ad__heading--1st'), 1, {
  //   top: 210,
  //   // eslint-disable-next-line
  //   ease: Power2.easeOut,
  //   delay: '2'
  // })
  .from(
    ad.querySelector('.ad__img--marker'),
    1,
    {
      top: -110,
      // eslint-disable-next-line
      ease: Bounce.easeOut
    },
    '-=1'
  )
  .from(
    ad.querySelector('.ad__img--shadow'),
    1,
    {
      opacity: 0,
      // eslint-disable-next-line
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
      // eslint-disable-next-line
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
      // eslint-disable-next-line
      ease: Back.easeOut
    },
    'cta'
  );

// tl1.seek('cta');

// eslint-disable-next-line
const tl2 = new TimelineMax({ repeat: -1 });
tl2.to(ad.querySelector('.ad__img--clouds'), 65, {
  backgroundPositionX: 649,
  // eslint-disable-next-line
  ease: Power0.easeOut
});
