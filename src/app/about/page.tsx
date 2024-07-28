'use client'
import { Award, BriefcaseBusiness, GraduationCap, SchoolIcon, StarIcon, WorkflowIcon } from "lucide-react";
import Image from "next/image";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function IndexPage() {

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col py-24 px-6 md:p-24 md:mt-20 gap-12">

     <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Vice Admiral Awwal Zubairu Gambo</h1>
          <p className="text-xl">21st CHIEF OF THE NAVAL STAFF, Federal Republic of Nigeria</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <Image
              src="/img/about.jpg" // Replace with actual image path
              alt="Vice Admiral Awwal Zubairu Gambo"
              width={800}
              height={800}
              className="rounded-full h-60 w-60 bg-cover"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg mb-4">
              <span>Born:</span> April 22, 1966, Kano State
            </p>
            <p className="text-lg mb-4">
              <span>Rank:</span> Vice Admiral
            </p>
            <p className="text-lg">
              Vice Admiral Awwal Zubairu Gambo was appointed as the Chief of the Naval Staff of the Federal Republic of Nigeria in January 2021. He has had a distinguished career in the Nigerian Navy, holding various key positions and making significant contributions to the {`nation's`} defense and security.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-center">Appointments</h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2021"
          iconStyle={{ background: '#eea95a', color: '#fff' }}
          icon={<BriefcaseBusiness />}
          visible
        >
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><span className="font-medium">January 2021:</span> Chief of the Naval Staff, Federal Republic of Nigeria</li>
            <li><span className="font-medium">2018 - January 2021:</span> Director, Procurement, Defence Space Administration</li>
            <li><span className="font-medium">2017 - 2018:</span> Chief Staff Officer, Headquarters Naval Training Command, Lagos</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015 - 2017"
          iconStyle={{ background: '#eea95a', color: '#fff' }}
          icon={<BriefcaseBusiness />}
          visible
        >
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><span className="font-medium">June - Sept 2017:</span> Security Coordinator, Presidential Relief Committee on North Eastern Nigeria</li>
            <li><span className="font-medium">March - Sept 2017:</span> Director, Research and Rescue, Defence Headquarters, Abuja</li>
            <li><span className="font-medium">2015 - 2017:</span> Director, Simulation, Naval Doctrine and Assessment Centre, Bonny Camp, Lagos</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2015"
          iconStyle={{ background: '#eea95a', color: '#fff' }}
          icon={<BriefcaseBusiness />}
          visible
        >
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><span className="font-medium">2014 - 2015:</span> Deputy Director and Acting Director, Defence Affairs, Office of National Security Adviser (ONSA)</li>
            <li><span className="font-medium">2008 - 2010:</span> Naval Assistant to Chief of Naval Staff</li>
            <li><span className="font-medium">2007 - 2008:</span> Deputy Director Strategy, Headquarters Defence Intelligence Agency</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1989 - 2004"
          iconStyle={{ background: '#eea95a', color: '#fff' }}
          icon={<BriefcaseBusiness />}
          visible
        >
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><span className="font-medium">2004 - 2005:</span> Base Intelligence Officer, NNS DELTA</li>
            <li><span className="font-medium">2001:</span> Officer-in-Charge, Tug Ajayi JOE</li>
            <li><span className="font-medium">1989 - 2000:</span> Midshipman/Watch Keeping Officer, NNS AMBE, DAMISA, AYAM, etc.</li>
            <li><span className="font-medium">1989:</span> Commissioned Sub-Lieutenant</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>


      <h2 className="text-2xl font-bold mb-4 text-center">Professional Affiliations</h2>

      <VerticalTimeline>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=""
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
          visible
        >
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Master Transport Management (MTM)</li>
            <li>Fellow, National Defence College South Africa (ensp) (RSA)</li>
            <li>Fellow, Nigerian Institute of Management (FNIM)</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=""
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
          visible
        >
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Fellow, Chartered Institute of Shipping (FCIS)</li>
            <li>Fellow, Institute of Corporate Administration of Nigeria (FCAI)</li>
            <li>Member Governing Council, Member Council of Fellows (IIPS)</li>
            <li>Life Member, United State Naval Institute (LMUSNI)</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <h2 className="text-2xl font-bold mb-4 text-center">Education</h2>

      <VerticalTimeline>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2009 - 2021"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<GraduationCap />}
          visible
        >
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><span className="font-medium">2021:</span> Honorary Doctor of Science, IRSBACCOM</li>
            <li><span className="font-medium">2012:</span> Member Course 26 of 2012, National Defence College, SA</li>
            <li><span className="font-medium">2009:</span> Master of Science Degree in Transport Management (Logistics Option), Ladoke Akintola University of Technology (LAUTECH), Ogbomosho</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2000 - 2008"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<GraduationCap />}
          visible
        >
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><span className="font-medium">2008:</span> Post Graduate Diploma in Transport Management (Logistics Option), Ladoke Akintola University of Technology (LAUTECH), Ogbomosho</li>
            <li><span className="font-medium">2003/2004:</span> Senior Staff Course, Armed Forces Command and Staff College, Jaji</li>
            <li><span className="font-medium">2000:</span> Officer Long Course with specialization in Under Water Warfare, NNS QUORRA</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1984 - 1999"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<GraduationCap />}
          visible
        >
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><span className="font-medium">1999:</span> Junior Staff Course, Armed Forces Command and Staff College, Jaji</li>
            <li><span className="font-medium">1995:</span> Young Officers Intelligence Course</li>
            <li><span className="font-medium">1984:</span> Graduating Member, 36 Regular Course, Nigerian Defence Academy (NDA)</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <h2 className="text-2xl font-bold mb-4 text-center">Awards And Decorations</h2>

      <VerticalTimeline>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=""
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<Award />}
          visible
        >
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>ECOMOG Peacekeeping Medal</li>
            <li>Passed Staff Course (PSC)</li>
            <li>Admiralty Medal (AM)</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=""
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<Award />}
          visible
        >
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>General Service Star (GSS)</li>
            <li>Fellow of National Defence College South Africa ENSP (RSA)</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>

    </main>
  );
}
