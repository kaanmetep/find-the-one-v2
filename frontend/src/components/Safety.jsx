import SectionHeading from "./SectionHeading";
import SectionContainer from "./SectionContainer";
function Safety() {
  return (
    <SectionContainer>
      <div className=" w-full" id="safety">
        <SectionHeading>Safety</SectionHeading>
        <h3 className="mt-4 font-fontHeading text-rose-400 font-extrabold">
          Your safety is more important than anything!
        </h3>
        <h3 className="mt-4 text-black font-bold">Online Safety</h3>
        <p className="text-slate-600 mt-2">
          Meeting new individuals is an invigorating experience, yet it's
          essential to approach interactions with caution, especially when
          engaging with unfamiliar faces. Trust your instincts and prioritize
          your safety, whether you're exchanging initial communications or
          arranging in-person meetings. While you can't predict the behavior of
          others, there are proactive measures you can take to ensure your
          safety while expanding your social circle.
        </p>
        <ul className=" list-none">
          <li className="p-2">
            <h3 className="text-slate-500 italic mt-2 ">
              Avoid Sharing Financial Information Online
            </h3>
            <p>
              It's essential to prioritize your safety and financial security
              while engaging online. Never send money, especially via wire
              transfer, even if the other person claims to be in an emergency.
              Sending money this way is akin to sending cash—it's extremely
              difficult to reverse the transaction or track where the money ends
              up. Additionally, never disclose information that could grant
              access to your financial accounts. If another user requests money
              from you, please report it to us promptly for assistance.
            </p>
          </li>
          <li className="p-2">
            <h3 className="text-slate-500 italic mt-4">
              Personal Information Security
            </h3>
            <p>
              Avoid disclosing personal details, such as your social security
              number, home or work address, or specific aspects of your daily
              routine (like frequenting a certain gym on Mondays), to
              individuals you're unfamiliar with. If you're a parent, exercise
              caution in sharing information about your children in your profile
              or initial communications. Refrain from revealing details like
              your children's names, school locations, or ages and genders to
              protect their privacy and safety.
            </p>
          </li>
          <li className="p-2">
            <h3 className="text-slate-500 italic mt-4">
              Approach Long-Distance and Overseas Relationships with Caution
            </h3>
            <p>
              Be cautious of individuals who claim to be from your country but
              are allegedly stuck somewhere else, particularly if they request
              financial assistance to return home. Exercise vigilance with
              anyone unwilling to meet in person or engage in a phone/video
              call, as they may not be who they claim to be. If someone avoids
              answering your questions or rushes into a serious relationship
              without proper communication or meetings, consider this a red
              flag.
            </p>
          </li>
        </ul>

        <h3 className="mt-8 text-black font-bold">Meeting in Person</h3>
        <ul>
          <p className="text-slate-600 mt-2">
            When meeting someone for the first time, always choose a busy,
            public setting. Avoid meeting at your home, their home, or any
            private location to ensure a safe and comfortable experience. Keep
            your friends or family informed about where you’re going and who
            you’ll be with. Trust your instincts — if anything feels off, it’s
            okay to end the date early. Additionally, keep an eye on your
            belongings and avoid leaving drinks or personal items unattended.
            Remember, your safety comes first, and seeking assistance from staff
            in public places is encouraged if you ever feel uncomfortable.
          </p>
          <li className=" p-2">
            <h3 className="text-slate-500 italic mt-2">
              Meet in Public and Stay in Public
            </h3>
            <p>
              Meet for the first few times in a populated, public place — never
              at your home, your date’s home, or any other private location. If
              your date pressures you to go to a private location, end the date.
            </p>
          </li>
          <li className="p-2">
            <h3 className="text-slate-500 italic mt-4">
              Don’t Leave Drinks or Personal Items Unattended
            </h3>
            <p>
              Know where your drink comes from and know where it is at all times
              — only accept drinks poured or served directly from the bartender
              or server. Many substances that are slipped into drinks to
              facilitate sexual assault are odorless, colorless, and tasteless.
              Also, keep your phone, purse, wallet, and anything containing
              personal information on you at all times.
            </p>
          </li>
          <li className="p-2">
            <h3 className="text-slate-500 italic mt-4">
              If You Feel Uncomfortable, Leave
            </h3>
            <p>
              It’s okay to end the date early if you’re feeling uncomfortable.
              In fact, it’s encouraged. And if your instincts are telling you
              something is off or you feel unsafe, ask the bartender or server
              for help.
            </p>
          </li>
        </ul>
      </div>
    </SectionContainer>
  );
}

export default Safety;
