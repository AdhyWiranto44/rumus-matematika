/* eslint-disable react/jsx-key */
import LinkToPageButton from '../components/LinkToPageButton';
import HomeLayout from '../layouts/home';

export default function Home() {
    const menus = [
        {
            "title": "Luas Persegi",
            "url": "/bangun-datar/luas-persegi"
        },
        {
            "title": "Luas Persegi Panjang",
            "url": "/bangun-datar/luas-persegi-panjang"
        }
    ];

    return (
        <HomeLayout
            pageContent={
                <>
                    <div className="text-center my-3">
                        <h1 className="display-3 fw-bold">Rumus Matematika</h1>
                        <p>Berisi daftar rumus-rumus yang ada pada Matematika</p>
                    </div>
                    {menus.map(menu => {
                        return (
                            <LinkToPageButton title={menu.title} url={menu.url} />
                        );
                    })}
                </>
            }
        />
    )
}
