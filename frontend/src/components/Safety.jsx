import SectionHeading from "./SectionHeading";
import SectionContainer from "./SectionContainer";

function Safety() {
  return (
    <SectionContainer>
      <div className="w-full py-8" id="safety">
        <SectionHeading>Safety</SectionHeading>

        <div className="flex border-rose-400 pl-4 py-2 my-2 items-center -ml-7 justify-center sm:justify-start">
          <img src="/minilogo.png" alt="Find the One Logo" className="w-16" />
          <h3 className="font-fontHeading text-rose-700 font-bold text-lg">
            Your safety is our highest priority
          </h3>
        </div>

        {/* Online Safety Section */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-800 pb-2 border-b border-gray-200">
            Online Safety
          </h3>
          <p className="text-slate-600 mt-4">
            Meeting new individuals is an invigorating experience, yet it's
            essential to approach interactions with caution, especially when
            engaging with unfamiliar faces. Trust your instincts and prioritize
            your safety, whether you're exchanging initial communications or
            arranging in-person meetings.
          </p>

          <div className="mt-6 space-y-6">
            <div className=" pb-4">
              <h3 className="text-slate-950 font-bold mb-2">
                Avoid Sharing Financial Information Online
              </h3>
              <p className="text-slate-500">
                Never send money, especially via wire transfer, even if the
                other person claims to be in an emergency. Sending money this
                way is akin to sending cash—it's extremely difficult to reverse
                the transaction or track where the money ends up. Additionally,
                never disclose information that could grant access to your
                financial accounts.
              </p>
            </div>

            <div className=" pb-4">
              <h3 className="text-slate-950 font-bold mb-2">
                Personal Information Security
              </h3>
              <p className="text-slate-500">
                Avoid disclosing personal details, such as your social security
                number, home or work address, or specific aspects of your daily
                routine to individuals you're unfamiliar with. If you're a
                parent, exercise caution in sharing information about your
                children in your profile or initial communications.
              </p>
            </div>

            <div className=" pb-4">
              <h3 className="text-slate-950 font-bold mb-2">
                Approach Long-Distance Relationships with Caution
              </h3>
              <p className="text-slate-500">
                Be cautious of individuals who claim to be from your country but
                are allegedly stuck somewhere else, particularly if they request
                financial assistance. Exercise vigilance with anyone unwilling
                to meet in person or engage in a phone/video call, as they may
                not be who they claim to be.
              </p>
            </div>
          </div>
        </div>

        {/* Meeting in Person Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 pb-2 border-b border-gray-200">
            Meeting in Person
          </h3>
          <p className="text-slate-600 mt-4">
            When meeting someone for the first time, always prioritize your
            safety by following these guidelines:
          </p>

          <div className="mt-6 space-y-6">
            <div className=" pb-4">
              <h3 className="text-slate-950 font-bold mb-2">
                Meet in Public and Stay in Public
              </h3>
              <p className="text-slate-500">
                Always choose a busy, public setting for your first few
                meetings. Never meet at your home, their home, or any private
                location. If your date pressures you to go to a private
                location, end the date immediately.
              </p>
            </div>

            <div className=" pb-4">
              <h3 className="text-slate-950 font-bold mb-2">
                Don't Leave Drinks or Personal Items Unattended
              </h3>
              <p className="text-slate-500">
                Know where your drink comes from and keep track of it at all
                times. Only accept drinks directly from the bartender or server.
                Many substances used to facilitate assault are odorless,
                colorless, and tasteless. Keep your phone, purse, wallet, and
                personal information with you at all times.
              </p>
            </div>

            <div className=" pb-4">
              <h3 className="text-slate-950 font-bold mb-2">
                If You Feel Uncomfortable, Leave
              </h3>
              <p className="text-slate-500">
                It's completely acceptable and encouraged to end a date early if
                you feel uncomfortable. Trust your instincts—if something feels
                off or unsafe, don't hesitate to ask staff for help or leave the
                situation.
              </p>
            </div>
          </div>
        </div>

        {/* Simple reminder note */}
        <div className="border-l-4 border-gray-300 pl-4 py-2 mt-8">
          <p className="text-slate-700">
            Remember: Always inform friends or family about your meeting plans,
            including location and who you'll be with.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Safety;
