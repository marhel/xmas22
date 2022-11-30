// More info about initialization & config:
// - https://revealjs.com/initialization/
// - https://revealjs.com/config/
Reveal.initialize({
  hash: true,
  tagteam: {
      mandatorygroup: true,
      dateFilter: window.location.hostname != "allt.localhost",
      groups: {
        "52f51": {tags: ["dec01"]},
        "82ed6": {tags: ["dec01", "dec02"]},
        "f21a7": {tags: ["dec01", "dec02", "dec03"]},
        "15fa9": {tags: ["dec01", "dec02", "dec03", "dec04"]},
        "05d00": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05"]},
        "983eb": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06"]},
        "6024b": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07"]},
        "0d3ea": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08"]},
        "22c9d": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09"]},
        "712ac": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10"]},
        "90ac8": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11"]},
        "f9c3e": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12"]},
        "fb9f4": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13"]},
        "f7c4b": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14"]},
        "52489": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14", "dec15"]},
        "3adc8": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14", "dec15", "dec16"]},
        "53e83": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14", "dec15", "dec16", "dec17"]},
        "1b189": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14", "dec15", "dec16", "dec17", "dec18"]},
        "63c04": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14", "dec15", "dec16", "dec17", "dec18", "dec19"]},
        "3a362": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14", "dec15", "dec16", "dec17", "dec18", "dec19", "dec20"]},
        "83cc5": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14", "dec15", "dec16", "dec17", "dec18", "dec19", "dec20", "dec21"]},
        "85512": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14", "dec15", "dec16", "dec17", "dec18", "dec19", "dec20", "dec21", "dec22"]},
        "d5c45": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14", "dec15", "dec16", "dec17", "dec18", "dec19", "dec20", "dec21", "dec22", "dec23"]},
        "80caf": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14", "dec15", "dec16", "dec17", "dec18", "dec19", "dec20", "dec21", "dec22", "dec23", "dec24"]},
        "tuttifrutti": {tags: ["dec01", "dec02", "dec03", "dec04", "dec05", "dec06", "dec07", "dec08", "dec09", "dec10", "dec11", "dec12", "dec13", "dec14", "dec15", "dec16", "dec17", "dec18", "dec19", "dec20", "dec21", "dec22", "dec23", "dec24"]}
      }
    },
  dependencies: [{ src: 'assets/reveal.js/plugin/external/external.js', condition: function() { return !!document.querySelector( '[data-external]' ); } } ],
  plugins: [Tagteam],
});