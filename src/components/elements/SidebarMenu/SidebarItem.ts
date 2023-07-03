export interface SidebarItem {
    title: string;
    path: string;
    icon: any; //eslint-disable-line @typescript-eslint/no-explicit-any
    iconOpened?: any; //eslint-disable-line @typescript-eslint/no-explicit-any
    iconClosed?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    subnav?: SidebarItem[];
}