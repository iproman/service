import { ServiceInterface } from '../interfaces/ServiceInterface';
import { ClusterInterface } from '../interfaces/ClusterInterface';

/**
 * Класс для работы с Worker
 */
export class Worker {

    private options: ServiceInterface;
    private clusterMode: ClusterInterface;
    private isMaster: boolean;

    /**
     * @param options
     * @param clusterMode
     * @param isMaster
     */
    constructor(
        options: ServiceInterface,
        clusterMode: ClusterInterface,
        isMaster
    ) {
        this.options = options;
        this.clusterMode = clusterMode;
        this.isMaster = isMaster;
    }
}