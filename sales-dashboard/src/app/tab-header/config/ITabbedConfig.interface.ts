export interface ITabbedHeaderConfig {
    tabs: Array<ITabConfig>;
}

export interface ITabConfig {
    id: string;
    tabId: number;
    title: string;
    isSelected: boolean;
    selectedClass: string;
    customStyle?: any;
}