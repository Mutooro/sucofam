// ─── STATIC CONTENT DATA ───
import coffee1 from '@/assets/img/coffee1.jpg'
import coffee3 from '@/assets/img/coffee3.jpeg'
import coffeeBg from '@/assets/img/coffee_bg.jpeg'
import smellCoffee from '@/assets/img/smell_coffee.jpg'
import test1 from '@/assets/img/test_1.jpg'
import test2 from '@/assets/img/test_2.jpg'
import test5 from '@/assets/img/test_5.jpg'
import mukokoma from '@/assets/img/mukokoma.jpeg'
import logo from '@/assets/img/logo.jpeg'
import placeholder1 from '@/assets/img/gettyimages-518782849-612x612.jpg'
import placeholder2 from '@/assets/img/istockphoto-2212181979-612x612.webp'
import partnership from '@/assets/img/partnership.jpeg'
import raap from '@/assets/img/raap.jpeg'
import nyamwamba from '@/assets/img/nyamwamba.jpeg'
import agronomy from '@/assets/img/agronomy.jpeg'
import rwenzori_farmers from '@/assets/img/rwenzori_farmers.jpeg'
import beatrice from '@/assets/img/beatrice.jpeg'
import enid from '@/assets/img/enid.jpeg'

// ─── Program section images (extracted from Detailed SUCOFAM Program docx) ───
import progCsaAgroforestry1 from '@/assets/img/prog_csa_agroforestry1.jpeg'
import progCsaAgroforestry2 from '@/assets/img/prog_csa_agroforestry2.jpeg'
import progCsaAgroforestry3 from '@/assets/img/prog_csa_agroforestry3.jpeg'
import progCsaSoilWater1 from '@/assets/img/prog_csa_soil_water1.jpeg'
import progCsaSoilWater2 from '@/assets/img/prog_csa_soil_water2.jpeg'
import progCsaSoilWater3 from '@/assets/img/prog_csa_soil_water3.jpeg'
import progCsaCapacity1 from '@/assets/img/prog_csa_capacity1.jpeg'
import progCsaCapacity2 from '@/assets/img/prog_csa_capacity2.jpeg'
import progF2mpOrg1 from '@/assets/img/prog_f2mp_org1.jpeg'

export const vision = "To build a transformed agricultural sector in Uganda where farmers especially women and youth adopt improved agronomic practices, produce high-quality, market-compliant products, and participate equitably in transparent and profitable value chains free from exploitation."

export const mission = "To empower farmers through capacity building in good agronomic practices, quality assurance, and post-harvest management, while strengthening access to market information, financial services, and structured markets enabling them to reduce distress sales, overcome middlemen exploitation, and secure fair, sustainable incomes from coffee, cocoa, and honey value chains."

export const culture = [
  {
    title: 'Empowerment-Driven',
    desc: 'We operate with a deep commitment to farmer empowerment, ensuring that every intervention builds the capacity, confidence, and agency of smallholder farmers especially women and youth to actively lead and benefit from agricultural value chains.'
  },
  {
    title: 'Market-Oriented Performance',
    desc: 'We foster a results-driven environment where quality, competitiveness, and market alignment guide all operations from production to value addition and trade ensuring farmers’ transition from subsistence to profitable agribusiness.'
  },
  {
    title: 'Inclusive & Participatory',
    desc: 'We uphold a culture where every voice matters, promoting gender equality, youth inclusion, and participatory decision-making across farmer groups, cooperatives, and organizational structures.'
  },
  {
    title: 'Sustainability & Resilience',
    desc: 'We embed climate-smart thinking and environmental stewardship into all actions, ensuring that farming systems, communities, and ecosystems are resilient, regenerative, and future-ready.'
  },
  {
    title: 'Holistic Impact',
    desc: 'We go beyond agriculture by promoting integrated household transformation, addressing income, nutrition, education, health, and financial inclusion as interconnected drivers of sustainable livelihoods.'
  }
]

export const ourGoals = [
  {
    id: 1,
    title: 'Increase Farmer Incomes and Market Participation',
    desc: 'To transition smallholder farmers from subsistence to commercial, market-integrated production systems by strengthening value addition, aggregation, and direct market linkages for coffee, cocoa, and honey.'
  },
  {
    id: 2,
    title: 'Empower Women and Youth for Inclusive Agribusiness Leadership',
    desc: 'To enhance equitable participation and leadership of women and youth across agricultural value chains by improving access to skills, finance, productive resources, and enterprise opportunities.'
  },
  {
    id: 3,
    title: 'Build Climate-Resilient and Sustainable Farming Systems',
    desc: 'To promote climate-smart agriculture, environmental conservation, and resilience-building practices that safeguard productivity, restore ecosystems, and ensure long-term sustainability of farming households.'
  }
]

export const programs = [
  {
    id: 'climate-smart-agriculture',
    icon: 'CloudRain',
    title: 'Climate-Smart Agriculture',
    desc: 'Promoting sustainable practices that build long-term productivity and climate resilience.',
    goal: 'To implement climate-smart agricultural interventions that enhance productivity, protect the environment, and build resilient farming livelihoods in the Rwenzori region.',
    sections: [
      {
        title: 'Environmental Protection, Agroforestry & Tree Planting',
        desc: 'This is the most widely promoted CSA intervention in the Rwenzori region.',
        images: [progCsaAgroforestry1, progCsaAgroforestry2, progCsaAgroforestry3],
        activities: [
          'Planting shade trees in coffee and cocoa plantations.',
          'Establishing woodlots for sustainable fuel and timber.',
          'Planting fruit trees to improve household nutrition and income.',
          'Restoring degraded hillsides and riverbanks through soil-binding plants.',
          'Conserving and promoting indigenous tree species.'
        ],
        benefits: [
          'Reduces heat stress on coffee and cocoa crops.',
          'Improves soil fertility through organic leaf litter.',
          'Enhances carbon sequestration capacity.',
          'Protects and restores local biodiversity.',
          'Diversifies and stabilizes household income.'
        ]
      },
      {
        title: 'Soil and Water Conservation',
        desc: 'Because the Rwenzori landscape is mountainous, preventing soil erosion is essential.',
        images: [progCsaSoilWater1, progCsaSoilWater2, progCsaSoilWater3],
        activities: [
          'Constructing terraces on steep agricultural slopes.',
          'Implementing contour farming and planting grass strips.',
          'Building stone bunds and check dams to control water runoff.',
          'Applying mulching and organic composting to conserve soil moisture.',
          'Establishing rainwater harvesting systems and drainage channels.'
        ],
        benefits: [
          'Significantly reduces soil erosion and landslide risks.',
          'Conserves soil moisture during dry spells.',
          'Reduces localized floods and water runoff damage.',
          'Improves soil organic matter content and structure.',
          'Maintains long-term agricultural productivity.'
        ]
      },
      {
        title: 'Climate-Resilient Crop and Livestock Production',
        desc: 'Farmers are encouraged to adopt improved technologies that can withstand changing weather.',
        activities: [
          'Distributing and planting drought- and disease-tolerant crop varieties.',
          'Introducing improved coffee and banana varieties.',
          'Diversifying household farming enterprises (coffee, cocoa, bananas, beans, vegetables, fruits).',
          'Improving pasture management and establishing zero-grazing systems.',
          'Upgrading livestock housing and promoting improved fodder production.'
        ],
        benefits: [
          'Ensures stable yields despite climate variability.',
          'Reduces overall risk of complete crop failure.',
          'Improves livestock health and dairy/meat productivity.',
          'Enhances household food security and dietary diversity.'
        ]
      },
      {
        title: 'Integrated Soil Fertility and Pest Management',
        desc: 'Healthy soils and reduced pest pressure increase resilience to climate change.',
        activities: [
          'Promoting compost and farmyard manure application.',
          'Implementing green manuring and crop rotation practices.',
          'Encouraging intercropping to maximize space and nutrients.',
          'Training on Integrated Pest Management (IPM) techniques.',
          'Promoting biological pest controls and reducing dependence on synthetic chemicals.'
        ],
        benefits: [
          'Restores and maintains natural soil fertility.',
          'Reduces production costs by minimizing synthetic input usage.',
          'Fosters healthier agricultural ecosystems.',
          'Builds crop resistance to emerging pests and diseases.',
          'Increases crop yields sustainably.'
        ]
      },
      {
        title: 'Farmer Capacity Building and Climate Information Services',
        desc: 'Knowledge transfer is critical for successful CSA adoption.',
        images: [progCsaCapacity1, progCsaCapacity2],
        activities: [
          'Establishing Farmer Field Schools (FFS) for hands-on learning.',
          'Setting up demonstration gardens as localized learning hubs.',
          'Providing climate and weather advisory services to guide farming calendars.',
          'Strengthening community-based extension services.',
          'Supporting record keeping and farm business management training.'
        ],
        benefits: [
          'Accelerates adoption of climate-smart agricultural technologies.',
          'Enables better, data-driven farm decision-making.',
          'Improves farmer access to structured value chains.',
          'Increases community resilience to sudden climate shocks.',
          'Strengthens farmer groups and cooperatives.'
        ]
      }
    ]
  },
  {
    id: 'farm-to-market',
    icon: 'ShoppingBag',
    title: 'Farm-to-Market Enterprise Development (F2MP)',
    desc: 'Empowering farmers, adding value, and connecting value chain products to premium markets.',
    tagline: 'Empowering Farmers, Adding Value, Connecting Markets.',
    goal: 'To strengthen farmer organizations and agribusiness enterprises through value addition, entrepreneurship development, market integration, and sustainable trade partnerships that increase household incomes and employment opportunities.',
    sections: [
      {
        title: 'Farmer Organization, Strengthening & Competitiveness',
        images: [progF2mpOrg1],
        activities: [
          'Mobilizing and registering farmer groups, cooperatives, and producer organizations.',
          'Strengthening governance, leadership, and financial management of cooperatives.',
          'Promoting inclusive participation of women, youth, and PWDs in cooperative leadership.',
          'Developing organizational strategic and business plans for long-term growth.',
          'Building digital cooperative management and record-keeping systems.',
          'Supporting quality certifications (Organic, Fairtrade, Rainforest Alliance, UTZ).',
          'Implementing crop/product traceability systems from farm to buyer.',
          'Promoting climate-smart and sustainable agribusiness models.'
        ]
      },
      {
        title: 'Agribusiness Development',
        activities: [
          'Training farmers in agribusiness management, financial literacy, and entrepreneurship.',
          'Promoting business planning, record keeping, and enterprise development.',
          'Supporting producer-led agribusiness enterprises and start-ups.',
          'Facilitating access to professional Business Development Services (BDS).',
          'Improving farmer investment readiness and loan management capacity.'
        ]
      },
      {
        title: 'Value Addition, Agro-processing & Market Access',
        activities: [
          'Training on good post-harvest handling (drying, sorting, storage) and quality management.',
          'Establishing and upgrading processing facilities (wet mills, hullers, honey processors).',
          'Supporting product packaging, branding, and national UNBS certification.',
          'Developing new value-added products from coffee, cocoa, and honey value chains.',
          'Linking farmer groups directly with local, regional, and international buyers.',
          'Facilitate contract farming and structured premium marketing arrangements.',
          'Organizing trade fairs, business forums, and buyer-seller matchmaking events.',
          'Promoting digital marketing and e-commerce platforms for wider trade outreach.'
        ]
      },
      {
        title: 'Financial Inclusion and Enterprise Financing',
        activities: [
          'Establishing and strengthening Village Savings and Loan Associations (VSLAs).',
          'Facilitating access to affordable agricultural finance and credit products.',
          'Linking farmer groups and cooperatives to commercial banks and microfinance institutions.',
          'Promoting warehouse receipt systems and inventory financing.',
          'Building household capacity in financial planning, savings, and investments.'
        ]
      },
      {
        title: 'Employment and Youth Enterprise Development',
        activities: [
          'Supporting youth-led agricultural start-ups and services (e.g., pruning, spraying teams).',
          'Developing vocational skills in agro-processing, machinery repair, and agribusiness.',
          'Promoting decent rural employment opportunities for youth and women.',
          'Strengthening and mentoring women-owned agricultural enterprises.',
          'Facilitating business incubation, mentorship, and coaching for emerging entrepreneurs.'
        ]
      }
    ]
  },
  {
    id: 'community-well-fair',
    icon: 'Heart',
    title: 'Community Well-Fair',
    desc: 'Holistic social interventions addressing nutrition, health, education, and social protection.',
    goal: 'To improve the general well-being of farming households by addressing interconnected social drivers of development including food security, public health, access to education, and social protection.',
    sections: [
      {
        title: 'Nutrition and Household Food Security',
        activities: [
          'Promoting diversified household food production through kitchen and backyard gardens.',
          'Establishing school and community demonstration gardens for crop diversity.',
          'Training households in balanced diets, clean food preparation, preservation, and storage.',
          'Promoting nutrition-sensitive agriculture, including biofortified crop varieties.',
          'Supporting household food security planning to bridge the lean season gaps.',
          'Conducting nutrition awareness campaigns for pregnant women, youth, and caregivers.'
        ]
      },
      {
        title: 'Health and Well-being',
        activities: [
          'Conducting community health education and hygiene behavior change campaigns.',
          'Promoting maternal, newborn, and child health awareness and access to services.',
          'Supporting Water, Sanitation, and Hygiene (WASH) initiatives (safe water sources, latrines).',
          'Facilitate community health outreach and disease prevention camps (malaria, waterborne diseases).',
          'Promoting mental health awareness, counseling, and psychosocial well-being.',
          'Encouraging healthy lifestyles through physical activity and substance abuse prevention.'
        ]
      },
      {
        title: 'Education and Skills Development',
        activities: [
          'Supporting school enrollment, regular attendance, and retention, particularly for girls.',
          'Promoting adult functional literacy and numeracy programs within cooperatives.',
          'Providing vocational, technical, and life-skills training for youth and women.',
          'Establishing community learning and resource centers equipped with study materials.',
          'Promoting digital literacy and access to modern learning technologies.',
          'Supporting school feeding/nutrition programs to improve concentration and health.'
        ]
      },
      {
        title: 'Social Inclusion and Protection',
        activities: [
          'Strengthening community support networks, self-help groups, and safety nets.',
          'Promoting gender equality, household joint-decision making, and women\'s leadership.',
          'Empowering youth through leadership training and inclusion in local planning committees.',
          'Supporting rights and access to resources for PWDs and other marginalized groups.',
          'Facilitating access to social protection schemes and legal/referral services.'
        ]
      },
      {
        title: 'Community Awareness and Behaviour Change',
        activities: [
          'Conducting awareness campaigns on nutrition, hygiene, child protection, and ecology.',
          'Promoting positive parenting and child protection practices in farming households.',
          'Facilitating local community dialogues on social development and conflict resolution.',
          'Strengthening local leadership capacity in community-driven development planning.'
        ]
      }
    ]
  }
]

export const products = [
  {
    id: 'coffee',
    icon: 'Coffee',
    tag: 'Value Chain Product',
    name: 'SUCOFAM Coffee',
    desc: 'High-quality, traceable coffee produced and processed by organized farmer groups. Connecting Uganda\'s coffee farmers to premium and structured markets.',
    gradient: 'linear-gradient(135deg, #2C1810 0%, #6B3E26 100%)',
  },
  {
    id: 'cocoa',
    icon: 'Bean',
    tag: 'Value Chain Product',
    name: 'SUCOFAM Cocoa',
    desc: 'Premium cocoa supporting emerging cocoa farmers and youth-led enterprises. A growing value chain with significant export potential.',
    gradient: 'linear-gradient(135deg, #3D1C02 0%, #7A4A20 100%)',
  },
  {
    id: 'honey',
    icon: 'Droplets',
    tag: 'Value Chain Product',
    name: 'SUCOFAM Honey',
    desc: 'Natural honey produced through sustainable beekeeping initiatives involving women and youth groups. Pure, traceable, and community-powered.',
    gradient: 'linear-gradient(135deg, #7A4A08 0%, #C8891A 100%)',
  },
]

export const impactStats = [
  { number: '4,532+', label: 'Farmers Reached', detail: 'Across our value chains in Uganda' },
  { number: '100+', label: 'Bee Hives Sited', detail: 'Supporting honey production and pollination' },
  { number: '50,000+', label: 'Trees Planted', detail: 'Climate action initiatives in 2025/2026' },
  { number: '5+', label: 'Operating Locations', detail: 'Kasese, Kabarole, Kyegegwa, Bunyangabu & Rubirizi' },
]

export const whyPartner = [
  { title: 'Farmer-Centered', desc: 'Strong focus on youth and women empowerment.' },
  { title: 'Market-Driven', desc: 'Integration of production, value addition, and branding.' },
  { title: 'National Reach', desc: 'Operations across Uganda supporting multiple value chains.' },
  { title: 'Holistic Development', desc: 'Addresses agriculture, health, and education.' },
  { title: 'Sustainability', desc: 'Climate-smart and environmentally responsible.' },
  { title: 'Proven Impact', desc: 'Measurable improvements in livelihoods and resilience.' }
]

export const newsArticles = [
  {
    id: 4,
    date: 'May 06, 2026',
    title: 'Promoting Agritourism in Rwenzori Region',
    category: 'Agritourism',
    summary: 'SUCOFAM joined the rest of the tourism actors in Rwenzori region to participate in a three weeks long training in Fort Portal. In partnership with Mubec safaris, we are on a journey to promote Agritourism in the value chains of coffee, cocoa and honey.',
    image: partnership
  },
  {
    id: 6,
    date: 'May 07, 2026',
    title: "Empowering Thuwatikanaye Coffee Cooperative",
    category: 'Farmer Empowerment',
    summary: "Our team engaged members of Thuwatikanaye Coffee Cooperative Society in Nyamwamba Division in Kasese district and shared experiences on good agronomic practices. SUCOFAM is aiming at not only improving farmers' income but also emphasises on the quality and quantity of the harvest. We have trained and equipped our model farmers who will host our demo gardens from where the rest of the communities will learn from.",
    image: nyamwamba
  },
  {
    id: 5,
    date: 'May 06, 2026',
    title: "Rwenzori Agroecology Actors' Platform Strategic Planning",
    category: 'Strategic Partnerships',
    summary: "SUCOFAM believes that we do more together! We recently joined other likeminded organisations in the Rwenzori region under our coalition; Rwenzori Agroecology Actors' Platform (RAAP) to develop a five year strategic plan. RAAP is actively promoting sustainable agricultural practices to protect the ecosystem and ensure food security.",
    image: raap
  },
  {
    id: 7,
    date: 'May 07, 2026',
    title: "Scaling Good Agronomic Practices for Farmer Prosperity",
    category: 'Agronomy Training',
    summary: "Our agronomists are actively on the ground training farmers in Good Agronomic Practices (GAP). Through this continuous capacity building, farming households are seeing a significant transformation—harvest quantities are increasing, and farmers are earning more from their gardens than ever before.",
    image: agronomy
  },
  {
    id: 1,
    date: 'April 24, 2026',
    title: 'Expanding Our Climate-Smart Initiatives',
    category: 'Climate Action',
    summary: 'SUCOFAM reaches a milestone of 50,000 trees planted across Kasese region as part of our carbon sequestration program.',
    image: rwenzori_farmers
  },
  {
    id: 2,
    date: 'April 15, 2026',
    title: 'New Market Linkages for Honey Producers',
    category: 'Market Access',
    summary: 'Connecting our women-led bee keeping groups to premium export markets, ensuring fair prices and sustainable growth.',
    image: placeholder1
  },
  {
    id: 3,
    date: 'March 28, 2026',
    title: 'Youth Agribusiness Training Kicks Off',
    category: 'Youth Empowerment',
    summary: 'Over 100 young farmers have enrolled in our latest agribusiness and value addition masterclass.',
    image: coffee3
  }
]

export const navLinks = [
  { label: 'Home', section: 'home' },
  { label: 'About', section: 'about', children: [
    { label: 'Who We Are', section: 'about', hash: '#who-we-are' },
    { label: 'What We Do', section: 'about', hash: '#what-we-do' },
    { label: 'How We Do It', section: 'about', hash: '#how-we-do-it' },
  ]},
  { label: 'Programs', section: 'programs', children:
    programs.map(p => ({ label: p.title, section: 'programs', hash: `#${p.id}` }))
  },
  { label: 'Value Chains', section: 'products', children: [
    { label: 'Coffee', section: 'products', hash: '#coffee' },
    { label: 'Honey', section: 'products', hash: '#honey' },
    { label: 'Cocoa', section: 'products', hash: '#cocoa' },
  ]},
  { label: 'Impact', section: 'impact' },
  { label: 'Gallery', section: 'gallery' },
  { label: 'News', section: 'news' },
]

export const teamMembers = [
  {
    name: 'Maate Coroneri',
    role: 'Executive Director',
    bio: 'Maate Coroneri is a passionate and dedicated leader with a deep commitment to community development. As Executive Director of SUCOFAM Uganda, he spearheads the organization’s vision of transforming the lives of farmers through sustainable agriculture and value chain development.',
    image: null,
    social: { linkedin: '#', twitter: '#', email: 'info@sucofam.org' }
  },
  {
    name: 'Beatrice Nyangoma',
    role: 'Director of Operations',
    bio: 'Beatrice Nyangoma is a seasoned communications professional with over eight years of experience in driving operational excellence. At SUCOFAM, she spearheads strategic partnership engagement and oversees client relations, ensuring that high-level collaborations translate into sustainable growth.',
    image: null,
    social: { linkedin: '#', twitter: '#', email: 'info@sucofam.org' }
  },
  {
    name: 'Baluku Wangehya',
    role: 'Coffee Value Chain Manager',
    bio: 'A committed coffee value chain professional dedicated to advancing sustainable coffee farming practices. His work focuses on boosting farmer incomes, enhancing coffee quality and production volumes, and championing climate-smart agriculture. Through continuous training and farmer mentorship, he plays a pivotal role in SUCOFAM Uganda’s mission to foster agricultural transformation and community resilience.',
    image: null,
    social: { linkedin: '#', twitter: '#', email: 'info@sucofam.org' }
  },
  {
    name: 'Bazale Jonah',
    role: 'Agritourism Manager',
    bio: 'Bazale Jonah is a passionate and creative Agritourism practitioner dedicated to advancing sustainable agricultural tourism. At SUCOFAM Uganda, he designs and implements tourism initiatives that highlight the value chains of coffee, cocoa, and honey, fostering meaningful connections between visitors and farming communities. His work blends agricultural knowledge with tourism innovation to promote local culture, environmental stewardship, and economic development.',
    image: null,
    social: { linkedin: '#', twitter: '#', email: 'info@sucofam.org' }
  },
  {
    name: 'Enid Biira',
    role: 'Legal Administrator',
    bio: 'Enid is a results-driven Legal practitioner with extensive experience in the legal and administrative domain. At SUCOFAM Uganda, she supports the organization’s legal and administrative functions, ensuring smooth operations and compliance with relevant regulations.',
    image: null,
    social: { linkedin: '#', twitter: '#', email: 'info@sucofam.org' }
  },
  {
    name: 'David Mumbere',
    role: 'MEAL Practitioner',
    bio: 'Mumbere David is a results-driven Monitoring, Evaluation, Accountability, and Learning (MEAL) practitioner with extensive experience in data management, research, and community-based programming. At SUCOFAM Uganda, he supports organizational learning and program effectiveness through high-quality data systems and impactful community engagement.',
    image: null,
    social: { linkedin: '#', twitter: '#', email: 'info@sucofam.org' }
  },
  {
    name: 'Kansiime Doreen',
    role: 'Nutrition and Food Security Lead',
    bio: 'Kansiime Doreen is a dedicated Nutrition and Food Security Lead at SUCOFAM Uganda. She specializes in implementing community-based nutrition programs, promoting household food security through sustainable kitchen gardening, and providing education on dietary diversity to farming families.',
    image: null,
    social: { linkedin: '#', twitter: '#', email: 'info@sucofam.org' }
  },
  {
    name: 'Kule Opio',
    role: 'Coffee Agronomy Officer',
    bio: 'Kule Opio is a Coffee Agronomy Officer at SUCOFAM Uganda. He is committed to supporting coffee farmers in implementing good agronomic practices (GAP) to improve crop yields, ensure bean quality, and promote climate-resilient farming techniques.',
    image: null,
    social: { linkedin: '#', twitter: '#', email: 'info@sucofam.org' }
  },
  {
    name: 'Baluku Bobo',
    role: 'Coffee Business Development Officer',
    bio: 'Baluku Bobo serves as the Coffee Business Development Officer at SUCOFAM Uganda. He focuses on strengthening coffee value chains, facilitating market linkages for farmer groups, and developing agribusiness strategies that ensure farmers secure fair and sustainable incomes.',
    image: null,
    social: { linkedin: '#', twitter: '#', email: 'info@sucofam.org' }
  }
]

export const testimonials = [
  {
    quote: "SUCOFAM has completely changed the way I manage my coffee farm. Their training in agronomic practices helped me double my yield in just one season.",
    name: "Martha Biira",
    role: "Coffee Farmer, Kasese",
    image: test2
  },
  {
    quote: "As a young woman in agribusiness, SUCOFAM provided the technical support and market linkages I needed to scale my cocoa enterprise.",
    name: "Aisha Nalule",
    role: "Youth Entrepreneur",
    image: test5
  },
  {
    quote: "Their commitment to climate-smart agriculture is inspiring. We've integrated agroforestry into our honey production with great success.",
    name: "Samuel K.",
    role: "Honey Producer",
    image: test1
  }
  
]

export const officeLocations = [
  {
    type: 'Head Office',
    address: 'Kibbenge Tourist Model Village, Katonzi Cell, Bulembia Division, Kasese Municipality',
    details: '4kms along Kilembe Road · P.O.Box 430664'
  },
  {
    type: 'Coordination Office',
    address: 'Equatorial Mall, RM 09, Next to DTB Bank',
    details: 'Kampala Road'
  },
  {
    type: 'Field Office',
    address: 'Kyegegwa District,',
    details: 'Hapuuyo Sub County'
  }
]

export const galleryImages = [
  { src: rwenzori_farmers, alt: 'Coffee harvesting in Kasese', category: 'Coffee' },
  { src: coffee3, alt: 'Coffee beans drying process', category: 'Coffee' },
  { src: coffeeBg, alt: 'Coffee plantation landscape', category: 'Coffee' },
  { src: smellCoffee, alt: 'Quality testing coffee aroma', category: 'Coffee' },
  { src: placeholder1, alt: 'Community farming initiative', category: 'Community' },
  { src: placeholder2, alt: 'Farmer training workshop', category: 'Community' },
  { src: test1, alt: 'Farmer empowerment program', category: 'Community' },
  { src: test2, alt: 'Women in agriculture', category: 'Community' },
  { src: test5, alt: 'Youth agribusiness training', category: 'Community' },
  { src: partnership, alt: 'Agritourism training in Fort Portal', category: 'Community' },
  { src: raap, alt: 'RAAP strategic planning meeting', category: 'Community' },
  { src: nyamwamba, alt: 'Training at Thuwatikanaye Coffee Cooperative', category: 'Community' },
  { src: agronomy, alt: 'Agronomy training for smallholder farmers', category: 'Community' },
]
