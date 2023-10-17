


export interface IProjectSchema{
    project: IProject;
    projects: IProject[];
    isLoading?: boolean;
    error?: string;
    success?: boolean;
} 

export interface IProject_add{
    title: string;
    desc?: string;
    urlImg: string;
    gitUrl: string;
    previewUrl: string;
    tags?: string[]
}

export interface IProject extends IProject_add{
    id: string;
}