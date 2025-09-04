"use client";

import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EnglishRulesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      suppressHydrationWarning
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/images/city-background.jpeg')",
        }}
        suppressHydrationWarning
      >
        <div
          className="absolute inset-0 bg-black/60"
          suppressHydrationWarning
        />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-16 px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="bg-black/70 backdrop-blur-sm rounded-lg p-8 border border-white/10"
            variants={itemVariants}
          >
            <motion.h1
              className="text-4xl font-bold text-white mb-2 text-center"
              variants={itemVariants}
            >
              Hill City Roleplay Rules
            </motion.h1>

            <motion.div className="text-center mb-8" variants={itemVariants}>
              <Link href="/join" suppressHydrationWarning>
                <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-full px-8 py-3 text-lg font-medium backdrop-blur-sm transition-all duration-200">
                  Back to Join Page
                </Button>
              </Link>
            </motion.div>

            {/* Table of Contents */}
            <motion.div
              className="bg-white/5 rounded-lg p-6 mb-8 border border-white/10"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                Table of Contents
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
                <div>
                  <h3 className="font-semibold text-red-400 mb-2">
                    ZERO-TOLERANCE
                  </h3>
                  <ul className="space-y-1 text-sm">
                    <li>[1] Mature</li>
                    <li>[2] Hate</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-yellow-400 mb-2">
                    HEAVILY ENFORCED
                  </h3>
                  <ul className="space-y-1 text-sm">
                    <li>[3] Toxicity</li>
                    <li>[4] Promoting and advertising</li>
                    <li>[5] Breaking Character</li>
                    <li>[6] Metagaming</li>
                    <li>[7] Powergaming</li>
                    <li>[8] Combat Logging</li>
                    <li>[9] RDM</li>
                    <li>[10] VDM</li>
                    <li>[11] Suppress Fire</li>
                    <li>[12] New Life Rule</li>
                    <li>[13] 6-man rule</li>
                    <li>[14] /OOC usage</li>
                    <li>[15] Prohibited Role-play</li>
                    <li>[16] Verbal/Digital Content Permission</li>
                    <li>[17] Cop Baiting</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-400 mb-2">
                    SERVER GUIDELINES
                  </h3>
                  <ul className="space-y-1 text-sm">
                    <li>Low Effort Role-play</li>
                    <li>Fail RP/NVL</li>
                    <li>Perma-death</li>
                    <li>Emergency Services</li>
                    <li>Robbing</li>
                    <li>Criminal-LEO Interactions</li>
                    <li>Civilian-Medical Department Interactions</li>
                    <li>No Crime Zones (NCZ)</li>
                    <li>Multiple character creation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-400 mb-2">OTHER</h3>
                  <ul className="space-y-1 text-sm">
                    <li>General Guidelines</li>
                    <li>Additional Rules</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Rules Content */}
            <div className="space-y-8 text-white/90">
              {/* Zero Tolerance Section */}
              <motion.section variants={itemVariants}>
                <h2 className="text-3xl font-bold text-red-400 mb-4">
                  I. ZERO-TOLERANCE
                </h2>

                <div className="space-y-6">
                  <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-red-300 mb-2">
                      [1] Mature
                    </h3>
                    <p>
                      You must be mature enough to handle the heated situations.
                      You can't come to discord after every gang fight or little
                      IC matters.
                    </p>
                  </div>

                  <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-red-300 mb-2">
                      [2] Hate
                    </h3>
                    <p>
                      Racial Slurs, Derogatory Statements or Homophobic Terms.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Heavily Enforced Section */}
              <motion.section variants={itemVariants}>
                <h2 className="text-3xl font-bold text-yellow-400 mb-4">
                  II. HEAVILY ENFORCED
                </h2>

                <div className="space-y-6">
                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [3] Toxicity
                    </h3>
                    <p>
                      Being toxic on stream, twitch chat, discord, or in peoples
                      DMs is not tolerated. Speaking against Hill City Roleplay
                      can result in a perma ban from the server.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [4] Promoting and advertising
                    </h3>
                    <p>
                      Promoting and advertising other servers using our
                      platforms is also a bannable offence.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [5] Breaking Character
                    </h3>
                    <p>
                      Always stay in character. If there is a problem, role-play
                      out the scenario (Don't ooc in between scenario, you can
                      finish the situation and discuss problems later, out of
                      city).
                    </p>
                    <p className="mt-2">
                      Do not do actions in game in order to bait others into
                      breaking roleplay.
                    </p>
                    <p className="mt-2">
                      This includes "Get that person's ID" "I will submit a
                      ticket" "I am going to speak with an admin" "That is so
                      powerful".
                    </p>
                    <p className="mt-2">
                      Approaching staff/admin in game to deal with issues.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [6] Metagaming
                    </h3>
                    <p>
                      Using information that you did not obtain in character to
                      influence your character actions.
                    </p>
                    <p className="mt-2">
                      Metagaming is the act of relaying IC information through
                      any method not considered IC that has the potential to
                      change current or future roleplay scenarios or using that
                      information.
                    </p>
                    <p className="mt-2">
                      Mixing IC and OOC information without any benefit is a
                      minor MG offense. For example, a player uses IC chat to
                      call someone by their player ID displayed above their
                      head.
                    </p>
                    <p className="mt-2">
                      Players may not have any interaction or knowledge from
                      their alternate characters.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [7] Powergaming
                    </h3>
                    <p>
                      Role-playing outside of your character traits, abusing
                      mechanics, and using means not in-game to gain an
                      advantage. For example: Creating role-play where there is
                      only one outcome.
                    </p>
                    <p className="mt-2">
                      Not relaying accurate information using /me. For Example:
                      If a medic/officer does /me checks over your body, you
                      have to reply /me has multiple gunshot wounds if you were
                      shot.
                    </p>
                    <p className="mt-2">
                      Tazing, beanbag shotgun or tackling to stun a player then
                      shooting them or beating them while on the ground before
                      they can get back up and do anything. Exception to the
                      rule: Trying to start a prison riot.
                    </p>
                    <p className="mt-2 font-semibold">
                      PowerGaming (Examples but not limited to):
                    </p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>
                        Talking or giving out tactical information while downed.
                        Role-playing your injuries is fine.
                      </li>
                      <li>
                        Using Radio or talking under water is not allowed.
                      </li>
                      <li>
                        Carrying someone while driving a vehicle or riding a
                        bike is not allowed.
                      </li>
                      <li>Cuffing without hands-up or tackled/tased.</li>
                      <li>
                        Abusing /me RP (eg: injecting someone to forget
                        everything).
                      </li>
                      <li>
                        Talking over someone and not letting the other person to
                        negotiate or save himself.
                      </li>
                      <li>
                        Tying the legs of a person and not letting them move.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [8] Combat Logging
                    </h3>
                    <p>
                      Logging out during an active situation to avoid role-play.
                    </p>
                    <p className="mt-2">
                      During any roleplay situation is considered exploitation.
                      Some examples of this would be: logging out during a
                      firefight, being chased by the police, arrested by the
                      police, while dead awaiting a medic, logging out to save
                      gear, rage-quitting, logging out whilst
                      restrained/detained, etc. We are aware of common crashes,
                      connection issues, etc., however, this is often reflected
                      in the logs and staff will make an informed decision on
                      whether you've tried to resolve the issue by, for example,
                      logging back on.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [9] RDM
                    </h3>
                    <p>Killing people without a story leading up to it.</p>
                    <p className="mt-2">
                      Always initiate and make people aware of what you are
                      doing and why.
                    </p>
                    <p className="mt-2">
                      Based on the story leading up to a war between different
                      groups, they wouldn't always need to initiate before
                      shooting.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [10] VDM
                    </h3>
                    <p>
                      Never kill anyone on purpose using a vehicle as a weapon.
                    </p>
                    <p className="mt-2">
                      VDM is the act or effort of intentionally using a vehicle
                      to kill or injure other persons, or, where a player kills
                      another person, without intent, by reckless performance
                      under circumstances where any sane individual would
                      understand that such performance could beyond reasonable
                      doubt result in the death of another person.
                    </p>
                    <p className="mt-2">
                      Examples of VDM include but are not limited to: -
                      Intentionally running people over or causing explosions to
                      vehicles in order to kill or injure any person(s),
                      speeding excessively with a car hitting a motorcycle where
                      the rider/passenger dies or causing an explosion to a
                      vehicle in a high traffic area like Legion Square which
                      results in the death of any person(s).
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [11] Suppress Fire
                    </h3>
                    <p>
                      Criminals are NOT required to use verbal communication
                      before firing at PD or anyone. However, they must use
                      suppressive fire if they choose not to verbally
                      communicate first. Suppressive fire means firing shots at
                      PD/civilian with the intent to push them back into cover
                      without injuring them. Give PD/civilians the opportunity
                      to take cover, react, and fire back before shooting with
                      the intent to down the PD/civilian player.
                    </p>
                    <p className="mt-2">
                      Please note: There should be an IC reason to start a gun
                      fight.
                    </p>
                    <p className="mt-2 font-semibold">
                      Suppressive Fire Examples:
                    </p>
                    <p>
                      Shooting at the feet of a civilian/ Shooting the car doors
                      or hood of a civilian's car / Shooting at the side and
                      tail of a PD chopper.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [12] New Life Rule
                    </h3>
                    <p>
                      If you are downed and respawn at the hospital, your
                      character forgets all events leading up to you being
                      downed in the current scenario.
                    </p>
                    <p className="mt-2">
                      When a new life starts, your character will forget all the
                      information and events leading up to your death. However,
                      you are still the same character (same job, gang,
                      friends).
                    </p>
                    <p className="mt-2 font-semibold">A new life starts:</p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>when you are executed</li>
                      <li>You re-spawn.</li>
                    </ul>
                    <p className="mt-2 font-semibold">
                      A new life does not start when:
                    </p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>
                        Your character has been the victim of a clear case of
                        VDM
                      </li>
                      <li>
                        Your character has been the victim of a clear case of
                        RDM
                      </li>
                      <li>You are downed (awaiting reviving)</li>
                      <li>You disconnect (end of the session)</li>
                    </ul>
                    <p className="mt-2">
                      Your character cannot return within 500m of the location
                      of death or be involved in the same combat situation until
                      the situation is over or 10 minutes have passed in real
                      time. Players might act and try to tell you what happened
                      to you and make the situation lead to a revenge. This type
                      of revenge RP will be not considered as RP and depending
                      upon the situation a kick/ban will be given.
                    </p>
                    <p className="mt-2">
                      You may not respawn if you have been advised that police
                      or EMS is on the way to your scene.
                    </p>
                    <p className="mt-2">
                      You may not respawn if you are in an active situation.
                    </p>
                    <p className="mt-2">
                      If you are down at the end of a scenario and locals can't
                      realistically see you, you can NOT call 911.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [13] 6-man rule
                    </h3>
                    <p>
                      Criminal activities are limited to 6 players max at a
                      time. People who act as a spotter on the radio or anyone
                      providing communication count as part of your group. You
                      must ensure there are no more than four on a radio station
                      during each active scenario.
                    </p>
                    <p className="mt-2">
                      You cannot have more than 6 people in any criminal
                      situation, during a criminal activity only the 6 involved
                      can be in radio.
                    </p>
                    <p className="mt-2">
                      You can not bring back an active situation to your turf
                      where you might find your friends/gang of 15 members
                      waiting there.
                    </p>
                    <p className="mt-2">
                      When a group of 6 engages on a group of 6+, you are
                      knowingly engaging a bigger group and they do NOT have to
                      drop numbers to defend themselves.
                    </p>
                    <p className="mt-2">
                      At ANY given time you are only allowed to have a total of
                      6 people involved in ANY situation.
                    </p>
                    <p className="mt-2">
                      You are not allowed to involve yourself with a situation
                      that already has a max amount of members from your group
                      involved.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [14] /OOC usage
                    </h3>
                    <p>
                      The ONLY time you should be using /OOC is if you are
                      experiencing RP stopping technical issues. Anything else,
                      use discord support channels or /report feature.
                    </p>
                    <p className="mt-2">
                      RP Appreciations also should be done via Discord.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [15] Prohibited Role-play
                    </h3>
                    <p className="font-semibold text-red-300">
                      Rape RP, Suicide RP, Pregnancy RP - NOT ALLOWED AT ALL.
                    </p>
                    <p className="mt-2">
                      Erotic RP - Scenarios are not to take place in public.
                      Only use private interiors! Be mindful of YouTube's TOS.
                    </p>
                    <p className="mt-2">
                      Torture RP - Allowed if all parties agree to it.
                    </p>
                    <p className="mt-2">
                      Animal RP - Staff only unless approved by staff/admin.
                    </p>
                    <p className="mt-2">
                      Bomb RP - RP involving Bombs, Weapons of Mass destruction,
                      Chemical or biological warfare.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [16] Verbal/Digital Content Permission
                    </h3>
                    <p>
                      You cannot play copyrighted music, Unless you have
                      everyone's permission at the scenario and you cannot play
                      at government places such as Pillbox/PD etc.
                    </p>
                    <p className="mt-2">
                      Normal Abusive words are allowed in a roleplay. Highly
                      offensive abusive words are allowed only when there is
                      mutual understanding between parties.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [17] Cop Baiting
                    </h3>
                    <p>
                      It's strictly not allowed for players to bait officers.
                      Let's suppose if an officer is busy with a crime situation
                      such as a bank robbery or a murder or they are engaged in
                      role play, you aren't allowed to do actions which might
                      lead breaking their RP.
                    </p>
                    <p className="mt-2 font-semibold">
                      Some Examples of Cop-Baiting:
                    </p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>
                        Honking horns unnecessary to annoy an officer who is on
                        a traffic stop or speaking with another player.
                      </li>
                      <li>
                        Intentionally interfering with an ongoing roleplay
                        situation just so to get attention from police.
                      </li>
                      <li>
                        Intentionally hitting, ramming, shooting or otherwise
                        acting inappropriately in front of the police personnel
                        without initiating a proper roleplay.
                      </li>
                      <li>
                        The crowding during a 10-90 is also considered as
                        cop-baiting.
                      </li>
                      <li>
                        Using the police phone app to find officers online.
                      </li>
                      <li>
                        Using 911 or anonymous calls to disrupt the duty of a
                        police officer.
                      </li>
                      <li>
                        Triggering alerts to bait police to a specific location
                        (Robbing houses continuously).
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Server Guidelines Section */}
              <motion.section variants={itemVariants}>
                <h2 className="text-3xl font-bold text-blue-400 mb-4">
                  III. SERVER GUIDELINES
                </h2>

                <div className="space-y-6">
                  <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">
                      1. Low Effort Role-play
                    </h3>
                    <p>You are expected to put effort into your role-play.</p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>
                        Always shooting, running from police in situations where
                        it isn't called for may be considered low-effort RP. For
                        example: Running from a traffic stop where you would
                        only be getting a speeding ticket.
                      </li>
                      <li>
                        Cop baiting is not allowed. Do NOT intentionally try to
                        get pulled over or chased.
                      </li>
                      <li>
                        Using NPCs, like the shop clerk as a hostage is
                        considered low effort. Find a hostage and provide that
                        interaction for others.
                      </li>
                      <li>
                        You may not run up and vulture pockets of anyone who is
                        on the ground as part of a scenario you are not involved
                        in. Please respect others Role-play.
                      </li>
                      <li>
                        Respect EMS roleplay and roleplay your injuries while
                        you are in the Pillbox.
                      </li>
                      <li>Please respect others Role-play in general.</li>
                    </ul>
                  </div>

                  <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">
                      2. Fail RP/NVL
                    </h3>
                    <p>
                      Not role-playing realistically such as not fearing for
                      your life when threatened by a weapon.
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">
                      3. Perma-death
                    </h3>
                    <p>
                      Under no circumstance can you force someone to perma their
                      character.
                    </p>
                    <p className="mt-2">
                      If your character is downed and you decide it's time for
                      permadeath, all you need to do is role-play the scenario
                      out with EMS when they find you. If no ems are available,
                      police will provide the certificate of death form.
                    </p>
                    <p className="mt-2">
                      You may use the /me command to give the EMS/Doctor
                      characters the right indicators. Example: "/me has no
                      pulse." leading towards "/me has died due to their
                      injuries."
                    </p>
                    <p className="mt-2">
                      You cannot continue RPing on that character after you RP'd
                      out a permadeath situation with them, your perma character
                      will be deleted.
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">
                      4. Emergency Services
                    </h3>
                    <p>
                      Being a corrupt LEO or EMS is not allowed. This includes
                      providing items directly or indirect given by the job to
                      non-LEOs/EMS or abusing mechanics (including information).
                    </p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>
                        Once you are handcuffed and brought to Pillbox/MRPD the
                        scenario is over.
                      </li>
                      <li>
                        You can't take somebody hostage to trade them for the
                        suspects at Pillbox/MRPD.
                      </li>
                      <li>
                        You can't start a shootout at Pillbox/MRPD to break out
                        suspects in custody. You have to understand and be
                        mindful how these situations impact the entire city when
                        Pillbox is under lockdown due to something like this.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">
                      5. Robbing
                    </h3>
                    <p>
                      Robbing every player you see does not benefit the
                      role-play on the server. Robbing players should be well
                      thought out and uncommon. It should not be part of your
                      role-play that your character robs people cause he's a
                      scumbag.
                    </p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>
                        Chain robbing the jewelry store, convenience stores, and
                        banks is not tolerated. Chain robbing is defined by
                        continually hitting the same location over a period of
                        time while not attempting to engage role-playing with
                        law enforcement.
                      </li>
                      <li>
                        You are not permitted to rob a Bank, Jewellery or any
                        convenience stores 30 minutes before the tsunami occurs.
                      </li>
                      <li>
                        If you are a part of a group, you are not permitted to
                        have 2 or more different teams hit banks or jewellery
                        during the same time-slot.
                      </li>
                      <li>
                        Initiating RP with the intention of robbing a person is
                        not allowed.
                      </li>
                      <li>
                        Using custom vehicles for robberies will be considered
                        as Powergaming. (Temporary)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">
                      6. Criminal-LEO Interactions
                    </h3>
                    <p>
                      You may kidnap LEOs given there is major IC motive or
                      heavy RP involved, kidnapping a LEO is a code red
                      situation, police officers have all the right to shoot you
                      down once they have the hostage in their custody.
                    </p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>
                        You may not kidnap an LEO who is already actively RPing
                        in a scenario you are not involved in.
                      </li>
                      <li>
                        Police officers are not loot boxes. Stealing items like
                        food, repair kits, lockpicks, etc. will not be tolerated
                        unless absolutely necessary in extreme cases. Stealing
                        weapons, armor, ammo, etc. to carry on the scenario is
                        the only time it is acceptable. Stealing weapons HOWEVER
                        will result in a raid warrant. If you are arrested with
                        a PD weapon, seen with a PD weapon, or can be identified
                        stealing a PD weapon, this will result in a raid. Take
                        them at your own risk.
                      </li>
                      <li>
                        You may not hold up cop at gunpoint to take their
                        equipment.
                      </li>
                      <li>
                        You are expected to be mindful of LEO presence. If you
                        are aware that the active LEO presence is lacking, you
                        should not take advantage of the fact. (eg: Using mobile
                        phone app to see if there is less cops and doing a
                        robbery).
                      </li>
                      <li>
                        During a prison escort, you cannot set up an ambush
                        right in front of the prison gate. The main focus should
                        be on the prisoners and the prison bus, rather than
                        having to fight with the whole PD before saving the
                        prisoners which is unrealistic.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">
                      7. Civilian-Medical Department Interactions
                    </h3>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>
                        You cannot kidnap or take any person from the medical
                        department as hostage.
                      </li>
                      <li>
                        You cannot bring injured people or your friends to the
                        hospital when there are available medical units, you
                        should also wait for an ambulance to arrive on scene.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">
                      8. No Crime Zones (NCZ)
                    </h3>
                    <p>
                      Inside or very near to a No Crime Zone, players may not
                      commit any crime or disobey law enforcement orders but are
                      allowed to flee, lie, or scam IC.
                    </p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>
                        If a player uses the NCZ for protection the attacker
                        must wait for that player to leave the area.
                      </li>
                      <li>
                        Players may not go to a NCZ within 15 minutes after
                        engaging in criminal activity or a resulting chase,
                        unless they are turning themselves in to law
                        enforcement.
                      </li>
                      <li>
                        No Crime Zones: Legal gambling establishments,
                        government and law enforcement offices, hospitals and
                        Religious constructions.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">
                      9. Multiple character creation
                    </h3>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>
                        You cannot have a whitelisted job (PD,MD,Mechanic) and
                        have your second character be in a gang (You can still
                        be in the police and have your second character do
                        criminal activities, as long as your second character is
                        not in a gang).
                      </li>
                      <li>
                        You cannot mix information or cash or items between your
                        characters (If found strict action would be taken).
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Other Section */}
              <motion.section variants={itemVariants}>
                <h2 className="text-3xl font-bold text-green-400 mb-4">
                  IV. Other
                </h2>

                <div className="space-y-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Fake Hostages using your friends as a hostage for a
                      robbery is not allowed.
                    </li>
                    <li>
                      You are not permitted to interact with someone who is
                      clearly AFK in a reasonably removed from RP position.
                    </li>
                    <li>
                      Recording - Players may take pictures with their phones
                      using the emote. They may record using a camera. The
                      camera may pick up audio if the player is in range to hear
                      the audio (not through walls/glass etc.).
                    </li>
                    <li>
                      You are not permitted to initiate and RP, rob a Bank,
                      Jewellery or any convenience stores 30 minutes before the
                      tsunami occurs.
                    </li>
                    <li>
                      You may only have 1 recognized/whitelisted gang character.
                      Any other character can not be part of the same agenda.
                    </li>
                    <li>
                      You are not allowed to take the downed people, revive them
                      and take them hostage. Catch alive if you need to!
                    </li>
                    <li>
                      If a taken hostage dies due to hunger/thirst; it is
                      permissible to revive him and continue the scenario.
                    </li>
                    <li>
                      Mini / half-sized player peds are not permitted to shoot
                      from a car.
                    </li>
                    <li>
                      Do not approach staff in-game to deal with issues. Use
                      /report.
                    </li>
                  </ul>
                </div>
              </motion.section>

              {/* Final Note */}
              <motion.div
                className="bg-white/5 border border-white/20 rounded-lg p-6 text-center"
                variants={itemVariants}
              >
                <p className="text-white/90 font-semibold">
                  The admins have the final say in any situation, and all rules
                  are subject to change. Additionally, admins may decide to take
                  action over something not listed here. When the admins review
                  a situation, more than one opinion is used.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
