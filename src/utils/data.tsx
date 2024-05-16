import { Student, Role, RightToWork } from "@/types/student"
import { FormData } from "../types/matching"

export const students: Student[] = [
  {
    firstName: "Nikki",
    secondName: "Palmer",
    emailAddress: "please use your own email address",
    showProfile: true,
    photoURL:
      "https://www.cityheadshots.com/uploads/5/1/2/1/5121840/editor/mjb-2465.jpg?1643119031",
    education:
      "BA in Philosophy, Politics and Economics @ Oxford University (2021); MSc in Sociology, Oxford University (Distinction)",
    workExperience: (
      <>
        <strong>1) Senior Analyst @ Connell Consulting (3 mos) -</strong> Led
        business development work, provided CDD & strategy reports for clients.
        <br /> <br />{" "}
        <strong>
          2) Head of Logistics @ Herford Politics and Economics Society (4 yrs)
          -
        </strong>{" "}
        Organised events, talks, & dinners with high-profile speakers.
      </>
    ),
    proudPoint:
      "Recipient of the A.H Halsey Prize for outstanding performance in the Sociology Master's degree program.",
    roles: [Role.FOUNDERS_ASSOCATE, Role.OPERATIONS],
    additionalLanguages: [],
    rightToWork: RightToWork.YES_BRITISH,
    salaryExpectations: "£50k - approx",
    CVURL:
      "https://docs.google.com/document/d/1r7IZVU-sspjGDLLIpvVIpt74id48ahTEy1Rc-pL8zSc/edit?usp=sharing",
    linkedInURL: "https://www.linkedin.com/in/nikki-mehta-8679521a3/",
  },
  {
    firstName: "Matthew",
    secondName: "Mehan",
    emailAddress: "please use your own email address",
    showProfile: true,
    photoURL:
      "https://www.cityheadshots.com/uploads/5/1/2/1/5121840/editor/mjb-2465.jpg?1643119031",
    education: "BA in Economics @ Cambridge University (1st Class) (2021)",
    workExperience: (
      <>
        <strong>1) Business Partner @ AM London (7 mo) -</strong> Reduced
        fulfillment prices by 15% and cleared 85% of old stock, improving
        cashflow. <br /> <br />{" "}
        <strong>2) Equity Sales Analyst @ Morgan Stanley (1 yr 7 mo) -</strong>{" "}
        Managed top Nordic accounts, expanding equities business.
      </>
    ),
    proudPoint:
      "Developed and implemented an effective online pricing strategy for the apparel brand 'Threadbare', resulting in the brand's website transitioning from a loss-making venture to a profitable one.",
    roles: [Role.FOUNDERS_ASSOCATE, Role.OPERATIONS, Role.SALES],
    additionalLanguages: [],
    rightToWork: RightToWork.YES_BRITISH,
    salaryExpectations: "£45-60k - approx",
    CVURL:
      "https://docs.google.com/document/d/1r7IZVU-sspjGDLLIpvVIpt74id48ahTEy1Rc-pL8zSc/edit?usp=sharing",
    linkedInURL: "https://www.linkedin.com/in/matthew-sarre-46270479",
  },
  {
    firstName: "Rachel",
    secondName: "Lamb",
    emailAddress: "please use your own email address",
    showProfile: true,
    photoURL:
      "https://www.cityheadshots.com/uploads/5/1/2/1/5121840/editor/mjb-2465.jpg?1643119031",
    education: "BA in Music @ Oxford University (1st Class)",
    workExperience: (
      <>
        <strong>1) Marketing Manager @ Timberseed (1 yr) </strong> - a solo
        marketer within a start-up recruitment agency of c.50 employees. Working
        on events, podcasts, job ads, email marketing, LinkedIn posts, PR, and
        Reports.
        <br />
        <strong>2) Social Media Executive @ Hive Estates (10 mos) </strong>-
        Working directly with the Managing Director and Photography teams on the
        organic Social Media strategy and website analytics.
      </>
    ),
    proudPoint:
      "Walking 57km from Eastbourne to Brighton for Harry's HAT charity last year!",
    roles: [Role.FOUNDERS_ASSOCATE, Role.OPERATIONS],
    additionalLanguages: ["Italian"],
    rightToWork: RightToWork.YES_BRITISH,
    salaryExpectations: "£30-40k - approx",
    CVURL:
      "https://docs.google.com/document/d/1r7IZVU-sspjGDLLIpvVIpt74id48ahTEy1Rc-pL8zSc/edit?usp=sharing",
    linkedInURL: "https://www.linkedin.com/in/rachel-howe-1504b61b2",
  },
  {
    firstName: "Janine",
    secondName: "Yin",
    emailAddress: "please use your own email address",
    showProfile: true,
    photoURL:
      "https://www.cityheadshots.com/uploads/5/1/2/1/5121840/editor/mjb-2465.jpg?1643119031",
    education: "BSc in Engineering @ Leeds University",
    workExperience: (
      <>
        <strong>1) Student Consultant @ Invest Africa (1 yr)-</strong> developed
        an ESG African Investment Index for client services, designed
        interactive ESG visualisations, collaborated with team of 5. <br />
        <strong>
          2) Chair @ University of Cambridge Concert Band (2 yrs)-
        </strong>{" "}
        headed a committee of 7, organised band events including concerts,
        managed and enforced band's COVID-19 safety protocols.
      </>
    ),
    proudPoint:
      "Raised enough money to keep New Kapporet's Christian Helpline running for another week!",
    roles: [Role.FOUNDERS_ASSOCATE, Role.OPERATIONS, Role.PRODUCT],
    additionalLanguages: ["Greek"],
    rightToWork: RightToWork.YES_POSTSTUDY_VISA,
    salaryExpectations: "£30-40k - approx",
    CVURL:
      "https://docs.google.com/document/d/1r7IZVU-sspjGDLLIpvVIpt74id48ahTEy1Rc-pL8zSc/edit?usp=sharing",
    linkedInURL: "https://www.linkedin.com/in/janine-subgang/",
  },
  {
    firstName: "Sinead",
    secondName: "Casanovas",
    emailAddress: "please use your own email address",
    showProfile: true,
    photoURL:
      "https://www.cityheadshots.com/uploads/5/1/2/1/5121840/editor/mjb-2465.jpg?1643119031",
    education:
      "BSc in Economics and Business Administration @ Pompeu Fabra University (2019); MSc Finance @ HEC Paris",
    workExperience: (
      <>
        <strong>1) M&A Associate @ V&P (7 mo) -</strong> Developed M&A
        franchise, executed key deals with Mars, JAB, and Brandtech. First
        employee. <br /> <br />{" "}
        <strong>2) Corporate Finance @ RSM (4 mo) -</strong> Conducted due
        diligence on mid-sized Spanish firms, analyzed financials, created
        P&Ls."
      </>
    ),
    proudPoint:
      "First full-time hire in a successful investment bank, helping the founders in establishing procedures, recruiting and training.",
    roles: [Role.FOUNDERS_ASSOCATE, Role.OPERATIONS],
    additionalLanguages: ["French", "Spanish"],
    rightToWork: RightToWork.YES_SETTLED,
    salaryExpectations: "£40-60k - approx",
    CVURL:
      "https://docs.google.com/document/d/1r7IZVU-sspjGDLLIpvVIpt74id48ahTEy1Rc-pL8zSc/edit?usp=sharing",
    linkedInURL: "https://www.linkedin.com/in/sinead-smith-9ba29319b/",
  },
  {
    firstName: "Milly",
    secondName: "Hide",
    emailAddress: "please use your own email address",
    showProfile: true,
    photoURL:
      "https://www.cityheadshots.com/uploads/5/1/2/1/5121840/editor/mjb-2465.jpg?1643119031",
    education: "BA in English @ Essex University (1st Class)",
    workExperience: (
      <>
        <strong>1) Creative Director @ Fair Shot (3 yrs) -</strong> Developing
        impactful strategy & content all while ensuring brand integrity and
        following data-driven insights.
        <br />{" "}
        <strong>2) Marketing Coordinator @ Hamilton King (2 mos)-</strong>{" "}
        Executing founder's marketing strategy, managing social media, &
        optimising internal comms processes.
      </>
    ),
    proudPoint: "Cycling from Germany to Greece (over 3,000 km) in a summer.",
    roles: [Role.MARKETING_ANALYST],
    additionalLanguages: [],
    rightToWork: RightToWork.YES_BRITISH,
    salaryExpectations: "£30-40k - approx",
    CVURL:
      "https://docs.google.com/document/d/1r7IZVU-sspjGDLLIpvVIpt74id48ahTEy1Rc-pL8zSc/edit?usp=sharing",
    linkedInURL: "https://www.linkedin.com/in/milly-smith11/",
  },
  {
    firstName: "Kabir",
    secondName: "Elgaddal",
    emailAddress: "please use your own email address",
    showProfile: true,
    photoURL:
      "https://www.cityheadshots.com/uploads/5/1/2/1/5121840/editor/mjb-2465.jpg?1643119031",
    education: "BA in English Literature @ University of Warwick (1st Class)",
    workExperience: (
      <>
        <strong>1) Tech & Transformation Analyst @ Deloitte (15 mos)-</strong>{" "}
        Delivered £19.3M integrated tech solution for public sector client.{" "}
        <br /> <br />{" "}
        <strong>2) Marketing Assistant @ Vira Health (1 yr)-</strong> Managed
        social accounts, grew Instagram following to 4.5K, 125% increase.
      </>
    ),
    proudPoint:
      "I authored the Equality Analysis for pension regulations implemented by the Department for Work and Pensions (DWP), which had a Net Present Social Value of £15.5M over a 10-year period.",
    roles: [Role.MARKETING_ANALYST],
    additionalLanguages: [],
    rightToWork: RightToWork.YES_BRITISH,
    salaryExpectations: "£35-45k - approx",
    CVURL:
      "https://docs.google.com/document/d/1r7IZVU-sspjGDLLIpvVIpt74id48ahTEy1Rc-pL8zSc/edit?usp=sharing",
    linkedInURL: "https://www.linkedin.com/in/kabir-bali-5a3793136/",
  },
  {
    firstName: "Emilie",
    secondName: "Christensen",
    emailAddress: "please use your own email address",
    showProfile: true,
    photoURL:
      "https://www.cityheadshots.com/uploads/5/1/2/1/5121840/editor/mjb-2465.jpg?1643119031",
    education: "BA in Politics @ Newcastle University (1st Class)",
    workExperience: (
      <>
        <strong>
          1) Group Strategy and Corporate Development @ Samlino Group (2 yrs) -
        </strong>{" "}
        chaired and attended all 13 group board meetings, prepared IPO, and
        recruited majority of the 13 Managing Directors. Led a team of 5 people
        and developed strategies and developed operational processes with
        efficiency. Had really great results.
        <br /> <br />{" "}
        <strong>2) Founder and CEO @ Hello Ventures (1 yr) -</strong> did 7
        investments in a few months and grew to ~GBP150k in monthly revenue and
        ~GBP20k in monthly EBITDA. The company had just GBP5k in initial
        capital. I led everything from go-to market strategy to operations to
        sales to hiring - learnt how to wear lots of different hats!"
      </>
    ),
    proudPoint: "Ran my fjirst half manrathon, the Hackney Half, in 2023!",
    roles: [Role.FOUNDERS_ASSOCATE, Role.OPERATIONS],
    additionalLanguages: [],
    rightToWork: RightToWork.YES_SETTLED,
    salaryExpectations: "£40-50k - approx",
    CVURL:
      "https://docs.google.com/document/d/1r7IZVU-sspjGDLLIpvVIpt74id48ahTEy1Rc-pL8zSc/edit?usp=sharing",
    linkedInURL: "https://www.linkedin.com/in/emilie-lauga-161362216/",
  },
  {
    firstName: "Matthew",
    secondName: "Sarre",
    emailAddress: "matthew@jumpstart-uk.com",
    showProfile: false,
    photoURL:
      "https://www.cityheadshots.com/uploads/5/1/2/1/5121840/editor/mjb-2465.jpg?1643119031",
    education: "BA in Anthropology & Sociology @ Durham University",
    workExperience: (
      <>
        <strong>1. Founder's Associate @ LVNDR Health (1 yr)-</strong> Helped
        secure 50% (£1.25Mn) of a £2.5Mn Seed Extension round. <br /> <br />{" "}
        <strong>2. Founder's Associate @ LVNDR Health (12 mos)-</strong>{" "}
        Supported in 2 NHS partnerships and successfully secured £300k+ in
        grants.
      </>
    ),
    proudPoint:
      "Produced popular social theory videos on YouTube and University, with one video reaching 221k views.",
    roles: [Role.PRODUCT, Role.OPERATIONS],
    additionalLanguages: ["Cantonese", "Mandarin"],
    rightToWork: RightToWork.YES_GRADUATE_VISA,
    salaryExpectations: "£40-50k - approx",
    CVURL:
      "https://docs.google.com/document/d/1r7IZVU-sspjGDLLIpvVIpt74id48ahTEy1Rc-pL8zSc/edit?usp=sharing",
    linkedInURL: "https://www.linkedin.com/in/matthew-sarre-46270479/",
  },
]

export const defaultFormValues = {
  companyName: "",
  jobTitle: "",
  recruiterName: "",
  recruiterEmail: "",
  recruiterLinkedIn: "",
  jobDescription: "",
  additionalInformation: "",
  spotlightVideoURL: "",
} as FormData
