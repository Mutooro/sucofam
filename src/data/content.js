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
import partnership from '@/assets/img/partnership.jpeg'
import raap from '@/assets/img/raap.jpeg'
import nyamwamba from '@/assets/img/nyamwamba.jpeg'
import agronomy from '@/assets/img/agronomy.jpeg'
import rwenzori_farmers from '@/assets/img/rwenzori_farmers.jpeg'
import beatrice from '@/assets/img/beatrice.jpeg'
import enid from '@/assets/img/enid.jpeg'

// ─── Program section images ───
import progCsaAgroforestry1 from '@/assets/img/prog_csa_agroforestry1.jpeg'
import progCsaAgroforestry2 from '@/assets/img/prog_csa_agroforestry2.jpeg'
import progCsaAgroforestry3 from '@/assets/img/prog_csa_agroforestry3.jpeg'
import progCsaSoilWater1 from '@/assets/img/prog_csa_soil_water1.jpeg'
import progCsaSoilWater2 from '@/assets/img/prog_csa_soil_water2.jpeg'
import progCsaSoilWater3 from '@/assets/img/prog_csa_soil_water3.jpeg'
import progCsaCapacity1 from '@/assets/img/prog_csa_capacity1.jpeg'
import progCsaCapacity2 from '@/assets/img/prog_csa_capacity2.jpeg'
import progF2mpOrg1 from '@/assets/img/prog_f2mp_org1.jpeg'

// ─── Partner Logos ───
import enableLogo from '@/assets/img/partnerships/enable.jpeg'
import esatLogo from '@/assets/img/partnerships/esat.jpeg'
import generalMerchantsLogo from '@/assets/img/partnerships/general_merchants.jpeg'
import mubecLogo from '@/assets/img/partnerships/mubec.jpeg'
import ukiramuLogo from '@/assets/img/partnerships/ukiramu.jpeg'
import wakandaLogo from '@/assets/img/partnerships/wakanda.jpeg'

export const legalProfile = {
  legalName: 'SUCOFAM Uganda Limited',
  operatingName: 'Sustainably Connected Farmers Agripreneur Market (SUCOFAM)',
  legalForm: 'Company Limited by Guarantee / Non-Profit Social Enterprise',
  registrationYear: 'June 2024',
  headquarters: 'Kasese Municipality, Western Uganda',
  operationalDistricts: ['Kasese', 'Kabarole', 'Kyegegwa', 'Bunyangabu', 'Rubirizi'],
  focusRegion: 'Rwenzori Region & Western Uganda',
  contactEmail: 'info@sucofam.org',
  phone: '+256 782 285 490'
}

export const vision = "To build a transformed agricultural sector in Uganda where farmers, especially women and youth, adopt improved agronomic practices, produce high-quality, market-compliant products, and participate equitably in transparent and profitable value chains free from exploitation."

export const mission = "To empower farmers through capacity building in good agronomic practices, quality assurance, and post-harvest management, while strengthening access to market information, financial services, and structured markets, enabling them to reduce distress sales, overcome middlemen exploitation, and secure fair, sustainable incomes from coffee, cocoa, and honey value chains."

export const culture = [
  {
    title: 'Empowerment-Driven',
    desc: 'We operate with a deep commitment to farmer empowerment, ensuring every intervention builds the capacity, confidence, and agency of smallholder farmers, especially women and youth, to actively lead and benefit from agricultural value chains.'
  },
  {
    title: 'Market-Oriented Performance',
    desc: 'We foster a results-driven environment where quality, competitiveness, and market alignment guide all operations from production to value addition and trade, facilitating the transition from subsistence to profitable agribusiness.'
  },
  {
    title: 'Inclusive & Participatory',
    desc: 'We uphold a culture where every voice matters, promoting gender equality, youth leadership, and participatory decision-making across farmer groups, cooperatives, and organizational structures.'
  },
  {
    title: 'Sustainability & Resilience',
    desc: 'We embed climate-smart practices and environmental stewardship into all actions, ensuring that farming systems, communities, and ecosystems remain resilient, regenerative, and future-ready.'
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
    desc: 'Transition smallholder farmers from subsistence to commercial, market-integrated production by strengthening aggregation, processing, quality standards, and direct market linkages for coffee, cocoa, and honey.'
  },
  {
    id: 2,
    title: 'Empower Women and Youth for Inclusive Agribusiness Leadership',
    desc: 'Enhance equitable participation and leadership of women and youth across agricultural value chains through targeted skills training, financial inclusion, productive resource access, and enterprise incubation.'
  },
  {
    id: 3,
    title: 'Build Climate-Resilient and Sustainable Farming Systems',
    desc: 'Promote climate-smart agriculture, soil conservation, and agroforestry practices that safeguard ecological integrity, restore degraded landscapes, and protect long-term productivity against climate shocks.'
  }
]

export const governanceStructure = {
  title: 'Governance & Institutional Oversight',
  desc: 'SUCOFAM operates under a clear separation between strategic board governance and operational management to ensure accountability, fiduciary integrity, and mission alignment.',
  pillars: [
    {
      role: 'Advisory & Oversight Committee',
      scope: 'Provides strategic guidance, fiduciary oversight, and ensures adherence to national compliance standards and donor regulations.'
    },
    {
      role: 'Executive Management Team',
      scope: 'Headed by the Executive Director and Director of Operations, responsible for daily execution, program delivery, and financial management.'
    },
    {
      role: 'Technical & Value Chain Leads',
      scope: 'Dedicated subject matter specialists overseeing agronomy, agritourism, MEAL, nutrition, legal compliance, and market linkages.'
    },
    {
      role: 'Community Cooperative Leadership',
      scope: 'Democratic governance at the grassroots level through elected committee members across affiliated producer cooperatives.'
    }
  ]
}

export const programs = [
  {
    id: 'climate-smart-agriculture',
    icon: 'CloudRain',
    title: 'Climate-Smart Agriculture (CSA)',
    tagline: 'Building Ecological Resilience & Sustainable Productivity',
    desc: 'Promoting regenerative agroforestry, soil & water conservation, and climate adaptation for smallholder farmers across the Rwenzori region.',
    goal: 'To implement climate-smart agricultural interventions that enhance productivity, protect the environment, and build resilient farming livelihoods in the Rwenzori landscape.',
    targetBeneficiaries: 'Smallholder coffee and cocoa farming households, women groups, and community watershed committees.',
    operatingDistricts: 'Kasese, Bunyangabu, Kabarole, Rubirizi',
    keyPartners: 'Rwenzori Agroecology Actors Platform (RAAP), ESAT, local forestry & agricultural extension services.',
    sections: [
      {
        title: 'Environmental Protection, Agroforestry & Tree Planting',
        desc: 'Promoting indigenous and fruit shade trees in coffee and cocoa plantations to restore degraded mountain ecosystems.',
        images: [progCsaAgroforestry1, progCsaAgroforestry2, progCsaAgroforestry3],
        activities: [
          'Planting shade trees (Cordia, Albizia, Ficus) in coffee and cocoa plantations.',
          'Establishing community-managed woodlots for sustainable fuel and timber.',
          'Distributing fruit trees (avocado, mango, citrus) for household nutrition and supplementary income.',
          'Restoring degraded hillsides and riverbanks with soil-binding vegetation.',
          'Promoting and conserving indigenous tree species across farming landscapes.'
        ],
        benefits: [
          'Reduces heat and moisture stress on sensitive coffee and cocoa crops.',
          'Improves soil fertility through organic leaf litter decomposition.',
          'Enhances long-term carbon sequestration and biodiversity conservation.',
          'Protects vital watershed areas from mountain landslides and flash floods.'
        ]
      },
      {
        title: 'Soil and Water Conservation',
        desc: 'Implementing structural and biological erosion control measures across steep mountain slopes.',
        images: [progCsaSoilWater1, progCsaSoilWater2, progCsaSoilWater3],
        activities: [
          'Constructing progressive terraces and stone bunds on steep agricultural slopes.',
          'Implementing contour farming with vetiver and napier grass buffer strips.',
          'Establishing water retention ditches, check dams, and rainwater harvesting ponds.',
          'Promoting organic mulching and farm composting to retain moisture during dry spells.'
        ],
        benefits: [
          'Drastically cuts topsoil loss and reduces landslide vulnerability.',
          'Retains vital soil moisture during irregular weather patterns.',
          'Maintains soil organic matter content and long-term crop fertility.'
        ]
      },
      {
        title: 'Climate-Resilient Crop & Livestock Integration',
        desc: 'Equipping households with drought-tolerant crop varieties and diversified enterprise models.',
        images: [agronomy, rwenzori_farmers],
        activities: [
          'Distributing certified drought- and disease-tolerant crop varieties.',
          'Promoting improved banana-coffee-legume intercropping systems.',
          'Supporting zero-grazing livestock systems and high-protein fodder production.',
          'Training farmers on organic manure compost formulation from livestock waste.'
        ],
        benefits: [
          'Stabilizes agricultural yields despite erratic rainfall patterns.',
          'Provides diversified income streams throughout the seasonal calendar.',
          'Strengthens household food and nutrition security.'
        ]
      },
      {
        title: 'Farmer Capacity Building & Climate Information Services',
        desc: 'Hands-on knowledge transfer through localized Farmer Field Schools and early-warning advisory.',
        images: [progCsaCapacity1, progCsaCapacity2],
        activities: [
          'Establishing Farmer Field Schools (FFS) and community demonstration plots.',
          'Disseminating localized weather forecasts and seasonal planting advisories.',
          'Strengthening community-based extension workers and lead model farmers.',
          'Training on farm record-keeping and climate-smart farm business planning.'
        ],
        benefits: [
          'Accelerates community-wide adoption of regenerative farming techniques.',
          'Enables proactive farm decision-making ahead of seasonal weather shocks.'
        ]
      }
    ]
  },
  {
    id: 'farm-to-market',
    icon: 'ShoppingBag',
    title: 'Farm-to-Market Enterprise Development (F2MP)',
    tagline: 'Empowering Farmers, Adding Value, Connecting Markets',
    desc: 'Strengthening cooperative governance, value addition, post-harvest processing, and structured market links for coffee, cocoa, and honey.',
    goal: 'To strengthen farmer organizations and agribusiness enterprises through value addition, entrepreneurship development, market integration, and sustainable trade partnerships that increase household incomes and employment opportunities.',
    targetBeneficiaries: 'Producer cooperatives, youth agribusiness entrepreneurs, women-led processing groups, and commercial buyers.',
    operatingDistricts: 'Kasese, Kabarole, Kyegegwa, Bunyangabu, Rubirizi',
    keyPartners: 'Enabel, Wakanda Coffee, General Merchants, Uganda Coffee Development Authority (UCDA).',
    sections: [
      {
        title: 'Farmer Organization, Governance & Cooperative Competitiveness',
        desc: 'Mobilizing and formalizing grassroots farmer groups into compliant, well-managed producer organizations.',
        images: [progF2mpOrg1, nyamwamba],
        activities: [
          'Mobilizing and registering farmer groups, cooperatives, and producer associations.',
          'Strengthening cooperative leadership, financial management, and democratic governance.',
          'Promoting active leadership roles for women, youth, and persons with disabilities.',
          'Developing multi-year strategic business plans and digital membership registries.',
          'Establishing digital farm traceability systems for EUDR and organic compliance.'
        ],
        benefits: [
          'Builds creditworthy, transparent, and professionally managed farmer institutions.',
          'Enables collective bargaining power to secure higher farmgate prices.',
          'Ensures traceability from the specific smallholder plot to the final buyer.'
        ]
      },
      {
        title: 'Value Addition, Agro-Processing & Quality Assurance',
        desc: 'Upgrading post-harvest processing infrastructure and quality standards across coffee, cocoa, and honey.',
        images: [smellCoffee, coffee3],
        activities: [
          'Training on selective harvesting, sorting, washing, and solar drying standards.',
          'Establishing localized processing units (micro-wet mills, cocoa fermentation boxes, honey extraction hubs).',
          'Supporting branding, packaging, and national UNBS / export quality certifications.',
          'Developing domestic finished retail products under the NexusCafe brand initiative.'
        ],
        benefits: [
          'Transforms raw commodity harvests into high-margin, market-ready products.',
          'Minimizes post-harvest losses and guarantees premium cup and product grades.'
        ]
      },
      {
        title: 'Structured Market Linkages & Commercial Partnerships',
        desc: 'Connecting organized cooperatives directly with regional, national, and international buyers.',
        images: [partnership, coffee1],
        activities: [
          'Brokering direct off-taker agreements and transparent forward contracts.',
          'Facilitating buyer-seller matchmaking forums and participating in regional trade exhibitions.',
          'Promoting agritourism linkages connecting coffee & cocoa farms with tourism routes in partnership with MUBEC Safaris.',
          'Developing digital market intelligence systems for fair and timely price discovery.'
        ],
        benefits: [
          'Eliminates exploitative intermediary layers to maximize farmer profit margins.',
          'Provides reliable, predictable cash flow for farming households.'
        ]
      },
      {
        title: 'Financial Inclusion & Youth Enterprise Incubation',
        desc: 'Fostering village savings, agricultural micro-credit, and youth-led agribusiness services.',
        images: [test5, test1],
        activities: [
          'Establishing and strengthening Village Savings and Loan Associations (VSLAs).',
          'Linking mature farmer groups to formal microfinance and agricultural lending facilities.',
          'Incubating youth-led service enterprises (mechanized pruning, spraying, nursery management).',
          'Providing business mentorship, financial literacy, and entrepreneurship coaching.'
        ],
        benefits: [
          'Builds household resilience against seasonal income lean periods.',
          'Creates dignified, viable employment opportunities for rural youth.'
        ]
      }
    ]
  },
  {
    id: 'community-well-fair',
    icon: 'Heart',
    title: 'Community Welfare & Social Development',
    tagline: 'Holistic Household Transformation Beyond Agriculture',
    desc: 'Integrating nutrition security, maternal & child health, education support, and social protection into farming communities.',
    goal: 'To improve the holistic well-being of farming households by addressing interconnected social drivers of development including food security, public health, access to education, and gender equity.',
    targetBeneficiaries: 'Farming families, women caregivers, school-age children, youth, and vulnerable community members.',
    operatingDistricts: 'Kasese, Bunyangabu, Kyegegwa, Kabarole',
    keyPartners: 'Community health centers, local district education offices, women self-help networks.',
    sections: [
      {
        title: 'Household Nutrition & Food Security',
        desc: 'Ensuring farming families maintain year-round nutritional diversity alongside cash crop production.',
        images: [test2, agronomy],
        activities: [
          'Promoting biofortified food crops (orange-fleshed sweet potatoes, iron-rich beans, vegetables).',
          'Establishing multi-story kitchen gardens and school nutrition demonstration plots.',
          'Conducting household training on balanced diet preparation and hygienic food preservation.',
          'Supporting lean-season food security planning to eliminate seasonal hunger.'
        ],
        benefits: [
          'Reduces child stunting and improves maternal nutrition in farming villages.',
          'Ensures agricultural commercialization directly enhances household dietary diversity.'
        ]
      },
      {
        title: 'Community Health, Sanitation & Well-being',
        desc: 'Promoting preventive health, safe water access, and psychosocial support in rural areas.',
        images: [mukokoma, test1],
        activities: [
          'Conducting hygiene and Water, Sanitation, and Hygiene (WASH) behavior change campaigns.',
          'Promoting maternal, newborn, and child healthcare awareness and referral linkages.',
          'Organizing community health camps for preventive screenings and waterborne disease control.',
          'Promoting mental health awareness, family counseling, and substance abuse prevention.'
        ],
        benefits: [
          'Reduces productivity losses caused by preventable waterborne and infectious diseases.',
          'Builds healthier, more energized farming communities.'
        ]
      },
      {
        title: 'Education, Skills & Child Protection',
        desc: 'Safeguarding children, promoting school retention, and providing functional adult literacy.',
        images: [test5, progCsaCapacity2],
        activities: [
          'Monitoring school enrollment and attendance to eliminate child labor on farms.',
          'Providing adult functional literacy and numeracy classes within cooperative halls.',
          'Supporting vocational and digital skills training programs for out-of-school youth.',
          'Conducting positive parenting and child protection workshops across farmer groups.'
        ],
        benefits: [
          'Ensures child rights and education are safeguarded across all value chain operations.',
          'Empowers adult farmers with functional skills to manage farm accounts.'
        ]
      },
      {
        title: 'Gender Inclusivity & Social Protection',
        desc: 'Championing women leadership, joint household decision-making, and disability inclusion.',
        images: [beatrice, enid],
        activities: [
          'Conducting Gender Action Learning System (GALS) household dialogues.',
          'Strengthening women-led self-help committees and leadership representation.',
          'Facilitating community access to legal aid, social protection schemes, and referral services.',
          'Advocating for the rights and economic inclusion of persons with disabilities (PWDs).'
        ],
        benefits: [
          'Fosters equitable household income distribution and reduces domestic friction.',
          'Creates a truly inclusive agricultural ecosystem where everyone thrives.'
        ]
      }
    ]
  }
]

export const valueChains = [
  {
    id: 'coffee',
    icon: 'Coffee',
    tag: 'Flagship Value Chain',
    name: 'Rwenzori Mountain Coffee',
    desc: 'High-altitude Arabica & fine Robusta produced by organized smallholders, delivering clean, sweet cup profiles with end-to-end traceability.',
    shortDesc: 'Traceable Arabica & Robusta coffee grown on the nutrient-rich slopes of Mt. Rwenzori by organized farmer cooperatives.',
    gradient: 'linear-gradient(135deg, #2C1810 0%, #6B3E26 100%)',
    image: coffee1,
    overview: 'SUCOFAM works with over 3,000 coffee farming households across Kasese and Bunyangabu districts. Grown at high altitudes (1,200m–2,200m) with rich volcanic soils and glacial waters, our coffee produces clean, sweet, and complex cup profiles.',
    specifications: [
      { label: 'Origin / Altitude', value: 'Rwenzori Mountains, 1,200 – 2,200m MASL' },
      { label: 'Varieties', value: 'Arabica (SL14, SL28, Nyasaland/Bugisu) & Fine Robusta' },
      { label: 'Primary Districts', value: 'Kasese (Bulembia, Nyamwamba) & Bunyangabu' },
      { label: 'Harvest Seasons', value: 'Main: September – January | Fly: March – June' },
      { label: 'Processing Methods', value: 'Fully Washed, Honey Processed & Natural Sundried' },
      { label: 'Quality Standards', value: 'Moisture < 12.5%, defect-free sorting, Cup Score 82–86+' },
      { label: 'Traceability & Compliance', value: 'GPS-mapped plots, EUDR-ready, Organic transition' },
      { label: 'Packaging Available', value: '60kg Jute bags with GrainPro; 250g/500g/1kg Retail Packs' }
    ],
    features: [
      'Strict cherry selection and parabolic solar-drying beds to ensure consistent moisture.',
      'Full plot-level farmer traceability complying with international supply chain standards.',
      'Fair pricing model returning premium dividends directly to member cooperatives.'
    ]
  },
  {
    id: 'cocoa',
    icon: 'Bean',
    tag: 'Fast-Growing Value Chain',
    name: 'Rwenzori Organic Cocoa',
    desc: 'Premium cocoa cultivated in diverse agroforestry systems, fermented in tiered wooden boxes and solar-dried to export specifications.',
    shortDesc: 'Ethically grown agroforestry cocoa beans cultivated alongside shade trees by emerging smallholders and youth enterprises.',
    gradient: 'linear-gradient(135deg, #3D1C02 0%, #7A4A20 100%)',
    image: rwenzori_farmers,
    overview: 'Cocoa is a major driver of economic transformation in Western Uganda. SUCOFAM supports cocoa producers through controlled tiered box fermentation, solar drying, and intercropping with agroforestry shade trees to achieve premium export grades.',
    specifications: [
      { label: 'Origin / Growing Area', value: 'Western Uganda Foothills (Kasese & Bunyangabu)' },
      { label: 'Varieties', value: 'Trinitario & Upper Amazon Forastero hybrids' },
      { label: 'Primary Districts', value: 'Kasese, Bunyangabu, Bundibugyo corridor' },
      { label: 'Harvest Seasons', value: 'Primary: October – February | Secondary: April – June' },
      { label: 'Fermentation Protocol', value: '6-day wooden box tiered fermentation with turnings' },
      { label: 'Drying & Quality', value: '100% Sun-dried on raised mesh platforms, Moisture 7.0–7.5%' },
      { label: 'Bean Count & Defect Rate', value: '95–105 beans / 100g, well-fermented >75% brown cut test' },
      { label: 'Packaging Available', value: '62.5kg Jute bags with protective inner liners' }
    ],
    features: [
      'Cultivated in diverse agroforestry systems that protect soil fertility and forest cover.',
      'Centralized quality monitoring to eliminate mould, smoky taints, and unfermented slaty beans.',
      'Empowering youth-led pruning and grafting enterprise teams across participating villages.'
    ]
  },
  {
    id: 'honey',
    icon: 'Droplets',
    tag: 'Community Apiary Chain',
    name: 'Pure Rwenzori Multi-Floral Honey',
    desc: '100% raw unpasteurized honey harvested from modern top-bar and Langstroth apiaries managed by women and youth beekeeping groups.',
    shortDesc: '100% natural, raw multi-floral honey harvested from sustainable modern apiaries managed by women and youth groups.',
    gradient: 'linear-gradient(135deg, #7A4A08 0%, #C8891A 100%)',
    image: test1,
    overview: 'Beekeeping provides vital dual benefits: natural pollination that boosts coffee and fruit yields, and a high-value income source with zero ecological degradation. SUCOFAM has sited over 100 modern beehives with organized women and youth groups.',
    specifications: [
      { label: 'Floral Source', value: 'Wild Multi-floral (Coffee blossoms, Acacia, Eucalyptus, Forest flora)' },
      { label: 'Apiary Locations', value: 'Kasese, Kyegegwa & Rubirizi buffer zones' },
      { label: 'Hive Types', value: 'Modern Kenya Top Bar (KTB) & Langstroth frames' },
      { label: 'Harvest Seasons', value: 'Bi-annual: January – March & July – September' },
      { label: 'Extraction Method', value: 'Cold centrifugal extraction, multi-stage fine mesh filtration' },
      { label: 'Purity & Specs', value: '100% Raw Unpasteurized, Moisture < 19%, Zero additives' },
      { label: 'By-products Available', value: 'Pure Beeswax, Raw Propolis & Bee Pollen' },
      { label: 'Packaging Available', value: '250g, 500g, 1kg Food-grade Glass/PET Jars & 20L Food-grade Buckets' }
    ],
    features: [
      'Chemical-free, cold-filtered processing preserving active natural enzymes and antioxidants.',
      'Empowers women beekeepers with non-land-intensive income generating assets.',
      'Directly supports natural pollination across neighboring coffee, cocoa, and fruit orchards.'
    ]
  }
]

// Backward compatibility alias for products
export const products = valueChains

export const nexusCafe = {
  title: 'NexusCafe Social Enterprise',
  tagline: 'From Field to Cup: Domestic Value Addition & Direct Equity',
  desc: 'NexusCafe is SUCOFAM\'s specialized social enterprise venture dedicated to retaining agricultural value inside Uganda. By roasting, packaging, and distributing single-origin Rwenzori specialty coffee for domestic and institutional markets, NexusCafe bridges smallholder cooperatives directly to conscious consumers.',
  pillars: [
    {
      title: 'Value Retention in Uganda',
      desc: 'Moving beyond raw bean exports to finish, roast, and package premium coffee locally, creating skilled roasting, barista, and packaging jobs for youth.'
    },
    {
      title: 'Direct Farmer Dividend',
      desc: 'A percentage of retail proceeds flows directly back into cooperative social development funds and community climate resilience projects.'
    },
    {
      title: 'Strategic Roasting Partnership',
      desc: 'Collaborating with experienced technical partners including Wakanda Coffee for precision profile roasting, quality cupping, and branded distribution.'
    }
  ],
  commercialContact: {
    email: 'info@sucofam.org',
    phone: '+256 782 285 490',
    address: 'Equatorial Mall, RM 09, Kampala Road & Kasese Office'
  }
}

export const impactStats = [
  {
    number: '4,532+',
    label: 'Farmers Reached',
    detail: 'Unique smallholders across 5 operational districts (62% women, 28% youth)'
  },
  {
    number: '100+',
    label: 'Bee Hives Sited',
    detail: 'Modern top-bar & Langstroth hives managed by women and youth groups'
  },
  {
    number: '50,000+',
    label: 'Trees Planted',
    detail: 'Agroforestry and shade trees planted with GPS tracking & survival monitoring'
  },
  {
    number: '5',
    label: 'Operating Districts',
    detail: 'Kasese, Kabarole, Kyegegwa, Bunyangabu & Rubirizi (Western Uganda)'
  }
]

export const impactMethodology = {
  asOfDate: 'March 2026',
  principles: [
    {
      title: 'Unique Farmer Registry',
      desc: 'All 4,532+ participating farmers are uniquely registered through cooperative membership lists with GPS coordinates, gender, age, and acreage verified on the ground.'
    },
    {
      title: 'Tree Survival Verification',
      desc: 'The 50,000+ trees are monitored at 6-month and 12-month intervals through lead model farmers to ensure an average survival and establishment rate exceeding 84%.'
    },
    {
      title: 'Cooperative Governance Audits',
      desc: 'Affiliated producer groups undergo periodic financial literacy and governance checks to verify dividend distributions and record-keeping integrity.'
    }
  ]
}

export const whyPartner = [
  {
    title: 'Farmer-Centered Governance',
    desc: 'Deep grassroots trust with over 60% women and 28% youth participation in agricultural activities and leadership.'
  },
  {
    title: 'Precision Value Chains',
    desc: 'End-to-end integration covering agronomy, processing, quality compliance, packaging, and commercial linkages.'
  },
  {
    title: 'Rwenzori Regional Focus',
    desc: 'High-impact localized presence across 5 key agricultural districts in Western Uganda rather than overstretched claims.'
  },
  {
    title: 'Holistic Transformation',
    desc: 'Simultaneously addressing farm income, household nutrition, maternal health, child protection, and adult literacy.'
  },
  {
    title: 'Ecological Integrity',
    desc: 'Commitment to climate-smart agroforestry, soil conservation, and carbon-sequestering farming practices.'
  },
  {
    title: 'Fiduciary & Data Transparency',
    desc: 'Structured governance, accountable MEAL tracking, and clear institutional policies for donor due diligence.'
  }
]

export const newsArticles = [
  {
    id: 6,
    date: 'May 07, 2026',
    title: 'Empowering Thuwatikanaye Coffee Cooperative in Kasese',
    category: 'Farmer Empowerment',
    author: 'SUCOFAM Field Communications',
    location: 'Nyamwamba Division, Kasese District',
    relatedProgram: 'Farm-to-Market Enterprise Development',
    summary: "Our field team engaged members of Thuwatikanaye Coffee Cooperative Society in Nyamwamba Division to share experiences on Good Agronomic Practices (GAP). SUCOFAM focuses on improving farmer incomes by emphasizing harvest quality, selective picking, and moisture control. Model farmers have been equipped to host community demonstration gardens.",
    content: "The SUCOFAM technical agronomy team conducted a comprehensive field engagement with members of the Thuwatikanaye Coffee Cooperative Society in Nyamwamba Division, Kasese District. The session focused on the critical relationship between post-harvest handling and premium market price realization. Farmers learned hands-on methods for cherry sorting, floating tests, and raised-bed drying protocols. By training designated model farmers whose plots serve as localized learning hubs, neighboring smallholders can observe firsthand how proper pruning, mulching, and soil management translate into doubled yields and higher cup scores.",
    image: nyamwamba
  },
  {
    id: 7,
    date: 'May 07, 2026',
    title: 'Scaling Good Agronomic Practices for Farmer Prosperity',
    category: 'Agronomy Training',
    author: 'Agronomy Extension Team',
    location: 'Bunyangabu & Kasese Districts',
    relatedProgram: 'Climate-Smart Agriculture',
    summary: "SUCOFAM agronomists are actively on the ground training smallholder farmers in Good Agronomic Practices (GAP). Through continuous capacity building and hands-on demonstrations, farming households are experiencing significant transformation, improving crop quality, increasing harvest volumes, and earning higher returns.",
    content: "Through continuous on-farm coaching, SUCOFAM agronomists are rolling out Good Agronomic Practices (GAP) across coffee and cocoa communities in the Rwenzori foothills. The curriculum covers integrated soil fertility management, organic composting, canopy management through timely pruning, and biological pest control. Farmers who adopted GAP during the previous season reported yield gains of up to 40% and improved cherry density, reinforcing the vital role of agricultural extension in lifting smallholders out of subsistence.",
    image: agronomy
  },
  {
    id: 4,
    date: 'May 06, 2026',
    title: 'Promoting Agritourism in the Rwenzori Region with MUBEC Safaris',
    category: 'Agritourism',
    author: 'Agritourism Desk',
    location: 'Fort Portal & Kasese',
    relatedProgram: 'Farm-to-Market Enterprise Development',
    summary: "SUCOFAM joined tourism actors in the Rwenzori region for a three-week training workshop in Fort Portal. In partnership with MUBEC Safaris, we are advancing sustainable Agritourism across the coffee, cocoa, and honey value chains, connecting travelers directly with farming communities.",
    content: "Agritourism represents an innovative frontier for diversifying rural farmer incomes. SUCOFAM recently concluded a three-week intensive capacity-building program in Fort Portal alongside regional tourism operators and our partner, MUBEC Safaris. The initiative trains organized farmer groups along the Rwenzori tourism corridor to offer experiential tours, including guided coffee farm walks, traditional bean roasting sessions, cocoa harvesting demonstrations, and apiary visits. This experiential model creates supplementary income for farming households while educating local and international visitors about sustainable agroecology.",
    image: partnership
  },
  {
    id: 5,
    date: 'May 06, 2026',
    title: 'Rwenzori Agroecology Actors\' Platform (RAAP) Strategic Planning',
    category: 'Strategic Partnerships',
    author: 'Executive Directorate',
    location: 'Fort Portal, Western Uganda',
    relatedProgram: 'Climate-Smart Agriculture',
    summary: "SUCOFAM believes in collective impact. We joined regional partners under the Rwenzori Agroecology Actors' Platform (RAAP) coalition to formulate a five-year strategic plan dedicated to ecosystem restoration, sustainable agriculture, and food sovereignty.",
    content: "Recognizing that climate change and environmental degradation require unified action, SUCOFAM actively participated in the strategic planning convention of the Rwenzori Agroecology Actors' Platform (RAAP). Together with like-minded non-governmental organizations, farmer federations, and environmental researchers, the coalition finalized its five-year strategic framework. The plan prioritizes indigenous seed conservation, watershed protection along mountain river corridors, policy advocacy against hazardous agrochemicals, and the scale-up of climate-resilient farming models across Western Uganda.",
    image: raap
  },
  {
    id: 1,
    date: 'April 24, 2026',
    title: 'Expanding Climate-Smart Agroforestry: 50,000 Trees Milestone',
    category: 'Climate Action',
    author: 'Climate & Environment Desk',
    location: 'Rwenzori Watershed Buffer Zones',
    relatedProgram: 'Climate-Smart Agriculture',
    summary: "SUCOFAM reached a major environmental milestone with over 50,000 agroforestry and shade trees planted across Kasese and Bunyangabu districts as part of our ongoing landscape restoration and carbon sequestration initiative.",
    content: "In response to severe mountain soil erosion and changing rainfall patterns in the Rwenzori region, SUCOFAM has surpassed the milestone of 50,000 planted trees. Working closely with community nursery managers and smallholder cooperatives, indigenous shade species (such as Cordia africana and Albizia) and high-value fruit trees were integrated into existing coffee and cocoa plantations. In addition to stabilizing fragile mountain slopes, these trees provide shade cover that regulates microclimates and mitigates heat stress on sensitive coffee crops.",
    image: rwenzori_farmers
  },
  {
    id: 2,
    date: 'April 15, 2026',
    title: 'Structured Market Linkages for Rwenzori Honey Producers',
    category: 'Market Access',
    author: 'Value Chain Desk',
    location: 'Kasese & Kyegegwa Districts',
    relatedProgram: 'Farm-to-Market Enterprise Development',
    summary: "Connecting women-led beekeeping producer groups to premium buyers and urban retail outlets, ensuring fair prices, guaranteed off-take, and sustainable livelihood growth.",
    content: "SUCOFAM has established structured off-take linkages for over 100 beehives managed by women and youth groups across Kasese and Kyegegwa. By providing standardized stainless-steel honey processing equipment and airtight food-grade storage buckets, producer groups can harvest raw honey with moisture levels below 19%. This high-quality raw honey is now packaged and distributed through urban specialty stores and institutional off-takers, securing a reliable income stream outside of seasonal crop harvesting periods.",
    image: test1
  },
  {
    id: 3,
    date: 'March 28, 2026',
    title: 'Youth Agribusiness & Value Addition Masterclass Launched',
    category: 'Youth Empowerment',
    author: 'Enterprise Development Desk',
    location: 'Kasese Training Center',
    relatedProgram: 'Community Welfare & Social Development',
    summary: "Over 100 young farmers enrolled in our latest agribusiness masterclass covering modern post-harvest processing, machinery maintenance, quality grading, and digital record keeping.",
    content: "To combat rural youth underemployment and foster the next generation of agribusiness leaders, SUCOFAM launched a specialized vocational masterclass in Kasese. The training equips young entrepreneurs with practical skills in coffee grading, cocoa fermentation management, motorized sprayer operation, and digital farm records. Participating youth graduates are supported to form service provider enterprises that offer professional agronomic services to local farmer cooperatives.",
    image: coffee3
  }
]

export const galleryImages = [
  {
    src: rwenzori_farmers,
    title: 'Selective Coffee Cherry Harvesting',
    alt: 'Farmers selectively harvesting ripe red coffee cherries on Rwenzori mountain slopes',
    category: 'Coffee',
    activity: 'Selective Coffee Harvesting & GAP',
    location: 'Bulembia Division, Kasese',
    date: 'April 2026',
    project: 'Coffee Value Chain Transformation',
    partner: 'Local Producer Cooperatives'
  },
  {
    src: coffee3,
    title: 'Solar Raised-Bed Coffee Drying',
    alt: 'Clean parchment coffee drying on raised mesh solar beds',
    category: 'Coffee',
    activity: 'Post-Harvest Quality Assurance',
    location: 'Kasese Processing Hub',
    date: 'March 2026',
    project: 'F2MP Enterprise Development',
    partner: 'UCDA / Private Off-takers'
  },
  {
    src: smellCoffee,
    title: 'Sensory Quality & Moisture Evaluation',
    alt: 'Evaluating aroma and bean density during coffee quality control',
    category: 'Coffee',
    activity: 'Specialty Quality Testing & Cupping',
    location: 'NexusCafe Lab, Kasese',
    date: 'May 2026',
    project: 'NexusCafe Social Enterprise',
    partner: 'Wakanda Coffee'
  },
  {
    src: coffeeBg,
    title: 'Agroforestry Coffee Mountain Landscape',
    alt: 'Vibrant coffee plantation integrated with shade trees under the Rwenzori foothills',
    category: 'Coffee',
    activity: 'Landscape Conservation & Shaded Farming',
    location: 'Bunyangabu Foothills',
    date: 'February 2026',
    project: 'Climate-Smart Agriculture',
    partner: 'RAAP Coalition'
  },
  {
    src: progCsaAgroforestry1,
    title: 'Tree Planting & Nursery Propagation',
    alt: 'Farmers planting indigenous shade trees in coffee fields',
    category: 'Climate Action',
    activity: 'Agroforestry & Tree Planting Campaign',
    location: 'Kasese Buffer Zones',
    date: 'April 2026',
    project: '50,000 Trees Climate Milestone',
    partner: 'Community Forestry Groups'
  },
  {
    src: progCsaSoilWater1,
    title: 'Contour Terracing & Soil Conservation',
    alt: 'Constructing stone bunds and grass contour strips to prevent mountain erosion',
    category: 'Climate Action',
    activity: 'Soil & Water Watershed Conservation',
    location: 'Katonzi Cell, Kasese',
    date: 'March 2026',
    project: 'Mountain Watershed Protection',
    partner: 'ESAT Technical Extension'
  },
  {
    src: progCsaCapacity1,
    title: 'Farmer Field School Workshop',
    alt: 'Lead model farmers participating in Farmer Field School training',
    category: 'Training',
    activity: 'Farmer Field School Practical Session',
    location: 'Kabarole District',
    date: 'May 2026',
    project: 'CSA Knowledge Transfer',
    partner: 'Enabel / Local Extension'
  },
  {
    src: progF2mpOrg1,
    title: 'Cooperative Governance & Record Keeping',
    alt: 'Cooperative executive committee reviewing digital farm records',
    category: 'Enterprise',
    activity: 'Institutional Strengthening & Governance',
    location: 'Thuwatikanaye Cooperative, Kasese',
    date: 'May 2026',
    project: 'Farm-to-Market Enterprise (F2MP)',
    partner: 'Producer Cooperatives'
  },
  {
    src: nyamwamba,
    title: 'Thuwatikanaye Farmer Cooperative Meeting',
    alt: 'Community engagement meeting with coffee cooperative members',
    category: 'Community',
    activity: 'Farmer Cooperative Empowerment',
    location: 'Nyamwamba Division, Kasese',
    date: 'May 2026',
    project: 'Grassroots Institutional Strengthening',
    partner: 'Thuwatikanaye Society'
  },
  {
    src: agronomy,
    title: 'On-Farm Agronomic Extension Demo',
    alt: 'SUCOFAM agronomist demonstrating crop pruning techniques to farmers',
    category: 'Training',
    activity: 'Good Agronomic Practices (GAP) Coaching',
    location: 'Bunyangabu District',
    date: 'May 2026',
    project: 'Agronomy Scale-up Initiative',
    partner: 'Smallholder Farmer Groups'
  },
  {
    src: partnership,
    title: 'Regional Agritourism Stakeholder Forum',
    alt: 'SUCOFAM leaders engaging tourism and agriculture actors in Fort Portal',
    category: 'Enterprise',
    activity: 'Agritourism Value Chain Integration',
    location: 'Fort Portal Tourism Hub',
    date: 'May 2026',
    project: 'Rwenzori Agritourism Project',
    partner: 'MUBEC Safaris'
  },
  {
    src: raap,
    title: 'RAAP Agroecology Strategic Convention',
    alt: 'Representatives of agroecology organizations planning coalition activities',
    category: 'Community',
    activity: 'Coalition Five-Year Strategic Planning',
    location: 'Fort Portal',
    date: 'May 2026',
    project: 'Rwenzori Agroecology Coalition',
    partner: 'RAAP Member Organizations'
  },
  {
    src: test1,
    title: 'Women Beekeeping Group Apiary Inspection',
    alt: 'Women beekeepers inspecting top bar beehives in community apiary',
    category: 'Honey',
    activity: 'Apiary Management & Pure Honey Harvesting',
    location: 'Kyegegwa District',
    date: 'April 2026',
    project: 'Women Beekeeping Livelihoods',
    partner: 'Women Self-Help Groups'
  },
  {
    src: test2,
    title: 'Household Kitchen Garden Training',
    alt: 'Farming household cultivating diversified biofortified vegetables',
    category: 'Community',
    activity: 'Nutrition & Household Food Security',
    location: 'Kasese District',
    date: 'March 2026',
    project: 'Community Welfare & Nutrition',
    partner: 'Health Center Outreach'
  },
  {
    src: test5,
    title: 'Youth Agribusiness Masterclass Practical',
    alt: 'Young agribusiness trainees learning post-harvest machinery maintenance',
    category: 'Training',
    activity: 'Youth Vocational & Agribusiness Training',
    location: 'Kasese Municipality',
    date: 'March 2026',
    project: 'Youth Enterprise Incubation',
    partner: 'Vocational Training Desk'
  }
]

export const teamMembers = [
  {
    name: 'Maate Coroneri',
    role: 'Executive Director',
    bio: 'Maate Coroneri is a passionate community leader dedicated to rural transformation. As Executive Director of SUCOFAM Uganda Limited, he leads the organization’s vision of building sustainable livelihoods through climate-smart agriculture, farmer aggregation, and equitable value chain participation.',
    image: null,
    social: { linkedin: '#', twitter: '#', email: 'info@sucofam.org' }
  },
  {
    name: 'Beatrice Nyangoma',
    role: 'Director of Operations',
    bio: 'Beatrice Nyangoma brings over eight years of operational leadership and partnership development experience. At SUCOFAM, she oversees institutional operations, cross-district project execution, and strategic donor/buyer relations to ensure impactful outcomes for farming communities.',
    image: beatrice,
    social: { linkedin: '#', twitter: '#', email: 'info@sucofam.org' }
  },
  {
    name: 'Baluku Wangehya',
    role: 'Coffee Value Chain Manager',
    bio: 'A seasoned coffee professional specializing in specialty quality control, EUDR traceability systems, and cooperative aggregation. He mentors over 3,000 coffee farmers in Good Agronomic Practices and oversees our specialty drying and cupping protocols.',
    image: mukokoma,
    social: { linkedin: '#', twitter: '#', email: 'info@sucofam.org' }
  },
  {
    name: 'Bazale Jonah',
    role: 'Agritourism Manager',
    bio: 'Bazale Jonah develops innovative agritourism pathways that connect Mt. Rwenzori travelers with coffee, cocoa, and honey farming communities. His work integrates agricultural education with cultural tourism to generate supplementary income for farmers.',
    image: null,
    social: { linkedin: '#', twitter: '#', email: 'info@sucofam.org' }
  },
  {
    name: 'Enid Biira',
    role: 'Legal Administrator & Compliance Lead',
    bio: 'Enid oversees institutional legal compliance, statutory reporting, contract management, and adherence to Uganda’s Data Protection & Privacy Act. She also supports cooperative formalization and safeguarding policy implementation.',
    image: enid,
    social: { linkedin: '#', twitter: '#', email: 'info@sucofam.org' }
  },
  {
    name: 'David Mumbere',
    role: 'MEAL Practitioner',
    bio: 'David manages SUCOFAM’s Monitoring, Evaluation, Accountability, and Learning (MEAL) systems. He oversees digital farmer data collection, baseline surveys, tree survival tracking, and impact evaluation across all operational districts.',
    image: null,
    social: { linkedin: '#', twitter: '#', email: 'info@sucofam.org' }
  },
  {
    name: 'Kansiime Doreen',
    role: 'Nutrition & Food Security Lead',
    bio: 'Doreen leads community nutrition and social development initiatives, implementing kitchen garden programs, dietary diversity education, and WASH behavior change campaigns across farming households.',
    image: null,
    social: { linkedin: '#', twitter: '#', email: 'info@sucofam.org' }
  },
  {
    name: 'Kule Opio',
    role: 'Coffee Agronomy Officer',
    bio: 'Kule works directly with lead model farmers in the field, delivering hands-on training in soil conservation, selective picking, tree pruning, and organic compost formulation.',
    image: null,
    social: { linkedin: '#', twitter: '#', email: 'info@sucofam.org' }
  },
  {
    name: 'Baluku Bobo',
    role: 'Coffee Business Development Officer',
    bio: 'Baluku focuses on market linkages, cooperative business planning, and domestic marketing under the NexusCafe enterprise model, ensuring smallholders receive transparent prices.',
    image: null,
    social: { linkedin: '#', twitter: '#', email: 'info@sucofam.org' }
  }
]

export const partnersData = [
  {
    name: 'Enabel',
    logo: enableLogo,
    alt: 'Enabel - Belgian Development Agency',
    role: 'Skills Development & Agribusiness Partner',
    description: 'Collaborating on vocational skills training, agricultural youth incubation, and strengthening competitive value chain practices in Western Uganda.',
    project: 'Workforce & Agronomy Skills Project'
  },
  {
    name: 'ESAT',
    logo: esatLogo,
    alt: 'ESAT Uganda',
    role: 'Technical Extension & Agronomy Partner',
    description: 'Providing agronomic technical advisory, contour terracing design, and lead farmer coaching in climate-smart agriculture.',
    project: 'Soil & Water Conservation Extension'
  },
  {
    name: 'MUBEC Safaris',
    logo: mubecLogo,
    alt: 'MUBEC Safaris',
    role: 'Agritourism & Cultural Linkage Partner',
    description: 'Co-designing experiential agritourism routes that connect tourism in the Rwenzori region with coffee, cocoa, and honey farming communities.',
    project: 'Rwenzori Agritourism Initiative'
  },
  {
    name: 'RAAP Coalition',
    logo: raap,
    alt: 'Rwenzori Agroecology Actors Platform',
    role: 'Regional Agroecology Alliance Partner',
    description: 'Active member organization in the RAAP regional platform championing ecological farming, watershed protection, and sustainable agriculture policy.',
    project: 'Five-Year Agroecology Strategy'
  },
  {
    name: 'Wakanda Coffee',
    logo: wakandaLogo,
    alt: 'Wakanda Coffee Roasters',
    role: 'Processing & NexusCafe Technical Partner',
    description: 'Technical collaboration in specialty profile roasting, cupping, packaging, and commercial retail distribution for the NexusCafe social enterprise.',
    project: 'NexusCafe Domestic Value Addition'
  },
  {
    name: 'General Merchants',
    logo: generalMerchantsLogo,
    alt: 'General Merchants Uganda',
    role: 'Value Chain Logistics Partner',
    description: 'Supporting quality agro-inputs distribution, post-harvest equipment sourcing, and supply chain logistics.',
    project: 'Input & Processing Equipment Supply'
  },
  {
    name: 'UkIRAMU',
    logo: ukiramuLogo,
    alt: 'UkIRAMU Farmers Association',
    role: 'Farmer Producer Alliance Partner',
    description: 'Partnering on farmer mobilization, cross-cooperative peer learning, and collective volume aggregation across the Rwenzori basin.',
    project: 'Cooperative Aggregation Alliance'
  }
]

export const institutionalPolicies = [
  {
    id: 'privacy-data-protection',
    title: 'Data Protection & Privacy Policy',
    category: 'Legal & Digital Integrity',
    summary: 'Compliant with the Uganda Data Protection and Privacy Act (2019). SUCOFAM ensures that all farmer registry information, biometric records, and partner data are collected with explicit consent, stored securely, and used strictly for programmatic verification without unauthorized third-party sharing.',
    keyPoints: [
      'Informed consent for all household baseline and GPS mapping data.',
      'Secure, encrypted storage of cooperative registries.',
      'Right to access, rectify, or request deletion of personal information.'
    ]
  },
  {
    id: 'safeguarding-child-protection',
    title: 'Safeguarding & Child Protection Policy',
    category: 'Human Rights & Ethics',
    summary: 'SUCOFAM maintains zero tolerance for child labor, sexual exploitation, harassment, and abuse. We enforce strict child protection standards across all partner cooperatives, ensuring that children attend school and are protected from hazardous agricultural work.',
    keyPoints: [
      'Zero tolerance for child labor in coffee, cocoa, and honey harvesting.',
      'Mandatory safeguarding code of conduct signed by all staff and extension agents.',
      'Confidential reporting and immediate investigation protocols for protection violations.'
    ]
  },
  {
    id: 'whistleblowing-complaints',
    title: 'Whistleblowing & Complaints Mechanism',
    category: 'Accountability & Integrity',
    summary: 'A secure, anonymous, and accessible grievance redress mechanism for farmers, community members, staff, and partners to report misconduct, corruption, or policy breaches without fear of retaliation.',
    keyPoints: [
      'Dedicated reporting channels via email (ethics@sucofam.org) and confidential hotline.',
      'Strict protection against retaliation for genuine whistleblowers.',
      'Independent review by the Advisory Oversight Committee within 14 working days.'
    ]
  },
  {
    id: 'anti-fraud-anti-corruption',
    title: 'Anti-Fraud & Anti-Corruption Framework',
    category: 'Fiduciary Governance',
    summary: 'SUCOFAM adheres to the highest standards of financial transparency. We enforce dual-signatory financial controls, mandatory annual external audits, transparent cooperative price postings, and zero tolerance for bribery.',
    keyPoints: [
      'Dual-authorization protocols on all financial disbursements.',
      'Annual independent external financial audits published for institutional partners.',
      'Transparent price discovery boards at all community aggregation centers.'
    ]
  }
]

export const testimonials = [
  {
    quote: "SUCOFAM has completely changed the way I manage my coffee farm. Their training in selective harvesting and soil terracing helped me increase my yield by 40% and secure higher prices through our cooperative.",
    name: "Martha Biira",
    role: "Coffee Farmer, Kasese",
    image: test2
  },
  {
    quote: "As a young woman in agribusiness, SUCOFAM provided the technical support and modern beekeeping equipment I needed to establish our apiary. We now harvest and sell high-grade honey season after season.",
    name: "Aisha Nalule",
    role: "Youth Beekeeping Lead, Kyegegwa",
    image: test5
  },
  {
    quote: "Their commitment to climate-smart agroforestry is inspiring. Integrating indigenous shade trees has stopped erosion on our mountain slopes and protected our crops from extreme heat.",
    name: "Samuel K.",
    role: "Agroforestry Model Farmer, Bunyangabu",
    image: test1
  }
]

export const officeLocations = [
  {
    type: 'Head Office',
    address: 'Kibbenge Tourist Model Village, Katonzi Cell, Bulembia Division, Kasese Municipality',
    details: '4km along Kilembe Road · P.O. Box 430664, Kasese - Uganda'
  },
  {
    type: 'Coordination & NexusCafe Office',
    address: 'Equatorial Mall, RM 09, Next to DTB Bank',
    details: 'Kampala Road, Kampala'
  },
  {
    type: 'Field Extension Office',
    address: 'Hapuuyo Sub-County, Kyegegwa District',
    details: 'Western Uganda Regional Outreach'
  }
]

export const navLinks = [
  { label: 'Home', section: 'home' },
  {
    label: 'About',
    section: 'about',
    children: [
      { label: 'Who We Are', section: 'about', hash: '#who-we-are' },
      { label: 'Legal Identity & Governance', section: 'about', hash: '#governance' },
      { label: 'What We Do', section: 'about', hash: '#what-we-do' },
      { label: 'Our Culture', section: 'about', hash: '#how-we-do-it' },
      { label: 'Our Team', section: 'about', hash: '#our-team' }
    ]
  },
  {
    label: 'Programs',
    section: 'programs',
    children: [
      { label: 'Climate-Smart Agriculture', section: 'programs', hash: '#climate-smart-agriculture' },
      { label: 'Farm-to-Market Enterprise (F2MP)', section: 'programs', hash: '#farm-to-market' },
      { label: 'Community Welfare & Development', section: 'programs', hash: '#community-well-fair' }
    ]
  },
  {
    label: 'Value Chains',
    section: 'value-chains',
    children: [
      { label: 'Rwenzori Coffee', section: 'value-chains', hash: '#coffee' },
      { label: 'Organic Cocoa', section: 'value-chains', hash: '#cocoa' },
      { label: 'Pure Honey', section: 'value-chains', hash: '#honey' },
      { label: 'NexusCafe Initiative', section: 'value-chains', hash: '#nexuscafe' }
    ]
  },
  { label: 'Impact', section: 'impact' },
  { label: 'Gallery', section: 'gallery' },
  { label: 'News', section: 'news' },
  { label: 'Accountability', section: 'accountability' }
]
