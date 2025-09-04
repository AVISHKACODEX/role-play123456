"use client";

import Navigation from "@/components/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SinhalaRulesPage() {
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
              Hill City Roleplay නීතිරීති
            </motion.h1>

            <motion.div className="text-center mb-8" variants={itemVariants}>
              <Link href="/join" suppressHydrationWarning>
                <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-full px-8 py-3 text-lg font-medium backdrop-blur-sm transition-all duration-200">
                  Join Page එකට ආපසු
                </Button>
              </Link>
            </motion.div>

            {/* Table of Contents */}
            <motion.div
              className="bg-white/5 rounded-lg p-6 mb-8 border border-white/10"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                අන්තර්ගතයන්ගේ වගුව
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
                <div>
                  <h3 className="font-semibold text-red-400 mb-2">
                    සහනශීලී නොවන නීති
                  </h3>
                  <ul className="space-y-1 text-sm">
                    <li>[1] පරිණත වෙන්න - Be Matured</li>
                    <li>[2] වෛරය - Hate</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-yellow-400 mb-2">
                    දැඩිව ක්‍රියාත්මක වන නීති
                  </h3>
                  <ul className="space-y-1 text-sm">
                    <li>[3] විනාශකාරී ලෙස හැසිරීම - Toxicity</li>
                    <li>[4] Promoting & Advertising</li>
                    <li>[5] චරිතයෙන් පිට යාම - Breaking Character</li>
                    <li>[6] Meta-Gaming</li>
                    <li>[7] බල ක්‍රීඩා කිරීම - Power Gaming</li>
                    <li>[8] Combat Logging</li>
                    <li>[9] RDM - (Random Death Match)</li>
                    <li>[10] VDM - (Vehicle Death Match)</li>
                    <li>[11] මර්දනකාරී වෙඩි තැබීම් - Suppressive Fire</li>
                    <li>
                      [12] නව ජීවිතයක් ලැබීම සම්බන්ධ නීති - New life rules
                    </li>
                    <li>[13] 6 Man Rule</li>
                    <li>[14] /ooc භාවිතය</li>
                    <li>[15] තහනම් RP</li>
                    <li>[16] වචන හා Digital content භාවිතය</li>
                    <li>
                      [17] පොලීසිය නොමග යැවීම හා රාජකාරියට බාධා කිරීම - Cop
                      baiting
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-400 mb-2">
                    සර්වර් මාර්ගෝපදේශ
                  </h3>
                  <ul className="space-y-1 text-sm">
                    <li>[18] අඩු උත්සාහ RP - Low Effort Rp</li>
                    <li>[19] Fail RP</li>
                    <li>[20] චරිතය අවසන් කිරීම - Perma Death</li>
                    <li>[21] හදිසි සේවා සම්බන්ධ නීති - Emergency Services</li>
                    <li>[22] මංකොල්ල කෑම - Robbing</li>
                    <li>[23] No crime Zone (NCZ)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-400 mb-2">වෙනත්</h3>
                  <ul className="space-y-1 text-sm">
                    <li>සාමාන්‍ය මාර්ගෝපදේශ</li>
                    <li>අතිරේක නීති</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Rules Content */}
            <div className="space-y-8 text-white/90">
              {/* Zero Tolerance Section */}
              <motion.section variants={itemVariants}>
                <h2 className="text-3xl font-bold text-red-400 mb-4">
                  I. සහනශීලී නොවන නීති
                </h2>

                <div className="space-y-6">
                  <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-red-300 mb-2">
                      [1] පරිණත වෙන්න - Be Matured
                    </h3>
                    <p>
                      ඔබ IC වෙන සෑම දෙයක්ම සමව විඳදරාගත හැකි විය යුතුයි. සෑම
                      ගැන් ටම පහසු වෙන Discord forum වෙත ගෙන ඒමෙන් වැළකිය
                      යුතුයි.
                    </p>
                  </div>

                  <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-red-300 mb-2">
                      [2] වෛරය - Hate
                    </h3>
                    <p>
                      ජාතිවාදී, සමාජ විරෝධී ප්‍රකාශ හෝ කුනුහරුප කීමෙන් වැළකිය
                      යුතුයි.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Heavily Enforced Section */}
              <motion.section variants={itemVariants}>
                <h2 className="text-3xl font-bold text-yellow-400 mb-4">
                  II. දැඩිව ක්‍රියාත්මක වන නීති
                </h2>

                <div className="space-y-6">
                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [3] විනාශකාරී ලෙස හැසිරීම - Toxicity
                    </h3>
                    <p>
                      Stream එකක, chat එකක හෝ discord සංවාදයක ඔබ තවත් අයෙකුට
                      හිරිහැරකාරී ලෙස හැසිරීම, Hill City Roleplay සර්වරයට එරෙහිව
                      ක්‍රියා කිරීමෙන් සදාකාලික තහනමකට ලක් විය හැක.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [4] Promoting & Advertising
                    </h3>
                    <p>
                      වෙනත් servers අපගේ මාධ්‍යයන් ඔස්සේ ප්‍රචාරය කිරීම ban විය
                      හැකි වරදකි.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [5] චරිතයෙන් පිට යාම - Breaking Character
                    </h3>
                    <p>
                      ඔබට කිසිදු අවස්ථාවක චරිතයෙන් පිට යා නොහැක. යම් ගැටලුවක්
                      තිබේ නම් එය RP අවස්ථාව අතරතුර OOC කතා කළ නොහැක. (IC
                      situation එක අවසන් වූ පසු එය සාකච්ඡා කළ හැක Discord එකෙදි
                      පමණි.)
                    </p>
                    <p className="mt-2">
                      තවත් අයෙකු තම චරිතයෙන් පිට යන කිසිදු දෙයක් ද නොකළ යුතුයි.
                      ඔබ Hill City Roleplay admin හා staff සාමාජිකයන් සමග නගරය
                      තුළදී ප්‍රශ්න කතා කළ නොහැක.
                    </p>
                    <p className="mt-2">
                      උදා, "මම රිපෝර්ට් කරනවා" "ඇඩ්මින්ලට කතා කරනවාමේක".
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [6] Meta-Gaming
                    </h3>
                    <p>
                      තමා විසින් තමා සර්වර් එක තුළ තම චරිතයේ සිටියදී ලබාගත්
                      තොරතුරක් හැර වෙනත් මාර්ග වලින් ලබාගත් තොරතුර තම වාසියට
                      භාවිතා කළ නොහැක.
                    </p>
                    <p className="mt-2">
                      ඔබට ඔබගේ චරිතයට අදාළ වන ඕනෑම දෙයක් තමා වෙනත් ක්‍රම මගින්
                      ලබාගෙන ඒවා ඉදිරියේදී වන සිදුවීම් හෝ තවත් කෙනෙකුට එරෙහිව
                      භාවිත කිරීම මෙටා ගේමින් නම් වේ.
                    </p>
                    <p className="mt-2">
                      IC සහ OOC තොරතුරු හුවමාරු කර ගැනීම නොකළ යුතුයි එය පටලවා
                      ගැනීම නීති උල්ලංඝනය කිරීමකි.
                    </p>
                    <p className="mt-2">
                      තමාට අයත් අනෙකුත් චරිතයක තොරතුරු තම චරිතයේ තොරතුරු වලට
                      අදාළ කරගැනීම නොකළ යුතුය.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [7] බල ක්‍රීඩා කිරීම - Power Gaming
                    </h3>
                    <p>
                      තම චරිතයට කළ නොහැකි ක්‍රියාකාරකම් නගරය තුළ සිදු කිරීම. එසේ
                      කිරීම තුළින් තම වාසියට කටයුතු කිරීම බල ක්‍රීඩා නොහොත්
                      power gaming නම් වේ.
                    </p>
                    <p className="mt-2">
                      යම් සිදුවීමකදී තම තුවාල වී ඇති අවස්ථාව දී උපදෙස් ලබාදීම
                      සිදු කළ හැක. තමාට සිදු වී ඇති තුවාල RP කළ හැක.
                    </p>
                    <p className="mt-2">
                      /me තුළින් නිවැරදි තොරතුරු ලබා දීම සිදු කළ යුතු වේ.
                    </p>
                    <p className="mt-2">
                      උදා: පොලිස් නිළධාරියෙක් විසින් /me තුළින් ඔබගේ තුවාල
                      පරීක්ෂා කරන විට ඔබ /me තුළින් නිවැරදි තොරතුරු ලබාදිය
                      යුතුයි.
                    </p>
                    <p className="mt-2 font-semibold">
                      Power Gaming (උදාහරණ නමුත් මේවාට සීමා නොවේ):
                    </p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>
                        Taze කිරීම, Bean bag shotgun භාවිතා කිරීම තුළින් stun වූ
                        කෙනෙකුට නැවත නැගිටීමට නොදී පහරදීම, වෙඩි තැබීම සිදු නොකළ
                        යුතුයි. (Prison break අවස්ථාවකදී මෙය අදාළ නොවේ.)
                      </li>
                      <li>
                        ඔබ තුවාල වී සිටින විට Tactical තොරතුරු කතා කිරීම හෝ ලබා
                        දීම. ඔබ තුවාල වී සිටින අයුරු roleplay කිරීම සිදු කළ හැක.
                      </li>
                      <li>
                        කිමිදුම් කරන අවස්ථාවේදී කතා කිරීම හෝ රේඩියෝ භාවිතා කිරීම
                        කළ නොහැක.
                      </li>
                      <li>
                        වාහනයක් පදවන අවස්ථාවේ දී ඔබට වෙනත් පුද්ගලයෙකු carry
                        කිරීම කළ නොහැක.
                      </li>
                      <li>
                        ඔබට පුද්ගලයෙකු cuff කිරීම gun point කිරීමක් හෝ taze
                        කිරීමක් හෝ නොකර සිදු කළ නොහැක.
                      </li>
                      <li>
                        වෙනත් පුද්ගලයෙකුට කතා කිරීමට හෝ අදහස් ඉදිරිපත් කිරීමට
                        අවස්ථාව ලබා නොදෙන ලෙස කතා කිරීම කළ නොහැක.
                      </li>
                      <li>
                        කකුල් ගැටගසා අනෙක් පුද්ගලයාට සෙළවීමට නොහැකි ලෙස කටයුතු
                        කිරීම කළ නොහැක.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [8] Combat Logging
                    </h3>
                    <p>
                      RP අවස්ථාවක disconnect වීම combat logging නමින් හැඳින්වේ.
                    </p>
                    <p className="mt-2">
                      වෙඩි හුවමාරුවක් අතරතුර, පොලිස් හඹායාමක් අතරතුර, තුවාල වී
                      ඇති අවස්ථාවක තමාට අවැසි අවස්ථාවක දී log out වීම කළ නොහැක.
                      තාක්ෂණික ගැටලුවක් සිදු වුවහොත් එය #crash-report චැනලය
                      ඔස්සේ දැනුම් දිය යුතුය.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [9] RDM - (Random Death Match)
                    </h3>
                    <p>
                      RDM හෙවත් අහඹු deathmatch යනු ගුණාත්මක භූමිකාවක යෙදීමකින්
                      තොරව පුද්ගලයෙකු ඝාතනය හෝ තුවාල කිරීමයි. එම භූමිකාව තුළ
                      කෙනෙකුගේ ජීවිතයක් හෝ තම ජීවිතය ඍජුවම ඇතුළත් වී තිබිය
                      යුතුය. එසේම ඔබගේ අණ පිළිපැදීමට අනෙක් පුද්ගලයාට සෑහෙන
                      (enough) කාලයක් හෝ අනුබලයක් ලබාදිය යුතුය.
                    </p>
                    <p className="mt-2">
                      නිදසුන් ලෙස සොරකමකදී තත්පර 3 ක කාලයකට පසුව ඔවුන් සවන්
                      නොදුන්නේ නම් වෙඩි තැබීමට නොහැක.
                    </p>
                    <p className="mt-2">
                      එසේම ගුණාත්මක භූමිකාවක් තුළ ඉක්මන් ගණනය කිරීම් ගනන් නොගනී.
                    </p>
                    <p className="mt-2">
                      යම් අවස්ථාවලදී (gang war) අර්ථවත් කතාවක් ඇති අවස්ථාවකදී
                      demands ලබා දීමෙන් තොරව වෙඩි තැබිය හැක.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [10] VDM - (Vehicle Death Match)
                    </h3>
                    <p>
                      VDM යනු වාහනයක් ආධාරයෙන් තවත් කෙනෙක් හිතාමතා හෝ
                      නොසැළිකිලමත්කමින් තුවාල කිරීම හෝ ඝාතනය කිරීම කිරීම VDM
                      නමින් හැඳින්වේ.
                    </p>
                    <p className="mt-2">
                      EX- ඕනෑම පුද්ගලයෙකු තවත් පුද්ගලයෙකු හිතාමතා හැප්පීම හෝ
                      වාහනය පිපිරවීම මගින් ඝාතනය හෝ තුවාල කිරීම,
                    </p>
                    <p className="mt-2">
                      මෝටර් රථයක් අධික වේගයෙන් ධාවනයෙන් යතුරු පැදියක ගැටීමෙන් හෝ
                      පුපුරා යාමෙන් මියයාම.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [11] මර්දනකාරී වෙඩි තැබීම් - Suppressive Fire
                    </h3>
                    <p>
                      අපරාධකරුවන් පොලීසියට හෝ වෙනත් කෙනෙකු වෙත වෙඩි තැබීමේදී වචන
                      හුවමාරුවක් වීම අනිවාර්යය නොවේ.
                    </p>
                    <p className="mt-2">
                      නමුත් ඔවුන් එසේ කතා නොකරන්නේ නම් suppressive fire කිරීමක්
                      සිදු කළ යුතුය. Suppressive fire යනු පොලීසිය හෝ වෙනත්
                      පුද්ගලයෙකු cover වීමක් සඳහා පසුබැස්ස වීම සඳහා අනෙක්
                      පාර්ශවයට හානියක් නොවන ලෙස වෙඩි තැබීමයි.
                    </p>
                    <p className="mt-2">
                      එසේම පොලීසියට හෝ අනෙක් පුද්ගලයන්ට cover වීමට, වෙනත්
                      ප්‍රතිචාරයක් දැක්වීමට හෝ ආපසු වෙඩි තැබීමට අවස්ථාව ලබා
                      දීමෙන් අනතුරුව ඔවුන්ට හානි වෙන ලෙස වෙඩි තැබීමට ඔබට හැකියාව
                      ඇත.
                    </p>
                    <p className="mt-2">
                      සැළකිය යුතුයි: මේ සඳහා IC හේතුවක් තිබිය යුතුය.
                    </p>
                    <p className="mt-2 font-semibold">
                      මර්දනකාරී වෙඩි තැබීම් (suppressive fire) සඳහා උදාහරණ:
                    </p>
                    <p>
                      Civilian කෙනෙකුගේ කකුලට වෙඩි තැබීම/ civilian කෙනෙකුගේ කාර්
                      එකක හුඩ් එකට හෝ දොරට වෙඩි තැබීම / පොලිස් හෙලිකොප්ටරයේ පසු
                      කොටසට (tail) හෝ හෙලිකොප්ටරයේ පැති කොටසට (side) වෙඩි තැබීම.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [12] නව ජීවිතයක් ලැබීම සම්බන්ධ නීති - New life rules
                    </h3>
                    <p>
                      ඔබ නව ජීවිතයක් ලබාගත් පසු ඔබට ඔබ මියගිය අකාරය ආදී වූ දේ
                      අමතක වන නමුත් ඔබගේ චරිතය, රැකියාව වැනි දේ එලෙසම පවතී.
                    </p>
                    <p className="mt-2 font-semibold">නව ජීවිතයක් ලැබීම:</p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>ඔබව ඝාතනය කිරීමෙන්</li>
                      <li>නැවත ඉපදීමකින් (re-spawn)</li>
                    </ul>
                    <p className="mt-2 font-semibold">
                      පහත සිදුවීම් සඳහා සම්බන්ධ නම් නව ජීවිතයක් නොලැබේ:
                    </p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>ඔබ VDM සිදුවීමක සැකකරුවෙකු නම්</li>
                      <li>ඔබ RDM සිදුවීමක සැකකරුවෙකු නම්</li>
                      <li>ඔබ තුවාල වී ආධාර ලැබෙන තෙක් සිටී නම්</li>
                      <li>
                        ඔබ ක්‍රීඩා කර අවසානයේ නගරයෙන් ඉවත් වූයේ නම් (Disconnect)
                      </li>
                    </ul>
                    <p className="mt-2">
                      නැවත ඉපදීම සිදුවීමටම නැවත සම්බන්ධ වීමට නොහැකි වුවහොත් හෝ
                      සිදුවීමෙන් මිනිත්තු 10 ඔබ මිය ගිය ස්ථානයට 500m දුරට හෝ එම
                      සිදුවීමට නැවත සම්බන්ධ විය නොහැක. ඔබ මිය ගිය ස්ථානයට 500m
                      දුරට හෝ එම සිදුවීමට නැවත සම්බන්ධ වීමට නොහැකි වුවහොත් හෝ
                      සිදුවීමෙන් මිනිත්තු 10 පසු පැමිණියහොත් අනෙක් පුද්ගලයන්
                      ඔහුය සිදු වූ දේ පවසා භූමිකාව ඉදිරියට රැගෙන යා යුතුය. නමුත්
                      එය පළිගැනීමක් දක්වා ගෙන යා නොහැකි අතර එසේ සිදු කළහොත් ඔබව
                      නගරයෙන් ඉවත් කිරීමට හෝ සදාකාලික තහනමකට ලක් කල හැකිය.
                    </p>
                    <p className="mt-2">
                      ඔබ පොලීසිය හෝ EMS ඔබ සිටින ස්ථානයට පැමිණෙන බව දැන්වූ විට
                      ඔබට respawn විය නොහැක.
                    </p>
                    <p className="mt-2">
                      ඔබ යම් සිදුවීමක් සිදුවන අතරතුර respawn වීම නොකළ යුතුය.
                    </p>
                    <p className="mt-2">
                      ඔබ යම් සිදුවීමක් අවසානයේ තුවාල වී ඇත්නම් ඔබව නගර වැසියන්ට
                      නොපෙනේ නම් ඔබට 911 කතා කළ නොහැක.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [13] 6 Man Rule
                    </h3>
                    <p>
                      අපරාධ සිදුවීමකට සම්බන්ධ විය හැක්කේ උපරිම 6 දෙනෙකුට පමණි.
                      ඔබ හට එම අවස්ථාවේ radio හරහා හෝ යම් ආකාරය සම්බන්ධ වන ඕනෑම
                      අයෙක් ඔබගේ කණ්ඩායමට අදාළ වේ.
                    </p>
                    <p className="mt-2">
                      එවැනි අවස්ථාවක radio එකෙහි 6 දෙනෙකුට වඩා සිටිය නොහැක.
                    </p>
                    <p className="mt-2">
                      ඔබට 6 දෙනෙකුට වඩා කිසිදු අපරාධ ක්‍රියාවකට සම්බන්ධ විය
                      නොහැකි අතර එම අවස්ථාවේ radio කතා කළ හැක්කේ ද 6 දෙනෙකුට
                      පමණි.
                    </p>
                    <p className="mt-2">
                      ඔබට යම් සිදුවීමක් සිදුවන විට ඔබට එය ඔබගේ යහළුවන්/කල්ලි
                      සාමාජිකයන් 15 සිටින්න පුලුවන් ඔබගේ terf එක තුළට ගෙන යා
                      නොහැක.
                    </p>
                    <p className="mt-2">
                      ඔබ යම්කිසි කණ්ඩායමකට සැලසුම් කර පහර දෙන්නේ නම් ඔබට ගෙන යා
                      හැක්කේ හය දෙනෙකුට පමණි. ප්‍රතිවාදී කණ්ඩායමේ හයට හෝ ඊට
                      වැඩිය සිටියත් ඔබට ගෙන යා හැක්කේ හය දෙනෙකු පමණි. එමෙන්ම එය
                      gang සටනක් නම් ඔබට 15 දෙනෙකු සම්බන්ධ කර ගත හැක.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [14] /ooc භාවිතය
                    </h3>
                    <p>
                      ඔබට /ooc භාවිතා කළ හැක්කේ ඔබගේ RP අවස්ථාව තාක්ෂණික හේතුවක්
                      මත නවත්වන්නේ නම් පමණි.
                    </p>
                    <p className="mt-2">
                      වෙනත් කරුණක් නම් discord support චැනල් හෝ report චැනල්
                      භාවිතා කළ හැක.
                    </p>
                    <p className="mt-2">
                      උදා, වෙඩි තැබීමක් අතර - ඔලුව පිපිරීමක් වුණා විනාඩි 5 රැඳී
                      ඉන්න.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [15] තහනම් RP
                    </h3>
                    <p className="font-semibold text-red-300">
                      දූෂණ සම්බන්ධ, ගැබ් ගැනීම් සම්බන්ධ, සියදිවි නසා ගැනීම්
                      සම්බන්ධ Rp තහනම් කර ඇත.
                    </p>
                    <p className="mt-2">
                      Erotic Rp - පොදු ස්ථානයවල සිදු කිරීම තහනම් වේ. පුද්ගලික
                      ස්ථානවල පමණක් සිදුකළ හැක. Youtube TOS පිළිබඳ සැලකිලිමත්
                      වන්න.
                    </p>
                    <p className="mt-2">
                      වදදීම් සම්බන්ධ RP - සියලු පාර්ශවයන්ගේ කැමැත්ත මත සිදුකළ
                      හැක.
                    </p>
                    <p className="mt-2">
                      සතුන් සම්බන්ධ RP - staff පමණි. නැතහොත් staff/admin අවසර
                      ලබා දුන්නේ නම් පමණි.
                    </p>
                    <p className="mt-2">
                      Bomb Rp - බෝම්බ පිපිරීම්, විශාල පිපිරීම් සිදුවන ආයුධ, ජීව
                      විද්‍යාත්මක හෝ රසායනික විද්‍යාත්මක යුද්ධ තහනම් කර ඇත.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [16] වචන හා Digital content භාවිතය
                    </h3>
                    <p>
                      ඔබට copyright සහිත ගීත සියලු දෙනාගේ අවසරය එම ස්ථානයේ දී
                      ලැබේනම් භාවිතා කළ හැකි අතර ඔබට රෝහල හා පොලිසිය වැනි රජයේ
                      ස්ථාන වල සිදු කළ නොහැක.
                    </p>
                    <p className="mt-2">
                      පුද්ගලයෙකුට හානිවන ආකාරයේ වචන භාවිතයේදී සියලු පාර්ශවයන්ගේ
                      එකඟතාවක් තිබිය යුතුය.
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                      [17] පොලීසිය නොමග යැවීම හා රාජකාරියට බාධා කිරීම - Cop
                      baiting
                    </h3>
                    <p>
                      පොලීසිය නොමග යැවීම හා රාජකාරියට බාධා කිරීම සියලු
                      ක්‍රීඩකයන්ට තහනම් වේ. බැංකු කොල්ලයක, අපරාධ ස්ථානයක හෝ
                      මිනීමැරුමක් සිදු වූ ස්ථානයක සිටින නිළධාරීන්ගේ භූමිකා
                      නිරූපණයට බාධා වන ලෙස කටයුතු කිරීම තහනම්ය.
                    </p>
                    <p className="mt-2 font-semibold">Cop Baiting හි උදාහරණ:</p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>
                        මාර්ගය අසළ කතා කරමින් සිටින පොලිස් නිළධාරීන්ට කරදරකාරී
                        වන අයුරින් වාහනයේ නළාව (horn) හැඬවීම.
                      </li>
                      <li>
                        සිදුවෙමින් පවතින භූමිකාවකට අවධානය ගැනීම සඳහා සම්බන්ධ
                        වීම.
                      </li>
                      <li>
                        පොලිස් නිළධාරියෙකු ඉදිරිපිට Rp කිරීමකින් තොරව හැප්පීම්,
                        වෙඩි තැබීම්, මෙන්ම අනවශ්‍ය හැසිරීම් සිදු කිරීම කළ නොහැක.
                      </li>
                      <li>
                        10-90 අවස්ථාවක එනම් බැංකු මංකොල්ලයක් සිදුවන විට එම
                        ස්ථානයේ රැඳී සිටීම ද පොලිසියට බාධා කිරීම් ගනයට අයත් වේ.
                      </li>
                      <li>
                        පොලිස් app හරහා රාජකාරියේ යෙදී සිටින නිළධාරීන් සෙවීම.
                      </li>
                      <li>
                        911 හා anonymous ආකාරයෙන් කතා කර නිළධාරීන් නොමග යැවීම
                        නොකළ යුතුය.
                      </li>
                      <li>
                        පොලිසිය වෙත alerts යවා යම් ස්ථානයකට ගෙන්වා ගැනීම නොකළ
                        යුතුය.
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Server Guidelines Section */}
              <motion.section variants={itemVariants}>
                <h2 className="text-3xl font-bold text-blue-400 mb-4">
                  III. සර්වර් මාර්ගෝපදේශ
                </h2>

                <div className="space-y-6">
                  <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">
                      [18] අඩු උත්සාහ RP - Low Effort Rp
                    </h3>
                    <p>
                      ඔබ ඔබගේ භූමිකා නිරූපණය සඳහා තම උපරිම උත්සාහය නොයෙදූ විට එය
                      අඩු උත්සාහ භූමිකා නිරූපණය වේ.
                    </p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>
                        පොලිස් නිළධාරීන් නොමග යැවීම, හිතාමතා පොලිස් හඹායාම් හා
                        නැවැත්වීම් සිදු කර ගැනීම
                      </li>
                      <li>NPC (bot) ප්‍රාණ ඇපකරුවන් ලෙස තබා ගැනීම</li>
                      <li>නිකරුණේ වෙඩි තැබීම, දඩ මුදල් නියම කරන විට පැන යාම</li>
                      <li>
                        අහඹු කොල්ලකෑම් ආදිය අඩු උත්සාහ භූමිකා නිරූපණයට අයත් වේ
                      </li>
                      <li>EMS Rp වෙත ඔබගේ සහයෝගය ලබා දීමට කටයුතු කරන්න</li>
                    </ul>
                  </div>

                  <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">
                      [19] Fail RP
                    </h3>
                    <p>
                      Fail Rp යනු ඔබට අදාල භූමිකා නිරූපණය ඔබට නිවැරදිව සිදු
                      කිරීමට නොහැකි වීමයි. එය ඔබව නගරයෙන් ඉවත් කිරීමට හැකි
                      වරදකි. ඔබ ක්‍රීඩා කිරීමේදී තම භූමිකාව තාත්විකව පවත්වා ගෙන
                      යාමට ඔබ සමත් විය යුතුය.
                    </p>
                    <p className="mt-2">
                      එසේම GTA සැබෑ ක්‍රීඩාවේදී සිදු කරන නමුත් ඔබට සැබෑ ජීවිතයේ
                      දී කළ නොහැකි ක්‍රියා මෙහිදී ද කළ නොහැක.
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">
                      [20] චරිතය අවසන් කිරීම - Perma Death
                    </h3>
                    <p>
                      ඔබට කිසිම අවස්ථාවක තවත් කෙනෙකුට තම චරිතය අවසන් කරන ලෙස
                      බලපෑම් කළ නොහැක.
                    </p>
                    <p className="mt-2">
                      ඔබ බරපතළ තුවාල ලබා සිටින විටක ඔබට චරිතය අවසන් කිරීමට
                      සිතුනහොත් ඔබට EMS හෝ පොලිසිය දැනුවත් කර චරිතය අවසන් කළ
                      හැක.
                    </p>
                    <p className="mt-2">
                      ඔබ /me භාවිතා කර ඔබ ඊට අදාළ දැනුවත් කිරීම් කළ යුතුය.
                    </p>
                    <p className="mt-2">
                      ඔබ ඔබගේ එම චරිතය අවසන් කළ පසු නැවත එම චරිතයෙන් Rp කළ
                      නොහැක.
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">
                      [21] හදිසි සේවා සම්බන්ධ නීති - Emergency Services
                    </h3>
                    <p>
                      දූෂිත පොලිස් නිළධාරියෙකුගේ හෝ EMS කෙනෙකුගේ චරිතයක් කළ
                      නොහැක. මෙයට සෘජුව හෝ වක්‍රාකාරයෙන් බඩු වෙනත් රජයේ
                      නිළධාරීන් නොවන අයෙකුට ලබා දීම අදාළ වේ.
                    </p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>
                        ඔබ handcuff කොට රෝහල හෝ පොලිසිය වෙත ගෙන ආ විට සිදුවීම
                        අවසන්ය
                      </li>
                      <li>
                        ඔබට රෝහලේ හෝ පොලිසියේ සිටින සැකකරුවෙකු නිදහස් කරන ලෙස
                        ඉල්ලමින් hostage කෙනෙකු ගත නොහැක
                      </li>
                      <li>
                        ඔබට රෝහලේ හෝ පොලිසිය තුළ වෙඩි තැබීම් කොට අපරාධකරුවන්
                        බේරා ගත නොහැකි අතර ඔබ එවැනි සිදුවීමක් සිදු වුවහොත් නගරයට
                        සිදුවන බලපෑම පිළිබඳ දැනුවත් විය යුතුය
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">
                      [22] මංකොල්ල කෑම - Robbing
                    </h3>
                    <p>
                      ඔබ දකින සියලු දෙනාව මංකොල්ල කෑම Rp සඳහා වාසිදායක නොවේ.
                      පුද්ගලයෙකු මංකොල්ල කෑම පිළිබඳ හොඳින් සිතා බැලිය යුතු අතර
                      එය සෑමවිටම සිදු නොවිය යුතුය. එය ඔබේ චරිතයේ කොටසක් නොවිය
                      යුතුය.
                    </p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>
                        Jewelry store, convenience stores සහ banks එක දිගට
                        දාමයක් ලෙස මංකොල්ල කෑම නොකළ යුතුය. පොලිසිය සමග Rp නොකර
                        එකම ස්ථානය නැවත නැවත මංකොල්ල කෑම නොකළ යුතුය
                      </li>
                      <li>
                        ඔබට බැංකු, jewelry store හෝ වෙනත් කිසිදු ආකාරයක මංකොල්ල
                        කෑමක් සුනාමි පැමිණීමට මිනිත්තු 30කට ආසන්න වූ විට කිරීමට
                        අවසර හිමි වන්නේ නැත
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 className="text-xl font-semibold text-blue-300 mb-2">
                      [23] No crime Zone (NCZ)
                    </h3>
                    <p>
                      NCZ තුළ හෝ ඒ අවට කිසිදු ආකාරයක අපරාධ ක්‍රියාවක් හෝ නීති
                      උල්ලංඝනය කිරීමක් නොකළ යුතුය. නමුත් බොරුකීම, එම ස්ථානයෙන්
                      පැනයාම කළ හැක.
                    </p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      <li>
                        පුද්ගලයෙකු NCZ ඔහුගේ ආරක්ෂාවට භාවිතා කරයි නම් පහරදීමට
                        බලා සිටින පුද්ගලයන් ඔහු එම ස්ථානයෙන් ඉවත් වන තෙක් රැඳී
                        සිටිය යුතුය
                      </li>
                      <li>
                        අපරාධයකට සම්බන්ධ වූ පසු මිනිත්තු 15 යනතුරු ඔවුන්ට NCZ
                        වෙත පැමිණිය නොහැකි අතර එය ඔබ පොලිසියට යටත් වීමක් වැනිය
                      </li>
                      <li>
                        NCZ - නීත්‍යානුකූල සූදු මධ්‍යස්ථාන, රජයේ ආයතන, පොලිසිය,
                        රෝහල හා ආගමික ස්ථාන
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Other Section */}
              <motion.section variants={itemVariants}>
                <h2 className="text-3xl font-bold text-green-400 mb-4">
                  IV. වෙනත්
                </h2>

                <div className="space-y-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>ඔබට ඔබගේ මිතුරන් hostages ලෙස ගැනීම අනුමත කළ නොහැක</li>
                    <li>
                      ඔබට AFK හෝ RP situation ඉවත් කළ කෙනෙකු සමග සම්බන්ධතා
                      පැවැත්විය නොහැක
                    </li>
                    <li>
                      පටිගත කිරීම් - එවැනි අවස්ථාවක දුරකතනය හෝ කැමරා භාවිතා කරන
                      emotes භාවිතා කළ යුතුය
                    </li>
                    <li>
                      ඔබට භාවිතා කළ හැක්කේ එක් whitelisted gang character එකක්
                      පමණි. වෙනත් characters භාවිතා කළ නොහැක
                    </li>
                    <li>
                      ගැටලු නිරාකරණය සඳහා නගරය තුළදී staff වෙත යාමෙන් වළකින්න.
                      /report භාවිතා කරන්න
                    </li>
                    <li>
                      තුවාල වී හෝ සිහිසුන් වී තිබෙන (downed) පුද්ගලයාට ප්‍රතිකාර
                      ලබා දී hostage ගැනීම කළ නොහැක. අවශ්‍ය නම් පණ තිබෙන
                      අවස්ථාවේ පමණක් ගත හැකිය
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
                  මෙම නීතිරීති ඕනෑම මොහොතක දි වෙනස් විය හැකි එම නිසා නිතරම ගණ
                  අවධානයෙන් සිටින්න!!!!
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
