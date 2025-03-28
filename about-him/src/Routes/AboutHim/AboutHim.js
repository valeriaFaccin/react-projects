import styles from "./aboutHim.module.css";
import coverAboutHim from "../../assets/the_building.jpeg";
import pictureAboutHim from "../../assets/picture_about_him.jpeg";
import anotherPictureAboutHim from "../../assets/another_picture_of_him.jpeg";
import PostModel from "../../Components/PostModel/PostModel";

const AboutHim = () => {
    return (
        <PostModel cover_picture={coverAboutHim} title={"About Me"}>
                <h3 className={styles.subtitle}>The Legendary Dr. Heinz Doofenshmirtz!</h3>
                <img className={styles.picture_about_him} src={pictureAboutHim} alt={"Its him, Dr. Doofenshmirtz!"}/>

                <p className={styles.paragraph}>Ah, so you wish to know more about me, the infamous, the brilliant, the
                        tragically misunderstood Dr. Heinz Doofenshmirtz! Well, prepare yourselves for a tale filled
                        with heartbreak, genius, and, of course, mildly successful evil!</p>

                <h3 className={styles.title}>My Early Days – A Childhood of Misery and Oddly Specific Neglect</h3>

                <p className={styles.paragraph}>I was born in the small, completely forgettable village of Drusselstein,
                        where I had the absolute worst childhood imaginable. My parents—oh, don’t get me started on
                        them—completely ignored me! I mean, they literally forgot I existed for most of my youth! They
                        even let a gnome take my place at family events! A gnome! And when I was finally acknowledged,
                        they forced me to be a lawn gnome. Yes, an actual human lawn gnome.</p>

                <p className={styles.paragraph}>As if that wasn’t bad enough, I also spent my entire early life being
                        overshadowed by my younger brother, Roger—the golden boy, the beloved child, the smug-faced
                        politician who ruins everything.</p>

                <h3 className={styles.title}>My Academic Career – From Science Nerd to Evil Genius</h3>

                <p className={styles.paragraph}>Despite my awful upbringing, I always had a knack for science (and,
                        let’s be honest, revenge). I attended Evil Science Academy, where I majored in Mad Engineering,
                        Diabolical Scheming, and Petty Revenge 101. My final thesis project was supposed to be the
                        world's first Destruct-o-Ray—but wouldn’t you know it, Roger won the Most Likely to Succeed
                        award instead! (He wasn’t even in science! The injustice!)</p>

                <img className={styles.another_picture_about_him} src={anotherPictureAboutHim} alt={"Its him, Dr. Doofenshmirtz!"}/>

                <h3 className={styles.title}>How I Became a Criminal Mastermind (Sort of)</h3>

                <p className={styles.paragraph}>After years of not getting the respect I deserved, I founded
                        Doofenshmirtz Evil Incorporated, a company dedicated to creating “inators”—ingenious devices
                        designed to take over the Tri-State Area (and, eventually, the world)! Of course, my plans tend
                        to get slightly foiled... usually by Perry the Platypus (but we’ll get to him in a second).</p>

                <h3 className={styles.title}>My Goals – World Domination… Or at Least Some Recognition</h3>

                <p className={styles.paragraph}>My primary goal is to conquer the Tri-State Area! But let’s be real, at
                        this point, I’d settle for just one successful evil plan. Just one. I mean, is that too much to
                        ask? I’ve got the lab, the minions, the catchy theme song… I just need an inator that actually
                        works.</p>

                <h3 className={styles.title}>My Arch-Nemesis – Perry the Platypus</h3>

                <p className={styles.paragraph}>Ah, Perry the Platypus—my arch-nemesis, my greatest foe, my… oddly
                        consistent companion? Every day, he bursts into my lab, foils my plans, and leaves without so
                        much as a “goodbye”—so rude. But, you know, it’s kinda weird when he’s not around. It’s like… I
                        miss him? No, no! That’s ridiculous. I mean, he’s just a platypus. He doesn’t even do much…
                        except for the kicking and the punching and the foiling of my genius ideas. But still!</p>

                <h3 className={styles.title}>Final Words – My Evil Legacy Awaits!</h3>

                <p className={styles.paragraph}>So, now you know my tragic, inspiring, and completely unfair story. One
                        day, mark my words, I will succeed! And when that day comes, the Tri-State Area will finally
                        know the name Dr. Heinz Doofenshmirtz—not as some failed villain, but as the supreme evil
                        overlord!</p>

                <p className={styles.paragraph}>…Or, at the very least, I’ll get a trophy or something. That’d be
                        nice.</p>
        </PostModel>
    );
}

export default AboutHim;
