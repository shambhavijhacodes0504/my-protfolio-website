# Shambhavi Portfolio

Shambhavi Jha's personal portfolio showcases projects, technical skills, research interests, and academic background in AI/ML, data science, computer vision, and software development. The website brings together selected work, project documentation, and contact information in a responsive interactive experience.

---

## Maintainer Information

- **Maintainer**: Shambhavi Jha
- **Email**: [shambhavijha0504@gmail.com](mailto:shambhavijha0504@gmail.com)
- **GitHub**: [https://github.com/shambhavijhacodes0504](https://github.com/shambhavijhacodes0504)
- **LinkedIn**: [https://www.linkedin.com/in/shambhavi-jha0405/](https://www.linkedin.com/in/shambhavi-jha0405/)
- **Academic Affiliation**: Birla Institute of Technology, Mesra
- **Program**: Bachelor of Computer Applications (BCA), 2025–present
- **CGPA**: 8.7 (subject to confirmation against current academic records)
- **Primary Domain**: AI/ML, Data Science, Computer Vision, and Applied AI Research

---

## Portfolio Purpose

This portfolio serves as an interactive showcase and central repository for Shambhavi Jha's engineering projects, exploratory research, and academic achievements. Key objectives include:
- Presenting machine learning pipelines, semantic vector search engines, and predictive analytics applications.
- Documenting ongoing experimental investigations in Explainable AI and adaptive learning systems.
- Providing verified work experience, internship records, and academic background.
- Offering direct access to technical documentation, verified resume downloads, and contact channels.

---

## Featured Projects

The website presents four core technical projects and research initiatives:

### 1. Loan Approval Prediction: ML vs. LLM-Driven Decision System
- **Purpose**: Evaluates trade-offs between traditional tabular machine learning classifiers and LLM reasoning prompts for credit risk underwriting and risk sensitivity.
- **Implementation**: Built preprocessing and feature-engineering pipelines on the LendingClub loan dataset for credit evaluation attributes. Trained Scikit-Learn models (Random Forest, Logistic Regression) and compared their outputs against OpenAI API prompt-based reasoning within an interactive Flask evaluation interface.
- **Technologies**: Python, Pandas, Scikit-learn, Flask, OpenAI API, Random Forest, Logistic Regression.
- **Status**: Documented Implementation.

### 2. Cross-Domain Recommendation System
- **Purpose**: Solves discovery isolation across cultural domains by connecting narratives and themes across movies, books, songs, and video games.
- **Implementation**: Maps multimodal descriptions into a unified 384-dimensional vector space using `all-MiniLM-L6-v2` Sentence Transformers. Computes cosine similarity scores balanced with popularity metrics via the formula:  
  $$\text{final\_score} = (0.8 \times \text{cosine\_similarity}) + (0.2 \times \text{popularity\_score})$$  
  Includes category diversity balancing, an asynchronous FastAPI backend, and a reactive frontend.
- **Technologies**: Sentence Transformers, all-MiniLM-L6-v2, NumPy, FastAPI, PostgreSQL, React.
- **Status**: Documented Implementation.

### 3. Artificial Wisdom System
- **Purpose**: Ongoing experimental research framework exploring adaptive learning heuristics, automated reasoning concepts, and explainability interfaces.
- **Implementation**: Explores how predictive models can formulate intermediate representations and expose human-interpretable reasoning pathways rather than black-box outputs. Includes feature attribution sensitivity analysis and an interactive inference dashboard built in Streamlit.
- **Technologies**: Python, Scikit-learn, Streamlit, Explainable AI, Feature Attribution, Adaptive Learning.
- **Status**: Ongoing Experimental Research Framework.

### 4. AI-Driven CRM Analytics System
- **Purpose**: End-to-end customer relationship intelligence platform providing unsupervised segmentation, lead qualification scoring, and retention forecasting.
- **Implementation**: Conducts exploratory data analysis (EDA) on customer engagement logs, implements Scikit-learn clustering algorithms to differentiate enterprise cohorts from standard users, and provides conversion probability scores through a modular web dashboard.
- **Technologies**: Python, Pandas, Scikit-learn, React.js, Node.js, MongoDB, EDA.
- **Status**: Full-Stack System.

---

## Experience & Education

### Experience Timeline
- **Be11 Sports Technologies Private Limited**  
  *AI/ML Software Engineer Intern* (Internship Offer)  
  *Focus*: Machine learning engineering, data processing pipelines, and applied algorithmic systems.
- **Vacation Mantra Technologies Pvt. Ltd.**  
  *Product Engineering & Data Science Intern* (June 2026 – August 2026 · Hybrid · Completed)  
  *Focus*: Data exploration, user behavioral analytics, predictive metrics, and cross-functional product feature delivery.

### Education
- **Birla Institute of Technology, Mesra**  
  *Bachelor of Computer Applications (BCA)*  
  *Duration*: 2025–Present  
  *Academic Performance*: CGPA 8.7 / 10  
  *Coursework*: Data Structures & Algorithms, Machine Learning, Database Management Systems, Computer Networks, Software Engineering.

---

## Main Features

- **Interactive 3D ID Badge**: Real-time 3D lanyard badge rendered with Three.js and `@react-three/rapier` physics simulation.
- **Hero Orbital Centerpiece**: Multi-orbit animated graphic representing core domains (AI/ML, NLP, Computer Vision, Data Science).
- **Dedicated Experience Timeline**: Vertical timeline detailing professional internship roles, technical responsibilities, and completion statuses.
- **Curated Projects Showcase**: Interactive cards detailing architectural workflows, mathematical formulas, and technical stacks.
- **Technical Skills Matrix**: Comprehensive categorization covering Programming Languages, Machine Learning, Data Science libraries, Web Technologies, and Developer Tools.
- **Integrated Resume Viewer**: Dedicated resume section featuring inline PDF preview, quick metadata summary, and one-click download.
- **Responsive & Accessible Design**: Engineered with dark mode aesthetics, semantic HTML5 structure, and mobile-responsive layouts.

---

## Technology Stack

| Category | Technologies |
| :--- | :--- |
| **Framework** | Next.js 14.2 (App Router) |
| **Frontend Library** | React 18 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 3.4, Vanilla CSS Design Tokens, PostCSS |
| **3D & Physics** | Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`), Rapier (`@react-three/rapier`) |
| **Animations** | Framer Motion, GSAP, Lenis Smooth Scroll |
| **Icons & Media** | React Icons, Lucide React, Mini-SVG Data URI |
| **Package Manager** | npm / yarn / bun |

---

## Project Structure

```text
my-portfolio-website/
├── app/
│   ├── apple-icon.png         # Apple touch icon
│   ├── favicon.ico            # Website favicon
│   ├── globals.css            # Global CSS styles & design tokens
│   ├── layout.tsx             # Root layout with Inter font and theme provider
│   ├── page.tsx               # Main portfolio landing page composition
│   └── provider.tsx           # Next-themes dark mode provider
├── components/
│   ├── band/                  # 3D interactive lanyard & physics simulation
│   │   ├── App.js             # Canvas & Rapier physics component
│   │   └── index.css          # 3D band styling
│   ├── card/                  # Interactive 3D business card component
│   ├── hero/                  # Hero section components
│   │   ├── AiOrbitalCenterpiece.tsx # Animated SVG orbital graphic
│   │   └── Hero.tsx           # Hero intro & call-to-actions
│   ├── sections/              # Modular content sections
│   │   ├── AboutMe.tsx        # Personal introduction & background
│   │   ├── ContactSection.tsx # Contact channels & direct email trigger
│   │   ├── EducationSection.tsx # Academic degree & institution details
│   │   ├── ExperienceSection.tsx # Vertical professional experience timeline
│   │   ├── ResumeSection.tsx  # PDF resume preview & download trigger
│   │   └── TechnicalSkills.tsx# Structured technical competency matrices
│   ├── ui/                    # Reusable animated UI elements (bento grid, 3D pins, moving borders)
│   ├── footer.tsx             # Website footer with copyright & social links
│   ├── navigation.tsx         # Responsive navbar with section anchors
│   └── recent-projects.tsx    # Interactive project grid
├── config/
│   └── index.ts               # Central site configuration, links, and SEO metadata
├── data/
│   ├── index.ts               # Re-exported datasets for UI sections
│   └── portfolio.ts           # Central source-of-truth for profile, projects, and skills
├── public/
│   ├── images/
│   │   ├── profile/           # Profile portraits and images
│   │   └── projects/          # Project cover cards
│   ├── resume/
│   │   └── Shambhavi_Jha_Resume.pdf # Official downloadable resume PDF
│   └── manifest.json          # Web application manifest
├── package.json               # Package dependencies, scripts, and metadata
├── tsconfig.json              # TypeScript compiler configuration
└── tailwind.config.ts         # Tailwind CSS design tokens & animations
```

---

## Local Installation and Setup

### Prerequisites
- Node.js version 18.17.0 or later (Node 20+ recommended)
- npm, yarn, or bun installed on your system

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shambhavijhacodes0504/my-portfolio-website.git
   cd my-portfolio-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the running application.

---

## Environment Variables

No third-party API keys or external secrets are required to run or build the website locally. All portfolio content, projects, and experience data are statically modeled and managed within `data/portfolio.ts` and `config/index.ts`.

---

## Development Commands

All available scripts configured in `package.json`:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with hot-reload at `http://localhost:3000` |
| `npm run build` | Compiles and builds the production-ready application bundle |
| `npm run start` | Launches the Next.js production server (requires running `npm run build` first) |
| `npm run lint` | Runs ESLint across the codebase to check for syntax and style issues |
| `npx tsc --noEmit` | Runs the TypeScript compiler to validate types without emitting build files |

---

## Production Build and Deployment

### Building Locally

To generate an optimized production build:
```bash
npm run build
```

To test the generated production build locally:
```bash
npm run start
```

### Deploying to Vercel

The portfolio is optimized for zero-configuration deployment on [Vercel](https://vercel.com):
1. Push your code to your GitHub repository: `https://github.com/shambhavijhacodes0504/my-portfolio-website`.
2. Log into the Vercel dashboard and click **Add New Project**.
3. Import the `my-portfolio-website` repository.
4. Leave the default build settings (`Framework: Next.js`, `Build Command: npm run build`, `Output Directory: .next`).
5. Click **Deploy**.

---

## Asset Replacement Instructions

All assets and profile details can be replaced without modifying core component layout code:

1. **Resume PDF**:
   - Location: `public/resume/Shambhavi_Jha_Resume.pdf`
   - Configured in: `config/index.ts` under `links.resumeUrl`.
2. **Profile Photo**:
   - Location: `public/images/profile/shambhavi-portrait.jpeg`
   - Configured in: `data/portfolio.ts` under `portfolioData.profile.portraitPath`.
3. **Project Screenshots / Covers**:
   - Location: `public/images/projects/`
   - Configured in: `data/portfolio.ts` under each project's `coverImage` attribute.
4. **Bio & Project Data**:
   - Modify `data/portfolio.ts` to update project titles, descriptions, formulas, skills, or timeline items.

---

## Resume and Contact Links

- **Download Resume**: [View / Download PDF](./public/resume/Shambhavi_Jha_Resume.pdf)
- **Email**: [shambhavijha0504@gmail.com](mailto:shambhavijha0504@gmail.com)
- **GitHub**: [github.com/shambhavijhacodes0504](https://github.com/shambhavijhacodes0504)
- **LinkedIn**: [linkedin.com/in/shambhavi-jha0405](https://www.linkedin.com/in/shambhavi-jha0405/)

---

## Credits and Licensing

- **License**: Released under the [MIT License](./LICENSE).
- **Portfolio Implementation**: Maintained by Shambhavi Jha (2025–present).
- **Template Foundation & Acknowledgments**: Acknowledges the original Next.js 3D portfolio template foundation by Sanidhya Kumar Verma, with UI inspiration and components adapted from [Aceternity UI](https://ui.aceternity.com/).
