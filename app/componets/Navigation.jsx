import Link from 'next/link'
import style from './Navigation.module.css'

const Links = [{
    label: 'home',
    route: '/'
}, {
    label: 'About',
    route: 'about'
},{
    label: 'Post',
    route: 'post'
}
]


export function Navigation() {

    return (
        <header className={ style.header }>
            <nav>
                <ul className={ style.navigation }>
                    {Links.map(({ label, route }) => (
                        <li key={route}>
                            <Link href={route}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );

}