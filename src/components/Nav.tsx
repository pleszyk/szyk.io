import Logo from '../assets/sailboat.svg'

function Nav() {
    return (
        <nav
            aria-label="Site Nav"
            className="mx-auto flex max-w-7xl items-center justify-between p-4"
        >
            <div className="inline-flex h-12 items-center justify-center">
                <span className="sr-only">Logo</span>
                <img className="w-14" src={Logo} alt="logo" />
            </div>

            <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
                <li>
                    <div className="rounded-lg cursor-pointer px-3 py-0.5">
                        Home
                    </div>
                    <div className="h-[2px] w-9 m-auto bg-gray-300 rounded-md"></div>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
