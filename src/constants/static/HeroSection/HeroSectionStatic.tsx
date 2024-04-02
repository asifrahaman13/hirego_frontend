import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { ArrowPathIcon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon } from "@heroicons/react/24/outline";
import { AcademicCapIcon, BanknotesIcon, CheckBadgeIcon, ClockIcon, ReceiptRefundIcon, UsersIcon } from "@heroicons/react/24/outline";

const solutions = [
  { name: "Analytics", description: "Get a better understanding of your traffic", href: "/analytics", icon: ChartPieIcon },
  { name: "Engagement", description: "Speak directly to your customers", href: "/engagement", icon: CursorArrowRaysIcon },
  { name: "Security", description: "Your customers' data will be safe and secure", href: "/security", icon: FingerPrintIcon },
  { name: "Integrations", description: "Connect with third-party tools", href: "/integrations", icon: SquaresPlusIcon },
  { name: "Automations", description: "Build strategic funnels that will convert", href: "/automations", icon: ArrowPathIcon },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

const company = [
  { name: "About us", description: "Get a better understanding of your traffic", href: "/about", icon: ChartPieIcon },
  { name: "Privacy policy", description: "Speak directly to your customers", href: "/privacy", icon: CursorArrowRaysIcon },
  { name: "Contact us", description: "Your customers' data will be safe and secure", href: "/contact", icon: FingerPrintIcon },
  { name: "Team", description: "Connect with third-party tools", href: "/team", icon: SquaresPlusIcon },
];

const jobs = [
  { name: "Internships", description: "Get a better understanding of your traffic", href: "/internships", icon: ChartPieIcon },
  { name: "Full time jobs", description: "Speak directly to your customers", href: "/fulltime", icon: CursorArrowRaysIcon },
  { name: "Contracts", description: "Your customers' data will be safe and secure", href: "/contracts", icon: FingerPrintIcon },
  { name: "Hired for small businesss", description: "Connect with third-party tools", href: "/hireforbusiness", icon: SquaresPlusIcon },
];

const works = [
  { name: "Interns", description: "Get a better understanding of your traffic", href: "/internships", icon: ChartPieIcon },
  { name: "Full tiem job seekers", description: "Speak directly to your customers", href: "/fulltime", icon: CursorArrowRaysIcon },
  { name: "Freelancers", description: "Your customers' data will be safe and secure", href: "/contracts", icon: FingerPrintIcon },
  { name: "Hire for your businesss", description: "Connect with third-party tools", href: "/hireforbusiness", icon: SquaresPlusIcon },
];

const navigation = [
  { name: "Features", href: "#", solutions: solutions },
  { name: "Company", href: "#", solutions: company },
];
const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Increase your website traffic",
    href: "#",
    description: "Exercitationem ratione aut cumque. Qui dolorum exercitationem voluptatibus ad temporibus eius voluptatem. Ipsum voluptates quia doloremque culpa in.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    category: { title: "SEO", href: "#" },
    author: {
      name: "Sylvia Hale",
      role: "Co-Founder / CEO",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Optimize your social media strategy",
    href: "#",
    description: "Rerum est ratione non voluptatem. Doloribus perspiciatis quisquam quisquam qui. Numquam excepturi voluptatibus soluta sit quasi quos. Veritatis officia qui ut.",
    date: "Feb 23, 2020",
    datetime: "2020-02-23",
    category: { title: "Social Media", href: "#" },
    author: {
      name: "Bradley Hunter",
      role: "Marketing Specialist",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

const people = [
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      department: 'Optimization',
      email: 'lindsay.walton@example.com',
      role: 'Member',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'John Doe master',
      title: 'Back-end Developer',
      department: 'Engineering',
      email: 'john.doe@example.com',
      role: 'Member',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Jane Smith',
      title: 'UI/UX Designer',
      department: 'Design',
      email: 'jane.smith@example.com',
      role: 'Member',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Alex Johnson',
      title: 'Product Manager',
      department: 'Product',
      email: 'alex.johnson@example.com',
      role: 'Member',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Sarah Lee',
      title: 'Marketing Specialist',
      department: 'Marketing',
      email: 'sarah.lee@example.com',
      role: 'Member',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
      {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      department: 'Optimization',
      email: 'lindsay.walton@example.com',
      role: 'Member',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'John Doe',
      title: 'Back-end Developer',
      department: 'Engineering',
      email: 'john.doe@example.com',
      role: 'Member',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Jane Smith',
      title: 'UI/UX Designer',
      department: 'Design',
      email: 'jane.smith@example.com',
      role: 'Member',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
      {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      department: 'Optimization',
      email: 'lindsay.walton@example.com',
      role: 'Member',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'John Doe',
      title: 'Back-end Developer',
      department: 'Engineering',
      email: 'john.doe@example.com',
      role: 'Member',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Jane Smith',
      title: 'UI/UX Designer',
      department: 'Design',
      email: 'jane.smith@example.com',
      role: 'Member',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
];



const team = [
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
    href: "#",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Whitney Francis",
    email: "whitney.francis@example.com",
    href: "#",
    imageUrl: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leonard Krasner",
    email: "leonard.krasner@example.com",
    href: "#",
    imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Floyd Miles",
    email: "floyd.miles@example.com",
    href: "#",
    imageUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Emily Selman",
    email: "emily.selman@example.com",
    href: "#",
    imageUrl: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];


const actions = [
  {
    title: "Request time off",
    href: "#",
    icon: ClockIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Benefits",
    href: "#",
    icon: CheckBadgeIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Schedule a one-on-one",
    href: "#",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Payroll",
    href: "#",
    icon: BanknotesIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
  {
    title: "Submit an expense",
    href: "#",
    icon: ReceiptRefundIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
  {
    title: "Training",
    href: "#",
    icon: AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
];

export { solutions, callsToAction, navigation, posts , people, team , actions};
