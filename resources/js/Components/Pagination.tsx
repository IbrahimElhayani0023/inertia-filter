import { Link } from "@inertiajs/react"

type links = {
  label: string
  url?: string
  active: boolean
}
const Pagination = ({ links }: { links: links[] }) => {
  return (
    <nav className="flex items-center space-x-1">
      {links.map((link) => (
        link.url ? (
          <Link
            key={link.label}
            href={link.url}
            className={
              link.active
                ? "bg-gray-200 dark:bg-gray-900 text-black dark:text-white px-3 py-2 rounded-md text-sm font-medium"
                : "dark:text-gray-400 text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            }
            preserveScroll
            dangerouslySetInnerHTML={{ __html: link.label }}
          >

          </Link>
        ) : (
          <span
            key={link.label}
            className=" text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            dangerouslySetInnerHTML={{ __html: link.label }}
          >

          </span>
        )
      ))}
    </nav>
  )
}

export default Pagination
