"use client";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, CalendarIcon, ChartPieIcon, Cog6ToothIcon, DocumentDuplicateIcon, FolderIcon, HomeIcon, UsersIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "My profile", href: "/profile-dashboard/my-profile", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laudantium saepe voluptas explicabo rerum reiciendis soluta, dicta blanditiis aliquid cupiditate ut dolor quo placeat,
        officiis ad excepturi tempore rem non quis modi. Mollitia soluta similique perferendis nam deserunt est possimus vel eaque cum id, neque consequuntur. Assumenda exercitationem eaque alias
        deleniti eos repellendus impedit fugit illo voluptatem voluptatibus quis, autem non veritatis modi explicabo aspernatur eius totam recusandae quos architecto suscipit molestias quam incidunt.
        Labore nostrum quisquam, obcaecati voluptatem, voluptas nemo doloribus fuga reprehenderit, quam facilis temporibus quaerat? Quae laboriosam fugiat alias totam, maxime incidunt aliquam soluta
        sapiente impedit, error et, hic fuga ipsam distinctio suscipit. Perferendis et, a non dignissimos harum est, corrupti blanditiis iste adipisci doloremque dicta culpa ea beatae esse quae
        reprehenderit libero sed ut ipsa vitae aspernatur eos voluptatem. Ipsa optio consequatur quae enim corporis nam ea veritatis quasi doloremque non? Dolore sed incidunt optio nam eius placeat
        libero officiis quaerat soluta omnis quo sequi animi perspiciatis impedit voluptatem, illum, modi ipsum, veritatis autem velit eum eaque voluptatibus dolor doloremque? Mollitia atque beatae,
        id aperiam amet sapiente at corporis voluptate accusamus, rerum numquam sequi voluptatem. Placeat, enim sapiente. A labore quam qui ducimus expedita impedit ipsam?
      </div>
    </>
  );
}
