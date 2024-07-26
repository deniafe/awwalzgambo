import Image from "next/image";

export default async function IndexPage() {

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col py-32 px-6 md:p-24 md:mt-20 gap-12">
      <h1 className="text-4xl font-bold tracking-tighter">About</h1>
      <div className="container mx-auto py-12 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Vice Admiral Awwal Zubairu Gambo</h1>
        <p className="text-xl">21st CHIEF OF THE NAVAL STAFF, Federal Republic of Nigeria</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3">
          <Image
            src="/img/favicon.png" // Replace with actual image path
            alt="Vice Admiral Awwal Zubairu Gambo"
            width={500}
            height={500}
            className=""
          />
        </div>
        <div className="md:w-2/3">
          <p className="text-lg mb-4">
            <strong>Born:</strong> April 22, 1966, Kano State
          </p>
          <p className="text-lg mb-4">
            <strong>Rank:</strong> Vice Admiral
          </p>
          <p className="text-lg">
            Vice Admiral Awwal Zubairu Gambo was appointed as the Chief of the Naval Staff of the Federal Republic of Nigeria in January 2021. He has had a distinguished career in the Nigerian Navy, holding various key positions and making significant contributions to the {`nation's`} defense and security.
          </p>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Appointments</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>January 2021:</strong> Chief of the Naval Staff, Federal Republic of Nigeria</li>
          <li><strong>2018 - January 2021:</strong> Director, Procurement, Defence Space Administration</li>
          <li><strong>2017 - 2018:</strong> Chief Staff Officer, Headquarters Naval Training Command, Lagos</li>
          <li><strong>June - Sept 2017:</strong> Security Coordinator, Presidential Relief Committee on North Eastern Nigeria</li>
          <li><strong>March - Sept 2017:</strong> Director, Research and Rescue, Defence Headquarters, Abuja</li>
          <li><strong>2015 - 2017:</strong> Director, Simulation, Naval Doctrine and Assessment Centre, Bonny Camp, Lagos</li>
          <li><strong>2014 - 2015:</strong> Deputy Director and Acting Director, Defence Affairs, Office of National Security Adviser (ONSA)</li>
          <li><strong>2008 - 2010:</strong> Naval Assistant to Chief of Naval Staff</li>
          <li><strong>2007 - 2008:</strong> Deputy Director Strategy, Headquarters Defence Intelligence Agency</li>
          <li><strong>2004 - 2005:</strong> Base Intelligence Officer, NNS DELTA</li>
          <li><strong>2001:</strong> Officer-in-Charge, Tug Ajayi JOE</li>
          <li><strong>1989 - 2000:</strong> Midshipman/Watch Keeping Officer, NNS AMBE, DAMISA, AYAM, etc.</li>
          <li><strong>1989:</strong> Commissioned Sub-Lieutenant</li>
        </ul>
      </div>
      
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Professional Affiliations</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Master Transport Management (MTM)</li>
          <li>Fellow, National Defence College South Africa (ensp) (RSA)</li>
          <li>Fellow, Nigerian Institute of Management (FNIM)</li>
          <li>Fellow, Chartered Institute of Shipping (FCIS)</li>
          <li>Fellow, Institute of Corporate Administration of Nigeria (FCAI)</li>
          <li>Member Governing Council, Member Council of Fellows (IIPS)</li>
          <li>Life Member, United State Naval Institute (LMUSNI)</li>
        </ul>
      </div>
      
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>2021:</strong> Honorary Doctor of Science, IRSBACCOM</li>
          <li><strong>2012:</strong> Member Course 26 of 2012, National Defence College, SA</li>
          <li><strong>2009:</strong> Master of Science Degree in Transport Management (Logistics Option), Ladoke Akintola University of Technology (LAUTECH), Ogbomosho</li>
          <li><strong>2008:</strong> Post Graduate Diploma in Transport Management (Logistics Option), Ladoke Akintola University of Technology (LAUTECH), Ogbomosho</li>
          <li><strong>2003/2004:</strong> Senior Staff Course, Armed Forces Command and Staff College, Jaji</li>
          <li><strong>2000:</strong> Officer Long Course with specialization in Under Water Warfare, NNS QUORRA</li>
          <li><strong>1999:</strong> Junior Staff Course, Armed Forces Command and Staff College, Jaji</li>
          <li><strong>1995:</strong> Young Officers Intelligence Course</li>
          <li><strong>1984:</strong> Graduating Member, 36 Regular Course, Nigerian Defence Academy (NDA)</li>
        </ul>
      </div>
      
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Awards and Decorations</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>ECOMOG Peacekeeping Medal</li>
          <li>Passed Staff Course (PSC)</li>
          <li>Admiralty Medal (AM)</li>
          <li>General Service Star (GSS)</li>
          <li>Fellow of National Defence College South Africa ENSP (RSA)</li>
        </ul>
      </div>
    </div>
    </main>
  );
}
