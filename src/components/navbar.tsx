export const Navbar = () => {
    return (
        <div className="Navbar w-full border-b border-[#e8e8e8] dark:border-textColor">
            <nav className="w-901 h-9 mx-auto ">
                <ul className="flex h-full items-center justify-evenly text-sm text-textColor dark:text-primary font-bold whitespace-nowrap">
                    <li className="h-full flex items-center justify-center border-b-[3px] border-transparent hover:border-b-primary hover:text-primary hover:cursor-pointer dark:hover:text-textColor3 dark:hover:border-b-textColor3">
                        <a href="#">Kadın</a>
                    </li>
                    <li className="h-full flex items-center justify-center border-b-[3px] border-transparent hover:border-b-primary hover:text-primary hover:cursor-pointer dark:hover:text-textColor3 dark:hover:border-b-textColor3">
                        <a href="#">Erkek</a>
                    </li>
                    <li className="h-full flex items-center justify-center border-b-[3px] border-transparent hover:border-b-primary hover:text-primary hover:cursor-pointer dark:hover:text-textColor3 dark:hover:border-b-textColor3">
                        <a href="#">Anne & Çocuk</a>
                    </li>
                    <li className="h-full flex items-center justify-center border-b-[3px] border-transparent hover:border-b-primary hover:text-primary hover:cursor-pointer dark:hover:text-textColor3 dark:hover:border-b-textColor3">
                        <a href="#">Ev & Mobilya</a>
                    </li>
                    <li className="h-full flex items-center justify-center border-b-[3px] border-transparent hover:border-b-primary hover:text-primary hover:cursor-pointer dark:hover:text-textColor3 dark:hover:border-b-textColor3">
                        <a href="#">Süpermarket</a>
                    </li>
                    <li className="h-full flex items-center justify-center border-b-[3px] border-transparent hover:border-b-primary hover:text-primary hover:cursor-pointer dark:hover:text-textColor3 dark:hover:border-b-textColor3">
                        <a href="#">Kozmetik</a>
                    </li>
                    <li className="h-full flex items-center justify-center border-b-[3px] border-transparent hover:border-b-primary hover:text-primary hover:cursor-pointer dark:hover:text-textColor3 dark:hover:border-b-textColor3">
                        <a href="#">Ayakkabı & Çanta</a>
                    </li>
                    <li className="h-full flex items-center justify-center border-b-[3px] border-transparent hover:border-b-primary hover:text-primary hover:cursor-pointer dark:hover:text-textColor3 dark:hover:border-b-textColor3">
                        <a href="#">Elektronik</a>
                    </li>
                    <li className="h-full flex items-center justify-center border-b-[3px] border-transparent hover:border-b-primary hover:text-primary hover:cursor-pointer dark:hover:text-textColor3 dark:hover:border-b-textColor3">
                        <a href="#">Spor & Outdoor</a>
                    </li>
                    <li className="h-full flex items-center justify-center border-b-[3px] border-transparent hover:border-b-primary hover:text-primary hover:cursor-pointer dark:hover:text-textColor3 dark:hover:border-b-textColor3">
                        <a href="#">Çok Satanlar</a>
                        <span className=" bg-bgColor2 text-white w-8 text-center rounded-xl ml-1">
                            Yeni
                        </span>
                    </li>
                    <li className="h-full flex items-center justify-center border-b-[3px] border-transparent hover:border-b-primary hover:text-primary hover:cursor-pointer dark:hover:text-textColor3 dark:hover:border-b-textColor3">
                        <a href="#">Flaş Ürünler</a>
                        <span className=" bg-bgColor2 text-white w-8 text-center rounded-xl ml-1">
                            Yeni
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
