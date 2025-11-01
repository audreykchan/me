export interface Project {
  id: string;
  title: string;
  thumbnail: string;
  techStack: string[];
  sections: {
    title: string;
    content: string[];
    media?: {
      type: 'image' | 'video';
      src: string;
      caption: string;
    }[];
    buttons?: {
      label: string;
      url: string;
    }[];
  }[];
}

export const projectsData: Project[] = [
  {
    id: 'clip',
    title: 'CLIP',
    thumbnail: '/images/prj1.png',
    techStack: ['Product Management', 'UI/UX Design', 'React.js', 'Tailwind CSS', 'Supabase PostgreSQL', 'Go-to-Market'],
    sections: [
      {
        title: 'Overview',
        content: [
          "CLIP (Columbia's Learning & Information Platform) is the university's first anonymous, peer-driven study material exchange. The platform enables Columbia and Barnard students to securely share notes, syllabi, past exams, study guides, and other academic resources all filtered by course and ranked by peer upvotes. CLIP enforces academic safeguards through strict access control (verified @columbia.edu / @barnard.edu emails), terms of service, and anonymous content reporting.",
          "To incentivize high-quality contributions, CLIP uses a token-based system: students earn +2 tokens per upload and spend -1 token to unlock each file, creating a fair, contribution-driven content economy. Users can subscribe to specific courses to receive tailored uploads, making CLIP a centralized, high-signal academic resource hub powered by, and balanced by, the student body itself."
        ],
        media: [
          {
            type: 'video',
            src: 'https://www.youtube.com/embed/D1wYtTpmOc0',
            caption: 'Fig: CLIP platform demo showing course browsing and file upload flow'
          }
        ]
      },
      {
        title: 'Problem',
        content: [
          '* Lack of centralized access to study materials',
          '* Same course number, different professor = completely different content',
          '* Preexisting note sharing platforms (like Coursehero) charge high fees for access',
          '* 98% of students asked for user research prepare for exams using past exams and notes',
          '* Only 21% of students asked for user research have access to past study materials from upperclassmen friends',
          'After chatting with ~20 students from all grade levels, it became clear that accessing study materials is a campus-wide struggle. 98% rely on past exams and notes, yet only 21% have consistent sources. Existing platforms are fragmented by professor and saddled with high fees, which leaves the vast majority scrambling for accessible resources.'
        ],
        media: [
          {
            type: 'image',
            src: '/images/prj1problem.png',
            caption: 'Fig: Chart comparing CLIP to other note-sharing sites'
          }
        ]
      },
      {
        title: 'Design',
        content: [
          'As an attempt to solve these gaps, I made a preliminary product requirement doc with these feature requirements:',
          '* Free access to all course materials',
          '* Restrict access to verified email domains to ensure access is restricted to students of Columbia and Barnard\'s community',
          '* Token system to incentivize students to contribute by uploading',
          '* Sorting system by course code, professor, file label',
          '* Allows students to upload notes, syllabi, past exams + solutions, study guides, cheat sheets',
          '* Upvotes & downvotes for each attachment to indicate how useful a material is (like Reddit)',
          '* Anonymous user access to maximize user comfort',
          '* Course subscription for convenient access to select courses',
          '* Thumbnail file previews for students to get a glimpse of the file\'s contents'
        ],
        media: [
          {
            type: 'video',
            src: '/images/p1design.mp4',
            caption: 'Fig: Token economy demonstrating that uploads = +2 tokens and unlocks = -1 token'
          }
        ]
      },
      {
        title: 'Deliverables',
        content: [
          '* Coordinating a cross-functional marketing and outreach team to drive platform adoption for Fall 2025 launch',
          '* Built a growing waitlist of users',
          '* Developed internal moderation workflows (TOS, anonymous reporting) to proactively address content compliance and academic integrity risks'
        ],
        media: [
          {
            type: 'video',
            src: '/images/prj1implementation.mp4',
            caption: 'Fig: Supabase database schema'
          }
        ],
        buttons: [
          { label: 'View Website', url: 'https://www.clipcolumbia.cc' },
          { label: 'View GitHub Repo', url: 'https://github.com/audreykchan/clip' }
        ]
      }
    ]
  },
  {
    id: 'laptop-stand',
    title: 'Ergonomic Foldable Laptop Stand',
    thumbnail: '/images/project2.png',
    techStack: ['CAD (Fusion360)', 'Mechanical Joints', 'User-Centered Design', 'DFM', 'Ergonomics'],
    sections: [
      {
        title: 'Overview',
        content: [
          'This precision-engineered, tool-free redesign of the classic laptop stand instantly adjusts from 0° to 90°, rotates 360° at its base, supports devices up to 5 kg, and features ventilation slots alongside a 17 mm gripped front lip for secure, cool performance. Its simplistic design reduces material usage by 31% and unit costs by 20% by reducing aluminum procurement and CNC machining cycles.'
        ],
        media: [
          {
            type: 'video',
            src: '/images/laptop.mp4',
            caption: 'Fig: Exploded view of laptop design'
          }
        ]
      },
      {
        title: 'Problem',
        content: [
          '* Neck and back pain from prolonged laptop use at incorrect eye level',
          '* Poor posture due to laptops being flat on desks, causing hunching',
          '* Lack of adjustable height options on most cheap or fixed stands',
          '* Laptops overheat due to poor airflow on flat surfaces',
          '* Complex manufacturing for many existing portable models',
          'Together, these pain points underscore an urgent need for a laptop stand that\'s both ergonomic and practical: one that elevates screens to eye level for healthy posture, offers easy height adjustability, promotes airflow to prevent overheating, and can be manufactured simply and affordably.'
        ],
        media: [
          {
            type: 'image',
            src: '/images/competitors.png',
            caption: 'Fig: Many existing laptop stands in the market still have limited mobility and adjustability'
          }
        ]
      },
      {
        title: 'Design',
        content: [
          'Based on these problems, I made a preliminary product requirement doc with these key constraints:',
          '* Must safely support a 10-17" tablet/laptop',
          '* Platform tilt 0°-90° for comfortable viewing',
          '* Base footprint ≥ 200mm x 200mm for good stability',
          '* Ventilation slots ≥10% surface area to enable passive heat dissipation from laptop\'s underside',
          '* Rotational joint of 360° for convenient orientation changes',
          '* Front lip height 15–20 mm with silicone/rubber padding to stop slippage'
        ],
        media: [
          {
            type: 'video',
            src: '/images/360-joint.mp4',
            caption: 'Fig: Joint simulation showing the base plate joint changing its angle from 0-360°'
          }
        ]
      },
      {
        title: 'Deliverables',
        content: [
          '* Reduced material usage by 31% without compromising mechanical stability',
          '* Lowered raw-material costs by 20% per unit through reduced aluminum procurement and shorter CNC machining cycles'
        ],
        media: [
          {
            type: 'video',
            src: '/images/progress.mp4',
            caption: 'Fig: Final laptop stand design with all features integrated'
          }
        ],
        buttons: [
          { label: 'See it in Action', url: 'https://a360.co/4jFbwN6' }
        ]
      }
    ]
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain Dashboard',
    thumbnail: '/images/prj5.png',
    techStack: ['Python', 'SQL', 'Supply Chain Optimization', 'A/B Testing'],
    sections: [
      {
        title: 'Overview',
        content: [
          'This is a lightweight, modular supply chain dashboard to help an early-stage startup monitor inventory health during pilot rounds. The tool features live filtering by product and category, reorder point alerts, inventory value tracking, and interactive charts that visualize product distribution and stock trends. Designed with scalability in mind, it integrates with a SQLite backend and includes exportable reports for team-wide visibility.',
          'Note: This is an anonymized version of a dashboard I built during my internship at a stealth-stage startup. In compliance with NDA, all data, branding, and product details have been replaced with placeholders but the logic and structure are identical to the version I implemented internally.'
        ],
        media: [
          {
            type: 'video',
            src: '/images/prj5results.mp4',
            caption: 'Fig: Supply chain dashboard features'
          }
        ]
      },
      {
        title: 'Problem',
        content: [
          'Before building this dashboard, the startup was relying on a shared Excel sheet to manage inventory during early pilot rounds. While sufficient for the small team, this setup quickly revealed serious limitations as the business began scaling its operations.',
          '* Every stock change, reorder check, and report had to entered manually',
          '* Multiple team members editing the same sheet caused version conflicts and accidental overwrites',
          '* As more SKUs were added, the spreadsheet became cluttered',
          '* Different versions of the same sheet were stored and sent across different inboxes and folders, which made organization inefficient',
          '* The Excel sheet didn\'t have historical data, making it hard to forecast and backtrack',
          'Together, these inefficiencies pointed to a need for a clear, automated dashboard to support the team as it scaled its operations'
        ],
        media: [
          {
            type: 'image',
            src: '/images/prj5problem.png',
            caption: 'Fig: Preexisting (anonymized) Excel supply chain dashboard'
          }
        ]
      },
      {
        title: 'Design',
        content: [
          'Based on these problems, I made a preliminary product requirement doc with these key constraints:',
          '* Live inventory visibility that displays updated stock levels for all SKUs',
          '* Automatic alert that flags items below their reorder point',
          '* Product level filtering to allow members to filter by product name or category',
          '* Inventory value calculations (unit cost * quantity)',
          '* Downloadable reports for reports and sharing',
          '* Summary metrics to showcase total SKUs, total inventory value, and number of low stock items'
        ],
        media: [
          {
            type: 'image',
            src: '/images/prj5design.png',
            caption: 'Fig: Pie chart visualization of inventory distribution by category and real-time reorder alerts'
          }
        ]
      },
      {
        title: 'Deliverables',
        content: [
          '* Enabled real time inventory health visibility in <3 seconds across 30+ SKUs',
          '* Saved 2+ hours per week in manual tracking and reporting',
          '* Achieved 100% team adoption in under 2 weeks without additional training'
        ],
        media: [
          {
            type: 'video',
            src: '/images/prj5overview.mp4',
            caption: 'Fig: Final dashboard with all features implemented'
          }
        ],
        buttons: [
          { label: 'View Dashboard', url: 'https://audreykchan-supplychaindash-supply-dashboard-kqcw4m.streamlit.app/' },
          { label: 'View GitHub Repo', url: 'https://github.com/audreykchan/supplychaindash/tree/main' }
        ]
      }
    ]
  },
  {
    id: 'price-forecasting',
    title: 'AI/ML Price Forecasting & Optimization Tool',
    thumbnail: '/images/p6.png',
    techStack: ['Python', 'SQL', 'Scikit Learn', 'Unit Economics'],
    sections: [
      {
        title: 'Overview',
        content: [
          'This is an interactive, AI-powered dashboard that models demand behavior and estimates price elasticity using transaction data. Users can filter by product category, view fitted demand and revenue curves, calculate elasticity at various price points, and export results for internal reporting all without writing code. The underlying model leverages linear regression to simulate price sensitivity and identify revenue-maximizing pricing zones across multiple product tiers.',
          'Note: This is an anonymized version of a tool I built during my internship at a stealth-stage startup. In compliance with NDA, all data, branding, and transaction details have been replaced with placeholders but the logic and structure are identical to the version I implemented internally.'
        ],
        media: [
          {
            type: 'video',
            src: '/images/p6overview.mp4',
            caption: 'Fig: Feature overview of final dashboard'
          }
        ]
      },
      {
        title: 'Problem',
        content: [
          '* Manual pricing analysis was slow and error-prone, often taking 2+ days to produce basic insights',
          '* Team lacked visibility into how price changes impact demand and total revenue',
          '* Pricing decisions relied heavily on intuition or spreadsheets, leading to inconsistent outcomes',
          '* Existing tools lacked the ability to segment by product category, making granular analysis difficult',
          '* There was no fast, self-service way to quantify the impact of raising or lowering prices',
          'Together, these inefficiencies pointed to a need for a dynamic price forecasting/optimization tool that would enable faster, data-driven pricing decisions.'
        ],
        media: [
          {
            type: 'video',
            src: '/images/p6problem.mp4',
            caption: 'Fig: Raw transaction data alone makes it difficult to extract actionable insights'
          }
        ]
      },
      {
        title: 'Design',
        content: [
          'Based on these problems, I made a preliminary product requirement doc with these key constraints:',
          '* Enable fast, no code pricing analysis',
          '* Visualization of demand and revenue curves from historical transaction data',
          '* Estimation of price elasticity of demand using ML',
          '* Filtering by product to support segmented analysis',
          '* Exportable filtered outputs (csv transactions and graph images) for reporting and documentation',
          '* Minimize analyst dependency by automating common price queries'
        ],
        media: [
          {
            type: 'video',
            src: '/images/p6design.mp4',
            caption: 'Fig: Interactive price slider that dynamically projects sales volume and revenue in under 3 seconds'
          }
        ]
      },
      {
        title: 'Deliverables',
        content: [
          '* Reduced time spent generating elasticity reports from ~2 days (manual spreadsheet workflows) to under 30 seconds using a self-service dashboard',
          '* Supported segmented analysis for 5 product categories, uncovering unique elasticity profiles per vertical',
          '* Replaced gut-feel pricing decisions with interpretable ML models, improving revenue impact estimates'
        ],
        media: [
          {
            type: 'image',
            src: '/images/p6implementation.png',
            caption: 'Fig: ML linear regression used to predict revenue of the next 7 days'
          }
        ],
        buttons: [
          { label: 'View Dashboard', url: 'https://audreykchan-priceforecasting-price-tool-xmtp6p.streamlit.app/' }
        ]
      }
    ]
  },
  {
    id: 'portable-blender',
    title: 'Portable On-the-Go Blender',
    thumbnail: '/images/prj3.png',
    techStack: ['CAD (Fusion360)', 'DFM', 'Thread & Fastener Design'],
    sections: [
      {
        title: 'Overview',
        content: [
          'In response to the growing "on-the-go" nutrition market, where commuters and gym-goers sacrifice fresh smoothies for expensive, wasteful RTD drinks, we\'ve developed a redesigned portable blender that delivers true single-serve convenience without compromise. This Fusion 360-modeled, square-to-round bottle body uses flat walls and corners to eliminate vortex dead-zones, while a snap-fit SPI-400-style threading and dishwasher-safe blade port ensure leak-proof sealing and easy cleanup. At under 10" tall, it fits most cup holders and backpacks while reducing costs by 14%, and its modular design enables bottle-only dishwasher cycles without exposing electronics.'
        ],
        media: [
          {
            type: 'video',
            src: '/images/prj3overview.mp4',
            caption: 'Fig: Exploded view of blender design'
          }
        ]
      },
      {
        title: 'Problem',
        content: [
          '* Commuters and gym‑goers skip nutritious drinks because countertop blenders aren\'t convenient to carry',
          '* RTD protein shakes and smoothies create plastic waste and cost $4‑8 each; users want fresh, cheaper portions',
          '* Dorm rooms, offices, and van‑life setups lack room (or outlets) for full‑size appliances',
          '* Shaker balls leave gritty protein powder, seeds, and frozen fruit chunks',
          'These pain points highlight a clear demand for a compact, cost-effective blending solution that delivers fresh, smooth nutrition on the go without the bulk, waste, or grittiness of today\'s options.'
        ],
        media: [
          {
            type: 'image',
            src: '/images/reviews.png',
            caption: 'Fig: Critical reviews of protein shakes and portable blenders currently available'
          }
        ]
      },
      {
        title: 'Design',
        content: [
          'Based on these problems, I made a preliminary product requirement doc with these key constraints:',
          '* Flat walls + corners bounce ingredients back toward blades, reducing vortex dead‑zones; shape also prevents rolling and improves grip',
          '* True single‑serve portion while staying compact enough for cup‑holders and backpacks',
          '* Allows bottle-only dishwasher mode by plugging blade port, eliminating motor exposure to water',
          '* Fits most car cup holders and cycle bottle cages',
          '* Precise threading for secure closures'
        ],
        media: [
          {
            type: 'video',
            src: '/images/prj3design.mp4',
            caption: 'Fig: Part diagram of blender prototype'
          }
        ]
      },
      {
        title: 'Deliverables',
        content: [
          'Enabled cost savings of 14% by designing custom helical threading to enhance durability based on older models'
        ],
        media: [
          {
            type: 'video',
            src: '/images/threading.mp4',
            caption: 'Fig: Custom right-hand SPI-400 threading profile'
          }
        ],
        buttons: [
          { label: 'See it in Action', url: 'https://a360.co/3FONlhn' }
        ]
      }
    ]
  },
  {
    id: 'toilet-flapper',
    title: 'Toilet Flapper w/ Integrated Cleaning Agent Chamber',
    thumbnail: '/images/p4.png',
    techStack: ['CAD', 'CFD', 'Technical Drawing', 'Manufacturing Cost Analysis'],
    sections: [
      {
        title: 'Overview',
        content: [
          'This patent-pending flapper offers a more efficient and sustainable alternative to conventional in-tank cleaning tablets. Unlike standard tablets that dissolve continuously in water, this design integrates a cleaning agent chamber directly into the flapper, releasing cleaner only during the flush cycle. Key features include a tool-free snap-on rubber bulb, consistent chemical dosing, improved tablet lifespan, reduced tank corrosion, and a simplified single-material mold optimized for low-cost manufacturing.'
        ],
        media: [
          {
            type: 'image',
            src: '/images/prj4overview.png',
            caption: 'Fig: Technical drawing showing isometric, top, bottom, front, right views'
          }
        ]
      },
      {
        title: 'Problem',
        content: [
          '* Cleaning toilets is the #1 most disliked household chore',
          '* Conventional drop-in tank chemical tablets only dose part of the water and fade within a week',
          '* Conventional tablets soak 24/7 in tank water, causing tank components to erode and shortening tablet lifespan',
          '* Conventional tablets provide inconsistent amounts of cleaner over time',
          'These pain points highlight a clear demand for a smarter, more sustainable toilet cleaning option that has the same potency as conventional tablets.'
        ],
        media: [
          {
            type: 'image',
            src: '/images/problem4.png',
            caption: 'Fig: Corroded toilet components from prolonged exposure to water chlorination and tank chemicals'
          }
        ]
      },
      {
        title: 'Design',
        content: [
          'Based on these problems, I made a preliminary product requirement doc with these key constraints:',
          '* Integrated tablet on flapper underside for non 24/7 water exposure and consistent doses of cleaner',
          '* Large bulb dome to withstand added tablet weight ≥ 6.2 cubic in volume',
          '* Rubber snap-off design for tool free replacement',
          '* Reloadable tablet concept to reduce single-use plastic cartridge waste and preserving tablet lifespan',
          '* 3 large vent openings in the bulb dome to improve water circulation while maintaining buoyancy'
        ],
        media: [
          {
            type: 'image',
            src: '/images/design4.png',
            caption: 'Fig: Technical drawing of patent-pending toilet flapper'
          }
        ]
      },
      {
        title: 'Deliverables',
        content: [
          '* Production cost: ~$0.55 per unit at 1M pieces (one shot compression mold)',
          '* Tablet lasts 1,400 flushes in the flapper vs 400 flushes when loose in the tank',
          '* Reduces chemical consumption 83% by dosing only during the 3 second flush, not 24/7 tank soak'
        ],
        media: [
          {
            type: 'video',
            src: '/images/results4.mp4',
            caption: 'Fig: Final flapper design with integrated cleaning chamber'
          }
        ],
        buttons: [
          { label: 'See it in Action', url: 'https://gmail5201437.autodesk360.com/g/shares/SH30dd5QT870c25f12fca8a4164dba475dac' }
        ]
      }
    ]
  }
];
