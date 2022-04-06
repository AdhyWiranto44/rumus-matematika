/* eslint-disable react/jsx-key */
import LinkToPageButton from '../components/LinkToPageButton';
import HomeLayout from '../layouts/home';
import { useState } from 'react';

export default function Home() {
    const menus = [
        {
            "title": "Luas Persegi",
            "url": "/bangun-datar/luas-persegi"
        },
        {
            "title": "Keliling Persegi",
            "url": "/bangun-datar/keliling-persegi"
        },
        {
            "title": "Luas Persegi Panjang",
            "url": "/bangun-datar/luas-persegi-panjang"
        },
        {
            "title": "Keliling Persegi Panjang",
            "url": "/bangun-datar/keliling-persegi-panjang"
        },
        {
            "title": "Keliling Jajar Genjang",
            "url": "/bangun-datar/keliling-jajar-genjang"
        },
        {
            "title": "Luas Jajar Genjang",
            "url": "/bangun-datar/luas-jajar-genjang"
        },
        // {
        //     "title": "Keliling Segitiga",
        //     "url": "/bangun-datar/keliling-segitiga"
        // },
        // {
        //     "title": "Luas Segitiga",
        //     "url": "/bangun-datar/luas-segitiga"
        // },
        // {
        //     "title": "Keliling Belah Ketupat",
        //     "url": "/bangun-datar/keliling-belah-ketupat"
        // },
        // {
        //     "title": "Luas Belah Ketupat",
        //     "url": "/bangun-datar/luas-belah-ketupat"
        // },
        // {
        //     "title": "Keliling Layang-Layang",
        //     "url": "/bangun-datar/keliling-layang-layang"
        // },
        // {
        //     "title": "Luas Layang-Layang",
        //     "url": "/bangun-datar/luas-layang-layang"
        // },
        // {
        //     "title": "Keliling Trapesium",
        //     "url": "/bangun-datar/keliling-trapesium"
        // },
        // {
        //     "title": "Luas Trapesium",
        //     "url": "/bangun-datar/luas-trapesium"
        // },
        // {
        //     "title": "Keliling Lingkaran",
        //     "url": "/bangun-datar/keliling-lingkaran"
        // },
        // {
        //     "title": "Luas Lingkaran",
        //     "url": "/bangun-datar/luas-lingkaran"
        // }
    ];
    const [searchTerm, setSearchTerm] = useState(menus);

    const handleSearch = (term) => {
        if (term !== "") {
            const newMenu = menus.filter(menu => {
                return menu.title === term;
            });console.log(newMenu);
            setSearchTerm(newMenu);
        } else {
            setSearchTerm(menus);
        }
    }

    return (
        <HomeLayout
            pageContent={
                <>
                    <div className="text-center my-3">
                        <h1 className="display-3 fw-bold">Rumus Matematika</h1>
                        <p>Berisi daftar rumus-rumus yang ada pada Matematika</p>
                        <div className="row">
                            <div className="col-md-4 offset-md-4">
                                <div className="my-3">
                                    <label htmlFor="searchTerm" className="form-label fw-bold">Cari Rumus</label>
                                    <input type="email" className="form-control p-3 shadow-lg" id="searchTerm" placeholder="cari berdasarkan nama" onChange={(e) => handleSearch(e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {searchTerm.map(menu => {
                        return (
                            <LinkToPageButton title={menu.title} url={menu.url} />
                        );
                    })}
                </>
            }
        />
    )
}
