import React,{useState,useEffect} from 'react'
import Posts from './Posts'

const Post = ({category}) => {
  const Postdata = [
    {
      id: 1,
      name: 'React',
      category:'technology',
      image:'https://react.dev/images/og-home.png',
      excrept: 'React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.',
      authName:'Mayank Mishra',
      blog:`'On February 16, 2019, React 16.8 was released to the public, introducing React Hooks.[14] Hooks are functions that let developers "hook into" React state and lifecycle features from function components.[15] Notably, Hooks do not work inside classes — they let developers use more features of React without classes.[16]

      React provides several built-in Hooks such as useState,[17][13]: 37  useContext,[10]: 11 [18][13]: 12  useReducer,[10]: 92 [18][13]: 65–66  useMemo[10]: 154 [18][13]: 162  and useEffect.[19][13]: 93–95  Others are documented in the Hooks API Reference.[20][10]: 62  useState and useEffect, which are the most commonly used, are for controlling state[10]: 37  and side effects[10]: 61  respectively.
      
      Rules of hooks
      There are two rules of Hooks[21] which describe the characteristic code patterns that Hooks rely on:
      
      "Only Call Hooks at the Top Level" — Don't call hooks from inside loops, conditions, or nested statements so that the hooks are called in the same order each render.
      "Only Call Hooks from React Functions" — Don't call hooks from plain JavaScript functions so that stateful logic stays with the component.
      Although these rules can't be enforced at runtime, code analysis tools such as linters can be configured to detect many mistakes during development. The rules apply to both usage of Hooks and the implementation of custom Hooks,[22] which may call other Hooks.'`
    },
    {
      id: 2,
      name: 'Leonal Messi',
      category:'sports',
      image:'https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/12141/production/_129894047_messi_getty.jpg',
      excrept: 'Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer who most recently played as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team.',
      authName:'Abha Mishra',
      blog:`Lionel Andrés Messi[note 1] (Spanish pronunciation: [ljoˈnel anˈdɾes ˈmesi] (listen); born 24 June 1987), also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team. Widely regarded as one of the greatest players of all time, Messi has won a record seven Ballon d'Or awards[note 2] and a record six European Golden Shoes, and in 2020 he was named to the Ballon d'Or Dream Team. Until leaving the club in 2021, he had spent his entire professional career with Barcelona, where he won a club-record 34 trophies, including ten La Liga titles, seven Copa del Rey titles and the UEFA Champions League four times.[note 3] With his country, he won the 2021 Copa América and the 2022 FIFA World Cup. A prolific goalscorer and creative playmaker, Messi holds the records for most goals in La Liga (474), most hat-tricks in La Liga (36) and the UEFA Champions League (eight), and most assists in La Liga (192) and the Copa América (17). He also has the most international goals by a South American male (103). Messi has scored over 800 senior career goals for club and country, and has the most goals by a player for a single club (672).

      Messi relocated to Spain from Argentina aged 13 to join Barcelona, for whom he made his competitive debut aged 17 in October 2004. He established himself as an integral player for the club within the next three years, and in his first uninterrupted season in 2008–09 he helped Barcelona achieve the first treble in Spanish football; that year, aged 22, Messi won his first Ballon d'Or. Three successful seasons followed, with Messi winning four consecutive Ballons d'Or, making him the first player to win the award four times. During the 2011–12 season, he set the La Liga and European records for most goals scored in a single season, while establishing himself as Barcelona's all-time top scorer. The following two seasons, Messi finished second for the Ballon d'Or behind Cristiano Ronaldo (his perceived career rival), before regaining his best form during the 2014–15 campaign, becoming the all-time top scorer in La Liga and leading Barcelona to a historic second treble, after which he was awarded a fifth Ballon d'Or in 2015. Messi assumed captaincy of Barcelona in 2018, and won a record sixth Ballon d'Or in 2019. Out of contract, he signed for French club Paris Saint-Germain in August 2021, spending two seasons at the club and winning Ligue 1 twice.
      
      An Argentine international, Messi is the country's all-time leading goalscorer and also holds the national record for appearances. At youth level, he won the 2005 FIFA World Youth Championship, finishing the tournament with both the Golden Ball and Golden Shoe, and an Olympic gold medal at the 2008 Summer Olympics. His style of play as a diminutive, left-footed dribbler drew comparisons with his compatriot Diego Maradona, who described Messi as his successor. After his senior debut in August 2005, Messi became the youngest Argentine to play and score in a FIFA World Cup (2006), and reached the final of the 2007 Copa América, where he was named young player of the tournament. As the squad's captain from August 2011, he led Argentina to three consecutive finals: the 2014 FIFA World Cup, for which he won the Golden Ball, the 2015 Copa América, winning the Golden Ball, and the 2016 Copa América. After announcing his international retirement in 2016, he reversed his decision and led his country to qualification for the 2018 FIFA World Cup, a third-place finish at the 2019 Copa América, and victory in the 2021 Copa América, while winning the Golden Ball and Golden Boot for the latter. For this achievement, Messi received a record-extending seventh Ballon d'Or in 2021. In 2022, he led Argentina to win the 2022 FIFA World Cup, where he won a record second Golden Ball, became the first player to score in every stage of a World Cup (including two in the final), and broke the record for most games played at the World Cup (26).
      
      Messi has endorsed sportswear company Adidas since 2006. According to France Football, he was the world's highest-paid footballer for five years out of six between 2009 and 2014, and was ranked the world's highest-paid athlete by Forbes in 2019 and 2022. Messi was among Time's 100 most influential people in the world in 2011, 2012 and 2023. In 2020 and 2023, he was named the Laureus World Sportsman of the Year, with Messi being the first team-sport athlete to win the award. In 2020, Messi became the second footballer and second team-sport athlete to surpass $1 billion in career earnings.`
    },
    {
      id: 3,
      name: 'Valorant',
      category:'gamming',
      image:'https://cdn.arstechnica.net/wp-content/uploads/2020/04/valorant-listing-800x450.jpg',
      excrept: 'Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Windows. Teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by a release on June 2, 2020.',
      blog:`Valorant (stylized as VALORANT) is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Windows.[2] Teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by a release on June 2, 2020. The development of the game started in 2014. Valorant takes inspiration from the Counter-Strike series of tactical shooters, borrowing several mechanics such as the buy menu, spray patterns, and inaccuracy while moving.

      Gameplay
      Valorant is a team-based first-person tactical hero shooter set in the near future.[3][4][5][6] Players play as one of a set of Agents, characters based on several countries and cultures around the world.[6] In the main game mode, players are assigned to either the attacking or defending team with each team having five players on it. Agents have unique abilities, each requiring charges, as well as a unique ultimate ability that requires charging through kills, deaths, orbs, or objectives. Every player starts each round with a "classic" pistol and one or more "signature ability" charges.[4] Other weapons and ability charges can be purchased using an in-game economic system that awards money based on the outcome of the previous round, any kills the player is responsible for, and any objectives completed. The game has an assortment of weapons including secondary guns like sidearms and primary guns like submachine guns, shotguns, machine guns, assault rifles and sniper rifles.[7][8] There are automatic and semi-automatic weapons that each have a unique shooting pattern that has to be controlled by the player to be able to shoot accurately.[8] It currently offers 20 agents to choose from.[2][9] They are Brimstone, Viper, Omen, Cypher, Sova, Sage, Phoenix, Jett, Raze, Breach, Reyna, Killjoy, Skye, Yoru, Astra, KAY/O, Chamber, Neon, Fade, Harbor, and Gekko. The player will get 5 unlocked agents when they create their account, (Brimstone, Sova, Sage, Phoenix and Jett) and will have to unlock the rest of the agents by activating that agent's contract, which enables the player to unlock the agent after earning a certain amount of XP by playing games.[10]
      
      Unrated
      In the standard non-ranked mode, the match is played as best of 25 - the first team to win 13 rounds wins the match. The attacking team has a bomb-type device called the Spike. They must deliver and activate the Spike on one of the multiple specified locations (bomb sites). If the attacking team successfully protects the activated Spike for 45 seconds it detonates, destroying everything in a specific area, and they receive a point.[4] If the defending team can deactivate the spike, or the 100-second round timer expires without the attacking team activating the spike, the defending team receives a point.[11] If all the members of a team are eliminated before the spike is activated, or if all members of the defending team are eliminated after the spike is activated, the opposing team earns a point.[4] If both teams win 12 rounds, sudden death occurs, in which the winning team of that round wins the match, differing from overtime for competitive matches. Additionally, if after 4 rounds, a team wishes to forfeit that match, they may request a vote to surrender. If the vote reaches 4 (in contrast to 5 for competitive), the winning team gets all the victory credit for every round needed to bring them to 13, with the forfeiting team receiving losing credit.[12] A team gets only three chances to surrender: once in the first half, once in the pistol round of the second half, and once more in the second half.
      
      Spike Rush
      In the Spike Rush mode, the match is played as best of 7 rounds - the first team to win 4 rounds wins the match. Players begin the round with all abilities fully charged except their ultimate, which charges twice as fast as in standard games. All players on the attacking team carry a spike, but only one spike may be activated per round. Guns are randomized in every round and every player begins with the same gun. Ultimate point orbs in the standard game are present, as well as multiple different power-up orbs.[13]
      
      Swiftplay
      Swiftplay matches are simply a shortened version of the Unrated game mode. 10 players are split into 2 teams, attackers and defenders. Attackers must plant the spike while the Defenders must stop them. What differs Swiftplay to Unrated is that it is best to 9 rounds - the first team to win 5 rounds wins the match. On round 4, the team's players switch, as they would do in round 7 in the Unrated game mode. The game's currency system has no changes from Unrated. Swiftplay is meant as a quick game mode, averaging around 15 minutes per game, as opposed to around 40 minutes for Unrated.
      
      Competitive
      Competitive matches are the same as unranked matches with the addition of a win-based ranking system that assigns a rank to each player after 5 games are played. Players are required to reach level 20 before playing this mode.[14] In July 2020, Riot introduced a "win by two" condition for competitive matches, where instead of playing a single sudden death round at 12-12, teams will alternate playing rounds on attack and defense in overtime until a team claims victory by securing a two-match lead. Each overtime round gives players the same amount of money to purchase guns and abilities, as well as approximately half of their ultimate ability charge. After each group of two rounds, players may vote to end the game in a draw, requiring 6 players after the first set, 3 after the second, and thereafter only 1 player to agree to a draw. The competitive ranking system ranges from Iron to Radiant. Every rank except for Radiant has 3 tiers.[15] Radiant is reserved for the top 500 players of a region, and both Immortal and Radiant have a number associated to their rank allowing players to have a metric in which they can compare how they rank up to others at their level.[16]
      
      Premier
      Premier is a 5v5 gamemode that allows players a path-to-pro competitive game mode that is aimed towards players that wish to be a professional player. Premier is currently in alpha testing in Brazil. Players will need to create a team of five to compete against other teams in divisions. Each season will last a few weeks and the top teams will be invited to compete in the Division Championship. This gamemode will include a pick-and-ban system for maps unlike all the other gamemodes where the players have to play the map selected by the system.[17]
      
      Deathmatch
      The Deathmatch mode was introduced on August 5, 2020.[18] 14 players enter a 9-minute free-for-all match and the first person to reach 40 kills or the player who has the most kills when time is up wins the match. Players spawn in with a random agent as well as full shields, and all abilities are disabled during the match which indulges pure gunplay. Green health packs drop on every kill, which reset the player to maximum health, armor, and give an additional 30 bullets to each of their guns.[19]
      
      Escalation
      The Escalation gamemode was introduced on February 17, 2021[20] and is similar to the "gungame" concept found in Counter-Strike and Call of Duty: Black Ops, though it is team-based rather than free-for-all with 5 players on each team. The game will pick a random selection of 12 weapons to move through. As with other gungame versions, a team needs to get a certain number of kills to advance to the next weapon and the weapons get progressively worse as the team moves through them.[21] There are two winning conditions, if one team successfully goes through all 12 levels, or if one team is on a higher level than the opposing team within 10 minutes. Just like Deathmatch, players spawn in as a random agent, unable to use abilities, as the gamemode is set for pure gun fights. Though, abilities like Sova's shock darts, Raze's boom bot, and rocket launcher, are abilities that everyone gets to use as a weapon. After a kill, green health packs drop, which replenishes the player's health, armor, and ammo to its maximum. The gamemode also has auto respawns on, respawning players in random locations around the map.[22]
      
      Replication
      The Replication gamemode went live on May 11, 2021.[23] During the agent select, players vote on which agent they would want to play as. At the end of the time, or after everyone has voted, the game randomly selects one of the player's votes. The entire team will then play as that agent, even if one of the players has not unlocked that agent. It is a best of nine, with the players switching sides after the fourth round. Players can buy guns and shields with a pre-set number of credits. Abilities are pre-bought. Weapons and shields are reset every round.[24]
      
      Snowball Fight
      Snowball Fight is a limited-time gamemode that was released on December 15, 2020, and is only available during Christmas season.[25] It is a Team Deathmatch game mode, with 50 kills to win. Abilities are not allowed to be used, and players spawn in as a random agent. The only weapon available is the snowball launcher, which is an instant kill, but slow, and uses a projectile-based arc. There is infinite ammo. Throughout the game a "portal" will spawn, delivering gifts, which each contain a random power up.[26]`
    },
    {
      id: 4,
      name: 'Sandwich',
      category:'food',
      image:'https://static.toiimg.com/thumb/83740315.cms?width=1200&height=900',
      excrept: 'A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type. The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.',
      authName:'Mayank Mishra',
      blog:`A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type.[1][2][3] The sandwich began as a portable, convenient finger food in the Western world, though over time it has become prevalent worldwide.

      In the 21st century there has been considerable debate over the precise definition of sandwich, and specifically whether a hot dog or open sandwich can be categorized as such. In the United States, the Department of Agriculture and the Food and Drug Administration are the responsible agencies. The USDA uses the definition, "at least 35% cooked meat and no more than 50% bread" for closed sandwiches, and "at least 50% cooked meat" for open sandwiches.[4] In Britain, the British Sandwich Association defines a sandwich as "any form of bread with a filling, generally assembled cold", a definition which includes wraps and bagels, but excludes dishes assembled and served hot, such as burgers.[5]
      
      Sandwiches are a popular type of lunch food, taken to work, school, or picnics to be eaten as part of a packed lunch. The bread may be plain or be coated with condiments, such as mayonnaise or mustard, to enhance its flavour and texture. As well as being homemade, sandwiches are also widely sold in various retail outlets and can be served hot or cold.[6][7] There are both savoury sandwiches, such as deli meat sandwiches, and sweet sandwiches, such as a peanut butter and jelly sandwich.
      
      The sandwich is named after its supposed inventor, John Montagu, 4th Earl of Sandwich.[8][9] The Wall Street Journal has described it as Britain's "biggest contribution to gastronomy".[10]`
    },
    {
      id: 5,
      name: 'Emminem',
      category:'Arts_&_culture',
      image:'https://www.highsnobiety.com/static-assets/thumbor/3yRK-KoR8jEVdYa_4EIeXJtt8T4=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2017/10/16164638/25-best-eminem-songs-01.jpg',
      excrept: 'Marshall Bruce Mathers III, known professionally as Eminem, is an American rapper, songwriter, and record producer. He is credited with popularizing hip hop in middle America and is critically acclaimed as one of the greatest rappers of all time.',
      authName:'Mayank Mishra',
      blog:`Marshall Bruce Mathers III (born October 17, 1972), known professionally as Eminem (/ˌɛmɪˈnɛm/; often stylized as EMINƎM), is an American rapper, songwriter, and record producer. He is credited with popularizing hip hop in middle America and is critically acclaimed as one of the greatest rappers of all time.[2] Eminem's global success and acclaimed works are widely regarded as having broken racial barriers for the acceptance of white rappers in popular music. While much of his transgressive work during the late 1990s and early 2000s made him widely controversial, he came to be a representation of popular angst of the American underclass and has been cited as an influence for many artists of various genres.

      After the release of his debut album Infinite (1996) and the extended play Slim Shady EP (1997), Eminem signed with Dr. Dre's Aftermath Entertainment and subsequently achieved mainstream popularity in 1999 with The Slim Shady LP. His next two releases, The Marshall Mathers LP (2000) and The Eminem Show (2002), were worldwide successes and were both nominated for the Grammy Award for Album of the Year. After the release of his next album, Encore (2004), Eminem went on hiatus in 2005, largely due to a prescription drug addiction.[3] He returned to the music industry four years later with the release of Relapse (2009) and Recovery was released the following year. Recovery was the bestselling album worldwide of 2010, making it Eminem's second album, after The Eminem Show in 2002, to be the best-selling album of the year worldwide. In the following years, he released the US number one albums The Marshall Mathers LP 2 (2013), Revival (2017), Kamikaze (2018) and Music to Be Murdered By (2020).
      
      Eminem made his debut in the film industry with the musical drama film 8 Mile (2002), playing a dramatized version of himself, and his track "Lose Yourself" from its soundtrack won the Academy Award for Best Original Song, making him the first hip hop artist ever to win the award.[4] Eminem has made cameo appearances in the films The Wash (2001), Funny People (2009) and The Interview (2014) and the television series Entourage (2010). He has also developed other ventures, including Shady Records, a joint venture with manager Paul Rosenberg, which helped launch the careers of artists such as 50 Cent, D12 and Obie Trice, among others. He has also established his own channel, Shade 45, on Sirius XM Radio.
      
      In addition to his solo career, Eminem was a member of the hip hop group D12. He is also known for collaborations with fellow Detroit-based rapper Royce da 5'9"; the two are collectively known as Bad Meets Evil.
      
      Eminem is among the best-selling music artists of all time, with estimated worldwide sales of over 220 million records. He was the best-selling music artist in the United States of the 2000s and the bestselling male music artist in the United States of the 2010s, third overall. Billboard named him the "Artist of the Decade (2000–2009)". He has had ten number-one albums on the Billboard 200—which all consecutively debuted at number one on the chart, making him the first artist to achieve this[5]—and five number-one singles on the Billboard Hot 100.[6] The Marshall Mathers LP, The Eminem Show, Curtain Call: The Hits (2005), "Lose Yourself", "Love the Way You Lie" and "Not Afraid" have all been certified Diamond or higher by the Recording Industry Association of America (RIAA).[7] Rolling Stone has included him in its lists of the 100 Greatest Artists of All Time and the 100 Greatest Songwriters of All Time. He has won numerous awards, including 15 Grammy Awards, eight American Music Awards, 17 Billboard Music Awards, an Academy Award, a Primetime Emmy Award and an MTV Europe Music Global Icon Award. In November 2022, Eminem was inducted into the Rock and Roll Hall of Fame.[8]`
    },
    {
      id: 6,
      name: 'Crossfit',
      category:'Health_&_Fitness',
      image:'https://hips.hearstapps.com/hmg-prod/images/crossfitnew-1620228002.jpg',
      excrept: 'CrossFit is a branded fitness regimen that involves constantly varied functional movements performed at high intensity. The method was developed by Greg Glassman, who founded CrossFit with Lauren Jenai in 2000, with CrossFit its registered trademark.',
      authName:'Mayank Mishra',
      blog:`CrossFit is a branded fitness regimen that involves constantly varied functional movements performed at high intensity.[1] The method was developed by Greg Glassman,[2] who founded CrossFit with Lauren Jenai in 2000,[3][4][5] with CrossFit its registered trademark.[6] The company forms what has been described as the biggest fitness chain in the world,[7][8] with around 12,000 affiliated gyms in over 150 countries as of 2022, under half of which are located in the United States.[9][10]

      CrossFit is promoted as both a physical exercise philosophy and a competitive fitness sport, incorporating elements from high-intensity interval training, Olympic weightlifting, plyometrics, powerlifting, gymnastics, kettlebell lifting, calisthenics, strongman, and other exercises.[11] It is practiced by members in CrossFit-affiliated gyms,[12] and by individuals who complete daily workouts (otherwise known as "WODs" or "Workouts of the Day").[13][14]
      
      CrossFit has been criticized for causing more injuries than other sporting activities such as traditional weightlifting; however, an article in the Journal of Sports Rehabilitation found that "the risk of injury from participation in CrossFit is comparable to or lower than some common forms of exercise or strength training".[15] There are also concerns that its methodology may cause exertional rhabdomyolysis, a possible life-threatening breakdown of muscle from extreme exertion.[16][17][18]`
    },
    
    // Add more objects as needed
  ];
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    if (category === 'All') {
      setFilteredPosts(Postdata);
    } else {
      const filtered = Postdata.filter((post) => post.category === category);
      setFilteredPosts(filtered);
    }
  }, [category]);

  return (
    <div className='grid grid-cols-1 mb-6 lg:grid-cols-3 w-max lg:mr-auto mr-7 gap-6'>
       {filteredPosts.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </div>
    
  )
}

export default Post
