/* Curriculum copy. Freeze: September 2026. Adult + kids layers. */
window.CURRICULUM = {
  meta: {
    asOf: "September 2026",
    freezeNote: "Numbers are frozen to September 2026. Palisades is waking up, not running.",
    snapshot: {
      usReactors: 94,
      usPlants: 54,
      usStates: 28,
      usCapacityGw: 97,
      usSharePct: 18,
      usCfPct: 91,
      worldReactors: 440,
      worldSharePct: 9
    }
  },
  nav: [
    { href: "#/", id: "home", adult: "Home", kid: "Start" },
    { href: "#/learn", id: "learn", adult: "8 sessions", kid: "Lessons" },
    { href: "#/map", id: "map", adult: "Midwest map", kid: "Lake map" },
    { href: "#/safety", id: "safety", adult: "Safety", kid: "Safe or scary?" },
    { href: "#/cost", id: "cost", adult: "Cost", kid: "Two houses" },
    { href: "#/topics", id: "topics", adult: "Encyclopedia", kid: "More pages" },
    { href: "#/topics/waste", id: "waste", adult: "Waste", kid: "Leftovers" },
    { href: "#/print", id: "print", adult: "Print sheets", kid: "Print" },
    { href: "#/claims", id: "claims", adult: "Headlines", kid: "Headlines" }
  ],
  conclusions: {
    adult: [
      "The existing U.S. fleet is the cheapest nuclear megawatt-hour this decade.",
      "Deaths per unit energy sit near wind and utility solar — not near coal. Nuclear’s special problems are a rare bad day, leftover fuel, and the bomb memory.",
      "Fear is historically earned and currently mis-calibrated. Do not scold it.",
      "U.S. homes do not generate nuclear power. They buy grid electricity.",
      "New U.S. plants are too slow and expensive to be a 2020s silver bullet, and still useful for 2030s firm clean power if construction learning happens.",
      "This decade’s building boom is mostly China and Russian exports.",
      "Fusion is not on the 2026 power bill.",
      "In the Great Lakes this is local. Illinois already lives it. Michigan is trying to restart Palisades first in the nation."
    ],
    kid: [
      "The plants we already have are the cheapest nuclear power this decade.",
      "Per amount of electricity, nuclear’s death score sits near wind and solar, not near coal.",
      "Being scared has a history. Learning the three accidents by name makes the fear more precise.",
      "Your house is not a power plant. It is on the grid.",
      "New American plants cost a painful amount the first time.",
      "China is the country actually building a lot right now.",
      "Fusion is later.",
      "In the Great Lakes, this is a local story."
    ]
  },
  sessions: [
    {
      n: 1,
      slug: "what-it-is",
      adultTitle: "What nuclear energy is",
      kidTitle: "What it is",
      adult: [
        "Nuclear energy is heat from changes in an atomic nucleus. In a commercial plant that heat boils water, steam spins a turbine, and the turbine spins a generator. A coal plant does the last steps the same way. The difference is the heat source.",
        "Fission splits a heavy nucleus — usually uranium-235. A neutron hits, the nucleus splits, heat and more neutrons come out. If those neutrons hit more uranium, you get a chain reaction. In a bomb the chain is built to run away. In a reactor, control rods catch neutrons on purpose so the chain stays steady.",
        "Fusion joins light nuclei, the way the Sun does. U.S. plants you can visit today use fission. Fusion is still a lab and capital story.",
        "Capacity is the size of the engine. Generation is how much it actually ran. Nuclear is a small slice of U.S. capacity and a much larger slice of generation because the engines run almost all year.",
        "What we take from this. Nuclear power is a way to make a lot of heat from a small amount of fuel. The same science can make a weapon or a plant. The difference is control.",
        "The other honest view. Calling nuclear “carbon-free” is sloppy. Lifecycle emissions are very low, not zero."
      ],
      kid: [
        "The universe is built from tiny pieces called atoms. Inside each atom is a smaller center called a nucleus. Nuclear energy is what you get when that center changes.",
        "A uranium atom can split. When it splits it throws out heat and tiny particles called neutrons. If one neutron hits another uranium atom, that one can split too. That is a chain reaction — like dominos, except each piece can knock over two more.",
        "In a bomb the chain runs away. In a power plant people slow it down on purpose with control rods. Think of extra hands catching neutrons.",
        "The electricity does not come from a box in your basement. It comes from a big plant, often by a lake, and rides wires to your house mixed with gas, wind, coal, and solar.",
        "What we take from this. Nuclear power is a way to make a lot of heat from a small amount of fuel. The same science can make a weapon or a power plant. The difference is control."
      ]
    },
    {
      n: 2,
      slug: "bomb-to-grid",
      adultTitle: "From discovery to the grid",
      kidTitle: "From bomb to light bulb",
      adult: [
        "The scientific path is short: X-rays and radioactivity in the 1890s, the neutron in 1932, fission in 1938–39. Szilárd saw the chain. Fermi’s team brought Chicago Pile-1 to a controlled chain reaction on 2 December 1942 under Stagg Field.",
        "The first big use was a weapon. The Manhattan Project built Oak Ridge, Hanford, and Los Alamos. Trinity was July 1945. Hiroshima and Nagasaki followed in August. That is why “nuclear” still means “bomb” in public memory before it means “electricity.”",
        "After the war, Congress moved the atom to a civilian commission (1946) and then allowed private plants (1954). EBR-I in Idaho lit four bulbs on 20 December 1951. Obninsk put nuclear electricity on a grid in 1954. Calder Hall (UK, 1956) was first at industrial scale. Shippingport (Pennsylvania, 1957) is the usual U.S. peaceful-commercial marker. The Navy’s Nautilus reactor is why most U.S. plants are light-water machines.",
        "Eisenhower’s 1953 Atoms for Peace speech and the IAEA (1957) created the civilian-plus-safeguards frame. The Non-Proliferation Treaty (1970) is the later global promise: most countries skip weapons, inspectors can check plants, civilian use stays legal. The deal is incomplete. It still explains why a new “just electricity” program gets a diplomatic response a solar farm does not.",
        "What we take from this. Civil nuclear is downstream of a weapons complex. Skipping that makes later fear and the NPT unintelligible."
      ],
      kid: [
        "Scientists learned the nucleus could split in 1938. In 1942, under a football stand in Chicago, Enrico Fermi’s team made a chain reaction on purpose and kept it from running away.",
        "The first big use of this science was a bomb. In 1945 the United States tested one in the desert and used two on the Japanese cities of Hiroshima and Nagasaki. The war ended. Many thousands of people died. That is why a lot of families hear “nuclear” and think “bomb” first.",
        "This site does not teach how a bomb is built. You need the honest order: science, then war, then people trying to use the same heat for lights and hospitals.",
        "In 1951 a small machine in Idaho lit four light bulbs. Other countries put nuclear electricity on real grids. American plants grew out of Navy submarine engines.",
        "What we take from this. The first big use was a weapon. Power plants come after that memory, not before it."
      ]
    },
    {
      n: 3,
      slug: "stall",
      adultTitle: "Why America stopped building",
      kidTitle: "Why building stopped",
      adult: [
        "The 1960s–70s were an order boom. PWRs and BWRs won. France stamped out look-alike plants after 1973. America let each utility design, litigate, and slip. Inflation, rising quality rules, slower demand growth, and cancelled orders hit before Three Mile Island.",
        "TMI-2 (28 March 1979) was a partial core melt. Containment held. Public radiation doses were a sliver of background. Nobody in the public was killed by radiation. Cameras and confused official talk still taught a feeling: this can go wrong in our backyard. TMI turned a financial stall into a trust freeze.",
        "Chernobyl (26 April 1986) was a different machine — an RBMK with a weak lid and graphite that could burn. INES 7. Early radiation deaths among firefighters and operators. Later thyroid cancers in children from iodine-131. Land emptied. America did not copy that design. America also did not start building again.",
        "Fukushima Daiichi (11 March 2011) was a station blackout after earthquake and tsunami. Cores that were “off” still needed cooling. Three melted. UNSCEAR has not documented public radiation health effects the way Chernobyl’s firefighters were hurt. Evacuation and disrupted care did kill people. Cheap shale gas then made many U.S. merchant plants uneconomic. Vogtle 3 and 4 (2023–24) are the expensive exception that finished.",
        "What we take from this. “We stopped building” is not “we stopped using.” The U.S. learned to run old plants at ~90% capacity factor and forgot how to pour new ones on time."
      ],
      kid: [
        "America ordered a lot of plants, then tore up many orders when they got slow and expensive.",
        "In 1979 a plant in Pennsylvania called Three Mile Island melted some fuel inside. The thick building held. Nobody outside was killed by radiation. People still got very scared.",
        "In 1986 a different kind of plant at Chernobyl, in Ukraine, exploded and burned. That was much worse. Workers and firefighters died. Children later got thyroid cancer from a kind of iodine in milk.",
        "In 2011 a huge wave in Japan knocked out the power that ran the cooling pumps at Fukushima. Even a shut reactor stays hot. Three cores melted. The earthquake and wave killed far more people than the radiation did.",
        "What we take from this. A plant can fail on the inside and still protect the outside. People can be unhurt and still decide they do not want another one next door."
      ]
    },
    {
      n: 4,
      slug: "today",
      adultTitle: "The grid today",
      kidTitle: "America right now",
      adult: [
        "Snapshot, September 2026. The United States has 94 operating commercial reactors at 54 plants in 28 states. About 97 GW net. Nuclear is roughly 8% of capacity and 18% of generation. 2025 capacity factor about 91%. Newest unit: Vogtle 4, Georgia, April 2024. Oldest running: Nine Mile Point 1, 1969. Large everyday-style U.S. reactors under construction: zero.",
        "What is moving instead: restarts (Palisades in Michigan, Crane / former TMI-1 in Pennsylvania), uprates, and first advanced projects. TerraPower’s Natrium plant in Wyoming received a construction permit in March 2026 and started construction in April. That is dirt, not megawatt-hours on a bill.",
        "Illinois often gets about half its in-state electricity from nuclear — 11 reactors, the most of any state. Michigan’s share slid toward ~19–22% after Palisades closed in 2022. Gas filled the hole. World: about 440 operable reactors, ~9% of electricity. China is connecting the new ones.",
        "Nuclear’s grid job is firm, clean, around-the-clock power from a few sites with small land use. It does not correlate with wind and sun. That is why data-center offtakers started shopping for it.",
        "What we take from this. America still has the biggest nuclear-use story. It does not, right now, have the biggest nuclear-building story."
      ],
      kid: [
        "Hold this snapshot. It is dated September 2026.",
        "The United States has 94 nuclear machines at 54 plants in 28 states. They make about 18 of every 100 kilowatt-hours. They are only a small slice of America’s engines, but those engines run almost all the time.",
        "Picture it this way. Nuclear is a few strong horses that walk all day. Solar and wind are many horses that sprint when the weather says so. Gas is the horse America calls when the others are tired.",
        "Illinois makes more nuclear electricity than any other state — often about half of Illinois’s own power. Michigan’s share got smaller when Palisades on Lake Michigan went quiet.",
        "What we take from this. America still uses a lot of nuclear power. It is not building many new plants right now."
      ]
    },
    {
      n: 5,
      slug: "safety",
      adultTitle: "Safety versus fear",
      kidTitle: "Safe or scary?",
      adult: [
        "Use two tracks. Track one is measured harm per unit energy. Track two is dread: invisible, delayed, tied to cancer, born as a weapon, remembered as three names.",
        "A widely cited scoreboard (accidents plus air pollution, Our World in Data synthesis) puts brown coal near 33 deaths per TWh, coal near 25, oil near 18, gas near 2.8, hydro near 1.3, wind near 0.04, nuclear near 0.03, utility solar near 0.02. That is a model. It moves if you change Chernobyl’s latent-cancer assumption. The robust point: routine fossil air pollution dominates energy’s death toll.",
        "TMI contained a partial melt. Chernobyl was a design-plus-test disaster with a large release. Fukushima was a cooling failure after a natural disaster; public radiation deaths are not established the way Chernobyl’s early deaths are; evacuation harm is real.",
        "Residual issues that are not “just perception”: spent fuel still at plant sites, sabotage and wartime targeting (Zaporizhzhia), dual-use enrichment, cost overruns that become political risk, cooling water in a hotter climate, and who lives near mines and waste.",
        "What we take from this. You can respect the fear and still read the record. The record says American plants have not killed the public with radiation. The record also says “never” is not a promise anyone honest makes."
      ],
      kid: [
        "Some energy sources hurt people a little bit all the time. Coal smoke is like that. Some almost never hurt people and then, on a terrible day, can hurt a lot. Nuclear is closer to the second kind.",
        "Three names do most of the scaring. Pennsylvania 1979: fuel melted inside, building held, no public radiation deaths. Ukraine 1986: explosion and fire, workers died quickly, later cancers were real. Japan 2011: earthquake and wave, cooling failed, cores melted. The wave killed about twenty thousand people. Radiation from the plant did not do that.",
        "Feelings have reasons. Radiation is invisible. Cancer is slow. The first headline was a bomb. A person is not silly for feeling a jolt.",
        "What we take from this. You can respect the fear and still read the record."
      ]
    },
    {
      n: 6,
      slug: "midwest",
      adultTitle: "Michigan and the Great Lakes",
      kidTitle: "The lakes",
      adult: [
        "National nuclear talk is abstract. Midwest nuclear is plants you can drive to.",
        "Michigan operating: Donald C. Cook 1 & 2 at Bridgman on Lake Michigan (about 2,177 MW, AEP) and Fermi 2 near Monroe on Lake Erie (1,141 MW, DTE). Palisades in Covert Township closed 20 May 2022 and is the first U.S. attempt to leave decommissioning. Fuel loading began 30 August 2026. NRC status boards still showed 0% power on 2 September 2026. Restarting is not generating.",
        "Fermi 1, on the Fermi 2 site, was a sodium-cooled fast breeder. On 5 October 1966 a loose plate blocked sodium flow. Two assemblies partially melted. Operators scrammed. No offsite release. John G. Fuller’s book titled the public memory We Almost Lost Detroit. Teach the accident and the myth as two layers.",
        "Illinois is the regional existence proof: about half of in-state generation, 11 reactors. Ohio still runs Perry and Davis-Besse — the latter carrying the 2002 vessel-head wastage scar. Iowa’s Duane Arnold is in the same restart conversation, behind Palisades. Indiana has no commercial reactors and still rides the same wires.",
        "What we take from this. If Palisades really returns, Michigan’s mix and MISO reliability move more than any 2030s SMR slide deck."
      ],
      kid: [
        "This is not only a country story. It is a lake story.",
        "Cook sits at Bridgman on Lake Michigan with two machines. Fermi 2 sits near Monroe on Lake Erie. Palisades sits on Lake Michigan and is being prepared to start again. Loading fuel is not making electricity. The pin stays yellow until the machine is on.",
        "On 5 October 1966, Fermi 1 had an accident inside. A loose piece of metal blocked the cooling. Some fuel melted. The building held. Nobody off the site was hurt by radiation. A famous book later said “we almost lost Detroit.” The honest version: a real accident, a lid that worked, no cloud over the city.",
        "Next door, Illinois gets about half its electricity from nuclear plants.",
        "What we take from this. If you live in the Midwest, nuclear is a set of gates on the lakes, not a textbook picture from the desert."
      ]
    },
    {
      n: 7,
      slug: "cost",
      adultTitle: "LCOE versus firm clean watts",
      kidTitle: "Two houses",
      adult: [
        "LCOE asks: if I build this plant and it runs as assumed, what is the average cost of each megawatt-hour? That is a useful fence-line number. It is not a grid plan.",
        "Unsubsidized new-build ranges in Lazard-style 2025–26 reports typically put onshore wind and utility solar around $40–100/MWh and new U.S. nuclear, Vogtle-anchored, around $175–255/MWh. That chart is why people say new nuclear cannot compete. The chart under-weights firmness, capacity credit, multi-day weather droughts, and the fact that an existing plant is not Vogtle.",
        "Vogtle 3 and 4: about 2.2 GW for a widely reported all-in bill on the order of $32–35+ billion — roughly $15,000–16,500 per kW. The only modern completed U.S. new-build receipt. Unit 4 was cheaper than Unit 3. “Nth-of-a-kind at $6,000/kW” is a target. NuScale’s cancelled Utah project printed a warning near $20,000/kW on the way down.",
        "Existing U.S. nuclear — fuel, people, maintenance — is a different object. Keep-running and credible restarts beat FOAK plants on time. Data-center PPAs are price discoveries for carbon-free power that does not vanish on a still winter night.",
        "What we take from this. Old plants: cheap to keep if they are safe. New plants: expensive the first time, maybe less the fifth. Wind and solar: cheaper to begin, not a full copy of a plant that runs at 2 a.m. Anyone who tells you only one of those sentences is selling a side."
      ],
      kid: [
        "House A is paid off. You still buy heat and fix the roof. That bill is real. It is not a second mortgage.",
        "House B is a custom house you start after all the old builders retired. The first one costs a fortune because people have to remember how.",
        "An American nuclear plant that already exists is House A. A brand-new American plant today is House B. The last new pair America finished, Vogtle 3 and 4 in Georgia, cost on the order of thirty-something billion dollars for two big machines. The second one cost less than the first. Practice matters.",
        "Wind and solar are cheaper to start. They need extra help when the wind dies and the sun sets.",
        "What we take from this. Old plants are cheap to keep. New plants are expensive the first time. Different tools, different bills."
      ]
    },
    {
      n: 8,
      slug: "next",
      adultTitle: "What happens next",
      kidTitle: "What might happen next",
      adult: [
        "Three buckets. Bucket 1 — wake old plants. Palisades loaded fuel in August 2026. Crane (TMI-1) is a 2027-class target with a Microsoft PPA. Duane Arnold is behind both. Bucket 2 — first new kinds. Natrium is under construction in Wyoming. X-energy / Dow in Texas is in licensing. Light-water SMRs are a construction thesis not yet proven at U.S. commercial scale. Bucket 3 — talk. A political target to go from ~100 GW to 400 GW by 2050 is not an EIA forecast. America added only a few GW of new nuclear in the previous 25 years.",
        "Fusion: NIF ignition in 2022 was a physics win, not a power plant. Company dates cluster in the late 2020s and early 2030s. Careful reviews often say pilot later, fleet after that. Keep three clocks — physics, machine duty-cycle, grid interconnection.",
        "Waste: commercial spent fuel still sits at plants. Yucca Mountain remains the letter of the Nuclear Waste Policy Act and a political dead end. 2026 talk of consent-based “lifecycle campuses” is policy in motion, not a licensed repository. Finland is the Western benchmark for actually pouring a deep home.",
        "What we take from this. The 2020s U.S. story is keep and restart. The 2030s might be build strange new ones. Do not mix those calendars."
      ],
      kid: [
        "Forget movie dates. Use three buckets.",
        "Bucket 1: waking old plants. Palisades loaded fuel in August 2026. A Pennsylvania plant that used to be Three Mile Island Unit 1 wants to come back around 2027.",
        "Bucket 2: new kinds, first tries. In Wyoming people started building a different kind of plant in 2026. That is real dirt. It is not electricity on your bill yet.",
        "Bucket 3: talk. Speeches about a huge American nuclear future sound big. Concrete is the test.",
        "Fusion is the Sun’s trick. A lab spark in 2022 was a science win. It is not your night-light.",
        "What we take from this. The next few years are mostly “keep and restart.” Brand-new machines come later, if they come."
      ]
    }
  ],
  topics: [
    { id: "foundations", title: "Foundations", session: 1 },
    { id: "history", title: "History, 1895–1979", session: 2 },
    { id: "stall", title: "TMI to Vogtle", session: 3 },
    { id: "today", title: "U.S. fleet now", session: 4 },
    { id: "safety", title: "Safety, real and perceived", session: 5 },
    { id: "waste", title: "Waste and the NPT", session: 8, href: "#/topics/waste" },
    { id: "midwest", title: "Great Lakes layer", session: 6 },
    { id: "cost", title: "Cost and firm power", session: 7 },
    { id: "future", title: "Restarts, SMRs, fusion", session: 8 },
    { id: "uses", title: "Uses beyond electricity", session: 4 }
  ],
  uses: {
    adult: [
      "Residential nuclear generation does not exist in the U.S. consumer market. Households consume nuclear as grid kilowatt-hours.",
      "The actual nuclear device in many houses is an ionization smoke detector with a speck of americium-241.",
      "Hospitals use radioisotopes for scans and some treatments. Medical tools and some foods are irradiated to kill germs without becoming reactors.",
      "The Navy runs submarines and carriers on reactors. Space probes far from the Sun use radioisotope heat batteries.",
      "Other countries use plant heat for district heating and desalination. U.S. advanced-reactor pitches add factory heat and hydrogen. Treat those as prospective unless a site is pouring concrete."
    ],
    kid: [
      "Your house is on the grid, not sitting on a reactor.",
      "A smoke detector may hold a speck of a nuclear metal that helps it see smoke. That is tiny and sealed.",
      "Hospitals use small amounts of radioactive material so doctors can see bones and hearts, or treat disease.",
      "Some spaceships stay alive far from the Sun with little nuclear heat-batteries.",
      "Submarines use reactors so they can stay down without a long fuel hose."
    ]
  },
  accidents: [
    {
      id: "tmi",
      name: "Three Mile Island",
      place: "Pennsylvania, USA",
      date: "28 March 1979",
      ines: "5",
      design: "PWR with a large containment building",
      broke: "A stuck valve, confused instruments, and some melted fuel",
      offsite: "A sliver of extra radiation. Far less than a year’s background for neighbors.",
      deaths: "No public radiation deaths.",
      land: "No exclusion zone like Chernobyl.",
      after: "America kept old plants and almost stopped finishing new ones.",
      kidStory: "Fuel melted inside. The thick building held. Nobody outside was killed by radiation. People still got very scared.",
      adultStory: "Partial core melt in Unit 2. Containment worked. Public doses small versus background. The political aftershock was larger than the radiological one."
    },
    {
      id: "chernobyl",
      name: "Chernobyl",
      place: "Ukraine (then USSR)",
      date: "26 April 1986",
      ines: "7",
      design: "RBMK graphite channel reactor without a Western-style containment lid",
      broke: "An unsafe test, a design that could run away, then explosion and graphite fire",
      offsite: "A large release across Europe. Iodine-131 in milk was the children’s pathway.",
      deaths: "On the order of 30 early deaths among firefighters and operators. Later cancer deaths estimated in the thousands among the most exposed — an estimate with a wide range, not a body count.",
      land: "A large emptied zone that still exists.",
      after: "The word nuclear got heavier even in countries that never built that design.",
      kidStory: "A different, weaker-lidded machine exploded and burned. Workers and firefighters died. Children later got thyroid cancer from iodine in milk. Towns were emptied.",
      adultStory: "Worst civilian power-plant disaster. Not a U.S. design. Still the picture most of the world reaches for when someone says “nuclear accident.”"
    },
    {
      id: "fukushima",
      name: "Fukushima Daiichi",
      place: "Japan",
      date: "11 March 2011",
      ines: "7",
      design: "BWRs that lost all power after an earthquake and tsunami",
      broke: "Station blackout. Cores that were shut still needed cooling. Three melted. Hydrogen wrecked buildings.",
      offsite: "Radioactive air and water escaped. Public radiation sickness like Chernobyl’s firefighters did not follow.",
      deaths: "The tsunami killed about 20,000 people on the coast. Radiation from the plant did not. Evacuation, lost medical care, and stress did kill people.",
      land: "Empty towns and a long water-cleanup job.",
      after: "Japan shut most plants. Germany sped up an exit. America added extra hoses and pumps.",
      kidStory: "A huge wave knocked out the power that ran the cooling pumps. Even a shut reactor stays hot. Three cores melted. The wave, not the radiation, was what killed so many people that day.",
      adultStory: "A natural disaster plus a cooling failure. INES 7 by release size. The health lesson is not “same as Chernobyl.” The engineering lesson is “off is not cold.”"
    }
  ],
  glossary: [
    { term: "Atom", kid: "A tiny building block of stuff.", adult: "Basic unit of a chemical element." },
    { term: "Nucleus", kid: "The center of an atom.", adult: "The dense core of protons and neutrons." },
    { term: "Fission", kid: "Splitting a heavy nucleus.", adult: "A heavy nucleus splits, releasing energy and neutrons." },
    { term: "Fusion", kid: "Joining light nuclei, like the Sun.", adult: "Light nuclei combine; commercial electricity is not here yet." },
    { term: "Chain reaction", kid: "Splits that cause more splits.", adult: "Neutrons from one fission induce further fissions." },
    { term: "Control rod", kid: "A piece that soaks up particles so the chain slows down.", adult: "Neutron absorber used to regulate reactivity." },
    { term: "Reactor", kid: "The pot where the chain is kept on purpose.", adult: "System that sustains a controlled chain reaction." },
    { term: "Radiation", kid: "Energy or particles that fly off some atoms.", adult: "Energy emitted as particles or waves; dose is what matters." },
    { term: "Grid", kid: "The web of wires that moves electricity.", adult: "Interconnected transmission and distribution system." },
    { term: "Capacity", kid: "How big the engine is.", adult: "Maximum electrical output, usually in MW or GW." },
    { term: "Generation", kid: "How much the engine actually made.", adult: "Energy produced over time, in MWh or TWh." },
    { term: "Capacity factor", kid: "How much of the year the engine actually ran.", adult: "Actual generation divided by generation if it had run at full power all year." },
    { term: "LCOE", kid: "A homework-average cost of each unit of electricity.", adult: "Levelized cost of electricity. Fence-line average; leaves out firming." },
    { term: "Cask", kid: "A thick dry barrel for used fuel.", adult: "Dry storage container for cooled spent fuel." },
    { term: "SMR", kid: "A smaller reactor meant to be built in pieces.", adult: "Small modular reactor, typically under ~300 MWe, factory-fabrication thesis." },
    { term: "NPT", kid: "A promise most countries signed: no new bomb programs, inspectors can check plants.", adult: "Nuclear Non-Proliferation Treaty (in force 1970)." }
  ],
  claims: [
    { headline: "Tiny reactor will power every house next year", tags: ["on?", "who pays?", "compared with what?"] },
    { headline: "Nuclear is the deadliest way to make electricity", tags: ["which accident?", "per what?"] },
    { headline: "Palisades is back online", tags: ["on?", "0% power"] },
    { headline: "Fusion will make bills too cheap to meter", tags: ["on?", "which clock?"] },
    { headline: "Wind is always cheaper than nuclear", tags: ["compared with what?", "2 a.m.?"] },
    { headline: "America is building a nuclear renaissance", tags: ["on?", "China cranes?"] }
  ],

  waste: {
    adultTitle: "Used fuel, casks, Yucca, and the NPT",
    kidTitle: "Leftover fuel, and the promise about bombs",
    adult: [
      "After uranium splits for a few years the fuel is used. It is still hot and radioactive. It is not a mountain. For the electricity you got, the leftover pile is small.",
      "Used fuel sits under water in a pool at the plant until it cools. Then it goes into dry casks — thick barrels on a pad. Those casks have a strong U.S. safety record. They were supposed to be a waiting room. The waiting room became the hotel.",
      "The Nuclear Waste Policy Act sent the forever basement to Yucca Mountain in Nevada. Nevada refused. Congress stopped paying. Commercial spent fuel — on the order of 90,000 metric tons and rising — stays in the states that made the electricity. In 2026 the live political option is consent-based siting and talk of nuclear lifecycle campuses. That is policy in motion, not a licensed repository. Finland’s Onkalo is the Western benchmark for actually pouring a deep home.",
      "The same science that makes plant fuel can, if pushed much further, make weapons material. The Nuclear Non-Proliferation Treaty (in force 1970) is the global promise: most countries skip new bomb programs; inspectors can check plants; civilian use stays legal. Some countries never signed. Some cheated. Iran is the live compliance fight. The deal is incomplete and still explains why a new “just electricity” program gets a diplomatic response a solar farm does not.",
      "Prairie Island in Minnesota makes the abstract local: two small operating PWRs beside the Prairie Island Indian Community, with dry casks on site for decades. Michigan’s closed Big Rock Point still has casks inland from Lake Michigan.",
      "What we take from this. The leftover fuel is a real unsolved American politics problem, not a bubbling cartoon barrel. The weapons promise is why nuclear electricity is never only an electricity story.",
      "The other honest view. Reprocessing shrinks volume and does not erase the need for a repository. It also raises proliferation and cost arguments. Neither “leave it at the plant forever” nor “reprocess and the problem vanishes” is a finished answer."
    ],
    kid: [
      "After uranium splits for a few years, the fuel is used. It is still hot. It is still radioactive. It is not a giant mountain.",
      "Used fuel sits under water in a pool at the plant until it cools. Then it goes into dry casks — thick barrels on a pad you could walk past. Those barrels have a strong safety record in America. They were supposed to be a waiting room. The waiting room became the hotel.",
      "The country picked a mountain in Nevada called Yucca Mountain as the forever basement. Nevada did not want it. So the fuel stays in the states that made the electricity.",
      "Now the bomb problem, in kid words. The same science that makes plant fuel can, if pushed much further, make weapons material. In 1970 most countries signed a promise: no new bomb programs, inspectors can check power plants, and countries can still use nuclear for electricity and medicine. The promise is not perfect. That is one reason grown-ups argue.",
      "What we take from this. The leftover fuel is a real unsolved American politics problem, not a bubbling cartoon barrel."
    ]
  },
  sources: [
    "U.S. EIA nuclear FAQs and reactor capacity tables (through 2026 updates)",
    "NRC power reactor status report, 2 September 2026",
    "IAEA PRIS / Country Nuclear Power Profiles",
    "World Nuclear Association reactor tables (advocacy organization; good counts, label it)",
    "UNSCEAR on Chernobyl and Fukushima",
    "Our World in Data energy safety synthesis",
    "Lazard LCOE+ 2025–2026 ranges (fence-line, not a grid plan)",
    "Curriculum freeze: September 2026"
  ]
};
