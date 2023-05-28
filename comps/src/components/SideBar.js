import Link from "./Link";

function SideBar() {
    const links = [
        { label: 'Dropdown', path: '/' },
        { label: 'Accordion', path: '/accordion' },
        { label: 'Buttons', path: '/buttons' },
        { label: 'Modal', path: '/modal' },
        { label: 'Table', path: '/table' },
        { label: 'Counter', path: '/counter' },
    ];
    const renderedLinks = links.map((link) => {
        return <Link 
                    className='mb-3' 
                    activeClassName='font-bold border-l-4 border-blue-500 pl-2'
                    key={link.label} 
                    to={link.path}
                >
                    {link.label}
                </Link>
    });

    return <div className="sticky flex top-0 flex-col items-start">{renderedLinks}</div>
}

export default SideBar;
