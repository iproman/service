import { ServiceInterface } from '../interfaces/ServiceInterface';
import { ClusterInterface } from '../interfaces/ClusterInterface';

/**
 * Класс для работы с Worker
 */
export class Worker {

    private options: ServiceInterface;
    private isMaster: boolean;

    /**
     * @param options
     * @param isMaster
     */
    constructor(
        options: ServiceInterface,
        isMaster
    ) {
        this.options = options;
        this.isMaster = isMaster;
    }
}