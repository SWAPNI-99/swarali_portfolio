import { Story } from '../types';
import { MEDIA } from './media';

export const STORIES: Story[] = [
  {
    
    id: 'aravalli-mining',
    title: 'Aravalli illegal mining investigation',
    category: 'Investigation',
    date: '2025–2026',
    location: 'Aravalli Range, Rajasthan',
    organization: 'Republic Media Network',
    role: 'Lead field investigative reporter',
    summary:
      'Reporting from remote villages in the Aravalli range — places with little media outreach and, in stretches, no network — investigated illegal mining, regulatory non-compliance and the effect on local communities. The assignment included mining hotspots, villagers’ accounts, a sting on an illegal mine owner.',
    reportingDetails: [
      'Travelled through isolated hamlets with limited or no mobile coverage to record testimonies.',
      'Documented non-compliance with mining restrictions and environmental guidelines.',
    ],
    youtubeId: 'Y7D1LkQeZ-0',
    featured: true,
    videoSrc: MEDIA.aravalliVideo,
    tier: 1,
  },
  {
    id: 'goa-fire-tragedy',
    title: 'Goa fire tragedy',
    category: 'Tragedy',
    date: '2025–2026',
    location: 'Arpora, Goa',
    organization: 'Republic Media Network',
    role: 'On-ground special correspondent',
    summary:
      'After the nightclub fire in which 25 people died, reported from the ground - on licensing, safety failures and the investigation that followed. The coverage included real time story updates and digging all elements like questioning the Arpora village sarpanch on license approvals, spy cam recording with ruling BJP MLA Michael Lobo and followed TTs with Goa CM Pramod Sawant.',
    reportingDetails: [
      'Reported on human angle element of story talking to deceased relatives.',
      'Tailed several layers of fractured fire security system, involvement of government officers and illegal practices by owners of the club.',
      'Major takeaway - observed the same systemic failure in several night clubs, bars and restaurants across Goa.',
    ],
    youtubeId: 'QY9Zfb9aags',
    featured: true,
    videoSrc: MEDIA.goaVideo,
    tier: 1,
  },
  {
    id: 'national-security-modules',
    title: 'Ricin module and Gujarat ATS operations',
    category: 'National security',
    date: '2025–2026',
    location: 'Ahmedabad & Saharanpur',
    organization: 'Republic Media Network',
    role: 'Gujarat bureau & security reporter',
    summary:
      'From the Gujarat bureau, reported the arrest of Dr. Ahmed Mohiuddin Syed in the Ricin plot, Gujarat ATS action against a Jaish-linked module with a Saharanpur connection, and related illegal immigration reporting. Prime-time bulletins tracked forensic claims, terror financing leads and inter-state sweeps as they were put on air.',
    reportingDetails: [
      'Tracked various evidences of this plot involving seized incriminating text, raw material to make potent chemical and inputs of location recce.',
      'Interviewed Gujarat ATS SP k. Siddharth on the arrest and investigation.',
      
    ],
    featured: true,
    videoSrc: MEDIA.ricinVideo,
    youtubeId: 'pPcGNUdJCug',
    tier: 1,
  },
  {
    id: 'kerala-assembly-elections',
    title: 'Kerala Assembly election results',
    category: 'Politics',
    date: '2025–2026',
    location: 'Thiruvananthapuram, Kerala',
    organization: 'Republic Media Network',
    role: 'Political correspondent',
    summary:
      ' Reported from congress bhavan in Trivandrum on counting day. Interviewed all three Congress chief ministerial contenders - KC Venugopal, Ramesh Chennithala and current CM VD Satheesan. The reporting placed Kerala’s verdict alongside a wider southern shift — Congress in Kerala, Vijay in Tamil Nadu, the BJP’s Bengal result, and the Left losing its last bastion.',
    reportingDetails: [
      'Was an experience to deliver even after language barrier.',
      'Major power shift as anti incumbency ousted Pinarayi Vijayan and left.',
      'BJP claimed kerala to be its next Bengal with same increased strategic presence.',
    ],
    featured: true,
    videoSrc: MEDIA.keralaVideo,
    tier: 1,
  },
  {
    id: 'defence-pokhran-vayu-shakti',
    title: 'Exercise Vayu Shakti, Pokhran',
    category: 'Defence',
    date: '2024–2025',
    location: 'Pokhran Fire Range, Jaisalmer, Rajasthan',
    organization: 'Republic Media Network',
    role: 'Defence field reporter',
    summary:
      'From the field firing range in Pokhran.Covered exercise Vayu Shakti conducted by the Indian Air Force. Defence assignments has a different thrill.This one was even special staging actual replica of the Opearation Sindoor.IAFs efficient fleet of Rafale, Sukhoi Su-30MKI, Mirage 2000, MiG-29, and Jaguar with its onpoint targeting trembled the entire range. The indigenous Akash surface-to-air missile system showcased the precision of India’s defence capabilities.',
    reportingDetails: [
      'With precision parameters the exercise was a message to world that India is prepared to protect its teritory.',
      'Coordinated multi domain operations can be executed by Indian Air Force.',
    ],
    featured: true,
    imageSrc: MEDIA.defenceBroadcast,
    tier: 2,
  },
  {
    id: 'maharashtra-political-turmoil',
    title: 'Maharashtra political turmoil',
    category: 'Politics',
    date: '2022–2024',
    location: 'Mumbai & Pune, Maharashtra',
    organization: 'Times Network (Mirror Now / Times Now)',
    role: 'Bureau reporter',
    summary:
      'During Maharashtra’s regime change, tracked floor tests and coalition talks and conducted a tic-tac with Chief Minister Eknath Shinde. Filing moved across Mirror Now, Times Now and Times Now Marathi in English, Hindi and Marathi.',
    reportingDetails: [
      'Live tic-tac and press interviews with Chief Minister Eknath Shinde.',
      'Covered negotiations involving Ajit Pawar, Supriya Sule and Aditya Thackeray.',
    ],
    keyInterviews: [
      'Eknath Shinde, Chief Minister of Maharashtra',
      'Aditya Thackeray',
      'Ajit Pawar, Deputy Chief Minister',
    ],
    youtubeId: '2kWI6WpQsCI',
    tier: 2,
  },
  {
    id: 'pune-river-front',
    title: 'Pune River Front Development',
    category: 'Civic & environment',
    date: '2023',
    location: 'Pune, Maharashtra',
    organization: 'Times Network (Mirror Now)',
    role: 'Pune district bureau reporter',
    summary:
      'A civic and environment report on Pune’s River Front Development along the Mula-Mutha, looking at flood-risk concerns, tree felling and public objections. This has been a story of resilient civil society and environmental activists voicing up against the RFD project to save the city from the aftermath .',
    reportingDetails: [
      'Surveyed riverbank stretches marked for clearing.',
      'Spoke with municipal planners and environmental activists on flood-line changes.',
    ],
    youtubeId: 'l_oYgysRv_A',
    tier: 2,
  },
  {
    id: 'chandani-chowk-multi-bridge',
    title: 'Chandani Chowk Multi-Bridge',
    category: 'Civic Infrastructure',
    date: '2022',
    location: 'Chandani Chowk, Pune',
    organization: 'Times Network',
    role: 'Reporter',
    summary:
      'Chandani Chowk became a major traffic choke point on the Mumbai–Bangalore Highway. An ambitious multi-level flyover was developed without signals to enable smoother traffic movement.',
    reportingDetails: [
      'Reported on Chandani Chowk becoming a major traffic choke point on the Mumbai–Bangalore Highway.',
      'Covered the development of the ambitious multi-level flyover.',
      'Reported on the signal-free design aimed at enabling smoother traffic movement.',
    ],
    youtubeId: '',
    featured: false,
    tier: 2,
  },
  {
    id: 'save-vetal-tekdi',
    title: 'Save Vetal Tekdi',
    category: 'Civic & environment',
    date: '2023',
    location: 'Pune, Maharashtra',
    organization: 'Times Network',
    role: 'Environment reporter',
    summary:
      'Reporting on proposed ring roadand developmet project works through Vetal Tekdi, including citizen protests and concerns over the hill’s ecology which are known as lungs of the Pune City.',
    reportingDetails: [
      'Documented citizen protests against proposed hill roads and tunnels.',
    ],
    youtubeId: 'l_oYgysRv_A',
    tier: 2,
  },
  {
    id: 'gujarat-assembly-elections-2022',
    title: 'Gujarat Assembly Elections 2022',
    category: 'Politics',
    date: '2022',
    location: 'Ahmedabad & rural Gujarat',
    organization: 'Times Network',
    role: 'Election correspondent',
    summary:
      'Field reporting across constituencies during the 2022 Gujarat Assembly elections, including an interview with Gujarat Home Minister Harsh Sanghvi.',
    reportingDetails: [
      'Multilingual ground reports from the campaign.',
      'Interviewed Gujarat Home Minister Harsh Sanghvi.',
    ],
    youtubeId: 'UIoehoQcNog',
    tier: 2,
  },
  {
    id: 'ahmedabad-airport-dgca',
    title: 'Ahmedabad airport and DGCA accountability',
    category: 'Civic',
    date: '2025–2026',
    location: 'Sardar Vallabhbhai Patel International Airport, Ahmedabad',
    organization: 'Republic Media Network',
    role: 'Gujarat bureau reporter',
    summary:
      'Live reporting from Ahmedabad airport on flight cancellations and stranded passengers, putting questions of regulator accountability to the DGCA on air.',
    reportingDetails: [
      'Spoke on air with stranded families, senior citizens and students.',
    ],
    tier: 3,
  },
  {
    id: 'iran-us-war-cargo-docking',
    title: 'Port docking during Iran–US tensions',
    category: 'National security',
    date: '2025',
    location: 'Gujarat coastline and port corridors',
    organization: 'Republic Media Network',
    role: 'Special correspondent',
    summary:
      'Reporting on Indian port docking and cargo movement during heightened Iran–US tensions.',
    reportingDetails: [
      'Tracked commercial cargo delays affecting export supply lines.',
    ],
    youtubeId: 'O9o7vh23DBE',
    tier: 3,
  },
];
