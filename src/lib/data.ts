export type SkillCategory = {
  title: string;
  skills: {
    name: string;
    image: string;
  }[];
};

export type Experience = {
  id: number;
  img: string;
  role?: string;
  company: string;
  date: string;
  desc: string;
  skills: string[];
};

export type Education = {
  id: number;
  img: string;
  school: string;
  date: string;
  grade?: string;
  desc: string;
  degree: string;
  skills?: string;
  doc?: string;
};

export type Project = {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github?: string;
  webapp?: string;
  view?: string;
};

export type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  url: string;
};

export const bio = {
  name: "Kyle Robins",
  roles: [
    "DevOps Engineer",
    "Software Engineer",
    "SRE Engineer",
    "IT Consultant",
  ],
  description:
    "I'm an enthusiastic and adaptable person, always excited to tackle new challenges. I love learning and am committed to delivering great results. I bring a positive attitude and a mindset focused on growth. I enjoy working in a team, and my passion is creating technologies that make a real impact.",
  github: "https://github.com/kylerobins",
  resume:
    "https://docs.google.com/document/d/1TzOGdoiVL7XgKh2y2DE527CXty6wKSO6hYlWFLwOlwI/edit?usp=sharing",
  linkedin: "https://www.linkedin.com/in/robinskyle/",
  twitter: "https://x.com/_KyleRobins",
  blog: "https://blog.kylerobins.com",
  youtube: "https://www.youtube.com/@kylerobins?sub_confirmation=1",
  location: "Nairobi, Kenya",
  email: "hello@kylerobins.com",
};

export const skills: SkillCategory[] = [
  {
    title: "DevOps",
    skills: [
      {
        name: "Terraform",
        image:
          "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/terraform-icon.svg",
      },
      {
        name: "Docker",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705569757/docker-icon_go3ghu.svg",
      },
      {
        name: "Kubernetes",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705570134/kubernetes_spgavu.svg",
      },
      {
        name: "WildFly",
        image:
          "https://tools.jboss.org/features/images/wildfly_logo_stacked_200px.png",
      },
      {
        name: "Argo CD",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705569040/argo-icon_bpv0xf.svg",
      },
      {
        name: "OpenShift",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705570616/openshift_ckkobe.svg",
      },
      {
        name: "Red Hat Linux",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705570753/redhat-icon_l8v0zw.svg",
      },
      {
        name: "AWS",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705569058/aws_mncngm.svg",
      },
      {
        name: "GCP",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705569899/google-cloud_c3hlxs.svg",
      },
      {
        name: "Azure",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705570519/microsoft-azure_qsvrrq.svg",
      },
      {
        name: "Ansible",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705569010/ansible_xlewkf.svg",
      },
      {
        name: "Jenkins",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705570092/jenkins_fchvpx.svg",
      },
      {
        name: "GitHub Actions",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705569870/github-actions_ltmwle.svg",
      },
    ],
  },
  {
    title: "Full-Stack",
    skills: [
      {
        name: "Node.js",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705570579/nodejs-icon_czsf7c.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705570090/javascript_xvezc8.svg",
      },
      {
        name: "Java",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705570090/java_gskyy2.svg",
      },
      {
        name: "Supabase",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705571412/supabase-icon_nngkrc.svg",
      },
      {
        name: "MySQL",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705570553/mysql_qtwebt.svg",
      },
      {
        name: "PostgreSQL",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705570682/postgresql_kyfbjc.svg",
      },
      {
        name: "HTML",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705570051/html-5_jj79zy.svg",
      },
      {
        name: "CSS",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705569719/css-3_yiluzv.svg",
      },
      {
        name: "Firebase",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705569835/firebase_foh5wl.svg",
      },
    ],
  },
  {
    title: "Graphics & Design",
    skills: [
      {
        name: "Figma",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705569834/figma_abiof3.svg",
      },
      {
        name: "Sketch",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705570852/sketch_k4jtuj.svg",
      },
      {
        name: "Adobe Illustrator",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705568954/adobe-illustrator_brjq6y.svg",
      },
      {
        name: "Adobe After Effects",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705568953/adobe-after-effects_b9ag7y.svg",
      },
      {
        name: "Adobe Photoshop",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705568962/adobe-photoshop_igoo3o.svg",
      },
    ],
  },
  {
    title: "Tooling",
    skills: [
      {
        name: "Git",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705569876/git-icon_hfrpbh.svg",
      },
      {
        name: "GitHub",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1721799946/github_risfko.png",
      },
      {
        name: "GitLab",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705569877/gitlab_hfvxb0.svg",
      },
      {
        name: "Yaml",
        image: "https://avatars.githubusercontent.com/u/69535?s=200&v=4",
      },
      {
        name: "Netlify",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705570569/netlify-icon_lbttqn.svg",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
      },
      {
        name: "Postman",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705570682/postman-icon_s4bky1.svg",
      },
      {
        name: "Nginx",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705570571/nginx_zggsbv.svg",
      },
      {
        name: "Grafana",
        image:
          "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705569923/grafana_x6fx3i.svg",
      },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 0,
    img: "https://res.cloudinary.com/dzw5pskk1/image/upload/v1715753954/applicationLogo_h62wsh.jpg",
    role: "DevOps Engineer | Software Engineer",
    company: "E4Impact Entrepreneurship Center, Kenya",
    date: "Feb 2024 - Present",
    desc: "Designing, implementing, and managing cloud infrastructure, CI/CD pipelines, and scalable software solutions for entrepreneurship initiatives. Maintaining company websites and internal systems in collaboration with incubated and accelerated companies.",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD",
      "Terraform",
      "Jenkins",
      "Git",
      "JavaScript",
      "React",
      "Node.js",
    ],
  },
  {
    id: 1,
    img: "https://res.cloudinary.com/dzw5pskk1/image/upload/v1758394168/e4i-portal-black_hscdkg.png",
    role: "DevOps & Fullstack Engineer",
    company: "Elitcorp Ltd.",
    date: "Present",
    desc: "Optimizing IT infrastructure, delivering cloud automation, and enhancing operational efficiency with IaC, observability, and modern web stacks.",
    skills: [
      "Docker",
      "Terraform",
      "AWS",
      "EC2",
      "Kubernetes",
      "Nginx",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Next.js",
    ],
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705600457/unistus-new_qew4lo.png",
    company: "Unistus Services Ltd",
    date: "Aug 2022 - Dec 2023",
    desc: "Led multi-disciplinary teams across web, DevOps, design, and consulting. Drove project delivery, tooling, and client success while modernising workflows.",
    skills: [
      "React",
      "Nginx",
      "Node.js",
      "Digital Ocean",
      "HTML",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "CSS",
      "JavaScript",
      "WordPress",
    ],
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705581205/nitrogen_w6ryxr.png",
    role: "Front-End Developer",
    company: "Nitrogen Technologies",
    date: "Jan 2022 - May 2022",
    desc: "Contributed to a payment gateway CMS in React and delivered a polished marketing site plus mobile UI/UX deliverables.",
    skills: [
      "React",
      "Redux",
      "Node.js",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
      "Docker",
      "AWS",
      "MongoDB",
    ],
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705581617/Muru-Tech-Blue-Favicon-e1671027552148_d8lyzf.webp",
    role: "Front-End Developer Intern",
    company: "Murutech Inc.",
    date: "Jan 2021 - July 2021",
    desc: "Built custom WordPress themes and plugins, integrated analytics, and produced data-informed recommendations for clients.",
    skills: [
      "WordPress",
      "MySQL",
      "React",
      "Material UI",
      "Figma",
      "AWS",
      "Nginx",
    ],
  },
];

export const education: Education[] = [
  {
    id: 0,
    img: "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705582594/KCAU-logo-partial-white_qtfh7m.svg",
    school: "KCA University, Ruaraka",
    date: "May 2018 - Dec 2022",
    grade: "Second Class Honours (Upper Division)",
    desc: "Graduated with a Bachelor's in Software Development covering data structures, algorithms, OOP, DBMS, OS, and computer networks. Active member of the Google Developer Student Club collaborating on campus projects.",
    degree: "BSc Software Development",
  },
  {
    id: 1,
    img: "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705585110/Develhope_jahknb.png",
    school: "Develhope",
    date: "Jun 2023 - Nov 2023",
    desc: "Completed the Java Backend Engineer programme with Spring ecosystem focus, REST API design, and secure enterprise patterns.",
    degree: "Java Backend Engineer",
    skills:
      "Spring Boot · Spring MVC · Java · Jira · Oracle SQL · Spring Security · JavaScript · Project Management",
    doc: "https://www.credential.net/e09d4d45-9b4e-46f0-9d84-715069c57760",
  },
];

export const projects: Project[] = [
  {
    id: 9,
    title: "Senke",
    date: "Active",
    description:
      "Daily essentials platform with groceries, pharmacy, meals, and parcel delivery backed by multi-tenant logistics.",
    image:
      "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705588877/senkeafrca_sbgjkb.png",
    tags: [
      "Next.js",
      "MySQL",
      "Vercel",
      "Nginx",
      "Firebase",
      "GitHub Actions",
      "React",
      "Node.js",
    ],
    category: "web app",
    github: "#",
    webapp: "https://senkeafrica.com",
  },
  {
    id: 0,
    title: "Senke Dashboard",
    date: "Apr 2023 - May 2023",
    description: "Operations dashboard for orders, fleet management, invoicing, and geolocation insights.",
    image:
      "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705589332/senke-admin_fl6xow.png",
    tags: [
      "React",
      "MySQL",
      "Laravel",
      "Firebase",
      "SMTP",
      "Nginx",
      "GCP",
      "cPanel",
      "Vercel",
      "Node.js",
    ],
    category: "web app",
    github: "#",
    webapp: "https://admin.senkeafrica.com",
  },
  {
    id: 1,
    title: "Elitcorp",
    date: "Oct 2022 - Present",
    description:
      "Corporate site for an IT agency covering web, cloud, design, and consulting services with bespoke CMS.",
    image:
      "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705590482/elit_ajmdvv.png",
    tags: ["React", "MongoDB", "Node.js", "Express", "Redux", "NodeMailer"],
    category: "web app",
    github: "#",
    webapp: "https://www.elit.co.ke/",
  },
  {
    id: 2,
    title: "Elitcorp Socials",
    date: "Jan 2023 - Mar 2023",
    description:
      "Creative social and marketing assets supporting Elitcorp brand campaigns and community storytelling.",
    image:
      "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705641325/socialmedia_b90nhh.png",
    tags: ["Adobe Illustrator", "Adobe Photoshop", "Canva", "Figma"],
    category: "design",
    view: "https://twitter.com/elit_corp",
  },
  {
    id: 4,
    title: "Personal Blog",
    date: "Active",
    description:
      "Technical writing hub documenting learnings across DevOps, cloud, and modern web engineering.",
    image:
      "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705593640/blog_vrzuq3.png",
    tags: ["React", "Firebase", "Firestore", "Node.js"],
    category: "web app",
    github: "#",
    webapp: "https://blog.kylerobins.com",
  },
  {
    id: 5,
    title: "Pgemsfresh",
    date: "Nov 2023",
    description: "Farm produce catalogue and ordering experience for a regional distributor.",
    image:
      "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705593968/pgemsfresh_lxmi1q.png",
    tags: ["PHP", "WordPress", "GCP Auth", "Node.js"],
    category: "web app",
    github: "#",
    webapp: "https://pgemsfresh.com",
  },
  {
    id: 6,
    title: "Unistus Ltd CRM",
    date: "Feb 2022",
    description:
      "CRM tailored for accounting, HR, and client operations, integrating Odoo with cloud automation.",
    image:
      "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705597419/unistusodoo_pbrxa5.png",
    tags: ["Python", "API", "Docker", "Node.js", "Nginx", "MySQL", "Odoo"],
    category: "web app",
    github:
      "https://github.com/KyleRobins/Scripts/blob/main/Odoo/openhrms_install.sh",
    webapp: "https://hrm.unistusltd.co.ke",
  },
  {
    id: 8,
    title: "Info Graphics",
    date: "Jan 2021",
    description:
      "Information design collateral supporting corporate communications and investor updates.",
    image:
      "https://res.cloudinary.com/dzw5pskk1/image/upload/v1705645149/infographics_j94vjj.png",
    tags: ["Canva", "Excalidraw", "Draw.io", "Adobe Illustrator"],
    category: "design",
    view: "https://www.linkedin.com/posts/elitcorp_ugcPost-7125830640062652416-KurK?utm_source=share&utm_medium=member_desktop",
  },
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Networking Fundamentals on GCP",
    issuer: "Google Cloud",
    date: "Issued Oct 2, 2024",
    image:
      "https://cdn.qwiklabs.com/%2FX2jwzmWtD0IjbWRpVyW9CH0tjmbSpgY8oDBwdYxN5M%3D",
    url: "https://www.cloudskillsboost.google/public_profiles/1e046c18-26d2-49e1-b53e-d5b0eb031eed/badges/11821409",
  },
  {
    id: 2,
    title: "Use APIs to Work with Cloud Storage",
    issuer: "Google Cloud",
    date: "Issued Sep 20, 2024",
    image:
      "https://cdn.qwiklabs.com/Ep3VKgjzXiYW%2BvS7bWyrPt7IUqjeBat3dkphmkFwsRU%3D",
    url: "https://www.cloudskillsboost.google/public_profiles/1e046c18-26d2-49e1-b53e-d5b0eb031eed/badges/11559678",
  },
  {
    id: 3,
    title: "Getting Started with Cloud Storage",
    issuer: "Google Cloud",
    date: "Issued Sep 20, 2024",
    image:
      "https://cdn.qwiklabs.com/C29WcLiPHUd2uj1zMaF2MepWKhC%2Bvs7WTUMUTA4nMFU%3D",
    url: "https://www.cloudskillsboost.google/public_profiles/your-profile",
  },
  {
    id: 4,
    title: "Google Cloud Essentials",
    issuer: "Google Cloud",
    date: "Issued Sep 20, 2024",
    image:
      "https://res.cloudinary.com/dzw5pskk1/image/upload/ar_16:9,c_fill,e_sharpen,g_auto,h_667,w_1000/v1743939388/Gcp-Essentials_kewkps.png",
    url: "https://www.cloudskillsboost.google/public_profiles/1e046c18-26d2-49e1-b53e-d5b0eb031eed/badges/11555608",
  },
  {
    id: 5,
    title: "Cybersecurity Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Issued Jul 10, 2024",
    image:
      "https://res.cloudinary.com/dzw5pskk1/image/upload/c_fill,w_280,h_280/v1743940230/ibm_fzg0qq.png",
    url: "https://www.credly.com/badges/62fa7cfe-712d-4b97-a781-3d232dfc0926/public_url",
  },
  {
    id: 6,
    title: "AWS Cloud Computing 101",
    issuer: "Amazon Web Services",
    date: "Issued Apr 4, 2025",
    image:
      "https://images.credly.com/size/680x680/images/8d67bbf4-128b-4141-b5f1-1bc61bbfbaa6/image.png",
    url: "https://www.cloudskillsboost.google/public_profiles/your-profile",
  },
  {
    id: 7,
    title: "AWS Restart Cloud Computing",
    issuer: "Amazon Web Services",
    date: "Issued Apr 1, 2024",
    image:
      "https://images.credly.com/size/680x680/images/44e2c252-5d19-4574-9646-005f7225bf53/image.png",
    url: "https://www.credly.com/badges/907ed7ad-b17a-4afa-9fff-f306d4f1e7ec",
  },
  {
    id: 8,
    title: "AWS Educate: Getting Started with Storage",
    issuer: "Amazon Web Services",
    date: "Issued Apr 6, 2025",
    image:
      "https://images.credly.com/images/5bf37709-4b69-4cdc-9edc-af7b3370d427/image.png",
    url: "https://www.credly.com/badges/c1bba7ba-25d7-427b-9c60-49b4d41ac1fa/public_url",
  },
];

export const timeline = [
  { year: 2018, text: "Started University - BSc Software Development" },
  { year: 2021, text: "First Internship - Frontend Development" },
  { year: 2022, text: "Graduated & Started Professional Career" },
  { year: 2023, text: "Java Backend Certification & Team Leadership" },
  { year: 2024, text: "DevOps Engineer - Current Role" },
];
