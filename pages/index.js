/* eslint-disable react/jsx-key */
import LinkToPageButton from '../components/LinkToPageButton';
import HomeLayout from '../layouts/home';

export default function Home() {
    const menus = [
        {
            "title": "Persegi",
            "url": "/bangun-datar/persegi"
        },
        {
            "title": "Persegi Panjang",
            "url": "/bangun-datar/persegi-panjang"
        }
    ];

    return (
        <HomeLayout
            pageContent={
                menus.map(menu => {
                    return (
                        <LinkToPageButton title={menu.title} url={menu.url} />
                    );
                })
            }
        />
    )
}
