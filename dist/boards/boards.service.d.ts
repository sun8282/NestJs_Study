import { Board } from './boards.model';
export declare class BoardsService {
    private boards;
    getAllBoards(): Board[];
    createBoard(title: string, description: string): Board;
}
