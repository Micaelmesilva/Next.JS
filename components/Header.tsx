import NavLink from './NavLink'

export default function Header() {
  return (
    <header className="flex flex-row  items-center justify-center">
      <div className="container mb-12 p-8 flex justify-between">
        <nav className="flex space-x-4">
          <NavLink href="" clas="text-xl">Obisidian</NavLink>
          <NavLink href="">Pricing</NavLink>
          <NavLink href="">Sync</NavLink>
          <NavLink href="">Publish</NavLink>
          <NavLink href="">Community</NavLink>
          <NavLink href="">Enterprise</NavLink>
        </nav>
        <nav className="flex space-x-4">
          <NavLink href="">Download</NavLink>
          <NavLink href="">Account</NavLink>
        </nav>
      </div>
    </header>
  );
}