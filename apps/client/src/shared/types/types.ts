export interface IFormInputs{
    autoComplete?: boolean;
    type?: string;
    params?: string;
    name: string;
    placeholder?: string;
    value: string | number;
    label?: string;
    required?: boolean;
}

export enum ShowPage {
    ADD,
    ALL,
    EDIT,
    DELETE,
}