import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Box, chakra, Heading, HStack, IconButton, Link} from "@chakra-ui/react";
import {RepeatIcon} from "@chakra-ui/icons";

export default function Home({heroes, modifiers}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Superfight</title>
                <meta name="description" content="Digitized by Samyok"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <HStack
                    w="full"
                    spacing={12}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box
                        w="xs"
                        bg={"gray.800"}
                        shadow="lg"
                        rounded="lg"
                        overflow="hidden"
                        mx="auto"
                    >

                        <Box p={5} textAlign="center">
                            <Heading
                                display="block"
                                fontSize="2xl"
                                color={"white"}
                                fontWeight="bold"
                            >
                                {heroes[0]}
                            </Heading>
                            <chakra.span
                                fontSize="sm"
                                color={"gray.200"}
                            >
                                {modifiers[0]}
                            </chakra.span>
                        </Box>
                    </Box> <IconButton onClick={() => {
                    window.location.reload()
                }} icon={<RepeatIcon/>}
                                       aria-label={"reload"}/>

                    <Box
                        w="xs"
                        bg={"gray.800"}
                        shadow="lg"
                        rounded="lg"
                        overflow="hidden"
                        mx="auto"
                    >

                        <Box p={5} textAlign="center">
                            <Heading
                                display="block"
                                fontSize="2xl"
                                color={"white"}
                                fontWeight="bold"
                            >
                                {heroes[1]}
                            </Heading>
                            <chakra.span
                                fontSize="sm"
                                color={"gray.200"}
                            >
                                {modifiers[1]}
                            </chakra.span>
                        </Box>
                    </Box>
                </HStack>
            </main>
            <footer style={{position: "fixed", bottom: 10, left: "50%", transform: "translateX(-50%)", color: "rgba(0,0,0,0.4)"}}>
                Made by Samyok Nepal | <Link href="https://github.com/samyok/superfight" target={"_blank"}>Github</Link>
            </footer>
        </div>
    )
}

const modifiers = ` 10 of them
 10 of them
 10 stories tall
 10 stories tall
 10 stories tall
 100 of them
 100 of them
 100 stories tall
 100 stories tall
 3 of them
 3 of them
 3 stories tall
 3 stories tall
 3 stories tall
 3-foot fingernails
 50 of them
 50 of them
 6 inches tall
 6 inches tall
 9 feet tall
 9 feet tall
 acid blood
 afraid of water
 agoraphobic
 allergic to all animals
 armed with a bacon-wrapped baseball bat
 armed with a barbed wore net
 armed with a cannon
 armed with a catapult and unlimited livestock
 armed with a cattle prod
 armed with a chainsaw
 armed with a crowbar
 armed with a flamethrower
 armed with a freeze ray
 armed with a harpoon gun
 armed with a lightsaber
 armed with a live t-rex on a stick
 armed with a long electrified whip
 armed with a machine gun
 armed with a nail gun
 armed with a poison-tipped lance
 armed with a portal gun
 armed with a puppy musket
 armed with a rocket launcher
 armed with a sadness ray
 armed with a samurai sword
 armed with a shotgun
 armed with a shotgun that shoots shotguns
 armed with a shrink ray
 armed with a sniper rifle
 armed with a superglue fire hose
 armed with a tranquilizer gun
 armed with a trident
 armed with an infinite sausage lasso
 armed with an impenetrable shield
 armed with Axe
 armed with catarangs
 armed with Cupid's bow
 armed with dynamite
 armed with ghost pepper spray
 armed with holy hand grenades
 armed with nunchucks
 armer with a bow and unlimited arrows
 balancing on a circus ball
 being guarded by the secret service
 believes they are invisible
 bionic
 breathes fire
 can animate dirt
 can become any animal
 can become mist while holding breath
 can blow 200-mph winds
 can breathe underwater
 can change into a_ at will
 can change into a_at will.
 can clone self but each clone is half as smart as the previous
 can clone self but each clone is half the size of the previous
 can control gravity
 can control hair
 can control machines
 can control opponent's right hand
 can control plants
 can create a hologram of self
 can dig and run through tunnels with super speed
 can fly
 can fly but only two feet above the ground
 can fly if nobody is watching
 can hold breathe forever
 can kill with a kiss
 can make a force field while holding breath
 can match opponent's size
 can only be killed by beheading
 can only move by back flipping
 can only move when opponent moves
 can only see movement
 can possess opponent for 30 seconds then gets very tired
 can read minds
 can run 200 mph but only in a straight line
 can see 3 seconds into the future
 can stop time while holding breath
 can stretch like rubber
 can summon am army internet trolls
 can summon anything from a hardware store
 can take the form of anything the touch
 can take the form of anything water-based
 can teleport but goes blind for 10 seconds after each use
 can throw sticky bombs
 can turn into any vehicle
 can turn invisible while singing snow tunes
 can turn to steel
 can walk through sold objects
 can't see
 can't stop clapping
 can't stop dancing
 can't stop laughing
 can't stop sobbing
 can't turn left
 carrying a baby
 carrying way too many grocery bags
 catlike reflexes
 clothes are way too big
 clothes are way too tight
 constantly taking selfies
 controls a tween army
 controls all animals
 controls an army of flying monkeys
 controls magnetism
 controls weather
 covered in eyes
 covered in spikes
 distracted by shiny things
 driving a tank
 driving popemobile
 eliminate all attributes in this fight
 entire body is very sticky
 everything the touch turns to hummus
 explodes if the stop moving
 figuratively "on fire" ...and literally
 floating down on a parachute
 frost breath
 handcuffed to golf cart
 hands are covered in butter
 hands glued to hips
 has a 6-foot neck
 has a battleship
 has a beard made bees
 has a hostage
 has a magical unicorn horn
 has a skunk on a stick
 has a time machine phone booth
 has a voodoo doll of opponent
 has an invisible cloak
 has an invisible jet
 has feet instead of hands
 has hands instead of feet
 has jellyfish instead of hands
 has majestic flamming antlers growing of head
 has no bones
 has one tiny baby arm
 has telekinesis
 has tiny bird legs
 has tiny t-rex arms
 has two extra arms
 has two peg legs
 has vertigo
 has x-ray vision
 heals 100 times faster than normal
 horrible self-esteem
 I'm a berserker rage
 in a blimp
 in a helicopter
 in a hot air balloon
 in a jet fighter
 in a space suit
 inside a giant hamster ball
 invisible
 is a 1000 years old
 is a baby
 is a belieber and is convinced opponent means bieber bodily harm
 is a hoarder
 is a hypnotist
 is a piñata
 is a stuffed
 is a super genius
 is a tween
 is amish
 is drunk
 is elderly
 is having a really good hair day
 is made of guacamole
 is rabid
 is radioactive
 is really hangry
 is really into fonts
 is really really good-looking
 is really really stupid
 just drank five energy drinks
 killed by water
 knows knug fu
 laser eyes
 lays exploding eggs
 leeches opponent's health when touched
 literal jazz hands
 literally wearing beer goggles
 literally wearing heart on sleeve
 locked in a antique diver's helmet
 locked in a shark cage
 long metal claws pop out of hands
 made of lava
 made of mirrors
 made of paper
 made of sand
 made of stone
 megafighter!
 morbidly obese
 mustache can stretch and move at will
 narcoleptic
 no arms
 no depth perception
 no legs
 on a jet ski
 on a pogo stick
 on a segway
 on a velocipede
 on stilts
 only has one leg
 pacifist
 piloting an attack drone
 pregnant
 really clumsy
 really really has to pee
 relies on heat vision to see
 relies on sonar to see
 riding a battle cat
 riding a broomstick
 riding a depressed centaur
 riding a flying narwhal
 riding a horse
 riding a hoverboard
 riding a motorcycle
 riding a war elephant
 scissor hands
 screams names of attacks before using them
 shoots acid
 shoots bees from mouth
 shoots blinding light from hands
 shoots glitter
 shoots laughing gas
 shoots lightning
 shoots poison darts from nose
 shoots tear gas
 shoots webs
 slows time when eyes are closed
 sonic scream
 sprays neurotoxin
 stone gaze
 suffering from delusions of grandeur
 summons cats to do bidding
 super endurance
 super jump
 super strength
 swinging a shark on a chain
 thinks the floor is actually lava
 throwing spears
 throws 200-mph fastballs
 throws antiques
 throws bears
 throws burritos
 throws fireballs
 throws knives
 throws ninja stars
 tongue can stretch and move at will
 trapped in a potato sack
 two extra legs
 unaffected by impact
 used to be a bear
 uses the force
 venomous bite
 walking twelve wiener dogs
 wall-crawler
 wearing a flaming tutu
 wearing a impenetrable tuxedo
 wearing a jetpack
 wearing a meat bikini
 wearing a robotic exoskeleton
 wearing a scuba suit
 wearing a suit of armor
 wearing a tin foil hat
 wearing cement shoes
 wearing one of those comes they put on pets to keep them from licking themselves
 wearing rocket-powered roller skates
 wearing sharpened stilettos
 wearing skis
 with a prehensile tail
 armed with a dubstep gun
 armed with a Gatling gun
 armed with a lightsaber that has two smaller lightsabers sticking out of the hilt
 armed with a machete
 armed with a piranha launcher
 armed with a railgun
 armed with a really really bright laser pointer
 armed with a surface-to-air missile launcher
 armer with a limitless loot crate
 can call orbital bombardments
 can fly...at the speed of molasses
 can leap over tall buildings in a single bound
 can only be killer by a shot to the head
 can only be killer by a stake through the heart
 can summon infinite trampolines
 cannons instead of hands
 chained to their evil twin
 commands an amry of disposable minions
 covered in gasoline
 everything they touch turns inside out
 flaming hands
 has an enormous exposed brain
 in a flying saucer
 is faster than a speeding bullet
 is really really emotional
 is really really good at parkour ...really
 leading a team of trained velociraptors
 literally a gift
 machine guns for legs
 regrows body parts at will
 riding a nuclear missile
 shoots lasers out of ears
 stuck in one of those electric cars for toddlers
 swinging a two-ton tuna
 throws water billions filled with acid
 wearing a bubble wrap suit
 wearing a scuba suit
 wrapped in toilet paper
 (very cool)`.split('\n').map(a => a.trim());
const heroes = `101 Dalmatians
Abraham Lincoln
alien
angel
apache warrior
assassin
barney
billionaire playboy
blob
bodybuilder
boy band
boy scout
Bruce lee
bull
cactus
Canada
carnie
Cat
cheetah
child beauty pageant queen
chimpanzee
chuck Norris
coachella lineup
College A Cappella Group
Conan
conjoined twins
cowboy
crazy cat lady
Crocodile Hunter
Darth Vader
demon
demon-possessed car
dexter
Disembodied Head
dolphin
dragon
E.T.
Eagle
Electric Eel
Emperor Penguin
everyone at burning man
evil doll
fainting goat
femme fatale
Forrest Gump
Frankenstein
Freddy
French bulldog
Gandhi
Genghis Khan
George W. Bush
giant squid
giraffe
girl scout
gladiator
Google
gorilla
grim reaper
Hannibal
Heisenberg
Helen Keller
Hermione
high school marching band
Hillary Clinton
hippo
hipster
hobo
hockey player
homer
hulk
Hunchback
identical twins
iron man
jack bauer
Jason
Justin bieber
k-pop star
Katniss
Kindergarten Class
leprechaun
Literally Insane Clown Posse
Lucha Libre Wrestler
macgyver
mad scientist
mafia don
Mario Brothers.
marshmallow man
Martha Stewart
me
Meat Loaf
men in black
mermaid
Michael Jackson
mike Tyson
Miley Cyrus
mime
moose
Mr. Rogers
mummy
Musketeer
my boss
my ex
my significant other
Nigerian prince
ninja
nudist
Obama
octopus
Olympic gymnast
Owl
pet rock
pick a celebrity
pick a comic book character
pick a movie character
pick a TV character
pick an action movie star
pirate
Polar Bear
psychic
pterodactyl
Pukachu
queen
Rambo
redneck
Reggae Band
Rhinoceros
Robin Hood
robot
saber-toothed tiger
samurai
Sasquatch
secret agent
senior citizen bowling team
shark
sharpshooter
Sherlock Holmes
skeleton
sloth
smoke monster
snake
soccer mom
spartan
spider
Stephen Hawking
street fighter
sumo wrestler
supermodel
swarm of killer bees
t-rex
Terminator
the devil
the doctor
the dude
the Illuminati
the kardashians
the pope
The Statue of library
the u.n.
turtle
ultimate fighting cgampion
unicorn
vampire
vampire slayer
vegan
velociraptor
viking
werewolf
Whale
willy wonka
witch
Wizard
wooly mammoth
Your Mom
Zombie
amazon warrior
animorph
army of skeletons
ash
carnivorous plant
derby girl
Dr. horrible
France
Godzilla
Goliath
grizzly bear
Hercules
honey badger
hydra
iron giant
kaiju
keanu reeves
king Kong
king rather
literal teen wolf
loch ness monster
mothra
ocelot
poltergeist
prince charming
raccoon
sandy cheeks
star lord
stegosaurus
sushi chef
swarm of piranhas
the common cold
the navy
the player to your right
trapper
water buffalo
yeti
a minecraft youtuber`.split('\n').map(a => a[0].toUpperCase() + a.substring(1).toLowerCase())

export function getServerSideProps(ctx) {
    let props = {
        heroes: [heroes[heroes.length * Math.random() >> 0], heroes[heroes.length * Math.random() >> 0]],
        modifiers: [modifiers[modifiers.length * Math.random() >> 0], modifiers[modifiers.length * Math.random() >> 0]]
    }

    return {props}
}
