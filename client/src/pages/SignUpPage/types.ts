export interface CookieData {
    currentUser?: any;
}
export interface PlayerStateData {
    fName?: string;
    email?: string;
    groupId: string | undefined;
}

export interface ErrorToggleData {
    fName: boolean;
    email: boolean;
    groupId: boolean;
}
