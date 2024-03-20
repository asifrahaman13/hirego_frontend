import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { ArrowPathIcon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon } from "@heroicons/react/24/outline";

const solutions = [
  { name: "Analytics", description: "Get a better understanding of your traffic", href: "#", icon: ChartPieIcon },
  { name: "Engagement", description: "Speak directly to your customers", href: "#", icon: CursorArrowRaysIcon },
  { name: "Security", description: "Your customers' data will be safe and secure", href: "#", icon: FingerPrintIcon },
  { name: "Integrations", description: "Connect with third-party tools", href: "#", icon: SquaresPlusIcon },
  { name: "Automations", description: "Build strategic funnels that will convert", href: "#", icon: ArrowPathIcon },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

const navigation = [
  { name: "Product", href: "#", solutions: solutions },
  { name: "Features", href: "#", solutions: solutions },
  { name: "Marketplace", href: "#", solutions: solutions },
  { name: "Company", href: "#", solutions: solutions },
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

export { solutions, callsToAction, navigation, posts };
