import Author from './Author';

interface Course {
    id: number;
    name: string;
    description: string;
    isTopRated: boolean;
    date: string;
    authors: Author[];
    length: number;
}

export default Course;
