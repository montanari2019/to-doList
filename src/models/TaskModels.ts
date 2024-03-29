export interface TaskProps {
    id: number;
    title: string;
    concluded: boolean;
    taskConcluded: (id: number, checked: boolean) => void;
    onDeleteTask: (id: number) => void;
}

export interface TaskPropsComponent{
    
    id: number;
    title: string;
    concluded: boolean;
}

