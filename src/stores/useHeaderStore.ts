import { create } from "zustand";

interface HeaderStore {
    links: {
        name: string;
        href: string;
    }[];

    isOpenProfileMenu: boolean;
    setIsOpenProfileMenu: (isOpenProfileMenu: boolean) => void;
}

export const useHeaderStore = create<HeaderStore>((set) => ({
    links: [
        {
            name: "Главная",
            href: "/",
        },
    ],

    isOpenProfileMenu: false,
    setIsOpenProfileMenu: (isOpenProfileMenu) =>
        set(() => ({ isOpenProfileMenu: isOpenProfileMenu })),
}));
