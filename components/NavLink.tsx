export default function NavLink({ href, children, clas }: { href: string; children: React.ReactNode; clas?: string }) {
    return (
      <a href={href} className={`px-3 py-2 rounded-lg font-medium hover:text-white text-muted hover:bg-gray-800 ${clas || ''}`}>
        {children}
      </a>
    );
  }