import React from 'react'
import PersonCard from './PersonCard'
import gerry from '../images/Gerry.jpg'
import robin from '../images/Robin.jpg'
import jacky from '../images/Jacky.jpg'
import izzy from '../images/Izzy.jpg'
import ted from '../images/Ted.jpg'
import ben from '../images/Ben.jpg'
import rainer from '../images/Rainer.jpg'
import leesa from '../images/Leesa.jpg'
import '../Landing.css'

const person = {
  gerry: {
    photo: gerry,
    name: 'Gerry Patenaude',
    title: 'Creative Director',
    text: [
      'Some comedian once started an autobiographical routine with the declaration: ‘I started out as a child’. It got a laugh. Myself, I started out as a child, too. And in some ways, I’ve never changed. Which is a good thing. Because a lot of what’s called ‘creativity’ is the ability to think in the naive, simple, uninhibited way that a child thinks.',
      'Of course, businesses are run by grownups; work is performed by grownups; grownups undertake the practical, professional, dependable operations of a serious, excellence-driven, creative organization. So, yes, most of the time, I’m a grownup, doing grownup things―branding, design, illustration, video, art direction.',
      'But when it’s time to quietly create, to park my motorcycle and put aside my guitar, to seek and find that magical little inspirational jewel, when it’s just me and the blank monitor screen, it’s comforting to know I still have that child to rely on.',
    ],
  },
  robin: {
    photo: robin,
    name: 'Robin Holdsworth',
    title: 'Art Director',
    text: [
      'If you ever watch Antiques Roadshow you’ll know that what’s called ‘illustrative art’, particularly illustrative art from the golden age of magazine cover art, the 1930’s, 40’s, 50’s and 60’s, is just now coming to be respected for its true intrinsic artistic integrity, and its creators for their skill and talent. The line between ‘illustrative art’ and ‘fine art’ is becoming blurred, and even in some cases, disappearing.',
      'I’m both an illustrative artist and a fine artist. And that’s a good thing, if you’ll forgive my immodesty, for our clients. Because creativity is developed and enhanced by practice, and my passion for all types of artistic endeavours means my creativity gets a constant and vigourous workout, much as my athleticism and fitness gets well exercised in the boxing ring and in the great outdoors. I’ve been an artist all my life, and for the last twelve years I’ve been applying my energy and zeal to branding, web design, and illustration, and to the application of my talents to practical, real-world communication issues. In other words, using art and design to tell our clients’ stories effectively and creatively. Making pictures that are well worth those proverbial thousand words.',
    ],
  },
  jacky: {
    photo: jacky,
    name: 'Jacky Li',
    title: 'Senior Designer',
    text: ['Give Jacky a creative challenge and a computer, then stand back. Animation? Love it. Photo manipulation? Cool. 3D? Easy, peasy. The man is more or less brilliant, our own Jacky-of-all-trades. Bad pun; great designer.'],
  },
  izzy: {
    photo: izzy,
    name: 'Izzy K - G',
    title: 'Design / Photography',
    text: ['When Izzy Gets Busy―it could be a song title. But it isn’t. It’s more like an invocation, a promise, a warning almost. Because when our Izzy gets busy, magic happens. Design magic; image magic; visual magic.'],
  },
  ted: {
    photo: ted,
    name: 'Ted Cowie',
    title: 'Business Development',
    text: ['Trust. Creative is a trust business. And no one has earned more trust in the business than Ted. For over 40 years major Ad Agencies and clients like Home Depot and Budweiser have placed their trust in Ted. So you can, too.'],
  },
  ben: {
    photo: ben,
    name: 'Ben Romvari',
    title: 'Web Programmer',
    text: ['There are web sites and there are web sites. The great ones need more than inspired design; they need inspired programming from an inspired programmer. Ben really gets it, so the rest of us don’t have to.'],
  },
  rainer: {
    photo: rainer,
    name: 'Rainer Plendl',
    title: 'Photography',
    text: ['As a child, Rainer dreamed of becoming a photographer, proving that with hard work, thorough training, and pure, raw talent, dreams can come true. And now, your dream of a Plendl image for your business can come true, too.'],
  },
  leesa: {
    photo: leesa,
    name: 'Leesa Patenaude',
    title: 'Co-Founder',
    text: ['Leesa is a sort of silent partner. A really loud silent partner. Because what Leesa brings to the table is what we call perfect pitch: discretion, instinct, anticipation, intuition. A knack for knowing what works and what doesn’t.'],
  },
}

const WhoWeAre = () => {
  return (
    <div id="whoWeAre">
      <h1 className="lightHeader">WHO WE ARE</h1>
      <PersonCard type="bigLeft" person={person.gerry} />
      <PersonCard type="bigRight" person={person.robin} />
      <div id="whoWeAre_grid">
        <PersonCard type="small" person={person.jacky} />
        <PersonCard type="small" person={person.izzy} />
        <PersonCard type="small" person={person.ted} />
        <PersonCard type="small" person={person.ben} />
        <PersonCard type="small" person={person.rainer} />
        <PersonCard type="small" person={person.leesa} />
      </div>
    </div>
  )
}

export default WhoWeAre
