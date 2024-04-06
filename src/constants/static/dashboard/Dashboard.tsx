import { CalendarIcon, DocumentDuplicateIcon, FolderIcon, HomeIcon, UsersIcon } from "@heroicons/react/16/solid";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: true },
  // { name: "My profile", href: "/profile-dashboard/my-profile", icon: UsersIcon, current: false },
  { name: "Internships", href: "/user/dashboard/internships", icon: FolderIcon, current: false },
  // { name: "Full time jobs", href: "/fulltimejobs", icon: CalendarIcon, current: false },
  // { name: "Contracts [Coming soon]", href: "/contracts", icon: DocumentDuplicateIcon, current: false },
  { name: "My applications", href: "/user/dashboard/internships/applications", icon: UsersIcon, current: false },
  { name: "Job offers", href: "offers", icon: UsersIcon, current: false },
];

const hr_navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: true },
  // { name: "My profile", href: "/profile-dashboard/my-profile", icon: UsersIcon, current: false },
  { name: "Internships", href: "/hiring_manager/dashboard/internships", icon: FolderIcon, current: false },
  // { name: "Full time jobs", href: "/fulltimejobs", icon: CalendarIcon, current: false },
  // { name: "Contracts [Coming soon]", href: "/contracts", icon: DocumentDuplicateIcon, current: false },
  { name: "Applicants", href: "/hiring_manager/dashboard/internships/applications", icon: UsersIcon, current: false },
  { name: "Job offers", href: "offers", icon: UsersIcon, current: false },
];


const teams = [
  { id: 1, name: "Reports", href: "/reports", initial: "H", current: false },
  { id: 2, name: "Analytics", href: "/analytics", initial: "T", current: false },
  { id: 3, name: "My Profile", href: "/profile", initial: "W", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "/profile-dashboard" },
];

export { navigation, teams, userNavigation , hr_navigation};
