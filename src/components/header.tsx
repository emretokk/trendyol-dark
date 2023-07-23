import { BiUser, BiHeart, BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineDarkMode } from "react-icons/md";
import logoPrimary from "../assets/logo-primary.png";

export const Header = (props: any) => {
    return (
        <div className="Header h-[84px]">
            <div className="Header-top w-901 h-5 pt-1 mx-auto text-xs text-textColor3 dark:text-primary flex justify-end gap-8 ">
                <a href="#" className="hover:text-textColor2">
                    İndirim Kuponlarım
                </a>
                <a href="#" className="hover:text-textColor2">
                    Trendyol'da Satış Yap
                </a>
                <a href="#" className="hover:text-textColor2">
                    Hakkımızda
                </a>
                <a href="#" className="hover:text-textColor2">
                    Yardım & Destek
                </a>
            </div>
            <div className="Header-sticky sticky w-901 h-16 mx-auto flex justify-between">
                {localStorage.theme === "light" ? (
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Trendyol_logo.svg/1200px-Trendyol_logo.svg.png"
                        alt="Trendyol"
                        className=" w-36 h-full hover:cursor-pointer"
                    ></img>
                ) : (
                    <img
                        src={logoPrimary}
                        alt="trenyol logo"
                        className="w-36 h-full hover:cursor-pointer"
                    ></img>
                )}
                <div className="Search w-902">
                    <div className="search-container w-full h-16 relative flex items-center">
                        <input
                            type="text"
                            maxLength={50}
                            placeholder="Aradığınız ürün, kategori veya markayı yazınız"
                            className="search w-full h-11 py-2 pl-4 pr-5 bg-bgColor1 rounded-lg box-border border text-sm placeholder:text-textColor4 dark:bg-bgColor4 dark:text-white dark:border-0 dark:placeholder:text-textColor1 dark:outline-none dark:focus:border-primary"
                        ></input>
                        <BiSearch
                            size={22}
                            className="text-primary absolute right-5 hover:cursor-pointer"
                        />
                    </div>
                </div>
                <div className="Account-Nav w-903 flex items-center justify-between text-textColor dark:text-primary font-semibold text-sm">
                    <div className="my-account flex justify-center items-center hover:cursor-pointer">
                        <BiUser size={18} />
                        <p className="pl-1 text-center">Hesabım</p>
                    </div>
                    <div className="favorites flex justify-center items-center hover:cursor-pointer">
                        <BiHeart size={18} />
                        <p className="pl-1 text-center">Favorilerim</p>
                    </div>
                    <div className="basket flex justify-center items-center hover:cursor-pointer">
                        <AiOutlineShoppingCart size={18} />
                        <p className="pl-1 text-center">Sepetim</p>
                    </div>
                </div>
                <div className="darkmode button flex items-center justify-center">
                    <button onClick={props.toggleDark}>
                        <MdOutlineDarkMode
                            size={22}
                            className="dark:text-primary"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};
