export const Footer = () => {
    return (
        <div className="relative w-full h-903 mt-10 bg-black">
            <div className="absolute bottom-0 w-full h-9 bg-bgColor4 text-center text-white text-xs dark:text-primary">
                <div className="wrapper w-901 h-full mx-auto flex">
                    <div className="w-1/2 h-full text-center flex items-center">
                        <p>
                            ©2023 DSM Grup Danışmanlık İletişim ve Satış
                            Tic.A.Ş.-Her Hakkı Saklıdır.
                        </p>
                    </div>
                    <div className="w-1/2 h-full flex justify-end gap-4 items-center">
                        <a href="#">Çerez Tercihleri</a>
                        <a href="#">KVK ve Gizlilik Politikası</a>
                        <a href="#">DSM Grup</a>
                        <a href="#">Kullanım Koşulları</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
